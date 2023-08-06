import { Slide } from "react-awesome-reveal";
import FirstHalf from "./FirstHalf/FirstHalf";
import SecondHalf from "./SecondHalf/SecondHalf";
import { useState } from "react";
import HBanner from "../../../components/HBanner/HBanner";

const Hero = () => {
  const [banner,setBanner] = useState(true)

  return (
    <Slide direction='right' duration={2000} triggerOnce>
      <div className='w-[80vw] min-h-screen mx-auto grid grid-cols-12 relative'>
        <div className="w-full absolute top-0">
          {
            banner && <HBanner setBanner={setBanner} />
          }
        </div>
        <div className='flex items-center justify-center md:justify-start col-span-full md:col-span-6 md:my-4'>
          <FirstHalf />
        </div>
        <div className='flex items-center justify-center md:justify-start col-span-full md:col-span-6 md:my-4'>
          <SecondHalf />
        </div>
      </div>
    </Slide>
  );
};

export default Hero;
