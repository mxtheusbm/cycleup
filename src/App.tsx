import { MyRoutes } from "./routes";
import { TaskContextProvider } from "./contexts/task-context/taskContextProvider";

import "./styles/theme.css";
import "./styles/global.css";
import { Bounce, ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <TaskContextProvider>
      <MyRoutes />;
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </TaskContextProvider>
  );
};
