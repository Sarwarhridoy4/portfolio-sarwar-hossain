import { RouterProvider } from "react-router-dom";
import router from "./Router/routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='max-w-[1240px] font-poppins text-white text-[16px] w-[90vw] mx-auto grid grid-cols-12'>
      <div className="col-span-full">
      <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
