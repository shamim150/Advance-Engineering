import React, { useEffect, useState } from "react";
import TitleHeader from "../layer/TitleHeader";
import Container from "../layer/Container";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("showAll");
  const [loading, setLoading] = useState(true);

  const [galleryData, setGalleryData] = useState([]);

  const fetchgalleryData = async () => {
    const response = await fetch(
      "https://advanced-engineering-admin.vercel.app/api/v1/gallery"
    );
    const data = await response.json();
    setGalleryData(data?.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchgalleryData();
  }, []);

  let filteredGalleryData = [];

  if (activeTab === "Exhibition") {
    filteredGalleryData = galleryData.filter(
      (item) => item.type === "Exhibition"
    );
  } else if (activeTab === "Awards") {
    filteredGalleryData = galleryData.filter((item) => item.type === "Awards");
  } else {
    filteredGalleryData = galleryData;
  }

  return (
    <div className="bg-gray-100 py-20">
      <Container>
        <TitleHeader
          className="text-center text-5xl font-extrabold text-gray-900 mb-6"
          headerText="Gallery"
        />

        <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
          Explore our gallery showcasing our cutting-edge rice mill machinery,
          participation in exhibitions, and our prestigious awards and
          certificates. Each image tells a story of innovation and excellence in
          engineering.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-8">
          {["showAll", "Exhibition", "Awards"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeTab === tab
                  ? "bg-secondary text-white"
                  : "bg-white text-gray-700"
              } shadow transition duration-300 hover:text-white  hover:bg-secondary`}
            >
              {tab.charAt(0).toUpperCase() +
                tab.slice(1).replace(/([A-Z])/g, " $1")}
            </button>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGalleryData?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-60 object-cover transition-transform transform hover:scale-105"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.caption}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
