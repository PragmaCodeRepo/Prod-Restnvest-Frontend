import React from 'react';
import Grandparents from '../assets/grandparents.jpg'; // Replace with the actual path to your image
import { Fade, Zoom } from 'react-awesome-reveal';

const GenerationalWealth = () => {
    return (
        <div className="w-full bg-[#191D32] py-16 lg:py-24">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-8 lg:px-16 items-center">
                
                {/* Left Section - Textual Content */}
                <Fade direction="left" triggerOnce>
                    <div className="text-white">
                        <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
                            Build Generational Wealth
                        </h2>
                        <blockquote className="my-6 text-[#FFFF00] italic text-2xl md:text-3xl font-semibold">
                            “Time in the market beats timing the market”
                        </blockquote>
                        <p className="text-right text-gray-400 font-semibold mb-8 text-lg">
                            — Kenneth Fischer
                        </p>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Warren Buffett was 11 years old when his father bought him his first stock.
                            Give your kid the gift of a head start. Enlist the grandparents.
                            Give them the gift of participating in their grandkid’s future. With us, you can.
                        </p>
                    </div>
                </Fade>

                {/* Right Section - Image */}
                <Zoom triggerOnce>
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={Grandparents}
                            alt="Grandparents walking"
                            className="rounded-xl w-[300px] md:w-[450px] lg:w-[500px] hover:scale-105 transition-transform duration-500 ease-in-out shadow-lg hover:shadow-2xl"
                        />
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default GenerationalWealth;
