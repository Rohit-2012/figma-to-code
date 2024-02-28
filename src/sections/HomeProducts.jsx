import { products, stamp } from "../assets/images";
import ProductCard from "../components/ProductCard";
import { IoMdArrowForward, IoMdArrowBack  } from "react-icons/io";

const HomeProducts = () => {
  return (
    <section className="my-[6rem] flex flex-col gap-8">
      <div className="flex items-center justify-center gap-3 text-sm px-14">
        <span>SAIL OFFER</span>
        <div className="w-[27rem] border-b border-black h-0"></div>
        <span>WIDE RANGE</span>
        <div className="w-[29.4rem] border-b border-black h-0"></div>
        <span>STEEL PRODUCTS</span>
      </div>
      <div className="flex justify-between px-14">
        <div className="flex flex-col gap-4">
          <h1 className="font-sans font-bold text-4xl">
            We Offer A Wide Range Of Steel Products
          </h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
            eos!
          </span>
        </div>
              <div className="flex items-center gap-8 w-1/3 justify-evenly">
                  <img src={stamp} alt="SAIL stamp" className="w-28" />
                  <div className="flex text-5xl text-slate-700 items-center">
                      <IoMdArrowBack className="hover:text-6xl hover:text-black cursor-pointer"/>
                      <IoMdArrowForward className="hover:text-6xl hover:text-black cursor-pointer"/>
                  </div>
              </div>
      </div>
      <div className="flex gap-6 pl-14 overflow-hidden">
              {
                  products.map(product => (
                      <ProductCard key={product.id} img={product.img} name={product.name}/>
                  ))
        }
      </div>
    </section>
  );
};

export default HomeProducts;
