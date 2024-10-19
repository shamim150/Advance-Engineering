import React from "react";
import Container from "../layer/Container";
import TitleHeader from "../layer/TitleHeader";

const OurClients = () => {
  const clients = [
    "MGI",
    "Akij",
    "TK",
    "Nabil",
    "SB",
    "Desh Bondho",
    "Edrish Group"
  ];

  return (
    <Container className="bg-[#F7F9FB] py-10">
      <TitleHeader className="text-center mb-8 text-3xl font-bold text-gray-700" headerText="Our Corporate Clients" />

      <div className="flex flex-wrap justify-center gap-6">
        {clients.map((client, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-xl w-44 h-44">
            <h2 className="text-xl font-semibold text-gray-800 text-center">{client}</h2>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .w-44 {
            width: 35%; /* Adjust width for smaller screens */
          }

          .h-44 {
            height: 35%; /* Keep height consistent with width */
          }
          
          h2 {
            font-size: 1.25rem; /* Adjust font size for smaller screens */
          }
        }

        @media (min-width: 769px) {
          .w-44 {
            width: 150px; /* Set fixed width for larger screens */
          }

          .h-44 {
            height: 150px; /* Set fixed height for larger screens */
          }
        }
      `}</style>
    </Container>
  );
};

export default OurClients;
