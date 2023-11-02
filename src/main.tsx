import React from "react";
import { createRoot } from "react-dom/client";
// React Query Essentials
import { QueryClient, QueryClientProvider } from "react-query";

// Devtools to monitor our data fetched
import { ReactQueryDevtools } from "react-query/devtools";
import App from "./App";

// React Query Config
const queryClient = new QueryClient(); // Global Store Instance

createRoot(document.getElementById("root")!).render(
  // Provide access to Global Store
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>

    {/* DevTools Setup */}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
