import React, { useEffect, useState } from "react";
import Container from "./layer/Container";
import Image from "./layer/Image";
import logo from "/Logo.png";
import Li from "./layer/Li";
import { PiDotsNineBold } from "react-icons/pi";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { products } from "./pages/Products";

export const Navbar = () => {
  const [show, setShow] = useState(false); // Manage the state of the mobile menu

  let [search, setSearch] = useState("");
  let [filterData, setFilterData] = useState([]);

  console.log(filterData);

  useEffect(() => {
    if (search === "") {
      filterData === "";
    } else {
      let searcData = products.filter(
        (item) => item?.header.toLowerCase().includes(search.toLowerCase())
        // console.log(item.title.toLowerCase().includes(search.toLowerCase()))
      );

      setFilterData(searcData);
    }
  }, [search]);

  return (
    <nav className="z-10 fixed w-full top-0 bg-slate-100 ">
      <Container className="relative flex items-center justify-between gap-5 xl:gap-0 xl:py-6 py-4 px-3 xl:px-0">
        {/* Logo */}
        <div className="flex xl:justify-center w-fit">
          <Image
            className="absolute top-1/2 xl:left-0 left-3 -translate-y-1/2 h-15 w-20"
            href="/"
            scr={logo}
            alt="Logo"
          />
        </div>

        {/* Menu items */}
        <ul
          className={`  text-center gap-1 md:gap-2  justify-between transition-transform duration-300 ease-in-out flex xl:flex-row flex-col bg-slate-300 xl:bg-transparent absolute top-[99%] left-0 xl:static w-full xl:w-auto p-2 xl:p-1 transform ${
            show ? "translate-x-0 z-40" : "translate-x-full"
          } xl:transform-none xl:flex xl:z-auto`}
        >
          <Li
            onclick={() => setShow(!show)}
            to={"/"}
            className="text-primary"
            liText="Home"
          />
          <Li
            onclick={() => setShow(!show)}
            to={"/aboutus"}
            liText="About Us"
            iconName={<FaAngleDown />}
          />
          <Li
            onclick={() => setShow(!show)}
            to={"/products"}
            liText="Products"
            iconName={<FaAngleDown />}
          />
          <Li
            onclick={() => setShow(!show)}
            to={"/authorized"}
            liText="Authorized Partner"
            iconName={<FaAngleDown />}
          />
          <Li
            onclick={() => setShow(!show)}
            to={"/solutionservice"}
            liText="Solution & Service"
            iconName={<FaAngleDown />}
          />
          <Li
            onclick={() => setShow(!show)}
            to={"/gallery"}
            liText="Gallery"
            iconName={<FaAngleDown />}
          />
          <Li
            onclick={() => setShow(!show)}
            to={"/keyperson"}
            liText="Key Person Sales & Service"
            iconName={<FaAngleDown />}
          />
          <Li
            onclick={() => setShow(!show)}
            to={"/contact"}
            liText="Contact"
            iconName={<FaAngleDown />}
          />

          {/* Search Box */}
          <div className="search relative w-full xl:w-auto border rounded-xl overflow-hidden xl:ml-4 mt-1 cursor-pointer">
            <input
              className="xl:w-[150px] rounded-xl w-full xl:py-2 xl:px-5 px-3 outline-0 bg-white"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-1/2 -translate-y-1/2 xl:right-4 right-3 text-primary" />
          </div>

          <div
            className={`absolute max-sm:top-[270px] max-h-[800px] overflow-hidden overflow-y-scroll top-32 left-1/2 -translate-x-1/2 mx-auto bg-gray-200 p-5 rounded-2xl max-w-full w-full  transition-all duration-500 ${
              search ? "" : "hidden"
            }`}
          >
            <div className="grid lg:grid-cols-4 grid-cols-1  gap-4  ">
              {filterData?.length > 0 ? (
                filterData.map((product, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-xl shadow-lg overflow-hidden "
                  >
                    {/* Image Section with Overlay */}
                    <div className="relative h-56">
                      <img
                        src={product.image}
                        alt={product.header}
                        className="h-full w-full object-contain transform "
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div> */}
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {product.header}
                      </h3>
                      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Call to Action */}
                    {/* <div className="p-8 pt-0">
                <Link
                  href="#"
                  className="inline-block text-blue-400 hover:text-secondary font-medium hover:underline transition-colors"
                >
                  Learn More &rarr;
                </Link>
              </div> */}
                  </div>
                ))
              ) : (
                <div className=" w-full h-full">
                  <p className="font-bold text-2xl text-red-400 text-center w-full">Product not found!</p>
                </div>
              )}
            </div>
          </div>
        </ul>

        {/* Mobile Menu Toggle Icon */}
        <div
          onClick={() => setShow(!show)} // Toggle mobile menu visibility
          className="flex justify-end xl:hidden cursor-pointer z-50"
        >
          <PiDotsNineBold className="text-3xl" />
        </div>
      </Container>
    </nav>
  );
};
