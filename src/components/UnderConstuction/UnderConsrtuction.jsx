import {Slide } from "react-awesome-reveal";
import Underconsrtuction from "../../assets/Animation/under-construction.json";
import Lottie from "lottie-react";
const UnderConsrtuction = () => {
  return (
    <Slide duration={2000} direction="right">
      <div className='w-full min-h-screen flex flex-col items-center justify-center'>
        <Lottie
          animationData={Underconsrtuction}
          loop={true}
          className='w-[50%]'
        />
      </div>
    </Slide>
  );
};

export default UnderConsrtuction;
