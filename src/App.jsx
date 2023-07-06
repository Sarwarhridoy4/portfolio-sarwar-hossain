import { RouterProvider } from "react-router-dom";
import router from "./Router/routes";

const App = () => {
  return (
    <div className="max-w-[1240px] font-poppins text-white text-[16px]">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
