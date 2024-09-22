import React from "react";
import TitleHeader from "../layer/TitleHeader";
import Container from "../layer/Container";

const SolutionService = () => {
  return (
    <div className="bg-gray-100 py-20">
      <Container>
        {/* Page Header */}
        <TitleHeader
          className="text-center text-5xl font-extrabold text-gray-900 mb-6"
          headerText="Our Solution Services"
        />
        <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
          At [Your Company Name], we specialize in providing comprehensive solutions for rice mill machinery and parts. Our expert team is dedicated to ensuring that your operations are efficient, reliable, and cost-effective.
        </p>

        {/* Service Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Service Item */}
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
              <div className="bg-gray-200 p-4 text-center">
                <a
                  href="#"
                  className="text-green-600 font-bold hover:underline"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Ready to Enhance Your Operations?</h2>
          <p className="mt-4 text-gray-600">
            Contact us today to learn more about how we can help you achieve your goals with our advanced engineering solutions.
          </p>
          <a
            href="#"
            className="mt-6 inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </Container>
    </div>
  );
};

// Sample services data
const services = [
  {
    title: "Consultation & Design",
    description: "We provide expert consultations to understand your specific needs and deliver tailored design solutions for your rice milling operations.",
  },
  {
    title: "Machinery Supply",
    description: "Our team supplies high-quality machinery and equipment, ensuring your rice mill operates at optimal efficiency with the latest technology.",
  },
  {
    title: "Installation Services",
    description: "We offer comprehensive installation services to ensure that your equipment is set up correctly and operates smoothly.",
  },
  {
    title: "Maintenance & Support",
    description: "Our ongoing maintenance and support services help keep your machinery in top condition, minimizing downtime and maximizing productivity.",
  },
  {
    title: "Training Services",
    description: "We provide comprehensive training programs for your staff to ensure efficient operation and maintenance of all machinery.",
  },
  {
    title: "Customized Solutions",
    description: "We specialize in creating customized solutions tailored to your specific requirements and operational goals, ensuring maximum ROI.",
  },
];

export default SolutionService;
