export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    *returnSize = 0;
    
    // Write your solution here
    
    return NULL;
}

// Helper function to print array
void printArray(int* arr, int size) {
    printf("[");
    for (int i = 0; i < size; i++) {
        if (i > 0) printf(",");
        printf("%d", arr[i]);
    }
    printf("]");
}

int main() {
    int returnSize;
    
    int nums1[] = {2, 7, 11, 15};
    int target1 = 9;
    int* result1 = twoSum(nums1, 4, target1, &returnSize);
    if (result1 && returnSize > 0) {
        printArray(result1, returnSize);
        free(result1);
    } else {
        printf("[]");
    }
    printf("\\n");
    
    int nums2[] = {3, 2, 4};
    int target2 = 6;
    int* result2 = twoSum(nums2, 3, target2, &returnSize);
    if (result2 && returnSize > 0) {
        printArray(result2, returnSize);
        free(result2);
    } else {
        printf("[]");
    }
    printf("\\n");
    
    int nums3[] = {3, 3};
    int target3 = 6;
    int* result3 = twoSum(nums3, 2, target3, &returnSize);
    if (result3 && returnSize > 0) {
        printArray(result3, returnSize);
        free(result3);
    } else {
        printf("[]");
    }
    printf("\\n");
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
        
        return {};
    }
};

// Helper function to print vector
void printVector(const vector<int>& vec) {
    cout << "[";
    for (size_t i = 0; i < vec.size(); i++) {
        if (i > 0) cout << ",";
        cout << vec[i];
    }
    cout << "]";
}

int main() {
    Solution solution;
    
    vector<int> nums1 = {2, 7, 11, 15};
    int target1 = 9;
    vector<int> result1 = solution.twoSum(nums1, target1);
    printVector(result1);
    cout << endl;
    
    vector<int> nums2 = {3, 2, 4};
    int target2 = 6;
    vector<int> result2 = solution.twoSum(nums2, target2);
    printVector(result2);
    cout << endl;
    
    vector<int> nums3 = {3, 3};
    int target3 = 6;
    vector<int> result3 = solution.twoSum(nums3, target3);
    printVector(result3);
    cout << endl;
    
    return 0;
}`,
      php: `<?php

function twoSum($nums, $target) {
    // Write your solution here
    
}

