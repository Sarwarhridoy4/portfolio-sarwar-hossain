import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import click from "../../../src/assets/sound-effect/click.mp3";
import error from "../../assets/Animation/Error404.json" 
import Lottie from "lottie-react"
import { AttentionSeeker } from "react-awesome-reveal";
const Error = () => {
  const audio = new Audio();
  audio.src = click;
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-3'>
      <Lottie animationData={error} loop={true} className="w-[30%]" />
      <p className="text-2xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-500 animate-bounce">Page Not Found!</p>
      <Link to='/'>
        <AttentionSeeker effect="shake">
        <motion.button
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{
                scale: 1.1,
              }}
              className='uppercase w-40 h-10 bg-fuchsia-600 hover:rounded-full hover:transition-500 hover:bg-gradient-to-r from-sky-500 to-indigo-500 my-10'
            onClick={()=>audio.play()}
            >
              Back Home
            </motion.button>
      </AttentionSeeker>
      </Link>
    </div>
  );
};

export default Error;
