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
    <nav className="relative z-10">
      <Container className="relative flex items-center justify-between md:justify-center gap-5 md:gap-0 md:py-6 py-4 px-3 md:px-0">
        
        {/* Logo */}
        <div className="flex md:justify-center">
          <Image
            className="absolute top-1/2 md:left-0 left-3 -translate-y-1/2 h-15 w-20"
            href="/"
            scr={logo}
            alt="Logo"
          />
        </div>

        {/* Menu items */}
        <ul
          className={`text-center transition-transform duration-300 ease-in-out flex md:flex-row flex-col bg-slate-300 md:bg-transparent absolute top-full left-0 md:static w-full md:w-auto p-2 md:p-0 transform ${
            show ? "translate-x-0 z-40" : "-translate-x-full"
          } md:transform-none md:flex md:z-auto`}
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
          <div className="search relative w-full md:w-auto border rounded-xl overflow-hidden md:ml-4 mt-1">
            <input
              className="md:w-[150px] rounded-xl w-full md:py-2 md:px-5 px-3 outline-0 bg-white"
              type="text"
              placeholder="Search"
            />
            <FaSearch className="absolute top-1/2 -translate-y-1/2 md:right-5 right-3 text-primary" />
          </div>
        </ul>

        {/* Mobile Menu Toggle Icon */}
        <div
          onClick={() => setShow(!show)} // Toggle mobile menu visibility
          className="flex justify-end md:hidden cursor-pointer z-50"
        >
          <PiDotsNineBold className="text-3xl" />
        </div>
      </Container>
    </nav>
  );
};









// import React, { useState } from "react";
// import Container from "./layer/Container";
// import Image from "./layer/Image";
// import logo from "/Logo.png";
// import Li from "./layer/Li";
// import { PiDotsNineBold } from "react-icons/pi";
// import { FaAngleDown, FaSearch } from "react-icons/fa";

// export const Navbar = () => {
//   const [show, setShow] = useState(false); // Initialize state

//   return (
//     <nav className="overflow-hidden">
//       <Container className="relative flex items-center justify-between md:justify-center gap-5 md:gap-0 md:py-6 py-4 px-3 md:px-0">
        
//         {/* Logo */}
//         <div className="flex md:justify-center">
//           <Image
//             className="absolute top-1/2 md:left-0 left-3 -translate-y-1/2 h-15 w-20"
//             href="/"
//             scr={logo}
//             alt="Logo"
//           />
//         </div>

//         {/* Menu items */}
//         <ul
//           className={`transition-all duration-300 md:flex md:flex-row flex-col bg-slate-300 md:bg-transparent absolute top-full left-0 md:static w-full md:w-auto p-2 md:p-0 ${
//             show ? "block" : "hidden"
//           } md:block`}
//         >
//           <Li to={"/"} className="text-primary" liText="Home" />
//           <Li to={"/aboutus"} liText="About Us" iconName={<FaAngleDown />} />
//           <Li to={"/products"} liText="Products" iconName={<FaAngleDown />} />
//           <Li to={"/authorized"} liText="Authorized Partner" iconName={<FaAngleDown />} />
//           <Li to={"/solutionservice"} liText="Solution & Service" iconName={<FaAngleDown />} />
//           <Li to={"/gallery"} liText="Gallery" iconName={<FaAngleDown />} />
//           <Li to={"/keyperson"} liText="Key Person Sales & Service" iconName={<FaAngleDown />} />
//           <Li to={"/contact"} liText="Contact" iconName={<FaAngleDown />} />

//           {/* Search Box */}
//           <div className="search relative w-full md:w-auto rounded-xl overflow-hidden ml-4">
//             <input
//               className="md:w-[150px] rounded-xl w-full py-2 md:px-5 px-3 outline-0 bg-white"
//               type="text"
//               placeholder="Search"
//             />
//             <FaSearch className="absolute top-1/2 -translate-y-1/2 md:right-5 right-3 text-primary" />
//           </div>
//         </ul>

//         {/* Mobile Menu Toggle Icon */}
//         <div
//           onClick={() => setShow(!show)} // Toggle show state on click
//           className="flex md:hidden cursor-pointer"
//         >
//           <PiDotsNineBold className="text-3xl" />
//         </div>
//       </Container>
//     </nav>
//   );
// };

