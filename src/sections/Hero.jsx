import HeroImages from "../components/HeroImages";

const Hero = () => {
  return (
    <section className="py-4 felx flex-col gap-">
      <h2 className="uppercase tracking-[1rem] text-center text-3xl my-4">
        Steel Authority of India Limited Plants
      </h2>
      <HeroImages />
      <div className="bg-[#003375] flex items-center justify-between text-white uppercase p-2">
        <span>Electrical Steels</span>•
        <span>Hot Rolled Products</span>•
        <span>Wheels And Axles</span>•
        <span>PM Plates</span>•
        <span>Railway Products</span>•
        <span>Wirerods</span>•
        <span>Galvaised Products</span>•
      </div>
    </section>
  );
};

export default Hero;
