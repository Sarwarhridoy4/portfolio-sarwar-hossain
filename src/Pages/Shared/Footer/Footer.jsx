import { useEffect, useState } from "react";

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
    <div className='grid grid-cols-12'>
      <div className='col-span-full flex items-baseline justify-center my-8'>
        <p>&copy; Design and Developed By: Sarwar Hossain</p>
      </div>
      <div className='col-span-full flex items-baseline justify-center mb-20'>
        <p>&copy; Copyright : {currentYear}</p>
      </div>
    </div>
  );
};

export default Footer;
