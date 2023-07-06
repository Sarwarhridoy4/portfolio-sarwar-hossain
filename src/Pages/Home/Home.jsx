import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className='w-full mx-auto grid grid-cols-12'>
      <div className='col-span-full'>
        <Hero />
      </div>
    </div>
  );
};

export default Home;
