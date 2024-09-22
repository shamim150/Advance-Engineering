
import React from "react";
import TitleHeader from "../layer/TitleHeader";
import Container from "../layer/Container";

const Products = () => {
  const products = [
    {
      header: "Dryers and Parboiling",
      image: "/Products/Dryers and Parboiling.webp",
      description:
        "High-efficiency dryers and parboiling systems designed for maximum throughput and energy savings in rice milling operations.",
    },
    {
      header: "Boiler",
      image: "/Products/boiler.webp",
      description:
        "Advanced boiler systems for industrial applications, converting fuel into heat for process industries and steam generation.",
    },
    {
      header: "Continuous Cooker",
      image: "/Products/Continuous Cooker.png",
      description:
        "Efficient industrial-scale continuous cookers for high-speed processing, ensuring quality and consistency in large production.",
    },
    {
      header: "Furnace",
      image: "/Products/Furnace.jpeg",
      description:
        "Modern furnace systems with advanced heat distribution, ideal for use in industrial settings requiring high-temperature processing.",
    },
    {
      header: "Flour Machinery",
      image: "/Products/Flour Machinery.jpeg",
      description:
        "Innovative flour machinery designed for precision milling, delivering high-quality output with enhanced automation features.",
    },
    {
      header: "Oil Mill Machinery with Refine System",
      image: "/Products/Oil Mill Machinery with Refine System.webp",
      description:
        "State-of-the-art oil mill machinery paired with a refine system for efficient oil extraction and purification processes.",
    },
    {
      header: "Rice Mill Machinery",
      image: "/Products/Rice Mill Machinery.jpg",
      description:
        "Advanced rice mill machinery ensuring optimal performance in cleaning, husking, whitening, and grading rice grains.",
    },
    {
      header: "Colour Sorter",
      image: "/Products/Colour Sorter.jpeg",
      description:
        "Precision color sorting machines for removing impurities and enhancing the quality of processed grains and products.",
    },
    {
      header: "Paddy Cleaner",
      image: "/Products/Paddy Cleaner.jpeg",
      description:
        "Efficient paddy cleaners that remove dust, stones, and other impurities, ensuring higher-quality output for milling.",
    },
    {
      header: "Feed Mill Machinery",
      image: "/Products/Feed Mill Machinery.jpg",
      description:
        "Modern feed mill machinery designed to process animal feed efficiently, ensuring precision and consistency in production.",
    },
    {
      header: "Grain Silo",
      image: "/Products/Grain Silo.jpeg",
      description:
        "Robust grain silos engineered for optimal storage conditions, preserving quality and reducing spoilage risks.",
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
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
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
              <div className="p-6 pt-0">
                <a
                  href="#"
                  className="inline-block text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;










// import React from "react";
// import TitleHeader from "../layer/TitleHeader";
// import Container from "../layer/Container";

// const Products = () => {
//   return (
//     <div>
//       <Container>
//         <div>
//           <TitleHeader
//             className="text-center"
//             headerText="Dryers and Parboiling"
//           />
//           <p className="text-center">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
//             recusandae eum asperiores rem, mollitia tempora corrupti voluptas
//             animi nemo est beatae tempore distinctio culpa voluptatum temporibus
//             voluptate alias nulla, delectus corporis ratione ipsam voluptates
//             magnam quibusdam doloribus. Rem, aperiam recusandae illo tempora
//             velit odio alias saepe esse non aliquid amet.
//           </p>
//           <div className="image flex justify-center items-center ">
//             <img src="/Products/Dryers and Parboiling.webp" alt="" />
//           </div>
//         </div>
//         <div>
//           <TitleHeader className="text-center" headerText="Boiler" />
//           <p className="text-center">
//             boiler, apparatus designed to convert a liquid to vapour. In a
//             conventional steam power plant, a boiler consists of a furnace in
//             which fuel is burned, surfaces to transmit heat from the combustion
//             products to the water, and a space where steam can form and collect.
//           </p>
//           <div className="image flex justify-center items-center mt-4">
//             <img src="/Products/boiler.webp" alt="" />
//           </div>
//         </div>

//         <div>
//           <TitleHeader className="text-center" headerText="Continuous Cooker" />
//           <p className="text-center">
//             boiler, apparatus designed to convert a liquid to vapour. In a
//             conventional steam power plant, a boiler consists of a furnace in
//             which fuel is burned, surfaces to transmit heat from the combustion
//             products to the water, and a space where steam can form and collect.
//           </p>
//           <div className="image flex justify-center items-center mt-4">
//             <img src="/Products/Continuous Cooker.png" alt="" />
//           </div>
//         </div>

  

//         <div>
//           <TitleHeader className="text-center" headerText="Furnace" />
//           <p className="text-center">
//             boiler, apparatus designed to convert a liquid to vapour. In a
//             conventional steam power plant, a boiler consists of a furnace in
//             which fuel is burned, surfaces to transmit heat from the combustion
//             products to the water, and a space where steam can form and collect.
//           </p>
//           <div className="image flex justify-center items-center mt-4">
//             <img src="/Products/Furnace.jpeg" alt="" />
//           </div>
//         </div>


//         <div>
//           <TitleHeader className="text-center" headerText="Flour Machinery" />
//           <p className="text-center">
//             boiler, apparatus designed to convert a liquid to vapour. In a
//             conventional steam power plant, a boiler consists of a furnace in
//             which fuel is burned, surfaces to transmit heat from the combustion
//             products to the water, and a space where steam can form and collect.
//           </p>
//           <div className="image flex justify-center items-center mt-4">
//             <img src="/Products/Flour Machinery.jpeg" alt="" />
//           </div>
//         </div>


//         <div>
//           <TitleHeader className="text-center" headerText="Oil Mill Machinery with Refine System" />
//           <p className="text-center">
//             boiler, apparatus designed to convert a liquid to vapour. In a
//             conventional steam power plant, a boiler consists of a furnace in
//             which fuel is burned, surfaces to transmit heat from the combustion
//             products to the water, and a space where steam can form and collect.
//           </p>
//           <div className="image flex justify-center items-center mt-4">
//             <img src="/Products/Oil Mill Machinery with Refine System.webp" alt="" />
//           </div>
//         </div>

//         <div>
//           <TitleHeader className="text-center" headerText="Rice Mill Machinery" />
//           <p className="text-center">
//             boiler, apparatus designed to convert a liquid to vapour. In a
//             conventional steam power plant, a boiler consists of a furnace in
//             which fuel is burned, surfaces to transmit heat from the combustion
//             products to the water, and a space where steam can form and collect.
//           </p>
//           <div className="image flex justify-center items-center mt-4">
//             <img src="/Products/Rice Mill Machinery.jpg" alt="" />
//           </div>
//         </div>

//         <div>
//           <TitleHeader className="text-center" headerText="Colour Sorter" />
//           <p className="text-center">
//             boiler, apparatus designed to convert a liquid to vapour. In a
//             conventional steam power plant, a boiler consists of a furnace in
//             which fuel is burned, surfaces to transmit heat from the combustion
//             products to the water, and a space where steam can form and collect.
//           </p>
//           <div className="image flex justify-center items-center mt-4">
//             <img src="/Products/Colour Sorter.jpeg" alt="" />
//           </div>
//         </div>
      
//         <div>
//           <TitleHeader className="text-center" headerText="Paddy Cleaner" />
//           <p className="text-center">
//             boiler, apparatus designed to convert a liquid to vapour. In a
//             conventional steam power plant, a boiler consists of a furnace in
//             which fuel is burned, surfaces to transmit heat from the combustion
//             products to the water, and a space where steam can form and collect.
//           </p>
//           <div className="image flex justify-center items-center mt-4">
//             <img src="/Products/Paddy Cleaner.jpeg" alt="" />
//           </div>
//         </div>
//         <div>
//           <TitleHeader className="text-center" headerText="Feed Mill Machinery" />
//           <p className="text-center">
//             boiler, apparatus designed to convert a liquid to vapour. In a
//             conventional steam power plant, a boiler consists of a furnace in
//             which fuel is burned, surfaces to transmit heat from the combustion
//             products to the water, and a space where steam can form and collect.
//           </p>
//           <div className="image flex justify-center items-center mt-4">
//             <img src="/Products/Feed Mill Machinery.jpg" alt="" />
//           </div>
//         </div>
//         <div>
//           <TitleHeader className="text-center" headerText="Grain Silo" />
//           <p className="text-center">
//             boiler, apparatus designed to convert a liquid to vapour. In a
//             conventional steam power plant, a boiler consists of a furnace in
//             which fuel is burned, surfaces to transmit heat from the combustion
//             products to the water, and a space where steam can form and collect.
//           </p>
//           <div className="image flex justify-center items-center mt-4">
//             <img src="/Products/Grain Silo.jpeg" alt="" />
//           </div>
//         </div>


//       </Container>
//     </div>
//   );
// };

// export default Products;
