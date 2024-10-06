import React, { useEffect, useState } from "react";
import Container from "./layer/Container";
import { Link } from "react-router-dom";
import Image from "./layer/Image";
import logo from "/Logo.png";
import Li from "./layer/Li";
import { PiDotsNineBold } from "react-icons/pi";
import { IoIosPerson, IoMdArrowDropdown } from "react-icons/io";
import { FaAngleDown, FaSearch, FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  let [show, setShow] = useState(false);

  useEffect(() => {
    function widthSize() {
      if (window.innerWidth > 735.98) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    widthSize();

    window.addEventListener("resize", widthSize);
  }, []);

  return (
    <nav className="overflow-hidden">
      <Container className="relative flex items-center  justify-center gap-5 md:gap-0 md:py-6 py-4 px-3 md:px-0 ">
        <div className="flex md:justify-center">
          <Image
            className="absolute top-1/2 md:left-0 left-3 -translate-y-1/2 h-15 w-20"
            href="/"
            scr={logo}
            alt=""
          />

          <ul
            className={`text-center transition-all duration-300 flex  md:flex-row  flex-col  bg-slate-300 md:bg-transparent absolute top-full left-0 md:static w-full md:w-auto p-2 md:p-0 
            
            ${show ? "translate-x-0 " : "translate-x-full md:translate-x-0"}`}
          >
            <Li to={"/"} className="text-primary  " liText="Home" />
            <Li to={"/aboutus"} liText="About Us" iconName={<FaAngleDown />} />
            <Li to={"/products"} liText="Products" iconName={<FaAngleDown />} />
            <Li
              to={"/authorized"}
              liText="Authorized Partner"
              iconName={<FaAngleDown />}
            />
            <Li
              to={"/solutionservice"}
              liText="Solution & Service"
              iconName={<FaAngleDown />}
            />
            <Li to={"/gallery"} liText="Gallery" iconName={<FaAngleDown />} />
            <Li
              to={"/keyperson"}
              liText="Key Person Sales & Service"
              iconName={<FaAngleDown />}
            />
            <Li to={"/contact"} liText="Contact" iconName={<FaAngleDown />} />{" "}
            <div className="serach relative w-full md:w-auto rounded-xl overflow-hidden ml-4">
              <input
                className="md:w-[150px] rounded-xl  w-full py-2 md:px-5 px-3 outline-0 bg-white"
                type="text"
                placeholder="Search"
              />

              <FaSearch className="absolute top-1/2 -translate-y-1/2 md:right-5 right-3 text-primary" />
            </div>
          </ul>
        </div>

        <div className="account  items-center gap-x-5 flex md:hidden">
          <div className="flex items-center gap-x-2.5">
            <IoIosPerson />
            <IoMdArrowDropdown />
          </div>
          <FaShoppingCart />
        </div>

        <div onClick={() => setShow(!show)} className="flex md:hidden">
          <PiDotsNineBold />
        </div>
      </Container>
    </nav>
  );
};

