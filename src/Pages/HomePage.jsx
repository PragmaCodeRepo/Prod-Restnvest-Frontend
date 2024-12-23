import React from "react";
import mockupImage from "../assets/mockup.png"; // Replace with the correct image path
import restnvestlogo from "../assets/latest_logo.png"; // Logo image
import { Link } from 'react-router-dom';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col lg:flex-row bg-[#191D32]">
      {/* Left Section */}
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full flex justify-center items-center">
        <div className="container mx-auto px-4 md:px-8 text-center lg:text-left">
          <Slide direction="left" triggerOnce>
            <div className="flex flex-col items-center lg:flex-row mb-5 lg:mb-10 justify-center lg:justify-start">
              {/* Logo Section */}
              <img
                src={restnvestlogo}
                alt="Restnvest Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mr-2"
              />
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#41ADAF]">
                  RESTNVEST
                </h1>
                <h6 className="text-xs sm:text-sm lg:text-base text-gray-400">
                  Invest Relax Retire
                </h6>
              </div>
            </div>
          </Slide>

          {/* Heading Text */}
          <Fade triggerOnce>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold uppercase leading-tight text-white">
              Meet the new standards for market trading
            </h1>
          </Fade>

          {/* Get Started Button */}
          <Zoom triggerOnce>
            <Link to="/login">
              <button className="mt-6 px-6 py-3 bg-[#3892BB] text-white text-lg font-bold rounded-lg hover:bg-[#FF6600] transition duration-300">
                Get Started
              </button>
            </Link>
          </Zoom>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full flex justify-center items-center">
        <div className="container mx-auto px-4 md:px-8">
          {/* Mockup Image */}
          <Fade direction="up" triggerOnce>
            <img
              src={mockupImage}
              alt="Dashboard Preview"
              className="max-w-full h-auto p-4 lg:p-0"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
