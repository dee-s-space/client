import React, { useState } from "react";

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
import {
  MdClose,
  MdDarkMode,
  MdLightMode,
  MdMenu,
  MdSearch,
} from "react-icons/md";
import Navlinks from "./Navlinks";
import Logo from "./Logo";
import { headerLinks } from "../constants";
import { Link } from "react-router-dom";
import { Login } from "../pages";
import Mobilemenu from "./Mobilemenu";

/* eslint-disable react/prop-types */
const Navbar = ({ darkMode, handleDarkMode }) => {
  const [toggle, setToggle] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleLoginModal = () => {
    setShowLoginModal(true);
  };
  const closeLoginModal = () => {
    setShowLoginModal(false);
  };
  const closeMobileMenu = () => {
    setToggle(false);
  };

  return (
    <header className="w-full bg-purple-600 text-white  ">
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

        <div className=" px-4 py-6 border-t border-b border-slate-400 ">
          <div className="w-full lg:max-w-[1100px] mx-auto flex items-center justify-between">
            <span
              onClick={handleToggle}
              className="flex items-center gap-2 uppercase lg:hidden cursor-pointer"
            >
              {!toggle ? (
                <MdMenu className="text-xl" />
              ) : (
                <MdClose className="text-xl" />
              )}
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
              <button
                onClick={handleLoginModal}
                className="hidden lg:flex uppercase"
              >
                login/register
              </button>
              <button
                className={"bg-white p-1 rounded-full text-purple-600"}
                type="button"
                onClick={handleDarkMode}
              >
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
            className="w-[85%] lg:w-[70%] p-4 outline-none dark:bg-transaparent bg-[#fff] dark:text-purple-500 text-slate-950 placeholder:capitalize placeholder:text-purple-500 "
            placeholder="search products"
          />
          <select
            name=""
            className="hidden lg:flex dark:bg-transaparent bg-[#fff] dark:text-purple-500 text-slate-950 uppercase  w-[25%] border-slate-400 p-2 border-l"
          >
            <option value="">select category</option>
          </select>
          <span className="w-[15%] bg-purple-800 text-white  flex items-center justify-center cursor-pointer">
            <MdSearch className="text-xl lg:text-2xl font-bold" />
          </span>
        </div>
      </nav>
      {showLoginModal && <Login closeModal={closeLoginModal} />}
      {toggle && (
        <Mobilemenu
          closeModal={closeMobileMenu}
          handleLogin={handleLoginModal}
        />
      )}
    </header>
  );
};

export default Navbar;
