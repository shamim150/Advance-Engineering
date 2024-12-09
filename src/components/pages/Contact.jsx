import  { useState } from "react";
import TitleHeader from "../layer/TitleHeader";
import Container from "../layer/Container";

const Contact = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();

    const fromData = { name, address, email, message };
    console.log(fromData);

    try {
      const response = await fetch(
        "https://advanced-engineering-admin.vercel.app/api/v1/contactUs/contact",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(fromData),
        }
      );

      const data = await response.json();

      if (data?.success) {
        alert("Message sent successfully!");
        setName("");
        setAddress("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 py-20">
      <Container>
        <TitleHeader
          className="text-center text-5xl font-extrabold text-gray-900 mb-6"
          headerText="Contact Us"
        />

        <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
          We’d love to hear from you! Please fill out the form below or reach
          out to us directly.
        </p>

        {/* Contact Form */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex-1 bg-white rounded-lg shadow-lg p-8 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form onSubmit={handlesubmit}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="Address">
                  Address
                </label>
                <input
                  type="text"
                  id="Address"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="message">
                  Requirement
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
              <strong>Address:</strong> <br /> Head Office:- Rustom Plaza (1st
              Floor) Supari Patty, <br /> Naogaon-6500, Bangladesh
            </p>
            <p className="mb-3">
              Dhaka Office:- Sector-09, Road-3F, House-18, Uttara, Dhaka-1230.
            </p>
            <p className="text-gray-700 mb-4">
              <strong> Mobile:</strong>{" "}
              <a
                href="tel:+8801717507404"
                className="text-green-600 hover:underline"
              >
                +8801717507404
              </a>
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@advancedengrs.com"
                className="text-green-600 hover:underline"
              >
                info@advancedengrs.com
              </a>
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Find Us Here
          </h3>
          <div className="h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d271.1687094538302!2d90.39767836985042!3d23.875546644089408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c58ca4f666c3%3A0xdfd0ff1b0dc26c9f!2sHouse%2027%2C%20Road%202%2C%20Sector%209%2C%20Uttara%20Dhaka%201230!5e0!3m2!1sen!2sbd!4v1729509647898!5m2!1sen!2sbd"
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
