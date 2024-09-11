// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import click from "../../../src/assets/sound-effect/click.mp3";
// import { useEffect, useRef } from "react";
// import anime from "animejs";
// import { AttentionSeeker } from "react-awesome-reveal";

// const Error = () => {
//   const audio = new Audio();
//   audio.src = click;

//   const errorRef = useRef(null); // Reference for the error animation container
//   const triangleRef = useRef(null); // Reference for the triangle animation

//   useEffect(() => {

//     // anime.js animation for the jumping triangle
//     anime({
//       targets: triangleRef.current,
//       translateY: [-10, 10],
//       easing: "easeInOutQuad",
//       duration: 500,
//       loop: true,
//     });
//   }, []);

//   return (
//     <div className='w-full min-h-screen flex flex-col items-center justify-center gap-3'>
//       {/* Error animation background */}
//       <div
//         ref={errorRef}
//         className='w-[30%] h-[30%] bg-transparent rounded-full flex items-center justify-center'
//       >
//         {/* SVG Error Triangle */}
//         <svg
//           ref={triangleRef}
//           width='80'
//           height='80'
//           viewBox='0 0 24 24'
//           fill='none'
//           xmlns='http://www.w3.org/2000/svg'
//           className='text-red-600 m-5'
//         >
//           <path
//             d='M12 2L2 22h20L12 2z'
//             stroke='currentColor'
//             strokeWidth='2'
//             fill='currentColor'
//           />
//           <circle cx='12' cy='17' r='1' fill='white' />
//           <rect x='11' y='8' width='2' height='6' fill='white' />
//         </svg>
//       </div>

//       <p className='text-2xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-500 animate-bounce'>
//         Page Not Found!
//       </p>

//       <Link to='/'>
//         <AttentionSeeker effect='shake'>
//           <motion.button
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 1.1 }}
//             className='uppercase w-40 h-10 bg-fuchsia-600 hover:rounded-full hover:transition-500 hover:bg-gradient-to-r from-sky-500 to-indigo-500 my-10'
//             onClick={() => audio.play()}
//           >
//             Back Home
//           </motion.button>
//         </AttentionSeeker>
//       </Link>
//     </div>
//   );
// };

// export default Error;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import click from "../../../src/assets/sound-effect/click.mp3";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { AttentionSeeker } from "react-awesome-reveal";

const Error = () => {
  const audio = new Audio();
  audio.src = click;

  const errorRef = useRef(null); // Reference for the error animation container
  const triangleRef = useRef(null); // Reference for the triangle animation

  useEffect(() => {
    // Line drawing effect for the triangle
    anime({
      targets: triangleRef.current.querySelectorAll("path"),
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 2000,
      delay: (el, i) => i * 250,
      direction: "alternate",
      loop: true, // No looping for the line-drawing effect
    });
  }, []);

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-3'>
      {/* Error animation background */}
      <div
        ref={errorRef}
        className='w-[30%] h-[30%] bg-transparent rounded-full flex items-center justify-center'
      >
        {/* SVG Error Triangle with line draw animation */}
        <svg
          ref={triangleRef}
          width='80'
          height='80'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='text-red-600 m-5'
        >
          <path
            d='M12 2L2 22h20L12 2z'
            stroke='currentColor'
            strokeWidth='2'
            fill='none' // Changed to 'none' to see the line drawing first
          />
          <circle cx='12' cy='17' r='1' fill='red' />
          <rect x='11' y='8' width='2' height='6' fill='red' />
        </svg>
      </div>

      <p className='text-2xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-500 animate-bounce'>
        Page Not Found!
      </p>

      <Link to='/'>
        <AttentionSeeker effect='shake'>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            className='uppercase w-40 h-10 bg-fuchsia-600 hover:rounded-full hover:transition-500 hover:bg-gradient-to-r from-sky-500 to-indigo-500 my-10'
            onClick={() => audio.play()}
          >
            Back Home
          </motion.button>
        </AttentionSeeker>
      </Link>
    </div>
  );
};

export default Error;
