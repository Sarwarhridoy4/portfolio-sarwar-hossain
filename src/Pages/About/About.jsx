import { TypeAnimation } from "react-type-animation";
import myself from "../../assets/sarwar-about.png";
import facebook from "../../assets/scocial/facebook.svg";
import insta from "../../assets/scocial/instagram.svg";
import linkedin from "../../assets/scocial/linkedin.svg";
import stack from "../../assets/scocial/stackoverflow.svg";
import GitHub from "../../assets/scocial/github.svg";
import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <div className='overflow-hidden'>
      <div
        
        className='w-full min-h-screen flex flex-col items-center justify-center gap-20'
      >
        <h2 className='text-5xl font-semibold'>Who I am</h2>
        <div className='w-40 h-40 flex items-center justify-center rounded-full relative'>
          <img
            src={myself}
            alt='my-picture'
            className='w-60 absolute bottom-8'
          />
        </div>
        <div>
          <div id='typing-effect' className='mockup-code min-w-[90vw]'>
            <pre data-prefix='$'>
              <code>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "I am Srawar Hossain",
                  ]}
                  wrapper='span'
                  speed={50}
                  style={{ fontSize: "1.5em", display: "inline-block" }}
                  repeat={0}
                />
              </code>
            </pre>
            <pre data-prefix='>' className='text-warning'>
              <code>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "A Full Stack Developer",
                    1000,
                    "A MERN Stack Developer",
                    1000,
                    "A React Developer",
                    1000,
                    "A NodeJS Developer",
                  ]}
                  wrapper='span'
                  speed={10}
                  style={{ fontSize: "1.5em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div
        
        className='w-full min-h-screen flex flex-col items-center justify-center'
      >
        <h2 className='text-5xl font-semibold'>Overview</h2>
        <div className='w-full my-9'>
          <div className='mockup-window border bg-base-300'>
            <div className='flex items-start justify-start px-8 py-8 bg-base-200'>
              <TypeAnimation
                sequence={[
                  `I am Sarwar Hossain. I completed my Diploma in Engineering conducted by Bangladesh Technical Education Board from S M Tofazzol Hossain Polytechnic Institute in 2022. 
        As a MERN Stack Developer, I am passionate about creating high-quality, scalable, and user-friendly web applications. I have a strong foundation in JavaScript, React, Node.js, and MongoDB, and I am constantly expanding my skills and knowledge in this dynamic field.
        
        I have completed several projects demonstrating my ability to build responsive and dynamic web applications using the MERN stack. My experience includes creating RESTful APIs, integrating third-party APIs, and implementing user authentication and authorization. I am familiar with popular front-end frameworks such as React and Redux and back-end frameworks such as Express.js and Mongoose.
        
        I am a fast learner and a team player, and I am always eager to take on new challenges. I thrive in an environment that encourages collaboration and innovation, and I am committed to delivering high-quality work that meets both the business and user requirements.
        
        I am excited to work with a team of experienced developers, designers, and project managers to create cutting-edge web applications that will make a difference in people's lives. If you are looking for a passionate, driven, and skilled MERN Stack Developer, I would love to connect and discuss how I can contribute to your team.`,
                ]}
                wrapper='span'
                cursor={true}
                repeat={0}
                speed={99 | { type: "keyStrokeDelayInMs", value: 5 }}
                style={{
                  fontSize: "1.5em",
                  textAlign: "justify",
                  display: "inline-block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        
        className='w-full min-h-screen flex flex-col items-center justify-center'
      >
        <h2 className='text-5xl font-semibold'>Education</h2>
        <div className='w-full my-9'>
          <div className='mockup-code'>
            <pre data-prefix='$'>
              <code>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Diploma In Engineering (Computer)",
                  ]}
                  wrapper='span'
                  speed={50}
                  style={{ fontSize: "1.5em", display: "inline-block" }}
                  repeat={0}
                />
              </code>
            </pre>
            <pre data-prefix='>' className='text-warning'>
              <code>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "S M Tofazzol Hossain Polytechnic Institute",
                  ]}
                  wrapper='span'
                  speed={50}
                  style={{ fontSize: "1.5em", display: "inline-block" }}
                  repeat={0}
                />
              </code>
            </pre>
            <pre data-prefix='>' className='text-success'>
              <code>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "2017-2021",
                  ]}
                  wrapper='span'
                  speed={50}
                  style={{ fontSize: "1.5em", display: "inline-block" }}
                  repeat={0}
                />
              </code>
            </pre>
          </div>
        </div>
      </div>
      <Slide direction="left">
      <div
        
        className='w-full min-h-screen flex flex-col items-center justify-center'
      >
        <h2 className='text-5xl font-semibold'>Connect With Me</h2>

        <div className='my-9'>
          <div className='mockup-phone border-primary'>
            <div className='camera'></div>
            <div className='display'>
              <div className='artboard artboard-demo phone-1'>
                <div className='w-full overflow-auto flex flex-col items-center justify-center gap-5'>
                  <div className='w-12 h-12 rounded-lg bg-white'>
                    <a
                      href='https://www.facebook.com/sarwarhridoy4/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={facebook} alt='' />
                    </a>
                  </div>
                  <div className='w-12 h-12 rounded-lg bg-white'>
                    <a
                      href='https://www.instagram.com/sarwarhridoy04/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={insta} alt='' />
                    </a>
                  </div>
                  <div className='w-12 h-12 rounded-lg bg-white'>
                    <a
                      href='https://www.linkedin.com/in/sarwar-hridoy4/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={linkedin} alt='' />
                    </a>
                  </div>
                  <div className='w-12 h-12 rounded-lg bg-white'>
                    <a
                      href='https://stackoverflow.com/users/19937858/sarwar-hossain'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={stack} alt='' />
                    </a>
                  </div>
                  <div className='w-12 h-12 rounded-lg bg-white'>
                    <a
                      href='https://github.com/Sarwarhridoy4'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img src={GitHub} alt='' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Slide>
    </div>
  );
};

export default About;
