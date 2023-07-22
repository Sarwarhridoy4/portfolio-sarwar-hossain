import axios from "axios";
import { useEffect, useState } from "react";
import EachProject from "./EachProject/EachProject";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    // Making a GET request using Axios
    axios
      .get("https://portfolio-server-weld.vercel.app/projects")
      .then((response) => {
        // Handle the response data here
        setProjects(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error.message);
      });
  }, []);
  return (
    <div className='w-full m-8'>
      <h2 className='text-center my-4 text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        Projects
      </h2>
      <div className='my-8'>
        <div className='flex flex-col md:flex-row gap-5'>
          {projects?.length === 0 ? (
            <div className='col-span-full'>
              <p className='text-white text-center text-3xl'>
                You havent Added Any project yet.{" "}
              </p>
            </div>
          ) : (
            <div className="w-4/5 mx-auto flex items-center justify-center flex-col md:flex-row gap-3 flex-wrap">
              {projects?.map((project, i) => (
                
                  <EachProject key={i} project={project}></EachProject>
                
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
