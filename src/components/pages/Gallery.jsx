import React, { useState } from "react";
import TitleHeader from "../layer/TitleHeader";
import Container from "../layer/Container";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("showAll");

  const images = {
    showAll: [
      // Add URLs for images
      { src: "/Gallery/gallery_1.jpg", alt: "Image 1", caption: "High-Performance Rice Mill" },
      { src: "/Gallery/gallery_2.jpg", alt: "Image 1", caption: "High-Performance Rice Mill" },
      { src: "/Gallery/gallery_3.jpg", alt: "Image 1", caption: "High-Performance Rice Mill" },
      { src: "/Gallery/gallery_4.jpg", alt: "Image 1", caption: "High-Performance Rice Mill" },
      { src: "/Gallery/gallery_5.jpg", alt: "Image 1", caption: "High-Performance Rice Mill" },
      { src: "/Gallery/gallery_6.jpg", alt: "Image 1", caption: "High-Performance Rice Mill" },
      { src: "/Gallery/gallery_7.jpg", alt: "Image 1", caption: "High-Performance Rice Mill" },
      { src: "/Gallery/gallery_8.jpg", alt: "Image 1", caption: "High-Performance Rice Mill" },
      { src: "/Gallery/gallery_9.jpg", alt: "Image 1", caption: "High-Performance Rice Mill" },
      { src: "/Gallery/gallery_10.jpg", alt: "Image 1", caption: "High-Performance Rice Mill" },
      { src: "/Gallery/gallery_11.jpg", alt: "Image 1", caption: "High-Performance Rice Mill" },
      { src: "/Gallery/gallery_12.jpg", alt: "Image 1", caption: "High-Performance Rice Mill" },
      { src: "/Gallery/gallery_13.jpg", alt: "Image 1", caption: "High-Performance Rice Mill" },
  
    
    ],
    exhibition: [
      // Add URLs for exhibition images
      { src: "/gallery/exhibition1.jpg", alt: "Exhibition 1", caption: "Exhibition at XYZ Fair" },
      { src: "/gallery/exhibition2.jpg", alt: "Exhibition 2", caption: "Showcasing Innovations" },
    ],
    awards: [
      // Add URLs for awards images
      { src: "/gallery/award1.jpg", alt: "Award 1", caption: "Best Machinery Award 2023" },
      { src: "/gallery/certificate1.jpg", alt: "Certificate 1", caption: "ISO Certification" },
    ],
  };

  return (
    <div className="bg-gray-100 py-20">
      <Container>
        <TitleHeader
          className="text-center text-5xl font-extrabold text-gray-900 mb-6"
          headerText="Gallery"
        />
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
          Explore our gallery showcasing our cutting-edge rice mill machinery, participation in exhibitions, and our prestigious awards and certificates. Each image tells a story of innovation and excellence in engineering.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-8">
          {["showAll", "exhibition", "awards"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeTab === tab ? "bg-green-600 text-white" : "bg-white text-gray-700"
              } shadow transition duration-300 hover:bg-green-500 hover:text-white`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images[activeTab].map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={image.src} alt={image.alt} className="w-full h-60 object-cover transition-transform transform hover:scale-105" />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">{image.caption}</h4>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
