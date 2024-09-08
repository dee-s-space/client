import React from "react";

import { getAccessToken } from "../utils";
import { useNavigate } from "react-router-dom";

import { FaAirFreshener } from "react-icons/fa";

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
      <span>
        <FaAirFreshener />
      </span>
      <h1 className="uppercase font-bold">ganja stores</h1>
    </div>
  );
};

export default Logo;
