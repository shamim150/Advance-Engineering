
import React from "react";
import Container from "./layer/Container";
import { Link } from "react-router-dom";
import { RiFacebookLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import TitleHeader from "./layer/TitleHeader";

const Footer = () => {
  return (
    <div className="bg-[#f7f7f8] relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 pt-10">
          {/* Column 1 */}
          <div className="col-span-2 space-y-4">
            <h2 className="font-bold text-primary text-xl font-DM leading-6">
              Advanced Engineers
            </h2>
            <p className="font-bold text-[#6D6D6D] text-sm">
              Head Office:- Rustom Plaza (1st Floor) Supari Patty, Naogaon-6500,
              Bangladesh
            </p>
            <p className="font-bold text-sm text-[#6D6D6D]">
              Dhaka Office:- Sector-09, Road-3F, House-18, Uttara, Dhaka-1230.
            </p>
            <a
              className="text-sm font-bold text-[#6D6D6D] block"
              href="tel:+8802588881523"
            >
              Tel: +8802588881523
            </a>
            <a
              className="text-sm font-bold text-[#6D6D6D] block"
              href="tel:+8801717507404"
            >
              Mobile: +8801717507404
            </a>
            <a
              className="text-sm font-bold text-[#6D6D6D] block"
              href="mailto:company.com"
            >
              company.com
            </a>

            <TitleHeader className="text-xl pt-5" headerText="Follow Us" />
            <div className="flex items-center gap-3">
              <Link to="Advance Engineering" target="_blank">
                <RiFacebookLine className="text-primary text-2xl" />
              </Link>
              <Link to="/">
                <AiOutlineInstagram className="text-primary text-2xl" />
              </Link>
              <Link to="/">
                <FaLinkedinIn className="text-[#373737] text-2xl" />
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-span-2 space-y-4">
            <h2 className="font-bold text-primary text-xl font-DM leading-6">
              About Us
            </h2>
            <ul className="space-y-2 text-[#6D6D6D] text-sm font-bold">
              <li>
                <Link to="/">Our Mission</Link>
              </li>
              <li>
                <Link to="/">Our Vision</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Sister Concern (Naogaon Impex)</Link>
              </li>
              <li>
                <Link to="/">Career and News</Link>
              </li>
              <li>
                <Link to="/">Managing Director</Link>
              </li>
              <li>
                <Link to="/">Message</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-span-2 space-y-4">
            <h2 className="font-bold text-primary text-xl font-DM leading-6">
              Quick Contact Us
            </h2>
            <form className="bg-[#d0d0d6] py-5 px-4 rounded-xl space-y-3">
              <div>
                <label
                  className="font-bold text-[#6D6D6D] inline-block w-[80px]"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  className="py-2 px-4 w-full rounded-lg"
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </div>

              <div>
                <label
                  className="font-bold text-[#6D6D6D] inline-block w-[80px]"
                  htmlFor="add"
                >
                  Address:
                </label>
                <input
                  className="py-2 px-4 w-full rounded-lg"
                  type="text"
                  id="add"
                  placeholder="Enter Your Address"
                />
              </div>

              <div>
                <label
                  className="font-bold text-[#6D6D6D] inline-block w-[80px]"
                  htmlFor="email"
                >
                  E-mail:
                </label>
                <input
                  className="py-2 px-4 w-full rounded-lg"
                  type="email"
                  id="email"
                  placeholder="Enter Your E-mail"
                />
              </div>

              <div>
                <label className="font-bold text-[#6D6D6D]" htmlFor="text">
                  Requirement:
                </label>
                <textarea
                  className="w-full h-[50px] py-2 px-4 rounded-lg"
                  id="text"
                  placeholder="Enter your requirement"
                ></textarea>
              </div>

              <button className="relative inline-flex items-center justify-center px-6 py-3 font-medium transition-all bg-indigo-100 rounded-lg hover:bg-white group">
               
                <span className="relative z-10 text-base font-semibold text-black transition-all group-hover:text-white">
                  Submit
                </span>
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;















































// import React from "react";
// import Container from "./layer/Container";
// import { Link } from "react-router-dom";
// import { RiFacebookLine } from "react-icons/ri";
// import { AiOutlineInstagram } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import TitleHeader from "./layer/TitleHeader";

// const Footer = () => {
//   return (
//     <div className="bg-[#f7f7f8] relative">

      
    
      

//       <Container>
//         <div className="grid grid-cols-6 grid-rows-1 pt-14">
//           <div className="col-span-2">
//             <h2 className="font-bold text-primary text-xl font-DM leading-6 mb-4">
//               Advance Engineering
//             </h2>
//             <p className="font-bold text-[#6D6D6D]  text-sm mb-2">
//               Head Office:- Rustom Plaza (1st Floor) Supari Patty, Naogaon-6500,
//               Bangladesh
//             </p>
//             <p className="font-bold text-sm mb-2 text-[#6D6D6D]  ">
//               Dhaka Office:- Sector-09, Road-3F, House-18, Uttara, Dhaka-1230.
//             </p>

//             <Link className=" text-sm font-bold font-DM block leading-7 text-[#6D6D6D] "></Link>

//             <a
//               className="text-sm font-bold font-DM block leading-7 text-[#6D6D6D]"
//               href="tel:+8802588881523"
//             >
//               Tell:- +8802588881523
//             </a>

//             <a
//               className="text-sm font-bold font-DM block leading-7 text-[#6D6D6D]"
//               href="tel:+8801717507404"
//             >
//               Mobile:- +8801717507404
//             </a>

//             <a
//               className="text-sm font-bold font-DM block leading-7 text-[#6D6D6D]"
//               href="mailto:company.com"
//             >
//               company.com
//             </a>

//             <TitleHeader className="text-xl pt-5" headerText="Folow Us" />

//             <div className="">
//               <div className="icon flex items-center gap-3">
//                 <Link to="Advance Engineering" target="_blank">
//                   {" "}
//                   <RiFacebookLine className="text-primary font-bold" />{" "}
//                 </Link>
//                 <Link>
//                   {" "}
//                   <AiOutlineInstagram className="text-primary" />{" "}
//                 </Link>
//                 <Link>
//                   {" "}
//                   <FaLinkedinIn className="text-[#373737]" />{" "}
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="col-span-2 ml-20 ">
//             <h2 className="font-bold text-primary text-xl font-DM leading-6 mb-4">
//               About Us
//             </h2>
//             <ul className="space-y-1.5 *:text-[#6D6D6D] *:text-sm *:leading-6 *:font-DM font-bold">
//               <li>
//                 <Link>Our Mission</Link>
//               </li>
//               <li>
//                 <Link>Our Vission</Link>
//               </li>
//               <li>
//                 <Link>Privecy Policy</Link>
//               </li>
//               <li>
//                 <Link>Sister Concern (Noagoan Impex)</Link>
//               </li>
//               <li>
//                 <Link>Carer and news</Link>
//               </li>
//               <li>
//                 <Link>Managing Director</Link>
//               </li>
//               <li>
//                 <Link>Massage</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="col-span-2 ">
//             <h2 className="font-bold text-primary font-DM leading-6 text-xl mb-4">
//               Quick Contact Us
//             </h2>
//             <form className="bg-[#d0d0d6] py-5 px-5 rounded-xl">
//               <label
//                 className="font-bold text-[#6D6D6D] inline-block w-[80px]"
//                 htmlFor="name"
//               >
//                 Name:-
//               </label>
//               <input
//                 className="py-2 px-5 mb-2 rounded-lg"
//                 type="text"
//                 id="name"
//                 placeholder="Enter Your Name"
//               />
//               <br />
//               <label
//                 className="font-bold text-[#6D6D6D] inline-block w-[80px]"
//                 htmlFor="add"
//               >
//                 Address:-
//               </label>
//               <input
//                 className="py-2 px-5 mb-2 rounded-lg"
//                 type="text"
//                 id="add"
//                 placeholder="Enter Your Address"
//               />
//               <br />
//               <label
//                 className="font-bold text-[#6D6D6D] inline-block w-[80px]"
//                 htmlFor="email"
//               >
//                 E-mail:-
//               </label>
//               <input
//                 className="py-2 px-5 mb-2 rounded-lg"
//                 type="email"
//                 id="email"
//                 placeholder="Enter Your E-mail"
//               />
//               <br />
//               <label className="font-bold text-[#6D6D6D]" htmlFor="text">
//                 Requirement:-
//               </label>{" "}
//               <br />
//               <textarea
//                 className="w-[300px] h-[50px] rounded-lg"
//                 name=""
//                 id="text"
//               ></textarea>{" "}
//               <br />
//               <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group">
//                 <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9  group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
//                 <span className="relative w-full text-base font-semibold text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white ">
//                   Submit
//                 </span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Footer;
