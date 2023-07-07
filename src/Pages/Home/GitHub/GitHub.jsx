import { motion } from "framer-motion";

const Github = () => {
  return (
    <div>
      <motion.div
        data-aos='flip-right'
        data-aos-easing='linear'
        data-aos-duration='1500'
        className='my-10'
      >
        <h1 className='text-[20px] text-center md:text-[30px] lg:text-[40px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500'>
          Git Hub Stats
        </h1>
      </motion.div>
      <div
        data-aos='flip-right'
        data-aos-easing='linear'
        data-aos-duration='1500'
        className='flex flex-col gap-7 items-center justify-center'
      >
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${
            import.meta.env.VITE_USERNAME
          }`}
          alt=''
        />

        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=${
            import.meta.env.VITE_USERNAME
          }`}
          alt=''
        />
      </div>
    </div>
  );
};

export default Github;
