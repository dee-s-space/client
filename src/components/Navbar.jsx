import React from "react";
import {
  FaExchangeAlt,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaPinterest,
  FaShoppingBag,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdDarkMode, MdLightMode, MdMenu, MdSearch } from "react-icons/md";
import Navlinks from "./Navlinks";
import Logo from "./Logo";
import { headerLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, handleDarkMode }) => {
  return (
    <header className="w-full bg-[#993B95] text-[#fff] ">
      <nav>
        <div className="w-full lg:max-w-[1100px] mx-auto flex justify-center lg:justify-end gap-4 p-4">
          <div className="hidden lg:flex gap-4">
            <Navlinks title={"newsletter"} />
            <Navlinks title={"contact us"} />
          </div>
          <span className="flex items-center gap-2">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaPinterest />
          </span>
        </div>

        <div className=" px-4 py-10 border-t border-b border-slate-400 ">
          <div className="w-full lg:max-w-[1100px] mx-auto flex items-center justify-between">
            <span className="flex items-center gap-2 uppercase sm:hidden">
              <MdMenu />
              <span>menu</span>
            </span>

            <span>
              <Logo />
            </span>

            <ul className="hidden lg:flex items-center gap-6 uppercase">
              {headerLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <Link to={link.path}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>

            <span className="flex items-center gap-4">
              <button className="hidden lg:flex uppercase">
                login/register
              </button>
              <button type="button" onClick={handleDarkMode}>
                {darkMode ? <MdDarkMode /> : <MdLightMode />}
              </button>
              <span className="flex items-center gap-6">
                <FaHeart className="hidden lg:flex" />
                <FaExchangeAlt className="hidden lg:flex" />
                <FaShoppingBag />
              </span>
            </span>
          </div>
        </div>

        <div className="flex lg:max-w-[1100px] mx-auto pb-1">
          <input
            type="text"
            className="w-[95%] lg:w-[70%] p-4 outline-none dark:bg-slate-950 bg-[#fff] dark:text-[#fff] text-slate-950 placeholder:capitalize"
            placeholder="search products"
          />
          <select
            name=""
            className="hidden lg:flex dark:bg-slate-950 bg-[#fff] uppercase dark:text-[#fff] w-[25%] border-slate-400 p-2 text-slate-950 border-l"
          >
            <option value="">select category</option>
          </select>
          <span className="w-[5%] bg-orange-300 flex items-center justify-center">
            <MdSearch />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
