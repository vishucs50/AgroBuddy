import Lottie from "lottie-react";
import loadingAnim from "../assets/Animation - 1750523844538.json";

const Loader = () => (
  <div className="h-screen flex items-center justify-center bg-white">
    <Lottie animationData={loadingAnim} loop autoplay className="w-40" />
  </div>
);
export default Loader