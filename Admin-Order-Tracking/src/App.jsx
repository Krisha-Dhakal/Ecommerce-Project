import ThemeProvider from "./hooks/customContextHook/ThemeContext";
import { ToastContainer } from "react-toastify";
import { MainRoute } from "./navigation/MainRoute";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <MainRoute />
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};

export default App;
