import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ThemeContextProvider from "./context/themeContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
