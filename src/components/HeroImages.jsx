import { blankCaster, plateMill, wheelAxelPlant } from "../assets/images";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

const HeroImages = () => {
  return (
    <div className="flex pl-14 gap-8 my-8 relative">
      <div className="relative">
        <img src={plateMill} alt="" className="w-[44rem] h-[32rem]" />
        <div className="absolute bottom-8 left-8 text-white flex flex-col gap-8">
          <h2 className="text-4xl font-bold drop-shadow-xl">New Plate Mill</h2>
          <span>Rourkela Steel Plant, Odisha</span>
        </div>
      </div>
      <div className="relative">
        <img src={blankCaster} alt="" className="w-[16rem] h-[32rem]" />
        <div className="absolute bottom-6 left-4 text-white flex flex-col gap-4">
          <h2 className="text-3xl font-bold drop-shadow-xl">
            Beam Blank Caster
          </h2>
          <span>IISCO Steel Plant, Burnpur</span>
        </div>
      </div>
      <div className="relative">
        <img src={wheelAxelPlant} alt="" className="w-[14rem] h-[32rem]" />
        <div className="absolute bottom-6 left-4 text-white flex flex-col gap-4">
          <h2 className="text-3xl font-bold drop-shadow-xl">
            Wheel & Axle Plant
          </h2>
          <span>Durgapur Steel Plant, West Bengal</span>
        </div>
      </div>
      <div className="flex text-5xl text-white items-center absolute bottom-4 left-[40rem]">
        <IoMdArrowBack className="cursor-pointer" />
        <IoMdArrowForward className="cursor-pointer" />
      </div>
    </div>
  );
};

export default HeroImages;
