import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { ThemeProvider } from "./context/themeContext.js";
import { BrowserRouter } from "react-router-dom";

const redirect = sessionStorage.redirect;

if (redirect) {
  delete sessionStorage.redirect;
  window.history.replaceState(null, "", redirect);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
