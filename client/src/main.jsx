// client/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router";
import "./index.css";
const darkTheme = createTheme({
  palette: {
    mode: "dark", 
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* 👈 Normalizes styles for dark mode */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
  </BrowserRouter>
);
