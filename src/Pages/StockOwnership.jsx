import React from 'react';
import Manufacturing from '../assets/fundamentals.png';
import CorporateBuilding from '../assets/future.png';
import Refinery from '../assets/financials.png';
import { Fade } from 'react-awesome-reveal';

const StockOwnership = () => {
    return (
        <div className="w-full bg-[#191D32] py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 items-center">
                
                {/* Left Section - Textual Content with Animations */}
                <Fade direction="left" triggerOnce>
                    <div className="text-white">
                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                            See Stocks as Ownership Shares of Businesses
                        </h1>
                        <blockquote className="my-4 text-[#FFFF00] italic text-xl md:text-2xl font-semibold">
                            “Stocks aren’t lottery tickets. Behind every stock is a company”
                        </blockquote>
                        <p className="text-right text-gray-300 font-semibold mb-6">— Peter Lynch</p>
                        <p className="text-lg md:text-xl text-gray-300">
                            Traders & gamblers chase price momentum. Investors buy fundamentals.
                            Know when to hold 'em and when to fold 'em. Buy bargains. Beat the market.
                        </p>
                    </div>
                </Fade>

                {/* Right Section - Images with Individual Animations */}
                <Fade direction="right" triggerOnce>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative group">
                            <img
                                src={Manufacturing}
                                alt="Manufacturing"
                                className="rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 shadow-lg group-hover:shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>
                        <div className="relative group">
                            <img
                                src={CorporateBuilding}
                                alt="Corporate Building"
                                className="rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 shadow-lg group-hover:shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>
                        <div className="relative group col-span-2 sm:col-span-1">
                            <img
                                src={Refinery}
                                alt="Refinery"
                                className="rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 shadow-lg group-hover:shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default StockOwnership;
