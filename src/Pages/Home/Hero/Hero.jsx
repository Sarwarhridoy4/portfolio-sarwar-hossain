import FirstHalf from "./FirstHalf/FirstHalf";
import SecondHalf from "./SecondHalf/SecondHalf";
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <div  className='w-[80vw] min-h-screen mx-auto grid grid-cols-12'>
      <motion.div  className='flex items-center justify-center md:justify-start col-span-full md:col-span-6 md:my-4'>
        <FirstHalf/>
      </motion.div>
      <div  className='flex items-center justify-center md:justify-start col-span-full md:col-span-6 md:my-4'>
        <SecondHalf/>
      </div>
    </div>
  );
};

export default Hero;
