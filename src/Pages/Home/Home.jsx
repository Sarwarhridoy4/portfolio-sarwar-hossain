import Experiences from "./Experiences/Experiences";
import Github from "./GitHub/Github";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
const Home = () => {
  return (
    <div className=''>
      <div className=''>
        <Hero />
        <Skills />
        <Github />
        <Experiences />
        {/* <Loading /> */}
      </div>
    </div>
  );
};

export default Home;
