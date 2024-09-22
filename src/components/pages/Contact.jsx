import React from "react";
import TitleHeader from "../layer/TitleHeader";
import Container from "../layer/Container";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-20">
      <Container>
        <TitleHeader
          className="text-center text-5xl font-extrabold text-gray-900 mb-6"
          headerText="Contact Us"
        />
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
          We’d love to hear from you! Please fill out the form below or reach out to us directly.
        </p>

        {/* Contact Form */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex-1 bg-white rounded-lg shadow-lg p-8 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-700 mb-4">
              <strong>Address:</strong> 123 Engineering Ave, City, Country
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-green-600 hover:underline">+123 456 7890</a>
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@example.com" className="text-green-600 hover:underline">
                info@example.com
              </a>
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Find Us Here</h3>
          <div className="h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.735134202562!2d-122.0838476846928!3d37.38807967982844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbcf6bc0f12d3%3A0xd8cb8482e5b8a0c3!2sYour%20Business%20Name!5e0!3m2!1sen!2sus!4v1632768799880!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
