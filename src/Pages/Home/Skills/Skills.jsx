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
import mongodb from "../../../assets/skills/mongodb.svg";
import nextjs from "../../../assets/skills/nextjs.svg";
import { AttentionSeeker, Slide } from "react-awesome-reveal";
const Skills = () => {
  const skills = [
    {
      name: "html",
      img: html,
    },
    {
      name: "css",
      img: css,
    },
    {
      name: "sass",
      img: sass,
    },
    {
      name: "tailwind-css",
      img: tailwind,
    },
    {
      name: "bootstrap-css",
      img: bootstrap,
    },
    {
      name: "JavaScript",
      img: js,
    },
    {
      name: "ReactJs",
      img: react,
    },
    {
      name: "React Native",
      img: react,
    },
    {
      name: "Vite.js",
      img: Vite,
    },
    {
      name: "next.js",
      img: nextjs,
    },
    {
      name: "nodejs",
      img: node,
    },
    {
      name: "mongodb",
      img: mongodb,
    },
    {
      name: "git",
      img: git,
    },
    {
      name: "Github",
      img: github,
    },
    {
      name: "photoshop",
      img: PhotoShop,
    },
    {
      name: "illustrator",
      img: illustrator,
    },
    {
      name: "figma",
      img: figma,
    },
  ];
  return (
    <Slide duration={2000} triggerOnce>
      <motion.div className=''>
        <h1 className='text-[20px] text-center md:text-[30px] lg:text-[40px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500'>
          Skills I have
        </h1>
        <motion.div className='w-4/5 mx-auto my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center'>
          {skills?.map((skill, i) => (
            <motion.div
              key={i}
              className='stack w-40 h-40 flex flex-col items-center justify-center border border-dashed border-sky-500 uppercase'
            >
              <AttentionSeeker effect='jello'>
                <img
                  src={skill?.img}
                  alt={skill?.name}
                  className='w-[80%] hover:animate-pulse hover:cursor-pointer flex items-center justify-center align-content-center'
                />
              </AttentionSeeker>
              {skill?.name}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Slide>
  );
};

export default Skills;
