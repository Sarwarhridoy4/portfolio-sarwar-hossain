import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import downloadFileFromGoogleDrive from "../../../../utils/Dwonload";
import click from "../../../../assets/sound-effect/click.mp3";
import { Link } from "react-router-dom";
import { AttentionSeeker } from "react-awesome-reveal";
import { useState } from "react";
const FirstHalf = () => {
  const [selectedRole, setSelectedRole] = useState("Select Role");
  const MernLink = `https://drive.google.com/file/d/${
    import.meta.env.VITE_SECRETLINK_MERN
  }/view?usp=sharing`;
  const ReactLink = `https://drive.google.com/file/d/${
    import.meta.env.VITE_SECRETLINK_REACT
  }/view?usp=sharing`;
  const NodeLink = `https://drive.google.com/file/d/${
    import.meta.env.VITE_SECRETLINK_NODE
  }/view?usp=sharing`;
  const audio = new Audio();
  audio.src = click;
  const handleRoleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedRole(selectedValue);

    if (selectedValue === "Full Stack") {
      downloadFileFromGoogleDrive(MernLink);
      audio.play();
    } else if (selectedValue === "Front End") {
      downloadFileFromGoogleDrive(ReactLink);
      audio.play();
    } else if (selectedValue === "Back End") {
      downloadFileFromGoogleDrive(NodeLink);
      audio.play();
    }
  };
  return (
    <div className='w-full p-2 min-h-16'>
      <h1 className='text-[20px] md:text-[30px] lg:text-[40px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <Typewriter
          options={{
            strings: ["Hi, I am Sarwar Hossain"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className='text-[20px]'>
        I am a <span> </span>
        <div className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 inline-block'>
          <Typewriter
            options={{
              strings: ["React", "Front-End", "BackEnd", "Full-Stack(MERN)"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <span> Developer</span>
      </p>
      <div className='w-full mx-auto'>
        <div className='flex flex-col md:flex-row gap-3 items-center justify-between my-20'>
          <AttentionSeeker effect='heartBeat'>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              className='uppercase w-40 h-10 bg-fuchsia-600 hover:rounded-full hover:transition-500 hover:bg-gradient-to-r from-sky-500 to-indigo-500'
            >
              <select
                name='role'
                value={selectedRole}
                onChange={handleRoleChange}
                className='bg-transparent text-yellow-300'
              >
                <option value='Select Role' defaultChecked>
                  Select Role
                </option>
                <option
                  value='Full Stack'
                  className='bg-transparent border-none'
                >
                  Full Stack
                </option>
                <option
                  value='Front End'
                  className='bg-transparent border-none'
                >
                  Front End
                </option>
                <option value='Back End' className='bg-transparent border-none'>
                  Back End
                </option>
              </select>
            </motion.button>
          </AttentionSeeker>
          <Link to='/contact-me'>
            <motion.button
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{
                scale: 1.1,
              }}
              className='uppercase w-40 h-10 bg-fuchsia-600 hover:rounded-full hover:transition-500 hover:bg-gradient-to-r from-sky-500 to-indigo-500'
              onClick={() => audio.play()}
            >
              contact me
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstHalf;
