import { FaArrowRight } from "react-icons/fa6";

const BrochureBtn = () => {
  return (
    <button className="flex items-center gap-1 bg-[#003375] text-white text-sm py-3 px-6 rounded-full">
      View Brochure
      <FaArrowRight />
    </button>
  );
};

export default BrochureBtn;
