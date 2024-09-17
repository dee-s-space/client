import React, { useRef, useEffect, useState } from "react";
import { headerLinks } from "../constants";
import { FaUserAlt } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Mobilemenu = ({ closeModal, handleLogin }) => {
  const modalRef = useRef(null);

  const [active, setActive] = useState("menu");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className="bg-black dark:bg-white dark:bg-opacity-40 bg-opacity-40 w-full h-screen fixed top-0 left-0 lg:hidden">
      <div
        ref={modalRef}
        className="bg-white absolute top-0 left-0 w-[300px] lg:w-[350px] h-full text-slate-800 flex flex-col"
      >
        <div className="p-4">
          <input type="text" placeholder="search products" />
        </div>
        <hr />
        <div className="flex">
          <button
            className={`w-full uppercase p-4 ${
              active === "menu" ? "bg-zinc-200" : "bg-zinc-50"
            }`}
            onClick={() => setActive("menu")}
          >
            menu
          </button>
          <button
            className={`w-full uppercase p-4 ${
              active === "categories" ? "bg-zinc-200" : "bg-zinc-50"
            }`}
            onClick={() => setActive("categories")}
          >
            categories
          </button>
        </div>
        {active === "menu" && (
          <ul className="flex flex-col">
            {headerLinks.map((link) => {
              return (
                <li
                  className="py-4 border-b uppercase px-5 cursor-pointer hover:text-purple-500 active:text-purple-500"
                  key={link.id}
                >
                  {link.title}
                </li>
              );
            })}
            <button
              className="py-4 border-b uppercase px-5 cursor-pointer flex items-center gap-2 hover:text-purple-500"
              onClick={() => {
                closeModal();
                handleLogin();
              }}
            >
              <FaUserAlt /> login/register
            </button>
          </ul>
        )}
        {active === "categories" && (
          <ul className="flex flex-col p-6">
            <p>No categories </p>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Mobilemenu;
