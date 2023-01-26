import { ToastContainer } from "react-toastify";
import Board from "./components/Board";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        autoClose={2000}
        position="top-right"
        hideProgressBar={false}
      />
      <Board />
    </>
  );
}

export default App;
