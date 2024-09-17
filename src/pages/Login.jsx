import React from "react";
import { MdClose } from "react-icons/md";
import { Loginform } from "../components";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Login = ({ closeModal }) => {
  return (
    <div className="bg-slate-950 dark:bg-white dark:bg-opacity-40 bg-opacity-40 w-full h-screen fixed top-0 left-0">
      <div className="bg-white absolute top-0 right-0 w-[300px] lg:w-[350px] h-full text-slate-800">
        <span className="flex justify-between font-semibold text-md p-6">
          <h3>Sign in </h3>
          <span
            onClick={closeModal}
            className="flex items-center cursor-pointer text-md font-normal"
          >
            <MdClose className="font-bold text-xl" />
            Close
          </span>
        </span>
        <hr />
        <Loginform />
        <hr />
        <div className="flex flex-col items-center justify-center p-6 gap-2">
          <FaUserCircle className="text-5xl text-gray-300" />
          <p>No account yet?</p>
          <Link className="uppercase border-b-2 border-purple-500 text-xs">
            create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
