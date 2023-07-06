import Typewriter from "typewriter-effect";
const FirstHalf = () => {
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
              strings: ["React","Front-End", "BackEnd", "Full-Stack(MERN)"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <span> Developer</span>
      </p>
    </div>
  );
};

export default FirstHalf;
