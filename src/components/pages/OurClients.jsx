import React from "react";
import Container from "../layer/Container";
import TitleHeader from "../layer/TitleHeader";

const OurClients = () => {
  const clients = [
    { name: "MGI", initials: "/OurCorporateClients/Mgi.jpg", url: "https://www.mgi.org" },
    { name: "Akij", initials: "/OurCorporateClients/AKIJ.jpg", url: "https://www.gulfood.com" },
    { name: "TK", initials: "/OurCorporateClients/TK.jpg", url: "https://www.tkgroupbd.com" },
    { name: "Nabil", initials: "/OurCorporateClients/Nabil.jpg", url: "	https://ngibd.com" },
    { name: "SB", initials: "/OurCorporateClients/SB.jpg", url: "https://sbgroup.com.bd" },
    { name: "Desh Bondho", initials: "/OurCorporateClients/DESHBondhu.jpg", url: "https://www.dbg.com.bd" }, 
    { name: "Edrish Group", initials: "/OurCorporateClients/Edrish.jpg",  },
  ];

  return (
    <Container className="bg-[#F7F9FB] py-10">
      <TitleHeader className="text-center mb-8 text-3xl font-bold text-gray-700" headerText="Our Corporate Clients" />

      <div className="flex flex-wrap justify-center gap-6">
        {clients.map((client, index) => (
          <a
            key={index}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-xl w-44 h-44"
          >
            {/* Client Logo */}
            <div className="flex items-center justify-center text-xl font-bold text-white">
              <img className="w-20 h-20 object-contain" src={client.initials} alt={client.name} />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">{client.name}</h2>
          </a>
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
            font-size: 1rem; /* Adjust font size for smaller screens */
          }

          img {
            width: 50px; /* Adjust logo size for smaller screens */
            height: 50px;
          }
        }

        @media (min-width: 769px) {
          .w-44 {
            width: 150px; /* Set fixed width for larger screens */
          }

          .h-44 {
            height: 150px; /* Set fixed height for larger screens */
          }

          h2 {
            font-size: 1.25rem; /* Adjust font size for larger screens */
          }

          img {
            width: 80px; /* Set fixed logo size for larger screens */
            height: 80px;
          }
        }
      `}</style>
    </Container>
  );
};

export default OurClients;
