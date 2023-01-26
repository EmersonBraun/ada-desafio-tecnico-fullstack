import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { Board } from "./components/Board";

import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ToastContainer
        autoClose={2000}
        position="top-right"
        hideProgressBar={false}
      />
      <Board />
      <GlobalStyle />
    </ThemeProvider>
  );
}
