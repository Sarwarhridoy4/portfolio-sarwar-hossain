import FirstHalf from "./FirstHalf/FirstHalf";
import SecondHalf from "./SecondHalf/SecondHalf";

const Hero = () => {
  return (
    <div className='w-[80vw] min-h-screen mx-auto grid grid-cols-12'>
      <div data-aos="fade-right" className='flex items-center justify-center md:justify-start col-span-full md:col-span-6 md:my-4'>
        <FirstHalf/>
      </div>
      <div data-aos="fade-left" className='flex items-center justify-center md:justify-start col-span-full md:col-span-6 md:my-4'>
        <SecondHalf/>
      </div>
    </div>
  );
};

export default Hero;
