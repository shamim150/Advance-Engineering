
import React from "react";
import TitleHeader from "../layer/TitleHeader";
import Container from "../layer/Container";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      header: "Dryers and Parboiling",
      image: "/Products/Dryers_and_Parboiling.jpg",
      description:
        "High-efficiency dryers and parboiling systems designed for maximum throughput and energy savings in rice milling operations.",
    },
    {
      header: "Boiler",
      image: "/Products/Boiler.jpg",
      description:
        "Advanced boiler systems for industrial applications, converting fuel into heat for process industries and steam generation.",
    },
    {
      header: "Continuous Cooker",
      image: "/Products/Continuous_Cooker.jpg",
      description:
        "Efficient industrial-scale continuous cookers for high-speed processing, ensuring quality and consistency in large production.",
    },
    {
      header: "Furnace",
      image: "/Products/Furnace.jpg",
      description:
        "Modern furnace systems with advanced heat distribution, ideal for use in industrial settings requiring high-temperature processing.",
    },
    {
      header: "Flour Machinery",
      image: "/Products/Flour_Machinery.png",
      description:
        "Innovative flour machinery designed for precision milling, delivering high-quality output with enhanced automation features.",
    },
    {
      header: "Oil Mill Machinery with Refine System",
      image: "/Products/Parts.jpg",
      description:
        "State-of-the-art oil mill machinery paired with a refine system for efficient oil extraction and purification processes.",
    },
    
    
  ];

  return (
    <div className="bg-gray-50 py-20">
      <Container>
        {/* Page Header */}
        <TitleHeader
          className="text-center text-5xl font-extrabold text-gray-900 mb-6"
          headerText="Our Products"
        />
        <p className="text-center text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed">
          Discover our extensive range of cutting-edge machinery designed to meet the needs of industrial rice mills and related industries.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Section with Overlay */}
              <div className="relative h-56">
                <img
                  src={product.image}
                  alt={product.header}
                  className="w-full h-full object-cover transform group-hover:scale-90 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
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
              <div className="p-8 pt-0">
                <Link
                  href="#"
                  className="inline-block text-blue-400 hover:text-secondary font-medium hover:underline transition-colors"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;







