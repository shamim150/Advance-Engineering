import React from "react";
import TitleHeader from "../layer/TitleHeader";
import Container from "../layer/Container";

const KeyPersonSaleService = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Sales Manager",
      photo: "/KeyPersonSaleService/1.jpg",
      email: "john@example.com",
      phone: "+123 456 7890",
    },
    {
      name: "Jane Smith",
      role: "Service Engineer",
      photo: "/KeyPersonSaleService/2.jpg",
      email: "jane@example.com",
      phone: "+123 456 7891",
    },
    {
      name: "Michael Brown",
      role: "Technical Support",
      photo: "/KeyPersonSaleService/1.jpg",
      email: "michael@example.com",
      phone: "+123 456 7892",
    },
    {
      name: "Emily Johnson",
      role: "Customer Relations",
      photo: "/KeyPersonSaleService/2.jpg",
      email: "emily@example.com",
      phone: "+123 456 7893",
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <Container>
        <TitleHeader
          className="text-center text-5xl font-extrabold text-gray-900 mb-6"
          headerText="Key Person Sales & Service"
        />
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
          Meet our dedicated team providing exceptional sales and service support for our rice mill machinery and parts. Your satisfaction is our priority.
        </p>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
              aria-labelledby={`team-member-${index}`}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => { if (e.key === 'Enter') alert(`Contact ${member.name}`); }}
              onClick={() => alert(`Contact ${member.name}`)}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-full max-h-screen object-cover"
              />
              <div className="p-4">
                <h4 id={`team-member-${index}`} className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h4>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <div className="mt-2">
                  <p className="text-gray-700">
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${member.email}`} className="text-green-600 hover:underline">{member.email}</a>
                  </p>
                  <p className="text-gray-700">
                    <strong>Phone:</strong>{" "}
                    <span className="text-green-600 hover:underline">{member.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default KeyPersonSaleService;
