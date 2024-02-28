import AllProducts from "../components/AllProducts";
import ProductsFooter from "../components/ProductsFooter";
import SearchProducts from "../components/SearchProducts";
import ProductsHeader from "../sections/ProductsHeader";
import ProductsSummary from "../sections/ProductsSummary";

const Products = () => {
  return (
    <div>
      <ProductsHeader />
      <ProductsSummary />
      <div className="flex items-start pl-10">
        <div className="w-[25%]">
          <AllProducts />
        </div>
        <div className="w-[70%]">
          <SearchProducts />
        </div>
      </div>
      <ProductsFooter />
    </div>
  );
};

export default Products;
