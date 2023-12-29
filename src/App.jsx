import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import options from "./utils/option";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { Toaster } from "react-hot-toast";
import AnimatedCursor from "react-animated-cursor";
import { RouterProvider } from "react-router-dom";
import router from "./Router/routes";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const App = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  if (init) {
    return (
      <>
        <Particles
          id='tsparticles'
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <div className='max-w-[1240px] font-poppins text-white text-[16px] w-[90vw] mx-auto grid grid-cols-12'>
          <div className='col-span-full'>
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
      </>
    );
  }

  return <></>;
};
export default App;