// Test cases
echo "[" . implode(",", twoSum([2, 7, 11, 15], 9)) . "]\\n";
echo "[" . implode(",", twoSum([3, 2, 4], 6)) . "]\\n";
echo "[" . implode(",", twoSum([3, 3], 6)) . "]\\n";
?>`
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      c: "[0,1]\n[1,2]\n[0,1]",
      cpp: "[0,1]\n[1,2]\n[0,1]",
      php: "[0,1]\n[1,2]\n[0,1]"
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

void reverseString(char* s, int sSize) {
    // Write your solution here
    
}

// Helper function to print character array
void printCharArray(char* s, int size) {
    printf("[");
    for (int i = 0; i < size; i++) {
        if (i > 0) printf(",");
        printf("\\"%c\\"", s[i]);
    }
    printf("]");
}

int main() {
    char test1[] = {'h','e','l','l','o'};
    int size1 = sizeof(test1)/sizeof(test1[0]);
    reverseString(test1, size1);
    printCharArray(test1, size1);
    printf("\\n");
    
    char test2[] = {'H','a','n','n','a','h'};
    int size2 = sizeof(test2)/sizeof(test2[0]);
    reverseString(test2, size2);
    printCharArray(test2, size2);
    printf("\\n");
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    void reverseString(vector<char>& s) {
        // Write your solution here
        
    }
};

// Helper function to print vector
void printVector(const vector<char>& vec) {
    cout << "[";
    for (size_t i = 0; i < vec.size(); i++) {
        if (i > 0) cout << ",";
        cout << "\\"" << vec[i] << "\\"";
    }
    cout << "]";
}

int main() {
    Solution solution;
    
    vector<char> test1 = {'h','e','l','l','o'};
    solution.reverseString(test1);
    printVector(test1);
    cout << endl;
    
    vector<char> test2 = {'H','a','n','n','a','h'};
    solution.reverseString(test2);
    printVector(test2);
    cout << endl;
    
    return 0;
}`,
      php: `<?php

function reverseString(&$s) {
    // Write your solution here
    
}

// Test cases
$test1 = ["h","e","l","l","o"];
reverseString($test1);
echo "[\"" . implode("\",\"", $test1) . "\"]\\n";

$test2 = ["H","a","n","n","a","h"];
reverseString($test2);
echo "[\"" . implode("\",\"", $test2) . "\"]\\n";
?>`
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      c: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      cpp: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      php: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]'
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
      c: `#include <stdio.h>
#include <ctype.h>
#include <stdbool.h>
#include <string.h>

bool isPalindrome(char* s) {
    // Write your solution here
    
    return false;
}

int main() {
    printf("%s\\n", isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false");
    printf("%s\\n", isPalindrome("race a car") ? "true" : "false");
    printf("%s\\n", isPalindrome(" ") ? "true" : "false");
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        // Write your solution here
        
        return false;
    }
};

int main() {
    Solution solution;
    
    cout << (solution.isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false") << endl;
    cout << (solution.isPalindrome("race a car") ? "true" : "false") << endl;
    cout << (solution.isPalindrome(" ") ? "true" : "false") << endl;
    
    return 0;
}`,
      php: `<?php

function isPalindrome($s) {
    // Write your solution here
    
}

// Test cases
echo isPalindrome("A man, a plan, a canal: Panama") ? "true\\n" : "false\\n";
echo isPalindrome("race a car") ? "true\\n" : "false\\n";
echo isPalindrome(" ") ? "true\\n" : "false\\n";
?>`
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      c: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
      php: "true\nfalse\ntrue"
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
      c: `#include <stdio.h>
#include <limits.h>

int maxSubArray(int* nums, int numsSize) {
    // Write your solution here
    
    return 0;
}

int main() {
    int nums1[] = {-2,1,-3,4,-1,2,1,-5,4};
    printf("%d\\n", maxSubArray(nums1, 9));
    
    int nums2[] = {1};
    printf("%d\\n", maxSubArray(nums2, 1));
    
    int nums3[] = {5,4,-1,7,8};
    printf("%d\\n", maxSubArray(nums3, 5));
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Write your solution here
        
        return 0;
    }
};

int main() {
    Solution solution;
    
    vector<int> nums1 = {-2,1,-3,4,-1,2,1,-5,4};
    cout << solution.maxSubArray(nums1) << endl;
    
    vector<int> nums2 = {1};
    cout << solution.maxSubArray(nums2) << endl;
    
    vector<int> nums3 = {5,4,-1,7,8};
    cout << solution.maxSubArray(nums3) << endl;
    
    return 0;
}`,
      php: `<?php

function maxSubArray($nums) {
    // Write your solution here
    
}

// Test cases
echo maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) . "\\n";
echo maxSubArray([1]) . "\\n";
echo maxSubArray([5,4,-1,7,8]) . "\\n";
?>`
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      c: "6\n1\n23",
      cpp: "6\n1\n23",
      php: "6\n1\n23"
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
      c: `#include <stdio.h>

int maxArea(int* height, int heightSize) {
    // Write your solution here
    
    return 0;
}

int main() {
    int height1[] = {1,8,6,2,5,4,8,3,7};
    printf("%d\\n", maxArea(height1, 9));
    
    int height2[] = {1,1};
    printf("%d\\n", maxArea(height2, 2));
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxArea(vector<int>& height) {
        // Write your solution here
        
        return 0;
    }
};

int main() {
    Solution solution;
    
    vector<int> height1 = {1,8,6,2,5,4,8,3,7};
    cout << solution.maxArea(height1) << endl;
    
    vector<int> height2 = {1,1};
    cout << solution.maxArea(height2) << endl;
    
    return 0;
}`,
      php: `<?php

function maxArea($height) {
    // Write your solution here
    
}

// Test cases
echo maxArea([1,8,6,2,5,4,8,3,7]) . "\\n";
echo maxArea([1,1]) . "\\n";
?>`
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      c: "49\n1",
      cpp: "49\n1",
      php: "49\n1"
    },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array • Two Pointers • Dynamic Programming",
    description: {
      text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      notes: [
        "Each bar has width 1 and is represented by the array element value.",
        "Water can be trapped between bars when there are higher bars on both sides.",
      ],
    },
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
        explanation: "The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.",
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9",
      },
    ],
    constraints: [
      "n == height.length",
      "1 ≤ n ≤ 2 * 10⁴",
      "0 ≤ height[i] ≤ 10⁵",
    ],
    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here
  
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9`,
      python: `def trap(height):
    # Write your solution here
    pass

