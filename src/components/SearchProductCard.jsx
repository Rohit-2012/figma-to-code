import { FaArrowRight } from "react-icons/fa6";

const SearchProductCard = ({image, name}) => {
  return (
    <div className="flex flex-col  justify-between border border-slate-400">
          <img src={image} alt={name} />
          <div className="flex justify-between p-4 gap-2 items-start">
              <h2 className="text-[1.3rem] font-bold">{name}</h2>
              <button className="border border-slate-800 p-3 rounded-full"><FaArrowRight /></button>
          </div>
          <span className="p-4">View Product Catalogue</span>
    </div>
  )
}

export default SearchProductCard
