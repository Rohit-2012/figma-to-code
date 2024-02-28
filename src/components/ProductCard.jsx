import { electricSteel, explore } from "../assets/images"
import BrochureBtn from "./BrochureBtn"

const ProductCard = ({img, name}) => {
  return (
    <div className="min-w-[280px] flex flex-col items-start gap-4">
          <div className="relative w-full">
              <img src={img} alt={name} className="h-[330px]"/>
              <img src={explore} alt="" className="absolute bottom-1 right-0 w-[5.4rem]"/>
          </div>
          <h3 className="font-bold text-lg">{name}</h3>
          <span>Lorem ipsum dolor sit amet.</span>
          <BrochureBtn />
    </div>
  )
}

export default ProductCard
