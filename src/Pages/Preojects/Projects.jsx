import axios from "axios";
import { useEffect, useState, useRef } from "react";
import EachProject from "./EachProject/EachProject";
import anime from "animejs";
import { Slide } from "react-awesome-reveal";
import Loading from "../../components/HBanner/Loading";
const getProjects = `${import.meta.env.VITE_ENDPOINT_PORTFOLIO}/projects`;
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const radarRef = useRef(null); // Ref for radar animation

  useEffect(() => {
    // Making a GET request using Axios
    axios
      .get(getProjects)
      .then((response) => {
        // Handle the response data here
        setProjects(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error.message);
      });

    // Radar-like loading animation using anime.js
    const radarAnimation = anime({
      targets: radarRef.current,
      rotate: "360deg",
      easing: "linear",
      duration: 2000,
      loop: true,
    });

    return () => radarAnimation.pause(); // Cleanup the animation when component unmounts
  }, []);

  return (
    <Slide duration={3000} direction='down' triggerOnce>
      <div className='w-full m-8'>
        <h2 className='text-center my-4 text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500'>
          Projects
        </h2>
        <div className='my-8'>
          <div className='flex flex-col md:flex-row gap-5'>
            {projects?.length === 0 ? (
              <Loading />
            ) : (
              <div className='w-4/5 mx-auto flex items-center justify-center flex-col md:flex-row gap-3 flex-wrap'>
                {projects?.map((project, i) => (
                  <EachProject key={i} project={project}></EachProject>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Projects;
