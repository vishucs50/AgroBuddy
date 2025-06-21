// client/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/authContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import "./index.css";
const darkTheme = createTheme({
  palette: {
    mode: "dark", 
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <AuthProvider>
        <UserProvider>
            <ThemeProvider theme={darkTheme}>
              <CssBaseline /> {/* 👈 Normalizes styles for dark mode */}
              <App />
            </ThemeProvider>
        </UserProvider>
      </AuthProvider>
    </React.StrictMode>
  </BrowserRouter>
);
