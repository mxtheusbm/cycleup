import { MyRoutes } from "./routes";
import { TaskContextProvider } from "./contexts/task-context/taskContextProvider";

import "./styles/theme.css";
import "./styles/global.css";

export const App = () => {
  return (
    <TaskContextProvider>
      <MyRoutes />;
    </TaskContextProvider>
  );
};