# Test cases
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6
print(trap([4,2,0,3,2,5]))  # Expected: 9`,
      java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // Expected: 6
        System.out.println(trap(new int[]{4,2,0,3,2,5})); // Expected: 9
    }
}`,
      c: `#include <stdio.h>

int trap(int* height, int heightSize) {
    // Write your solution here
    
    return 0;
}

int main() {
    int height1[] = {0,1,0,2,1,0,1,3,2,1,2,1};
    printf("%d\\n", trap(height1, 12));
    
    int height2[] = {4,2,0,3,2,5};
    printf("%d\\n", trap(height2, 6));
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int trap(vector<int>& height) {
        // Write your solution here
        
        return 0;
    }
};

int main() {
    Solution solution;
    
    vector<int> height1 = {0,1,0,2,1,0,1,3,2,1,2,1};
    cout << solution.trap(height1) << endl;
    
    vector<int> height2 = {4,2,0,3,2,5};
    cout << solution.trap(height2) << endl;
    
    return 0;
}`,
      php: `<?php

function trap($height) {
    // Write your solution here
    
}

// Test cases
echo trap([0,1,0,2,1,0,1,3,2,1,2,1]) . "\\n";
echo trap([4,2,0,3,2,5]) . "\\n";
?>`
    },
    expectedOutput: {
      javascript: "6\n9",
      python: "6\n9",
      java: "6\n9",
      c: "6\n9",
      cpp: "6\n9",
      php: "6\n9"
    },
  },

  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Array • Binary Search • Divide and Conquer",
    description: {
      text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      notes: [
        "The overall run time complexity should be O(log (m+n)).",
        "Median is the middle value when the combined array is sorted.",
      ],
    },
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
        explanation: "Merged array = [1,2,3] and median is 2.",
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.50000",
        explanation: "Merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
      },
    ],
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 ≤ m ≤ 1000",
      "0 ≤ n ≤ 1000",
      "1 ≤ m + n ≤ 2000",
      "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶",
    ],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here
  
}

// Test cases
console.log(findMedianSortedArrays([1,3], [2])); // Expected: 2.00000
console.log(findMedianSortedArrays([1,2], [3,4])); // Expected: 2.50000`,
      python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

