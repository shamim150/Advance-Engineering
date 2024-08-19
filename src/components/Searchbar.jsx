import React, { useEffect, useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import Container from "./layer/Container";
import { FaSearch } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import Li from "./layer/Li";
import { IoCloseSharp } from "react-icons/io5";
import Button from "./layer/Button";

const Searchbar = () => {
  let [show, setShow] = useState(false);

  let [cart, setCart] = useState(false);

  let [login, setLogin] = useState(false);

  let [accesories, setAccesories] = useState(false);

  let [furniture, setFurniture] = useState(false);

  let [electronics, setElectronics] = useState(false);

  let [cloths, setCloths] = useState(false);

  let [bags, setBags] = useState(false);

  let [home, setHome] = useState(false);

  return (
    <section className="bg-[#F5F5F3] md:py-6 py-3 ">
      <Container className="relative flex justify-between items-center px-3 md:px-0 gap-3 md:gap-0">
        <div
          onClick={() => setShow(!show)}
          className="catagory flex items-center gap-x-2.5 cursor-pointer"
        >
          <GiHamburgerMenu />
          <p className="font-DM text-primary hidden md:block">
            Shop by Category
          </p>
        </div>

        {show && (
          <ul className="catddm absolute left-0 top-full bg-primary z-10  md:w-[263px] w-[250px]">
            <Li
              onclick={() => {
                setAccesories(!accesories)
                setFurniture(false)
                setElectronics(false)
                setCloths(false)
                setBags(false)
                setHome(false)
              }}
              className=" md:w-full block bg-primary md:px-5  md:py-4 px-2 py-0 text-white/70 hover:text-white md:hover:pl-[31px] border-b border-[#2D2D2D] group md:text-[16px] text-[14px]"
              liText="Accesories"
            >
              <div
                className={`static md:absolute md:group-hover:flex md:gap-12 gap-5 md:text-[16px] text-[12px] left-full top-0 bg-white h-full text-nowrap md:hidden md:px-10 px-2 py-0 md:py-8 flex-wrap md:flex-nowrap  ${
                  accesories ? "flex" : "hidden"
                }`}
              >
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] md:mb-2 -mb-1 text-[14px]">
                    Phones
                  </h2>
                  <li className="text-[#767676] font-DM">Phone 1</li>
                  <li className="text-[#767676] font-DM ">Phone 2</li>
                  <li className="text-[#767676] font-DM ">Phone 3</li>
                  <li className="text-[#767676] font-DM ">Phone 4</li>
                  <li className="text-[#767676] font-DM ">Phone 5</li>
                  <li className="text-[#767676] font-DM ">Phone 6</li>
                  <li className="text-[#767676] font-DM ">Phone 7</li>
                </ul>
                <ul className="flex flex-col  md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM  md:text-[16px] md:mb-2 -mb-1 text-[14px]">
                    Computers
                  </h2>
                  <li className="text-[#767676] font-DM ">Computers 1</li>
                  <li className="text-[#767676] font-DM ">Computers 2</li>
                  <li className="text-[#767676] font-DM ">Computers 3</li>
                  <li className="text-[#767676] font-DM ">Computers 4</li>
                  <li className="text-[#767676] font-DM ">Computers 5</li>
                  <li className="text-[#767676] font-DM ">Computers 6</li>
                  <li className="text-[#767676] font-DM ">Computers 7</li>
                </ul>
                <ul className="flex flex-col  md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] md:mb-2 -mb-1 text-[14px]">
                    Smart watches
                  </h2>
                  <li className="text-[#767676] font-DM ">Smart watches 1</li>
                  <li className="text-[#767676] font-DM ">Smart watches 2</li>
                  <li className="text-[#767676] font-DM ">Smart watches 3</li>
                  <li className="text-[#767676] font-DM ">Smart watches 4</li>
                  <li className="text-[#767676] font-DM ">Smart watches 5</li>
                  <li className="text-[#767676] font-DM ">Smart watches 6</li>
                  <li className="text-[#767676] font-DM ">Smart watches 7</li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] md:mb-2 -mb-1 text-[14px]">
                    Cameras
                  </h2>
                  <li className="text-[#767676] font-DM ">Cameras 1</li>
                  <li className="text-[#767676] font-DM ">Cameras 2</li>
                  <li className="text-[#767676] font-DM ">Cameras 3</li>
                  <li className="text-[#767676] font-DM ">Cameras 4</li>
                  <li className="text-[#767676] font-DM ">Cameras 5</li>
                  <li className="text-[#767676] font-DM ">Cameras 6</li>
                  <li className="text-[#767676] font-DM ">Cameras 7</li>
                </ul>
              </div>
            </Li>
            <Li
              onclick={() =>{ setFurniture(!furniture)
                setAccesories(false)
                setElectronics(false)
                setCloths(false)
                setBags(false)
                setHome(false)

              }}
              className=" md:w-full block bg-primary md:px-5 md:py-4 px-2 py-0  text-white/70 hover:text-white md:hover:pl-[31px] border-b border-[#2D2D2D] group md:[text-16px] text-[14px] "
              liText="Furniture"
            >
              <div
                className={`static md:absolute md:group-hover:flex md:gap-12 gap-5 md:text-[16px] text-[12px] left-full top-0 bg-white h-full text-nowrap md:hidden md:px-10 px-2 md:py-8 py-0 flex-wrap md:flex-nowrap ${
                  furniture ? "flex" : "hidden"
                }`}
              >
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1 ">
                    Phones
                  </h2>
                  <li className="text-[#767676] font-DM ">Phone</li>
                  <li className="text-[#767676] font-DM ">Phone</li>
                  <li className="text-[#767676] font-DM ">Phone</li>
                  <li className="text-[#767676] font-DM ">Phone</li>
                  <li className="text-[#767676] font-DM ">Phone</li>
                  <li className="text-[#767676] font-DM ">Phone</li>
                  <li className="text-[#767676] font-DM ">Phone</li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1 ">
                    Computers
                  </h2>
                  <li className="text-[#767676] font-DM ">Computers</li>
                  <li className="text-[#767676] font-DM ">Computers</li>
                  <li className="text-[#767676] font-DM ">Computers</li>
                  <li className="text-[#767676] font-DM ">Computers</li>
                  <li className="text-[#767676] font-DM ">Computers</li>
                  <li className="text-[#767676] font-DM ">Computers</li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1 ">
                    Smart watches
                  </h2>
                  <li className="text-[#767676] font-DM ">Smart watches</li>
                  <li className="text-[#767676] font-DM ">Smart watches</li>
                  <li className="text-[#767676] font-DM ">Smart watches</li>
                  <li className="text-[#767676] font-DM ">Smart watches</li>
                  <li className="text-[#767676] font-DM ">Smart watches</li>
                  <li className="text-[#767676] font-DM ">Smart watches</li>
                  <li className="text-[#767676] font-DM ">Smart watches</li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1 ">
                    Cameras
                  </h2>
                  <li className="text-[#767676] font-DM ">Cameras</li>
                  <li className="text-[#767676] font-DM ">Cameras</li>
                  <li className="text-[#767676] font-DM ">Cameras</li>
                  <li className="text-[#767676] font-DM ">Cameras</li>
                  <li className="text-[#767676] font-DM ">Cameras</li>
                  <li className="text-[#767676] font-DM ">Cameras</li>
                  <li className="text-[#767676] font-DM ">Cameras</li>
                </ul>
              </div>
            </Li>

            <Li
              onclick={() => {setElectronics(!electronics)
                              setAccesories(false)
                              setFurniture(false)
                              setCloths(false)
                              setBags(false)
                              setHome(false)

              }}
              className=" md:w-full block bg-primary md:px-5 md:py-4 px-2 py-0 md:text-[16px] text-[14px] text-white/70 hover:text-white md:hover:pl-[31px] border-b border-[#2D2D2D] group"
              liText="Electronics"
            >
              <div
                className={`static md:absolute md:group-hover:flex md:gap-12 gap-2 left-full top-0 bg-white h-full text-nowrap md:hidden md:px-10  md:py-8 px-2  py-0 flex-wrap md:flex-nowrap md:text-[16px] text-[12px] ${
                  electronics ? "flex" : "hidden"
                }`}
              >
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Phones
                  </h2>
                  <li className="text-[#767676] font-DM ">Phone 1</li>
                  <li className="text-[#767676] font-DM ">Phone 2</li>
                  <li className="text-[#767676] font-DM ">Phone 3</li>
                  <li className="text-[#767676] font-DM ">Phone 4</li>
                  <li className="text-[#767676] font-DM ">Phone 5</li>
                  <li className="text-[#767676] font-DM ">Phone 6</li>
                  <li className="text-[#767676] font-DM ">Phone 7</li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM  md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Computers
                  </h2>
                  <li className="text-[#767676] font-DM ">Computers 1</li>
                  <li className="text-[#767676] font-DM ">Computers 2</li>
                  <li className="text-[#767676] font-DM ">Computers 3</li>
                  <li className="text-[#767676] font-DM ">Computers 4</li>
                  <li className="text-[#767676] font-DM ">Computers 5</li>
                  <li className="text-[#767676] font-DM ">Computers 6</li>
                  <li className="text-[#767676] font-DM ">Computers 7</li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM  md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Smart watches
                  </h2>
                  <li className="text-[#767676] font-DM ">Smart watches 1</li>
                  <li className="text-[#767676] font-DM ">Smart watches 2</li>
                  <li className="text-[#767676] font-DM ">Smart watches 3</li>
                  <li className="text-[#767676] font-DM ">Smart watches 4</li>
                  <li className="text-[#767676] font-DM ">Smart watches 5</li>
                  <li className="text-[#767676] font-DM ">Smart watches 6</li>
                  <li className="text-[#767676] font-DM ">Smart watches 7</li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM  md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Cameras
                  </h2>
                  <li className="text-[#767676] font-DM ">Cameras 1</li>
                  <li className="text-[#767676] font-DM ">Cameras 2</li>
                  <li className="text-[#767676] font-DM ">Cameras 3</li>
                  <li className="text-[#767676] font-DM ">Cameras 4</li>
                  <li className="text-[#767676] font-DM ">Cameras 5</li>
                  <li className="text-[#767676] font-DM ">Cameras 6</li>
                  <li className="text-[#767676] font-DM ">Cameras 7</li>
                </ul>
              </div>
            </Li>
            <Li onclick={()=> {setCloths(!cloths)
                            setAccesories(false)
                            setFurniture(false)
                            setElectronics(false)
                            setBags(false)
                            setHome(false)
                              
            }}

              className=" md:w-full block bg-primary md:px-5 md:py-4 px-2 py-0 text-white/70 hover:text-white md:hover:pl-[31px] border-b border-[#2D2D2D] group md:text-[16px] text-[14px]"
              liText="Clothes"
            >
              <div className={`static md:absolute md:group-hover:flex md:gap-12 gap-5 md:text-[14px] text-[12px] left-full top-0 bg-white h-full text-nowrap md:hidden md:px-10 md:py-8 px-2 py-0 flex-wrap md:flex-nowrap ${cloths? "flex" : "hidden"}`}>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Phones
                  </h2>
                  <li className="text-[#767676] font-DM ">BD 1</li>
                  <li className="text-[#767676] font-DM ">BD 2</li>
                  <li className="text-[#767676] font-DM ">BD 3</li>
                  <li className="text-[#767676] font-DM ">BD 4</li>
                  <li className="text-[#767676] font-DM ">BD 5</li>
                  <li className="text-[#767676] font-DM ">BD 6</li>
                  <li className="text-[#767676] font-DM ">BD 7</li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Computers
                  </h2>
                  <li className="text-[#767676] font-DM ">CD 1</li>
                  <li className="text-[#767676] font-DM ">CD 2</li>
                  <li className="text-[#767676] font-DM ">CD 3</li>
                  <li className="text-[#767676] font-DM ">CD 4</li>
                  <li className="text-[#767676] font-DM ">CD 5</li>
                  <li className="text-[#767676] font-DM ">CD 6</li>
                  <li className="text-[#767676] font-DM ">CD 7</li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Smart watches
                  </h2>
                  <li className="text-[#767676] font-DM ">SW 1</li>
                  <li className="text-[#767676] font-DM ">SW 2</li>
                  <li className="text-[#767676] font-DM ">SW 3</li>
                  <li className="text-[#767676] font-DM ">SW 4</li>
                  <li className="text-[#767676] font-DM ">SW 5</li>
                  <li className="text-[#767676] font-DM ">SW 6</li>
                  <li className="text-[#767676] font-DM ">SW 7</li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Cameras
                  </h2>
                  <li className="text-[#767676] font-DM ">Cam 1</li>
                  <li className="text-[#767676] font-DM ">Cam 2</li>
                  <li className="text-[#767676] font-DM ">Cam 3</li>
                  <li className="text-[#767676] font-DM ">Cam 4</li>
                  <li className="text-[#767676] font-DM ">Cam 5</li>
                  <li className="text-[#767676] font-DM ">Cam 6</li>
                  <li className="text-[#767676] font-DM ">Cam 7</li>
                </ul>
              </div>
            </Li>

            <Li onclick={()=> {setBags(!bags)
                       setAccesories(false)
                       setFurniture(false)
                       setElectronics(false)
                       setCloths(false)
                       setHome(false)
            }}
              className=" md:w-full block bg-primary md:px-5 md:py-4 px-2 py-0 text-white/70 hover:text-white md:hover:pl-[31px] border-b border-[#2D2D2D] group md:text-[16px] text-[14px]"
              liText="Bags"
            >
              <div className={`static md:absolute md:group-hover:flex md:gap-12 gap-5 left-full top-0 bg-white h-full text-nowrap md:hidden md:px-10 md:py-8 px-2 py-0 flex-wrap md:flex-nowrap md:text-[14px] text-[12px] ${bags? "flex" : "hidden" } `}>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Phones
                  </h2>
                  <li className="text-[#767676] font-DM ">Phone 1</li>
                  <li className="text-[#767676] font-DM ">Phone 2</li>
                  <li className="text-[#767676] font-DM ">Phone 3</li>
                  <li className="text-[#767676] font-DM ">Phone 4</li>
                  <li className="text-[#767676] font-DM ">Phone 5</li>
                  <li className="text-[#767676] font-DM ">Phone 6</li>
                  <li className="text-[#767676] font-DM ">Phone 7</li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Computers
                  </h2>
                  <li className="text-[#767676] font-DM ">Computers 1</li>
                  <li className="text-[#767676] font-DM ">Computers 2</li>
                  <li className="text-[#767676] font-DM ">Computers 3</li>
                  <li className="text-[#767676] font-DM ">Computers 4</li>
                  <li className="text-[#767676] font-DM ">Computers 5</li>
                  <li className="text-[#767676] font-DM ">Computers 6</li>
                  <li className="text-[#767676] font-DM ">Computers 7</li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Smart watches
                  </h2>
                  <li className="text-[#767676] font-DM ">Smart watches 1</li>
                  <li className="text-[#767676] font-DM ">Smart watches 2</li>
                  <li className="text-[#767676] font-DM ">Smart watches 3</li>
                  <li className="text-[#767676] font-DM ">Smart watches 4</li>
                  <li className="text-[#767676] font-DM ">Smart watches 5</li>
                  <li className="text-[#767676] font-DM ">Smart watches 6</li>
                  <li className="text-[#767676] font-DM ">Smart watches 7</li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Cameras
                  </h2>
                  <li className="text-[#767676] font-DM ">Cameras 1</li>
                  <li className="text-[#767676] font-DM ">Cameras 2</li>
                  <li className="text-[#767676] font-DM ">Cameras 3</li>
                  <li className="text-[#767676] font-DM ">Cameras 4</li>
                  <li className="text-[#767676] font-DM ">Cameras 5</li>
                  <li className="text-[#767676] font-DM ">Cameras 6</li>
                  <li className="text-[#767676] font-DM ">Cameras 7</li>
                </ul>
              </div>
            </Li>
            <Li onclick={()=>{ setHome(!home)
                       setAccesories(false)
                       setFurniture(false)
                       setElectronics(false)
                       setCloths(false)
                       setBags(false)
                   
            }}
              className=" md:w-full block bg-primary md:px-5 md:py-4 px-2 py-0 text-white/70 hover:text-white md:hover:pl-[31px] border-b border-[#2D2D2D] group md:text-[16px] text-[14px]"
              liText="Home appliances"
            >
              <div className={`static md:absolute md:group-hover:flex md:gap-12 gap-5 left-full top-0 bg-white h-full text-nowrap md:hidden md:px-10 md:py-8  px-2 py-0 flex-wrap md:flex-nowrap md:text-[14px] text-[12px] ${home? "flex" : "hidden"}`}>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Phones
                  </h2>
                  <li className="text-[#767676] font-DM ">CLock 1</li>
                  <li className="text-[#767676] font-DM ">CLock 2</li>
                  <li className="text-[#767676] font-DM ">CLock 3</li>
                  <li className="text-[#767676] font-DM ">CLock 4</li>
                  <li className="text-[#767676] font-DM ">CLock 5</li>
                  <li className="text-[#767676] font-DM ">CLock 6</li>
                  <li className="text-[#767676] font-DM ">CLock 7</li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Computers
                  </h2>
                  <li className="text-[#767676] font-DM ">Water 1</li>
                  <li className="text-[#767676] font-DM ">Water 2</li>
                  <li className="text-[#767676] font-DM ">Water 3</li>
                  <li className="text-[#767676] font-DM ">Water 4</li>
                  <li className="text-[#767676] font-DM ">Water 5</li>
                  <li className="text-[#767676] font-DM ">Water 6</li>
                  <li className="text-[#767676] font-DM ">Water 7</li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Smart watches
                  </h2>
                  <li className="text-[#767676] font-DM ">Cup 1</li>
                  <li className="text-[#767676] font-DM ">Cup 2</li>
                  <li className="text-[#767676] font-DM ">Cup 3</li>
                  <li className="text-[#767676] font-DM ">Cup 4</li>
                  <li className="text-[#767676] font-DM ">Cup 5</li>
                  <li className="text-[#767676] font-DM ">Cup 6</li>
                  <li className="text-[#767676] font-DM ">Cup 7</li>
                </ul>
                <ul className="flex flex-col md:gap-3 gap-2">
                  <h2 className="text-primary font-bold font-DM md:text-[16px] text-[14px] md:mb-2 -mb-1">
                    Cameras
                  </h2>
                  <li className="text-[#767676] font-DM ">Tea 1</li>
                  <li className="text-[#767676] font-DM ">Tea 2</li>
                  <li className="text-[#767676] font-DM ">Tea 3</li>
                  <li className="text-[#767676] font-DM ">Tea 4</li>
                  <li className="text-[#767676] font-DM ">Tea 5</li>
                  <li className="text-[#767676] font-DM ">Tea 6</li>
                </ul>
              </div>
            </Li>
          </ul>
        )}

        <div className="serach relative w-full md:w-auto ">
          <input
            className="md:w-[601px] w-full md:py-4 py-2 md:px-5 px-3 outline-0 bg-white"
            type="text"
            placeholder="Search Products"
          />

          <FaSearch className="absolute top-1/2 -translate-y-1/2 md:right-5 right-3 text-primary" />
        </div>

        {/*============================================ Account part===================================== */}
        <div className="account hidden md:flex gap-10  ">
          <div
            onClick={() => {setLogin(!login)
                            setCart(false)
                            
            }}
            className="left flex items-center gap-3 cursor-pointer"
          >
            <IoIosPerson />
            <IoMdArrowDropdown />
          </div>
          <div onClick={() => {setCart(!cart)
                              setLogin(false)
          }} className="right cursor-pointer">
            <FaShoppingCart />
          </div>

          {cart && (
            <div className="cart z-10 w-[360px] h-28 absolute right-0 top-full ">
              <div className="top  flex justify-between items-center bg-[#F5F5F3]">
                <div className="image flex items-center gap-5 p-5 ">
                  <img className="w-20 h-20 bg-[#D8D8D8]" src="" alt="" />
                  <div className="text font-DM text-base font-bold">
                    <p className="name">Black Smart Watch</p>
                    <p className="price">$44.00 </p>
                  </div>
                </div>
                <div className="image">
                  <IoCloseSharp />
                </div>
              </div>

              <div className="bottom  p-5">
                <p className="mb-3 text-[#767676] font-DM text-base">
                  Subtotal: <b className="text-black">$44.00</b>
                </p>
                <div className="flex gap-5">
                  <Button
                    className="font-DM text-base font-bold"
                    ButtonText="View Card"
                  />
                  <Button
                    className="font-DM text-base font-bold"
                    ButtonText="Checkout"
                  />
                </div>
              </div>
            </div>
          )}

          {login && (
            <div className="z-10 absolute w-[200px] bg-white top-full right-[58px] flex flex-col">
              <Button
                className="!w-full bg-black text-white"
                ButtonText="My Account"
              />
              <Button className="!w-full " ButtonText="Log Out" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Searchbar;
