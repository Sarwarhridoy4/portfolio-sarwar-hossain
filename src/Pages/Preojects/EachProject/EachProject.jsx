import "./EachProject.css";
import live from "../../../assets/scocial/live.svg";
import gitlive from "../../../assets/scocial/git-live.svg";
const EachProject = ({ project }) => {
  const {
    projectName,
    slogan,
    LiveLink,
    gitHubLink,
    projectDescription,
    images,
  } = project;
  
  return (
    <div>
      <div className='card'>
        <div className='card-inner'>
          <div
            className='card-front'
            style={{
              backgroundImage: `url(${images[0]})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className='card-back backdrop-blur-sm'>
            <p>{projectName}</p>
            <p className='text-xs'>{slogan}</p>
            <div className='flex gap-5'>
              <a href={`${LiveLink}`} target='_blank' rel='noopener noreferrer'>
                <img src={live} alt='live-site' />
              </a>
              <a
                href={`${gitHubLink}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={gitlive} alt='github-repo' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProject;
