import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/themeContext";
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
