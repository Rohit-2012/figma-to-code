import { MdArrowOutward } from "react-icons/md";
import { TMT, infinity } from "../assets/images";

const Banner = () => {
  return (
    <div className="p-14 text-white">
      <div className="h-[300px] bg-gradient-to-b from-[#0058C9] to-[#003375] rounded-[2rem] flex justify-between">
        <div className="w-3/4 flex flex-col justify-between pl-8 py-3">
          <div className="flex gap-20 items-center">
            <h1 className="text-[8rem] font-extrabold leading-none innerShadow">
              550D
            </h1>
            <div className="text-4xl flex items-center gap-3">
              <span>We have Added</span>
              <img src={infinity} alt="Infinite" className="w-14" />
              <span>Strength</span>
            </div>
          </div>

          <span>SAIL SeQR 550D TMT</span>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <MdArrowOutward /> BENDABILITY | <MdArrowOutward />
              DUCTILITY | <MdArrowOutward />
              PURITY
            </span>
            <div className="flex gap-4 items-center">
                <div className="flex items-center justify-start border-2 py-2 px-6 rounded-full relative">
                  <span className="mr-8">Buy SAIL TMT</span>
                  <button className="bg-white px-3 py-2 rounded-full absolute right-0 text-[#003375] text-2xl">
                    <MdArrowOutward />
                  </button>
                </div>
                <span>www.SAILsuraksha.com</span>
            </div>
          </div>
        </div>

              <div className="flex w-1/4 p-4 justify-center relative">
                  <div className="bg-[#2181FF] w-[17rem] h-[17rem] rounded-full"></div>
                  <img src={TMT} alt="" className="absolute w-[16.8rem] right-0 bottom-1"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
