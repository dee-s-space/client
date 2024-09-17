import React from "react";
import { getAccessToken } from "../utils";
import { useNavigate } from "react-router-dom";
import { logo } from "../assets";

const Logo = () => {
  const navigate = useNavigate();
  const accessToken = getAccessToken();

  const handleHome = () => {
    if (accessToken) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };
  return (
    <div
      className="flex flex-col gap-2 items-center justify-center"
      onClick={handleHome}
    >
      <img src={logo} alt="" className="w-[35px]" />
      <h1 className="uppercase font-medium text-xl">
        {`dee's`} <span>space</span>
      </h1>
    </div>
  );
};

export default Logo;
