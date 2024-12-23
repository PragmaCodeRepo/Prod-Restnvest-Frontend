import React from "react";
import Gift1 from "../assets/gifts_img.jpg";
import Gift2 from "../assets/gift_img2.jpg";
import BgImage from "../assets/books_bg.jpg"; // Background image
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div
      className="Signup min-h-screen bg-cover bg-center flex flex-col justify-center items-center relative mt-[90px] px-4 md:px-0" // Add padding on mobile screens
      style={{
        backgroundImage: `url(${BgImage})`, // Use background image
      }}
    >
      {/* Semi-transparent light overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10 max-w-6xl w-full text-center">
        {/* Heading with Animation */}
        <Slide direction="down" triggerOnce>
          <h4 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#3892BB] leading-tight">
            Get started:
            <br />
            <span>Invest, or give?</span>
          </h4>
        </Slide>

        {/* Cards Section with Animation */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1: Give */}
          <Fade delay={300} triggerOnce>
            <div className="bg-white shadow-2xl border-2 border-gray-200 rounded-lg p-8 flex flex-col items-center transform transition duration-500 hover:scale-105 h-[400px] w-full md:w-[400px]">
              <img
                src={Gift1}
                alt="Gift Image"
                className="w-48 h-48 object-cover mb-6 rounded-lg" // Reduced image size for mobile
              />
              <p className="text-gray-500 mt-4 text-center">
                Create an account to gift stocks, bonds, or crypto-currency.
                Track your giving and see the impact.
              </p>
              <Link to="/register">
                <button className="mt-6 bg-[#3892BB] text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                  Give
                </button>
              </Link>
            </div>
          </Fade>

          {/* Card 2: Invest */}
          <Fade delay={600} triggerOnce>
            <div className="bg-white shadow-2xl border-2 border-gray-200 rounded-lg p-8 flex flex-col items-center transform transition duration-500 hover:scale-105 h-[400px] w-full md:w-[400px]">
              <img
                src={Gift2}
                alt="Investment Image"
                className="w-48 h-48 object-cover mb-6 rounded-lg" // Reduced image size for mobile
              />
              <p className="text-gray-500 mt-4 text-center">
                Create a brokerage account to grow your assets and invest in
                stocks, bonds, and crypto.
              </p>
              <Link to="/register">
              <button className="mt-6 bg-[#3892BB] text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                Invest
              </button>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Signup;
