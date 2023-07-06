import { motion } from "framer-motion";
import html from "../../../assets/skills/html.svg";
import css from "../../../assets/skills/css.svg";
import js from "../../../assets/skills/js.svg";
import react from "../../../assets/skills/react.svg";
import node from "../../../assets/skills/node.svg";
import git from "../../../assets/skills/git.svg";
import github from "../../../assets/skills/github.svg";
import tailwind from "../../../assets/skills/tailwind.svg";
const Skills = () => {
  return (
    <motion.div
      data-aos='fade-down'
      data-aos-easing='linear'
      data-aos-duration='1500'
      className='min-h-screen'
    >
      <h1 className='text-[20px] text-center md:text-[30px] lg:text-[40px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500'>
        Skills I have
      </h1>
      <motion.div
        data-aos='fade-down'
        data-aos-easing='linear'
        data-aos-duration='1500'
        className='w-4/5 mx-auto my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'
      >
        <motion.div className='w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
          <img src={html} alt='' className='w-[80%]' />
          HTML
        </motion.div>
        <motion.div className='w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
          <img src={css} alt='' className='w-[80%]' />
          CSS
        </motion.div>
        <motion.div className='w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
          <img src={js} alt='' className='w-[80%]' />
          JavaScript
        </motion.div>
        <motion.div className='w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
          <img src={react} alt='' className='w-[80%]' />
          ReactJs
        </motion.div>
        <motion.div className='w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
          <img src={node} alt='' className='w-[80%]' />
          NodeJs
        </motion.div>
        <motion.div className='w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
          <img src={tailwind} alt='' className='w-[80%]' />
          Tailwind-Css
        </motion.div>
        <motion.div className='w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
          <img src={git} alt='' className='w-[80%]' />
          Tailwind-Css
        </motion.div>
        <motion.div className='w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
          <img src={github} alt='' className='w-[80%]' />
          Tailwind-Css
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
