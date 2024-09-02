import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    const getCurrentYear = () => {
      const year = new Date().getFullYear();
      setCurrentYear(year);
    };
    getCurrentYear();
  }, [currentYear]);
  return (
    <Slide duration={3000} direction="down" triggerOnce>
      <div className='grid grid-cols-12'>
      <div className='col-span-full flex items-baseline justify-center my-8'>
        <p>&copy; Design and Developed By: Sarwar Hossain</p>
      </div>
      <div className='col-span-full flex items-baseline justify-center mb-20'>
        <p>&copy; Copyright : {currentYear}</p>
      </div>
    </div>
    </Slide>
  );
};

export default Footer;
