import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

import { store } from "./app/store";
import AppRoutes from "./routes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2f2f39",
    },
    secondary: {
      main: "#ea1b3d",
    },
  },
  typography: {
    fontFamily: '"Outfit", sans-serif',
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
