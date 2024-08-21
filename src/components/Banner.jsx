import React, { useState } from 'react'
import Slider from "react-slick";
import Image from './layer/Image';


import { PiNumberTwoBold } from 'react-icons/pi';
import { FaTruck } from 'react-icons/fa';
import { FaArrowRotateLeft } from 'react-icons/fa6';




const Banner = () => {

    let [active, setActive] = useState(0)

    var settings = { 
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        // fade: true,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,

        appendDots: dots => (
            <div
              style={{
                // backgroundColor: "red",
                borderRadius: "10px",
                padding: "10px",
                position: 'absolute',
                top: "50%",
                left: "12%",
                transform: "translateY(-50%)",

              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div className={` transition-all duration-500 border-r-2 flex items-center text-[10px]  ${active == i ? "text-primary border-primary " : "text-transparent border-white"}`}
              style={{
                width: "22px",
                height:"30px",
                
              }}
            >
              0{i + 1}
            </div>
          ),

          beforeChange: (item,i)=> {
            setActive(i)
          },


          
          responsive: [
            {
              breakpoint: 680,
              settings: {
                appendDots: dots => (
                  <div
                    style={{
                      borderRadius: "10px",
                      padding: "10px",
                      position: 'absolute',
                      left: "50%",
                      bottom: '10px',
                      transform: "translateX(-50%)",
      
                    }}
                  >
                    <ul className='flex' style={{ margin: "0px" }}> {dots} </ul>
                  </div>
                ),
                customPaging: i => (
                  <div className={` transition-all duration-500 border-b-2 flex justify-center text-[10px]  ${active == i ? "text-primary border-primary " : "text-transparent border-white"}`}
                    style={{
                      width: "18px",
                      height:"18px",
                      
                      
                    }}
                  >
                    0{i + 1}
                  </div>
                ),
      
                beforeChange: (item,i)=> {
                  setActive(i)
                },
               
              }
            },

          ]



      };

      return (
        <div>
            <Slider {...settings}>
                <Image imageClass='w-full ' scr='/1.jpg'/>
                <Image imageClass='w-full ' scr='/2.jpg'/>
                <Image imageClass='w-full ' scr='/3.jpg' />
                <Image imageClass='w-full ' scr='/4.jpg' />
                <Image imageClass='w-full ' scr='/5.jpg' />
                <Image imageClass='w-full ' scr='/6.jpg' />
         
         </Slider>
    
        </div> 
        
      )
    }
    
    

 

export default Banner