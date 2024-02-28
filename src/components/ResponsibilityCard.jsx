import { FaArrowRight } from "react-icons/fa6";

const ResponsibilityCard = ({image, name}) => {
  return (
    <div className="border border-slate-400 w-[20rem]">
          <img src={image} alt={name} />
          
          <div className="flex items-center justify-between p-4">
              <h2 className="text-xl font-bold w-1/3">{name}</h2>
              <button className="border border-black p-2 rounded-full"><FaArrowRight /></button>
          </div>

          <div className="flex px-4 pb-4"><span className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, sapiente?</span></div>
    </div>
  )
}

export default ResponsibilityCard
