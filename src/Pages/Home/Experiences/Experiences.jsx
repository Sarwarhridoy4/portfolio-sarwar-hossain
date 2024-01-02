import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Experiences = () => {
  return (
    <div className='w-full flex items-center justify-center flex-col my-10'>
      <h1 className='text-[20px] text-center md:text-[30px] lg:text-[40px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500'>
        Experiences
      </h1>
      <div className='w-4/5 mx-auto'>
        <Carousel
          showArrows={true}
          emulateTouch={true}
          autoPlay={true}
          centerMode={false}
          infiniteLoop={true}
          interval={5000}
          showThumbs={false}
        >
          {/* Item One */}
          <div className='max-w-md mx-auto py-4 px-8 bg-violet-800 shadow-lg rounded-lg my-20'>
            <div className='w-20 h-20 bg-violet-700 rounded-full flex items-center justify-center align-middle'>
              <img
                src='https://media.licdn.com/dms/image/C4E0BAQE1kc6jRFNKBw/company-logo_200_200/0/1645964480832/triple_w_solutions_logo?e=1712188800&v=beta&t=-jAFNqFcw2itxQFEoTMSsbKouLPun5iADylPIRFn85U'
                alt='company_logo_3w'
                className='w-full rounded-full'
              />
            </div>
            <div>
              <h2 className='text-white text-xl md:text-2xl lg:text-3xl font-semibold'>
                Full-Stack Developer (MERN)
              </h2>
              <p className='mt-2 text-slate-50 text-sm md:text-md'>
                Company : 3W Private Ltd
              </p>
              <p className='mt-2 text-slate-50 text-sm md:text-md'>
                Span : Aug 2023 - Present · 5 mos
              </p>
              <p className='mt-2 text-slate-50 text-sm md:text-md'>
                Location : Greather Noida · Remote
              </p>
            </div>
            <div className='flex justify-end mt-4'>
              <a
                href='https://triplewsols.org/'
                target='_blank'
                className='text-md md:text-xl font-medium text-indigo-300'
              >
                Detailse
              </a>
            </div>
          </div>
          {/* Item Two */}
          <div className='max-w-md mx-auto py-4 px-8 bg-violet-800 shadow-lg rounded-lg my-20'>
            <div className='w-20 h-20 bg-violet-700 rounded-full flex items-center justify-center align-middle'>
              <img
                src='https://media.licdn.com/dms/image/D560BAQEPp7a6W9ZKbQ/company-logo_100_100/0/1682100332658/geeks_of_gurukul_logo?e=1712188800&v=beta&t=HOahWKldc9KaBKFZKtxj5A5Fw3l0UdfEpTHESihI0Q4'
                alt='company_logo_geeks_of_gurukul'
                className='w-full rounded-full'
              />
            </div>
            <div>
              <h2 className='text-white text-xl md:text-2xl lg:text-3xl font-semibold'>
                Full-Stack Developer (MERN)
              </h2>
              <p className='mt-2 text-slate-50 text-sm md:text-md'>
                Company : Geeks Of Gurukul
              </p>
              <p className='mt-2 text-slate-50 text-sm md:text-md'>
                Span : Apr 2023 - Jun 2023 · 3 mos
              </p>
              <p className='mt-2 text-slate-50 text-sm md:text-md'>
                Location : Bengluru · Remote
              </p>
            </div>
            <div className='flex justify-end mt-4'>
              <a
                href='https://www.geeksofgurukul.com/'
                target='_blank'
                className='text-md md:text-xl font-medium text-indigo-300'
              >
                Detailse
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Experiences;
