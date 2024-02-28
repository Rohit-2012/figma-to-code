import { allProducts } from "../assets/products-images"
import { FaArrowRight } from "react-icons/fa6";


const AllProducts = () => {
  return (
      <div className="p-10">
          <h1 className="text-xl font-bold mb-8">Our All Products</h1>
          <ul className="list-none">
              {
                  allProducts.map(product => (
                      <li key={product.name} className="flex items-center justify-between border-b border-slate-600 py-4">{ product.name} <button className="border border-slate-800 p-1 rounded-full"><FaArrowRight /></button></li>
                  ))
          }
          </ul>
    </div>
  )
}

export default AllProducts
