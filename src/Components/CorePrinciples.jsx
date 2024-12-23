import React from 'react';
import ExampleImg from '../assets/Apple_store.jpg'; // Replace with actual image path
import { Link } from 'react-router-dom'
const CorePrinciples = () => {
    return (
        <div className="w-full py-12 bg-[#191D32] text-white">
            <div className="container mx-auto">
                {/* Main Heading */}
                <h2 className="text-3xl font-bold text-center mb-8">Our Core Principles</h2>

                {/* Principle Section */}
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 bg-[#23293D] p-8 rounded-lg">
                    
                    {/* Text Section */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">1. Invest like an owner</h3>
                        <p className="italic text-[#FF4400] mb-4">
                            "Stocks aren’t lottery tickets. Behind every stock is a company."
                            <br />
                            — Peter Lynch
                        </p>
                        <p className="text-lg text-gray-300 mb-4">
                            Traders & gamblers chase price momentum. Investors buy based on business fundamentals. Chase earnings, not price.
                        </p>
                        <p className="text-lg text-gray-300 mb-6">
                            Buy bargains. Beat the market.
                        </p>
                        <Link to='/signup'>
                        <button className="px-6 py-2 bg-[#3892BB] text-white rounded-full hover:bg-blue-600 transition">
                            Invest
                        </button>
                        </Link>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1">
                        <img 
                            src={ExampleImg} 
                            alt="Invest like an owner" 
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorePrinciples;
