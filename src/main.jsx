import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FooterPage from "./components/FooterPage.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  // other theme properties
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <FooterPage />
  </React.StrictMode>
);
