import React from 'react'
import Container from '../layer/Container'
import TitleHeader from '../layer/TitleHeader'

const AboutUs = () => {
  return (
    <div>
      <Container>
      <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-wide text-[#32438c]  uppercase">About Us</h2>
          <p className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl py-3">
            Engineering Innovation for the Rice Milling Industry
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-lg sm:text-xl text-gray-500">
            Welcome to <span className="font-semibold">Advanced Engineering</span>, where we blend advanced engineering with modern technology to provide top-notch rice milling solutions that optimize your operational efficiency.
          </p>
        </div>

        {/* Our Vision, Mission, and Values Section */}
        <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Our Vision</h3>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              To become the global leader in rice milling technology, delivering cutting-edge solutions that elevate the rice processing industry to new heights.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Our Mission</h3>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Empower rice millers by providing state-of-the-art machinery, parts, and technical support that enhance productivity, reduce waste, and improve sustainability.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Our Values</h3>
            <ul className="mt-4 text-base sm:text-lg text-gray-600 list-disc list-inside">
              <li>Innovation & Excellence</li>
              <li>Integrity & Trust</li>
              <li>Sustainability & Responsibility</li>
              <li>Customer-Centric Solutions</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center sm:text-4xl">Why Choose Us</h3>
          <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#32438c] text-white">
                {/* Icon or Image */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4H8m4 4v-4m0 0l4-4m-4 4H5l7-7m5 5h1v4h4v-4H7z" />
                </svg>
              </div>
              <h4 className="mt-4 text-xl font-semibold text-gray-900 sm:text-2xl">Advanced Technology</h4>
              <p className="mt-4 text-base sm:text-lg text-gray-600">
                We stay at the forefront of innovation, ensuring our machinery uses the latest advancements to boost efficiency and performance.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#32438c] text-white">
                {/* Icon or Image */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2a4 4 0 015-3.87m1 7V13a4 4 0 00-1.87-3.5M9 17l7 7m0-7v-2m0 7H7" />
                </svg>
              </div>
              <h4 className="mt-4 text-xl font-semibold text-gray-900 sm:text-2xl">Durable Equipment</h4>
              <p className="mt-4 text-base sm:text-lg text-gray-600">
                Our machinery is built to last, using high-quality materials that ensure longevity and lower maintenance costs for rice millers.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#32438c] text-white">
                {/* Icon or Image */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12V8a4 4 0 00-8 0v4M7 12h8m0 0h4a4 4 0 00-8 0m0 0v4h4v-4m-8 4v4h4v-4m0 4h4" />
                </svg>
              </div>
              <h4 className="mt-4 text-xl font-semibold text-gray-900 sm:text-2xl">Global Expertise</h4>
              <p className="mt-4 text-base sm:text-lg text-gray-600">
                We serve rice mills across the globe, leveraging our expertise to provide customized solutions that meet diverse needs.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-24 text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-lg font-medium text-white bg-[#32438c] rounded-md hover:bg-yellow-600"
          >
            Get in Touch
          </a>
        </div> */}
      </div>
    </section>
      </Container>
      
    </div>
  )
}

export default AboutUs