import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const API_URL = import.meta.env.VITE_API_URL;

// Validate environment variables
if (!PUBLISHABLE_KEY) {
  console.error("❌ Missing Clerk Publishable Key");
  throw new Error("Missing Clerk Publishable Key");
}

if (!API_URL) {
  console.error("❌ Missing API URL");
  throw new Error("Missing VITE_API_URL environment variable");
}

console.log("✅ Environment variables loaded:");
console.log("   - VITE_API_URL:", API_URL);
console.log("   - VITE_CLERK_PUBLISHABLE_KEY:", PUBLISHABLE_KEY ? "Loaded" : "Missing");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
        </ClerkProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
