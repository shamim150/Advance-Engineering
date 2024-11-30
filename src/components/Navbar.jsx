import React, { useState } from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";
import logo from "/Logo.png";
import Li from "./layer/Li";
import { PiDotsNineBold } from "react-icons/pi";
import { FaAngleDown, FaSearch } from "react-icons/fa";

export const Navbar = () => {
  const [show, setShow] = useState(false); // Manage the state of the mobile menu

  return (
    <nav className="z-10 fixed w-full top-0 bg-slate-100 ">
      <Container className="relative flex items-center justify-between gap-5 lg:gap-0 lg:py-6 py-4 px-3 lg:px-0">
        
        {/* Logo */}
        <div className="flex lg:justify-center w-fit">
          <Image
            className="absolute top-1/2 lg:left-0 left-3 -translate-y-1/2 h-15 w-20"
            href="/"
            scr={logo}
            alt="Logo"
          />
        </div>

        {/* Menu items */}
        <ul
          className={`text-center   justify-between transition-transform duration-300 ease-in-out flex lg:flex-row flex-col bg-slate-300 lg:bg-transparent absolute top-[99%] left-0 lg:static w-full lg:w-auto p-2 lg:p-1 transform ${
            show ? "translate-x-0 z-40" : "translate-x-full"
          } lg:transform-none lg:flex lg:z-auto`}
        >
          <Li onclick={()=> (setShow(!show))} to={"/"} className="text-primary" liText="Home" />
          <Li onclick={()=> (setShow(!show))} to={"/aboutus"} liText="About Us" iconName={<FaAngleDown />} />
          <Li onclick={()=> (setShow(!show))} to={"/products"} liText="Products" iconName={<FaAngleDown />} />
          <Li onclick={()=> (setShow(!show))} to={"/authorized"} liText="Authorized Partner" iconName={<FaAngleDown />} />
          <Li onclick={()=> (setShow(!show))} to={"/solutionservice"} liText="Solution & Service" iconName={<FaAngleDown />} />
          <Li onclick={()=> (setShow(!show))} to={"/gallery"} liText="Gallery" iconName={<FaAngleDown />} />
          <Li onclick={()=> (setShow(!show))} to={"/keyperson"} liText="Key Person Sales & Service" iconName={<FaAngleDown />} />
          <Li onclick={()=> (setShow(!show))} to={"/contact"} liText="Contact" iconName={<FaAngleDown />} />

          {/* Search Box */}
          <div className="search relative w-full lg:w-auto border rounded-xl overflow-hidden lg:ml-4 mt-1">
            <input
              className="lg:w-[150px] rounded-xl w-full lg:py-2 lg:px-5 px-3 outline-0 bg-white"
              type="text"
              placeholder="Search"
            />
            <FaSearch className="absolute top-1/2 -translate-y-1/2 lg:right-4 right-3 text-primary" />
          </div>
        </ul>

        {/* Mobile Menu Toggle Icon */}
        <div
          onClick={() => setShow(!show)} // Toggle mobile menu visibility
          className="flex justify-end lg:hidden cursor-pointer z-50"
        >
          <PiDotsNineBold className="text-3xl" />
        </div>
      </Container>
    </nav>
  );
};








