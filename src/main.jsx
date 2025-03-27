import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import ToastProvider from "./components/Toast/ToastProvider.jsx";
import Authprovider from "./components/context/Authprovider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // ✅ Import React Query

// Create a QueryClient instance
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}> {/* ✅ Wrap everything inside QueryClientProvider */}
    <Authprovider>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </Authprovider>
  </QueryClientProvider>
);
