import { Link } from "react-router-dom";
import { Emblem, sailLogo } from "../assets/images";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";

const HomeHeader = () => {
  return (
    <header>
      <nav className="flex items-center justify-evenly py-2">
        <div className="flex gap-4 items-center">
          <img src={Emblem} alt="Emblem of India" className="w-10" />
          <div className="border-r border-black h-8"></div>
          <img src={sailLogo} alt="SAIL Logo" className="w-14" />
        </div>
        <div className="flex gap-6 text-sm items-center">
          <Link to='/'>All India Demand Reg | English | हिन्दी</Link>
          <Link to='/'>SAIL Mediclaim</Link>
          <Link to='/'>EPS-95</Link>
          <Link to='/'>SAIL Pension</Link>
          <Link to='/'>Tenders</Link>
          <Link to='/'>Vigilance</Link>
          <Link to='/'>Contact Us</Link>
          <Link to='/'>Careers</Link>
          <div className="flex gap-2 items-center border border-slate-900 rounded-full text-xl pr-5 pl-2 h-10">
            <CiSearch />
            <input
              type="text"
              placeholder="Search"
              className="text-sm outline-none bg-transparent"
              aria-label="search"
            />
          </div>
        </div>
          </nav>
          <nav className="flex justify-center gap-8 bg-[#003375] py-2 text-[12px]">
              <Link className="flex items-center gap-1 text-white">COMPANY <FaCaretDown/></Link>
              <Link className="flex items-center gap-1 text-white">MAKE IN INDIA <FaCaretDown/></Link>
              <Link className="flex items-center gap-1 text-white">MARKETING <FaCaretDown/></Link>
              <Link to='/products' className="flex items-center gap-1 text-white">PRODUCTS <FaCaretDown/></Link>
              <Link className="flex items-center gap-1 text-white">INVESTOR RELATIONS <FaCaretDown/></Link>
              <Link className="flex items-center gap-1 text-white">MEDIA <FaCaretDown/></Link>
              <Link className="flex items-center gap-1 text-white">CORPORATE CITIZENSHIP <FaCaretDown/></Link>
          </nav>
    </header>
  );
};

export default HomeHeader;
