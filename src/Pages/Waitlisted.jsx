import React from 'react';
import bgIntroDesktop from "../assets/books_bg.png"; // Adjust the path based on your folder structure
import logoImage from '../assets/logo.png'; // Adjust the path based on your folder structure
import { Fade } from 'react-awesome-reveal';

const Waitlisted = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-[#23293D]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgIntroDesktop})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1b1b1b] opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-white px-4">
        <Fade triggerOnce>
          {/* Logo */}
          <div className="mb-6">
            <img src={logoImage} alt="Restnvest logo" className="w-40 h-30" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white tracking-wide text-center">
            restnvest
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-4 text-white text-center">
            Invest. Rest. Live. Give.
          </p>

          {/* Email Input and Button */}
          <div className="flex w-full max-w-md shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="flex-1 p-3 rounded-l-full text-gray-700 outline-none focus:ring-2 focus:ring-[#41ADAF]"
            />
            <button className="p-3 px-6 bg-[#3892BB] text-white font-semibold rounded-r-full hover:bg-[#41ADAF] transition-colors duration-300">
              Join the waitlist!
            </button>
          </div>

          {/* Waitlist Number */}
          <p className="text-lg md:text-xl mt-4 text-gray-300 text-center">
            Join the <span className="font-bold text-[#3892BB]">103,201</span> restnvestors
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Waitlisted;
