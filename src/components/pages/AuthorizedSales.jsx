import React from "react";
import Container from "../layer/Container";
import TitleHeader from "../layer/TitleHeader";
import { Link } from "react-router-dom";

const AuthorizedSales = () => {
  const partners = [
    { name: 'Induss', logo: '/AuthorizedPartners/induss.jpg' },
    { name: 'Mexthrem', logo: '/AuthorizedPartners/maxtherm.jpg' },
    { name: 'Qili', logo: '/AuthorizedPartners/Qili.png',link:'https://www.facebook.com/' }, 
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-xl font-bold  tracking-wider text-secondary uppercase">Our Partners</h2>
          <p className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Trusted Authorized Partners
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            We are proud to collaborate with global leaders in rice milling technology. These partnerships allow us to deliver innovative and efficient solutions to our customers.
          </p>
        </div>

        {/* Partner Logos Section */}
        <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {partners.map((partner, index) => (
            <Link to={partner.link} 
            target="_blank"
              key={index} 
              className="group flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
            >
              {/* Logo Container */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white shadow-md p-4 rounded-full overflow-hidden flex items-center justify-center group-hover:shadow-lg transition duration-300 ease-in-out">
                <img src={partner.logo} alt={`${partner.name} Logo`} className="max-w-full max-h-full rounded-full" />
              </div>
              <h3 className="mt-6 text-lg sm:text-xl font-semibold text-secondary">{partner.name}</h3>
            </Link>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="mt-20">
          <hr className="border-t-2 border-gray-200 mx-auto w-1/2" />
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-secondary rounded-full shadow-md hover:bg-white hover:text-black hover:shadow-lg transition duration-300 ease-in-out"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuthorizedSales;
