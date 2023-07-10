import Underconsrtuction from "../../assets/Animation/under-construction.json" 
import Lottie from "lottie-react"
const UnderConsrtuction = () => {
  return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
           <Lottie animationData={Underconsrtuction} loop={true} className="w-[50%]" />
    </div>
  )
}

export default UnderConsrtuction