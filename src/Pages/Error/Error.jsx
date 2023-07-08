import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import click from "../../../src/assets/sound-effect/click.mp3";
const Error = () => {
  const audio = new Audio();
  audio.src = click;
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-3'>
      <h1 className="text-3xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 animate-bounce ">404</h1>
      <p className="text-2xl">Opps!</p>
      <p className="text-2xl">Page Not Found!</p>
      <Link to='/'>
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
      </Link>
    </div>
  );
};

export default Error;
