import { RouterProvider } from "react-router-dom";
import router from "./Router/routes";

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
