import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const styles = {
  input:
    "border p-2 outline-none focus:border-none focus:outline-purple-500 relative w-full",
};

const Loginform = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <form className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2 ">
        <label htmlFor="">
          Username or email address <span className="text-red-500">*</span>
        </label>
        <input type="text" className={styles.input} autoComplete="off" />
      </div>
      <div className="flex flex-col gap-2 ">
        <label htmlFor="">
          Password <span className="text-red-500">*</span>
        </label>
        <span className="relative">
          <input
            type={showPass ? "text" : "password"}
            className={styles.input}
            autoComplete="off"
          />
          <span onClick={() => setShowPass((prev) => !prev)}>
            {!showPass ? (
              <FaEye className="absolute top-[12px] right-[8px]" />
            ) : (
              <FaEyeSlash className="absolute top-[12px] right-[8px]" />
            )}
          </span>
        </span>
      </div>
      <button className="bg-purple-500 text-white uppercase w-full p-2.5">
        log in
      </button>
      <div className="flex justify-between items-center">
        <span className="flex gap-1 items-center">
          <input type="checkbox" />
          <small className="uppercase">remember me</small>
        </span>
        <Link className="text-purple-500 uppercase text-xs">
          lost your password
        </Link>
      </div>
    </form>
  );
};

export default Loginform;
