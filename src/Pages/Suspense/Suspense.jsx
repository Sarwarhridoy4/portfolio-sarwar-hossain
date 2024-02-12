import Lottie from "lottie-react";
import suspense from "../../assets/Animation/Suspense.json";

const SuspensePage = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-3'>
      <Lottie animationData={suspense} loop={true} className="w-[30%]" />
    </div>
  );
};

export default SuspensePage;
