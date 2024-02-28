import { India, asterisk, stamp } from "../assets/images"
import { FaArrowDown } from "react-icons/fa";
import { steelPlants } from "../utils/steelPlants";


const Network = () => {
  return (
      <section className="my-[4rem] flex flex-col gap-10">
          <div className="flex items-center justify-center gap-3 text-sm">
        <span>SAIL NETWORK</span>
        <div className="w-[25rem] border-b border-black h-0"></div>
        <span>ALL OVER INDIA</span>
        <div className="w-[25rem] border-b border-black h-0"></div>
        <span>SHOW STATE AND CITY</span>
          </div>
        <div className="bg-[#003375] flex p-12 justify-between items-center">
              <div className="w-2/3 flex flex-col justify-evenly gap-[4rem]">
                  <h2 className="text-white text-4xl font-bold">SAIL NETWORK</h2>
                  <ul className="text-white flex flex-col gap-10 max-h-[18rem] flex-wrap">
                      {steelPlants.map(steelPlant => (
                          <li key={steelPlant} className="flex items-center gap-4"><img src={asterisk} className="w-4 h-4"/> { steelPlant}</li>
                      ))}
                  </ul>
    
                  <div className="flex items-center gap-8">
                      <img src={stamp} alt="SAIL Trademark" className="w-32"/>
                      <button className="flex items-center gap-2 text-sm bg-white py-4 px-10 rounded-full font-semibold"><FaArrowDown /> Download SAIL Network Map</button>
                  </div>
          </div>
    
              <div className="">
                  <img src={India} alt="SAIL network across India" className="w-[40rem] m-auto"/>
          </div>
        </div>
    </section>
  )
}

export default Network
