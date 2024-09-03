import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import AnimatedCursor from "react-animated-cursor";
import { RouterProvider } from "react-router-dom";
import router from "./Router/routes";
import SuspensePage from "./Pages/Suspense/Suspense";

const App = () => {
  return (
    <>
      <Suspense fallback={<SuspensePage />}>
        <div className='w-full p-6 font-poppins text-white text-[16px] mx-auto grid grid-cols-12 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-slate-800 to-black'>
          <div className='col-span-full mx-auto'>
            <Toaster />
            <AnimatedCursor
              innerSize={16}
              outerSize={10}
              color='252, 186, 3'
              outerAlpha={0.2}
              innerScale={0.7}
              outerScale={5}
              clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                "label[for]",
                "select",
                "textarea",
                "button",
                ".link",
              ]}
            />
            <RouterProvider router={router} />
          </div>
        </div>
      </Suspense>
    </>
  );
};
export default App;
