import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Li = ({ liText, className, to, children, onclick, iconName }) => {
  return (
    <li onClick={onclick} className="group *:hover:text-[#ff5e14] flex items-center border-r md:p-1">
      <Link
        to={to}
        className={`font-DM  text-black text-sm font-bold transition-all duration-500 
          relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:w-full after:bg-[#ff5e14]  after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left max-md:text-[12px] 
          
          ${className} `}
      >
        {" "}
        {liText} {" "} 
      </Link>

      {children}{<FaAngleDown />}
    </li>
  );
};

export default Li;
