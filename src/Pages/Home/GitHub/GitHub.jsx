import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";

const Github = () => {
  return (
    <div>
      <Slide duration={3000} direction='right' triggerOnce>
        <motion.div className='my-10'>
          <h1 className='text-[20px] text-center md:text-[30px] lg:text-[40px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500'>
            Git Hub Stats
          </h1>
        </motion.div>

        <div className='flex flex-col gap-7 items-center justify-center'>
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${
              import.meta.env.VITE_USERNAME
            }`}
            alt=''
            className='w-96'
          />

          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=${
              import.meta.env.VITE_USERNAME
            }&show_icons=true&locale=en&layout=compact`}
            alt=''
            className='w-96'
          />
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${
              import.meta.env.VITE_USERNAME
            }&show_icons=true&locale=en`}
            alt=''
            className='w-96'
          />
        </div>
      </Slide>
    </div>
  );
};

export default Github;