# Test cases
print(findMedianSortedArrays([1,3], [2]))  # Expected: 2.00000
print(findMedianSortedArrays([1,2], [3,4]))  # Expected: 2.50000`,
      java: `class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        
        return 0.0;
    }
    
    public static void main(String[] args) {
        System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2})); // Expected: 2.00000
        System.out.println(findMedianSortedArrays(new int[]{1,2}, new int[]{3,4})); // Expected: 2.50000
    }
}`,
      c: `#include <stdio.h>

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    // Write your solution here
    
    return 0.0;
}

int main() {
    int nums1_1[] = {1,3};
    int nums2_1[] = {2};
    printf("%.5f\\n", findMedianSortedArrays(nums1_1, 2, nums2_1, 1));
    
    int nums1_2[] = {1,2};
    int nums2_2[] = {3,4};
    printf("%.5f\\n", findMedianSortedArrays(nums1_2, 2, nums2_2, 2));
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>
using namespace std;

class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        // Write your solution here
        
        return 0.0;
    }
};

int main() {
    Solution solution;
    
    vector<int> nums1_1 = {1,3};
    vector<int> nums2_1 = {2};
    cout << fixed << setprecision(5) << solution.findMedianSortedArrays(nums1_1, nums2_1) << endl;
    
    vector<int> nums1_2 = {1,2};
    vector<int> nums2_2 = {3,4};
    cout << fixed << setprecision(5) << solution.findMedianSortedArrays(nums1_2, nums2_2) << endl;
    
    return 0;
}`,
      php: `<?php

function findMedianSortedArrays($nums1, $nums2) {
    // Write your solution here
    
}

// Test cases
printf("%.5f\\n", findMedianSortedArrays([1,3], [2]));
printf("%.5f\\n", findMedianSortedArrays([1,2], [3,4]));
?>`
    },
    expectedOutput: {
      javascript: "2\n2.5",
      python: "2.0\n2.5",
      java: "2.0\n2.5",
      c: "2.00000\n2.50000",
      cpp: "2.00000\n2.50000",
      php: "2.00000\n2.50000"
    },
  },

  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    category: "Linked List • Heap • Divide and Conquer",
    description: {
      text: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
      notes: [
        "Each linked-list is already sorted in ascending order.",
        "You need to merge them efficiently.",
      ],
    },
    examples: [
      {
        input: "lists = [[1,4,5],[1,3,4],[2,6]]",
        output: "[1,1,2,3,4,4,5,6]",
        explanation: "The linked-lists are: [1->4->5, 1->3->4, 2->6]. Merging them into one sorted list: 1->1->2->3->4->4->5->6.",
      },
      {
        input: "lists = []",
        output: "[]",
      },
      {
        input: "lists = [[]]",
        output: "[]",
      },
    ],
    constraints: [
      "k == lists.length",
      "0 ≤ k ≤ 10⁴",
      "0 ≤ lists[i].length ≤ 500",
      "-10⁴ ≤ lists[i][j] ≤ 10⁴",
      "lists[i] is sorted in ascending order.",
      "The sum of lists[i].length will not exceed 10⁴.",
    ],
    starterCode: {
      javascript: `function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

function mergeKLists(lists) {
  // Write your solution here
  
}

// Helper function to create linked list from array
function createList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert linked list to array
function listToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Test cases
let lists1 = [
  createList([1,4,5]),
  createList([1,3,4]),
  createList([2,6])
];
console.log(listToArray(mergeKLists(lists1))); // Expected: [1,1,2,3,4,4,5,6]

let lists2 = [];
console.log(listToArray(mergeKLists(lists2))); // Expected: []

let lists3 = [createList([])];
console.log(listToArray(mergeKLists(lists3))); // Expected: []`,
      python: `# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeKLists(lists):
    # Write your solution here
    pass

# Helper function to create linked list from array
def create_list(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

# Helper function to convert linked list to array
def list_to_array(head):
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result

# Test cases
lists1 = [
    create_list([1,4,5]),
    create_list([1,3,4]),
    create_list([2,6])
]
print(list_to_array(mergeKLists(lists1)))  # Expected: [1,1,2,3,4,4,5,6]

lists2 = []
print(list_to_array(mergeKLists(lists2)))  # Expected: []

lists3 = [create_list([])]
print(list_to_array(mergeKLists(lists3)))  # Expected: []`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class Solution {
    public static ListNode mergeKLists(ListNode[] lists) {
        // Write your solution here
        return null;
    }
    
    // Helper method to create linked list from array
    public static ListNode createList(int[] arr) {
        if (arr.length == 0) return null;
        ListNode head = new ListNode(arr[0]);
        ListNode current = head;
        for (int i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }
    
    // Helper method to convert linked list to array
    public static List<Integer> listToArray(ListNode head) {
        List<Integer> result = new ArrayList<>();
        while (head != null) {
            result.add(head.val);
            head = head.next;
        }
        return result;
    }
    
    public static void main(String[] args) {
        // Test case 1
        ListNode[] lists1 = new ListNode[]{
            createList(new int[]{1,4,5}),
            createList(new int[]{1,3,4}),
            createList(new int[]{2,6})
        };
        System.out.println(listToArray(mergeKLists(lists1))); // Expected: [1, 1, 2, 3, 4, 4, 5, 6]
        
        // Test case 2
        ListNode[] lists2 = new ListNode[0];
        System.out.println(listToArray(mergeKLists(lists2))); // Expected: []
        
        // Test case 3
        ListNode[] lists3 = new ListNode[]{createList(new int[]{})};
        System.out.println(listToArray(mergeKLists(lists3))); // Expected: []
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

// Definition for singly-linked list.
struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* mergeKLists(struct ListNode** lists, int listsSize) {
    // Write your solution here
    
    return NULL;
}

// Helper function to create linked list from array
struct ListNode* createList(int* arr, int size) {
    if (size == 0) return NULL;
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->val = arr[0];
    head->next = NULL;
    struct ListNode* current = head;
    for (int i = 1; i < size; i++) {
        current->next = (struct ListNode*)malloc(sizeof(struct ListNode));
        current = current->next;
        current->val = arr[i];
        current->next = NULL;
    }
    return head;
}

// Helper function to print linked list as array
void printListAsArray(struct ListNode* head) {
    printf("[");
    while (head) {
        printf("%d", head->val);
        head = head.next;
        if (head) printf(",");
    }
    printf("]");
}

// Helper function to free linked list
void freeList(struct ListNode* head) {
    while (head) {
        struct ListNode* temp = head;
        head = head->next;
        free(temp);
    }
}

int main() {
    // Test case 1
    int arr1[] = {1,4,5};
    int arr2[] = {1,3,4};
    int arr3[] = {2,6};
    struct ListNode* lists1[3];
    lists1[0] = createList(arr1, 3);
    lists1[1] = createList(arr2, 3);
    lists1[2] = createList(arr3, 2);
    struct ListNode* result1 = mergeKLists(lists1, 3);
    printListAsArray(result1);
    printf("\\n");
    freeList(result1);
    freeList(lists1[0]);
    freeList(lists1[1]);
    freeList(lists1[2]);
    
    // Test case 2
    struct ListNode** lists2 = NULL;
    struct ListNode* result2 = mergeKLists(lists2, 0);
    printListAsArray(result2);
    printf("\\n");
    freeList(result2);
    
    // Test case 3
    struct ListNode* lists3[1];
    lists3[0] = createList(NULL, 0);
    struct ListNode* result3 = mergeKLists(lists3, 1);
    printListAsArray(result3);
    printf("\\n");
    freeList(result3);
    freeList(lists3[0]);
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        // Write your solution here
        
        return nullptr;
    }
};

// Helper function to create linked list from vector
ListNode* createList(const vector<int>& arr) {
    if (arr.empty()) return nullptr;
    ListNode* head = new ListNode(arr[0]);
    ListNode* current = head;
    for (size_t i = 1; i < arr.size(); i++) {
        current->next = new ListNode(arr[i]);
        current = current->next;
    }
    return head;
}

// Helper function to print linked list as vector
void printListAsVector(ListNode* head) {
    cout << "[";
    while (head) {
        cout << head->val;
        head = head->next;
        if (head) cout << ",";
    }
    cout << "]";
}

// Helper function to free linked list
void freeList(ListNode* head) {
    while (head) {
        ListNode* temp = head;
        head = head->next;
        delete temp;
    }
}

int main() {
    Solution solution;
    
    // Test case 1
    vector<ListNode*> lists1;
    lists1.push_back(createList({1,4,5}));
    lists1.push_back(createList({1,3,4}));
    lists1.push_back(createList({2,6}));
    ListNode* result1 = solution.mergeKLists(lists1);
    printListAsVector(result1);
    cout << endl;
    freeList(result1);
    for (auto list : lists1) freeList(list);
    
    // Test case 2
    vector<ListNode*> lists2;
    ListNode* result2 = solution.mergeKLists(lists2);
    printListAsVector(result2);
    cout << endl;
    freeList(result2);
    
    // Test case 3
    vector<ListNode*> lists3;
    lists3.push_back(createList({}));
    ListNode* result3 = solution.mergeKLists(lists3);
    printListAsVector(result3);
    cout << endl;
    freeList(result3);
    for (auto list : lists3) freeList(list);
    
    return 0;
}`,
      php: `<?php

class ListNode {
    public $val = 0;
    public $next = null;
    function __construct($val = 0, $next = null) {
        $this->val = $val;
        $this->next = $next;
    }
}

function mergeKLists($lists) {
    // Write your solution here
    return null;
}

// Helper function to create linked list from array
function createList($arr) {
    if (empty($arr)) return null;
    $head = new ListNode($arr[0]);
    $current = $head;
    for ($i = 1; $i < count($arr); $i++) {
        $current->next = new ListNode($arr[$i]);
        $current = $current->next;
    }
    return $head;
}

// Helper function to convert linked list to array
function listToArray($head) {
    $result = [];
    while ($head !== null) {
        $result[] = $head->val;
        $head = $head->next;
    }
    return $result;
}

// Test cases
$lists1 = [
    createList([1,4,5]),
    createList([1,3,4]),
    createList([2,6])
];
echo "[" . implode(",", listToArray(mergeKLists($lists1))) . "]\\n";

$lists2 = [];
echo "[" . implode(",", listToArray(mergeKLists($lists2))) . "]\\n";

$lists3 = [createList([])];
echo "[" . implode(",", listToArray(mergeKLists($lists3))) . "]\\n";
?>`
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4,5,6]\n[]\n[]",
      python: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]\n[]",
      java: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]\n[]",
      c: "[1,1,2,3,4,4,5,6]\n[]\n[]",
      cpp: "[1,1,2,3,4,4,5,6]\n[]\n[]",
      php: "[1,1,2,3,4,4,5,6]\n[]\n[]"
    },
  },

  "sliding-window-maximum": {
    id: "sliding-window-maximum",
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    category: "Array • Queue • Sliding Window • Monotonic Queue",
    description: {
      text: "You are given an array of integers nums, and an integer k. There is a sliding window of size k which moves from the very left of the array to the very right. You can only see the k numbers in the window. Return an array of the maximum value in each window as the window moves from left to right.",
      notes: [
        "Each time the sliding window moves right by one position.",
        "You need to find the maximum in each window efficiently.",
      ],
    },
    examples: [
      {
        input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        output: "[3,3,5,5,6,7]",
        explanation: `
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7`,
      },
      {
        input: "nums = [1], k = 1",
        output: "[1]",
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "1 ≤ k ≤ nums.length",
    ],
    starterCode: {
      javascript: `function maxSlidingWindow(nums, k) {
  // Write your solution here
  
}

// Test cases
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // Expected: [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // Expected: [1]`,
      python: `def maxSlidingWindow(nums, k):
    # Write your solution here
    pass

# Test cases
print(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))  # Expected: [3,3,5,5,6,7]
print(maxSlidingWindow([1], 1))  # Expected: [1]`,
      java: `import java.util.*;

class Solution {
    public static int[] maxSlidingWindow(int[] nums, int k) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(maxSlidingWindow(new int[]{1,3,-1,-3,5,3,6,7}, 3))); // Expected: [3,3,5,5,6,7]
        System.out.println(Arrays.toString(maxSlidingWindow(new int[]{1}, 1))); // Expected: [1]
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* maxSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {
    // Write your solution here
    *returnSize = 0;
    return NULL;
}

// Helper function to print array
void printArray(int* arr, int size) {
    printf("[");
    for (int i = 0; i < size; i++) {
        if (i > 0) printf(",");
        printf("%d", arr[i]);
    }
    printf("]");
}

int main() {
    int returnSize;
    
    int nums1[] = {1,3,-1,-3,5,3,6,7};
    int k1 = 3;
    int* result1 = maxSlidingWindow(nums1, 8, k1, &returnSize);
    printArray(result1, returnSize);
    printf("\\n");
    free(result1);
    
    int nums2[] = {1};
    int k2 = 1;
    int* result2 = maxSlidingWindow(nums2, 1, k2, &returnSize);
    printArray(result2, returnSize);
    printf("\\n");
    free(result2);
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {
        // Write your solution here
        
        return {};
    }
};

// Helper function to print vector
void printVector(const vector<int>& vec) {
    cout << "[");
    for (size_t i = 0; i < vec.size(); i++) {
        if (i > 0) cout << ",";
        cout << vec[i];
    }
    cout << "]";
}

int main() {
    Solution solution;
    
    vector<int> nums1 = {1,3,-1,-3,5,3,6,7};
    int k1 = 3;
    vector<int> result1 = solution.maxSlidingWindow(nums1, k1);
    printVector(result1);
    cout << endl;
    
    vector<int> nums2 = {1};
    int k2 = 1;
    vector<int> result2 = solution.maxSlidingWindow(nums2, k2);
    printVector(result2);
    cout << endl;
    
    return 0;
}`,
      php: `<?php

function maxSlidingWindow($nums, $k) {
    // Write your solution here
    
}

// Test cases
echo "[" . implode(",", maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)) . "]\\n";
echo "[" . implode(",", maxSlidingWindow([1], 1)) . "]\\n";
?>`
    },
    expectedOutput: {
      javascript: "[3,3,5,5,6,7]\n[1]",
      python: "[3, 3, 5, 5, 6, 7]\n[1]",
      java: "[3, 3, 5, 5, 6, 7]\n[1]",
      c: "[3,3,5,5,6,7]\n[1]",
      cpp: "[3,3,5,5,6,7]\n[1]",
      php: "[3,3,5,5,6,7]\n[1]"
    },
  },

  "regular-expression-matching": {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    difficulty: "Hard",
    category: "String • Dynamic Programming • Recursion",
    description: {
      text: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where: '.' matches any single character, and '*' matches zero or more of the preceding element.",
      notes: [
        "Matching should cover the entire input string (not partial).",
        "s contains only lowercase English letters.",
        "p contains only lowercase English letters, '.', and '*'.",
      ],
    },
    examples: [
      {
        input: 's = "aa", p = "a"',
        output: "false",
        explanation: '"a" does not match the entire string "aa".',
      },
      {
        input: 's = "aa", p = "a*"',
        output: "true",
        explanation: "'*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes 'aa'.",
      },
      {
        input: 's = "ab", p = ".*"',
        output: "true",
        explanation: '"." means "zero or more (*) of any character (.)".',
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 20",
      "1 ≤ p.length ≤ 30",
      "s contains only lowercase English letters.",
      "p contains only lowercase English letters, '.', and '*'.",
      "It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.",
    ],
    starterCode: {
      javascript: `function isMatch(s, p) {
  // Write your solution here
  
}

// Test cases
console.log(isMatch("aa", "a")); // Expected: false
console.log(isMatch("aa", "a*")); // Expected: true
console.log(isMatch("ab", ".*")); // Expected: true`,
      python: `def isMatch(s, p):
    # Write your solution here
    pass

# Test cases
print(isMatch("aa", "a"))  # Expected: False
print(isMatch("aa", "a*"))  # Expected: True
print(isMatch("ab", ".*"))  # Expected: True`,
      java: `class Solution {
    public static boolean isMatch(String s, String p) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isMatch("aa", "a")); // Expected: false
        System.out.println(isMatch("aa", "a*")); // Expected: true
        System.out.println(isMatch("ab", ".*")); // Expected: true
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>
#include <string.h>

bool isMatch(char* s, char* p) {
    // Write your solution here
    
    return false;
}

int main() {
    printf("%s\\n", isMatch("aa", "a") ? "true" : "false");
    printf("%s\\n", isMatch("aa", "a*") ? "true" : "false");
    printf("%s\\n", isMatch("ab", ".*") ? "true" : "false");
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    bool isMatch(string s, string p) {
        // Write your solution here
        
        return false;
    }
};

int main() {
    Solution solution;
    
    cout << (solution.isMatch("aa", "a") ? "true" : "false") << endl;
    cout << (solution.isMatch("aa", "a*") ? "true" : "false") << endl;
    cout << (solution.isMatch("ab", ".*") ? "true" : "false") << endl;
    
    return 0;
}`,
      php: `<?php

function isMatch($s, $p) {
    // Write your solution here
    
}

// Test cases
echo isMatch("aa", "a") ? "true\\n" : "false\\n";
echo isMatch("aa", "a*") ? "true\\n" : "false\\n";
echo isMatch("ab", ".*") ? "true\\n" : "false\\n";
?>`
    },
    expectedOutput: {
      javascript: "false\ntrue\ntrue",
      python: "False\nTrue\nTrue",
      java: "false\ntrue\ntrue",
      c: "false\ntrue\ntrue",
      cpp: "false\ntrue\ntrue",
      php: "false\ntrue\ntrue"
    },
  },

  "n-queens": {
    id: "n-queens",
    title: "N-Queens",
    difficulty: "Hard",
    category: "Backtracking • Recursion",
    description: {
      text: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Return all distinct solutions to the n-queens puzzle.",
      notes: [
        "Each solution contains a distinct board configuration of the n-queens' placement.",
        "A queen can attack horizontally, vertically, and diagonally.",
        "Return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "n = 4",
        output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]',
        explanation: "There are two distinct solutions to the 4-queens puzzle.",
      },
      {
        input: "n = 1",
        output: '[["Q"]]',
      },
    ],
    constraints: ["1 ≤ n ≤ 9"],
    starterCode: {
      javascript: `function solveNQueens(n) {
  // Write your solution here
  
}

// Test cases
console.log(solveNQueens(4));
console.log(solveNQueens(1));`,
      python: `def solveNQueens(n):
    # Write your solution here
    pass

# Test cases
print(solveNQueens(4))
print(solveNQueens(1))`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> solveNQueens(int n) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(solveNQueens(4));
        System.out.println(solveNQueens(1));
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
char*** solveNQueens(int n, int* returnSize, int** returnColumnSizes) {
    // Write your solution here
    *returnSize = 0;
    *returnColumnSizes = NULL;
    return NULL;
}

// Helper function to print solutions
void printSolutions(char*** solutions, int returnSize, int* returnColumnSizes) {
    printf("[");
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(",");
        printf("[");
        for (int j = 0; j < returnColumnSizes[i]; j++) {
            if (j > 0) printf(",");
            printf("\\"%s\\"", solutions[i][j]);
        }
        printf("]");
    }
    printf("]");
}

int main() {
    int returnSize;
    int* returnColumnSizes;
    
    // Test case 1
    char*** result1 = solveNQueens(4, &returnSize, &returnColumnSizes);
    printSolutions(result1, returnSize, returnColumnSizes);
    printf("\\n");
    
    // Free memory if allocated
    if (result1) {
        for (int i = 0; i < returnSize; i++) {
            for (int j = 0; j < returnColumnSizes[i]; j++) {
                free(result1[i][j]);
            }
            free(result1[i]);
        }
        free(result1);
    }
    free(returnColumnSizes);
    
    // Test case 2
    char*** result2 = solveNQueens(1, &returnSize, &returnColumnSizes);
    printSolutions(result2, returnSize, returnColumnSizes);
    printf("\\n");
    
    // Free memory if allocated
    if (result2) {
        for (int i = 0; i < returnSize; i++) {
            for (int j = 0; j < returnColumnSizes[i]; j++) {
                free(result2[i][j]);
            }
            free(result2[i]);
        }
        free(result2);
    }
    free(returnColumnSizes);
    
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        // Write your solution here
        
        return {};
    }
};

// Helper function to print vector of vectors
void printSolutions(const vector<vector<string>>& solutions) {
    cout << "[";
    for (size_t i = 0; i < solutions.size(); i++) {
        if (i > 0) cout << ",";
        cout << "[";
        for (size_t j = 0; j < solutions[i].size(); j++) {
            if (j > 0) cout << ",";
            cout << "\\"" << solutions[i][j] << "\\"";
        }
        cout << "]";
    }
    cout << "]";
}

int main() {
    Solution solution;
    
    vector<vector<string>> result1 = solution.solveNQueens(4);
    printSolutions(result1);
    cout << endl;
    
    vector<vector<string>> result2 = solution.solveNQueens(1);
    printSolutions(result2);
    cout << endl;
    
    return 0;
}`,
      php: `<?php

function solveNQueens($n) {
    // Write your solution here
    
}

// Helper function to format output
function formatSolution($solution) {
    $result = "[";
    for ($i = 0; $i < count($solution); $i++) {
        if ($i > 0) $result .= ",";
        $result .= "[\"" . implode("\",\"", $solution[$i]) . "\"]";
    }
    $result .= "]";
    return $result;
}

// Test cases
echo formatSolution(solveNQueens(4)) . "\\n";
echo formatSolution(solveNQueens(1)) . "\\n";
?>`
    },
    expectedOutput: {
      javascript: `[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]\n[["Q"]]`,
      python: `[['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]\n[['Q']]`,
      java: `[[.Q.., ...Q, Q..., ..Q.], [..Q., Q..., ...Q, .Q..]]\n[[Q]]`,
      c: `[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]\n[["Q"]]`,
      cpp: `[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]\n[["Q"]]`,
      php: `[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]\n[["Q"]]`
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
  c: {
    name: "C",
    icon: "/c.png",
    monacoLang: "c",
  },
  cpp: {
    name: "C++",
    icon: "/c++.png",
    monacoLang: "cpp",
  },
  php: {
    name: "PHP",
    icon: "/php.png",
    monacoLang: "php",
  },
};