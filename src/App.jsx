import { RouterProvider } from "react-router-dom";
import router from "./Router/routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { loadFull } from "tsparticles";
import { useCallback, useEffect } from "react";
import Particles from "react-particles";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div className='max-w-[1240px] font-poppins text-white text-[16px] w-[90vw] mx-auto grid grid-cols-12'>
      <div className='col-span-full'>
        <Particles
          id='tsparticles'
          url={`../src/assets/Animation/particlesjs-config.json`}
          init={particlesInit}
          loaded={particlesLoaded}
        />
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
