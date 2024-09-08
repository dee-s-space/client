import React from "react";
import { Link } from "react-router-dom";

const Navlinks = ({ path, title }) => {
  return (
    <Link className="uppercase font-light text-[0.75rem]" to={path}>
      {title}
    </Link>
  );
};

export default Navlinks;
