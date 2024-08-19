import React from "react";
import Container from "./layer/Container";
import TitleHeader from "./layer/TitleHeader";
import ProductItem from "./layer/ProductItem";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Arrival = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-5 h-16 w-16 rounded-full -translate-y-1/2 flex justify-center items-center text-white"
        style={{ ...style, display: "flex", background: "#979797" }}
        onClick={onClick}
      >
        <div>
          <FaArrowRight />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute z-10 left-5 top-1/2 -translate-y-1/2 h-16 w-16 rounded-full flex items-center justify-center text-white"
        style={{ ...style, display: "flex", background: "#979797" }}
        onClick={onClick}
      >
        <div>
          <FaArrowLeft />
        </div>
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [

      {
        breakpoint: 735,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
   
    ]
  };

  return (
    <div className=" md:my-20 my-2">
      <Container className="md:mb-12 mb-2">
        <TitleHeader className='text-sm' headerText="New Arrivals" />
      </Container>


      <Container className="max-w-[1640px]">
        <Slider {...settings}>
          <ProductItem
            className="w-full px-5 "
            pName="Add to Wish List"
            price="44"
            brand="Black"
            offer="10%"
            img="/product/product_1.jpg"
          />
          <ProductItem
            className="w-full px-5"
            pName="Add to Wish List"
            price="44"
            brand="Black"
            offer=""
            img="/product/product_2.jpg"
          />
          <ProductItem
            className="w-full px-5"
            pName="Add to Wish List"
            price="44"
            brand="Black"
            offer="New"
            img="/product/product_3.jpg"
          />
          <ProductItem
            className="w-full px-5"
            pName="Add to Wish List"
            price="44"
            brand="Black"
            offer="50%"
            img="/product/product_4.jpg"
          />
        </Slider>
      </Container>
    </div>
  );
};

export default Arrival;
