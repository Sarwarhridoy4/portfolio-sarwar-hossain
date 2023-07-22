import { Slide } from "react-awesome-reveal";
import FirstHalf from "./FirstHalf/FirstHalf";
import SecondHalf from "./SecondHalf/SecondHalf";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Hero = () => {
  const [qoute, setQuote] = useState(null);
  useEffect(() => {
    async function fetchRandomQuote() {
      try {
        const response = await axios.get(
          "https://api.quotable.io/quotes/random"
        );
        setQuote(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchRandomQuote();
    setTimeout(() => {
      fetchRandomQuote();
    }, 60000);
  }, [setQuote]);

  return (
    <Slide direction='right' duration={2000} triggerOnce>
      <div className='w-[80vw] min-h-screen mx-auto grid grid-cols-12 relative'>
        <div className='flex items-center justify-center md:justify-start col-span-full md:col-span-6 md:my-4'>
          <div className='w-full absolute top-5 h-10 backdrop-blur-2xl hidden md:block'>
            <span>
              <Marquee pauseOnHover speed={50}>
                <q>{qoute?.[0].content}</q> <span>-</span>
                <span>{qoute?.[0].author}</span>
              </Marquee>
            </span>
          </div>
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
