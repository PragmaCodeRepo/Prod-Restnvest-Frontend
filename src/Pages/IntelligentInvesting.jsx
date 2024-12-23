import React from 'react';
import NYSEBackground from '../assets/nyse_bg.jpg'; // Background image
import { Fade, Zoom } from 'react-awesome-reveal';

const IntelligentInvesting = () => {
    return (
        <div className="w-full relative bg-white">
            {/* Main Heading Section */}
            <div className="container mx-auto text-center py-16 relative z-10">
                <Zoom triggerOnce>
                    <h1 className="text-4xl md:text-5xl  text-[#23293D] leading-tight">
                        The Intelligent Investor, Evolved
                    </h1>
                </Zoom>
                
                <Fade delay={200} triggerOnce>
                    <p className="text-[#23293D] mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Introducing the restInvest platform, crafted to drive long-term focus, curated simplicity, and behavioral guidance.
                        <br /> We distilled investing to first principles: Buy and Hold.
                    </p>
                </Fade>

                {/* Buttons Section */}
                <div className="flex justify-center space-x-4 mt-10 relative z-10">
                    <button className="px-6 py-3 bg-[#3892BB] text-white text-lg rounded-full hover:bg-[#2C7A99] transition duration-300 ease-in-out">
                        About Us
                    </button>
                    <button className="px-6 py-3 bg-[#3892BB] text-white text-lg rounded-full hover:bg-[#2C7A99] transition duration-300 ease-in-out">
                        About Investing
                    </button>
                    <button className="px-6 py-3 bg-[#3892BB] text-white text-lg rounded-full hover:bg-[#2C7A99] transition duration-300 ease-in-out">
                        About Gifting
                    </button>
                </div>
            </div>

            {/* Full-width Image with Gradient and Opacity */}
            <div
                className="w-full h-[500px] relative"
                style={{
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${NYSEBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>

            {/* Additional content or components can be added below */}
        </div>
    );
};

export default IntelligentInvesting;
