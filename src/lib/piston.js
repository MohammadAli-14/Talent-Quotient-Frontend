// Piston API is a service for code execution

const PISTON_API = "https://emkc.org/api/v2/piston";

const LANGUAGE_VERSIONS = {
  javascript: { language: "javascript", version: "18.15.0" },
  python: { language: "python", version: "3.10.0" },
  java: { language: "java", version: "15.0.2" },
  c: { language: "c", version: "10.2.0" },
  cpp: { language: "c++", version: "10.2.0" },
  php: { language: "php", version: "8.2.3" },
};

/**
 * @param {string} language - programming language
 * @param {string} code - source code to execute
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code) {
  try {
    const languageConfig = LANGUAGE_VERSIONS[language];

    if (!languageConfig) {
      return {
        success: false,
        error: `Unsupported language: ${language}`,
      };
    }

    // Prepare request body with language-specific settings
    const requestBody = {
      language: languageConfig.language,
      version: languageConfig.version,
      files: [
        {
          name: `main.${getFileExtension(language)}`,
          content: code,
        },
      ],
    };

    // Add compile-time timeout for compiled languages
    if (language === 'c' || language === 'cpp') {
      requestBody.compile_timeout = 10000; // 10 seconds for compilation
      requestBody.run_timeout = 5000;      // 5 seconds for execution
    }

    // For PHP, we don't need compile timeout, only run timeout
    if (language === 'php') {
      requestBody.run_timeout = 5000; // 5 seconds for execution
    }

    const response = await fetch(`${PISTON_API}/execute`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      // Try to get more detailed error information
      let errorDetail = `HTTP error! status: ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData.message) {
          errorDetail += ` - ${errorData.message}`;
        }
      } catch (e) {
        // Ignore if we can't parse error response
      }
      
      return {
        success: false,
        error: errorDetail,
      };
    }

    const data = await response.json();

    // Log the full response for debugging (remove in production)
    console.log(`Piston API response for ${language}:`, {
      compile: data.compile,
      run: data.run,
      language: data.language,
      version: data.version
    });

    // Check for compilation errors (for compiled languages)
    if (data.compile && data.compile.stderr) {
      const compileError = data.compile.stderr.trim();
      return {
        success: false,
        error: `Compilation error:\n${compileError}`,
        output: data.run?.output || '',
      };
    }

    // Check for compilation signal (SIGKILL, SIGSEGV, etc.)
    if (data.compile && data.compile.signal) {
      return {
        success: false,
        error: `Compilation terminated with signal: ${data.compile.signal}${
          data.compile.signal === 'SIGKILL' ? ' (likely timeout or memory limit exceeded)' : ''
        }`,
        output: data.run?.output || '',
      };
    }

    // Check for runtime errors
    if (data.run.stderr) {
      const runtimeError = data.run.stderr.trim();
      // Sometimes runtime errors are expected (like assertion failures in tests)
      // So we still return the output along with the error
      return {
        success: false,
        output: data.run.output || '',
        error: `Runtime error:\n${runtimeError}`,
      };
    }

    // Check for runtime signal
    if (data.run.signal) {
      return {
        success: false,
        error: `Execution terminated with signal: ${data.run.signal}${
          data.run.signal === 'SIGKILL' ? ' (timeout or memory limit)' :
          data.run.signal === 'SIGSEGV' ? ' (segmentation fault)' : ''
        }`,
        output: data.run.output || '',
      };
    }

    // Success - return output
    const output = data.run.output ? data.run.output.trim() : "No output";
    return {
      success: true,
      output: output,
    };
  } catch (error) {
    console.error(`Error executing ${language} code:`, error);
    return {
      success: false,
      error: `Network or server error: ${error.message}`,
    };
  }
}

/**
 * Enhanced version with retry logic for C/C++ (which can be unstable)
 * @param {string} language - programming language
 * @param {string} code - source code to execute
 * @param {number} maxRetries - maximum number of retry attempts
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCodeWithRetry(language, code, maxRetries = 2) {
  // Only retry for C/C++ languages which are more prone to instability
  const shouldRetry = language === 'c' || language === 'cpp';
  
  if (!shouldRetry || maxRetries <= 1) {
    return await executeCode(language, code);
  }

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    console.log(`Execution attempt ${attempt} for ${language}...`);
    
    const result = await executeCode(language, code);
    
    // If successful, return immediately
    if (result.success) {
      console.log(`Success on attempt ${attempt} for ${language}`);
      return result;
    }
    
    // Check if we should retry (SIGKILL, timeout, or network errors)
    const shouldRetryError = 
      result.error?.includes('SIGKILL') ||
      result.error?.includes('timeout') ||
      result.error?.includes('Network or server error') ||
      result.error?.includes('HTTP error');
    
    if (shouldRetryError && attempt < maxRetries) {
      // Exponential backoff: wait longer between each retry
      const backoffTime = 1000 * Math.pow(2, attempt - 1);
      console.log(`Retrying in ${backoffTime}ms...`);
      await new Promise(resolve => setTimeout(resolve, backoffTime));
      continue;
    }
    
    // Either we shouldn't retry this error or we've exhausted retries
    return result;
  }
  
  // This shouldn't be reached, but just in case
  return {
    success: false,
    error: `Max retries (${maxRetries}) exceeded for ${language}`,
  };
}

/**
 * Simplified version for use in the UI
 * Uses retry for C/C++, normal execution for others
 */
export async function executeCodeForUI(language, code) {
  // Use retry for C/C++ due to API instability
  if (language === 'c' || language === 'cpp') {
    return await executeCodeWithRetry(language, code, 3);
  }
  
  // For interpreted languages, no retry needed
  return await executeCode(language, code);
}

function getFileExtension(language) {
  const extensions = {
    javascript: "js",
    python: "py",
    java: "java",
    c: "c",
    cpp: "cpp",
    php: "php",
  };

  return extensions[language] || "txt";
}

// Export all functions
export default {
  executeCode,
  executeCodeWithRetry,
  executeCodeForUI,
  LANGUAGE_VERSIONS,
};