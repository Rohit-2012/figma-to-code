import { allProducts } from "../assets/products-images"
import SearchProductCard from "./SearchProductCard"


const SearchProducts = () => {
  return (
    <div className="p-10 pr-14 flex flex-col">
          <div className="border-b-2 border-slate-300 pb-4"><h2 className="text-3xl font-bold text-slate-300">Search Products</h2></div>
          <div className="grid grid-cols-3 mt-[2rem] gap-4">
              {
                  allProducts.map(product => (
                      <SearchProductCard key={product.name} image={product.image} name={product.name}/>
                  ))
              }
          </div>
    </div>
  )
}

export default SearchProducts
