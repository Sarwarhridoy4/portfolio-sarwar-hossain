import { motion } from "framer-motion";
import html from "../../../assets/skills/html.svg";
import css from "../../../assets/skills/css.svg";
import js from "../../../assets/skills/js.svg";
import react from "../../../assets/skills/react.svg";
import node from "../../../assets/skills/node.svg";
import git from "../../../assets/skills/git.svg";
import github from "../../../assets/skills/github.svg";
import tailwind from "../../../assets/skills/tailwind.svg";
import bootstrap from "../../../assets/skills/bootstrap.svg";
import sass from "../../../assets/skills/scss.svg";
import Vite from "../../../assets/skills/vite.svg";
import PhotoShop from "../../../assets/skills/photoshop.svg";
import illustrator from "../../../assets/skills/illustrator.svg";
import figma from "../../../assets/skills/figma.svg";
import { AttentionSeeker, Slide } from "react-awesome-reveal";
const Skills = () => {
  return (
    <Slide duration={2000} triggerOnce>
      <motion.div className=''>
        <h1 className='text-[20px] text-center md:text-[30px] lg:text-[40px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500'>
          Skills I have
        </h1>
        <motion.div className='w-4/5 mx-auto my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center'>
          <motion.div className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
            <AttentionSeeker effect='jello'>
              <img
                src={html}
                alt=''
                className='w-[80%] hover:animate-pulse hover:cursor-pointer'
              />
            </AttentionSeeker>
            HTML
          </motion.div>
          <motion.div className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
            <AttentionSeeker effect='jello'>
              <img
                src={css}
                alt=''
                className='w-[80%] hover:animate-pulse hover:cursor-pointer'
              />
            </AttentionSeeker>
            CSS
          </motion.div>
          <motion.div className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
            <AttentionSeeker effect='jello'>
              <img
                src={js}
                alt=''
                className='w-[80%] hover:animate-pulse hover:cursor-pointer'
              />
            </AttentionSeeker>
            JavaScript
          </motion.div>
          <motion.div className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
            <img
              src={react}
              alt=''
              className='w-[80%] hover:animate-pulse hover:cursor-pointer'
            />
            ReactJs
          </motion.div>
          <motion.div className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
            <AttentionSeeker effect='jello'>
              <img
                src={node}
                alt=''
                className='w-[80%] hover:animate-pulse hover:cursor-pointer'
              />
            </AttentionSeeker>
            NodeJs
          </motion.div>
          <motion.div className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
            <AttentionSeeker effect='jello'>
              <img
                src={tailwind}
                alt=''
                className='w-[80%] hover:animate-pulse hover:cursor-pointer'
              />
            </AttentionSeeker>
            Tailwind-Css
          </motion.div>
          <motion.div className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
            <AttentionSeeker effect='jello'>
              <img
                src={git}
                alt=''
                className='w-[80%] hover:animate-pulse hover:cursor-pointer'
              />
            </AttentionSeeker>
            Git
          </motion.div>
          <motion.div className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
            <AttentionSeeker effect='jello'>
              <img
                src={github}
                alt=''
                className='w-[80%] hover:animate-pulse hover:cursor-pointer'
              />
            </AttentionSeeker>
            GitHub
          </motion.div>
          <motion.div className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
            <AttentionSeeker effect='jello'>
              <img
                src={bootstrap}
                alt=''
                className='w-[80%] hover:animate-pulse hover:cursor-pointer'
              />
            </AttentionSeeker>
            BootStrap-5
          </motion.div>
          <motion.div className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
            <AttentionSeeker effect='jello'>
              <img
                src={Vite}
                alt=''
                className='w-[80%] hover:animate-pulse hover:cursor-pointer'
              />
            </AttentionSeeker>
            Vite
          </motion.div>
          <motion.div className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
            <AttentionSeeker effect='jello'>
              <img
                src={sass}
                alt=''
                className='w-[80%] hover:animate-pulse hover:cursor-pointer'
              />
            </AttentionSeeker>
            SaSS
          </motion.div>
          <motion.div className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
            <AttentionSeeker effect='jello'>
              <img
                src={PhotoShop}
                alt=''
                className='w-[80%] hover:animate-pulse hover:cursor-pointer'
              />
            </AttentionSeeker>
            PhotoShop
          </motion.div>
          <motion.div className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
            <AttentionSeeker effect='jello'>
              <img
                src={illustrator}
                alt=''
                className='w-[80%] hover:animate-pulse hover:cursor-pointer'
              />
            </AttentionSeeker>
            Illustrator
          </motion.div>
          <motion.div className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500'>
            <AttentionSeeker effect='jello'>
              <img
                src={figma}
                alt=''
                className='w-[80%] hover:animate-pulse hover:cursor-pointer'
              />
            </AttentionSeeker>
            Figma
          </motion.div>
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default Skills;
