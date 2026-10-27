import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import { LocalStorageProvider } from "./providers/LocalStorageProvider";
import { ThemeProvider } from "./providers/themeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LocalStorageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LocalStorageProvider>
  </StrictMode>,
);
