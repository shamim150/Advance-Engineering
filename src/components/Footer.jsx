import React from "react";
import Container from "./layer/Container";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import TitleHeader from "./layer/TitleHeader";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#f7f7f8]  pb-10">
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
              href="mailto:advanced_engrs@yahoo.com"
            >
              info@advancedengrs.com
            </a>

            <TitleHeader
              className="text-xl pt-3 text-secondary"
              headerText="Follow Us"
            />
            <div className="flex items-center gap-3">
              <Link
                className="p-2  bg-ptext rounded-full hover:bg-secondary transition-all duration-500"
                to="Advance Engineering"
                target="_blank"
              >
                <FaFacebook className="text-white size-6 " />
              </Link>
              <Link
                className="p-2  bg-ptext rounded-full hover:bg-secondary transition-all duration-500"
                to="/"
              >
                <AiOutlineInstagram className="text-white size-6 " />
              </Link>
              {/* <Link className="p-2  bg-ptext rounded-full hover:bg-secondary transition-all duration-500" to="/">
                <FaLinkedinIn className="text-white size-6  " />
              </Link> */}

              <a
                href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-ptext rounded-full hover:bg-secondary transition-all duration-500"
              >
                <FaLinkedinIn className="text-white size-6" />
              </a>
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
            <form className="bg-[#d0d0d6] py-5 px-4 rounded-xl space-y-3 shadow-2xl">
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

              <button className="relative inline-flex items-center justify-center px-6 py-3 font-medium transition-all bg-secondary text-white rounded-lg hover:bg-white hover:text-black duration-500">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
