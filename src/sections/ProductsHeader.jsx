import { Link } from "react-router-dom";
import { Emblem, sailLogo } from "../assets/images";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";

const ProductsHeader = () => {
  return (
    <header>
      <nav className="bg-[#000B26] text-white p-4 flex items-center gap-6 justify-center">
        <Link to="/">All India Demand Reg | English | हिन्दी</Link>
        <Link to="/">SAIL Mediclaim</Link>
        <Link to="/">EPS-95</Link>
        <Link to="/">SAIL Pension</Link>
        <Link to="/">Tenders</Link>
        <Link to="/">Vigilance</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/">Careers</Link>
        <button className="bg-white text-black p-2 px-4 rounded-full">
          Hindi
        </button>
      </nav>

      <nav className="flex items-center gap-4 justify-center py-2 border-b border-slate-400">
        <div className="flex gap-4 items-center">
          <img src={Emblem} alt="Emblem of India" className="w-10" />
          <div className="border-r border-black h-8"></div>
          <img src={sailLogo} alt="SAIL Logo" className="w-14" />
        </div>
        <div className="flex gap-2 items-center bg-[#D6E1FF] rounded-full text-xl pr-5 pl-2 h-10">
          <CiSearch />
          <input
            type="text"
            placeholder="Search"
            className="text-sm outline-none bg-transparent"
            aria-label="search"
          />
        </div>
        <div className="flex text-[12px] items-center gap-4">
          <Link className="flex items-center gap-1">
            COMPANY <FaCaretDown />
          </Link>
          <Link className="flex items-center gap-1">
            MAKE IN INDIA <FaCaretDown />
          </Link>
          <Link className="flex items-center gap-1">
            MARKETING <FaCaretDown />
          </Link>
          <Link className="flex items-center gap-1">
            PRODUCTS <FaCaretDown />
          </Link>
          <Link className="flex items-center gap-1">
            INVESTOR RELATIONS <FaCaretDown />
          </Link>
          <Link className="flex items-center gap-1">
            MEDIA <FaCaretDown />
          </Link>
          <Link className="flex items-center gap-1">
            CORPORATE CITIZENSHIP <FaCaretDown />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default ProductsHeader;
