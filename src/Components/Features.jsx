import React from 'react';
import BuyImg from '../assets/feature1.jpg'; // Replace with actual image path
import EarnImg from '../assets/feature1.jpg'; // Replace with actual image path
import GiveImg from '../assets/feature1.jpg'; // Replace with actual image path

const Features = () => {
    return (
        <div className="w-full py-12 bg-white text-center">
            {/* Main Heading */}
            <div className="container mx-auto mb-8">
                <h2 className="text-3xl font-bold text-black">Features</h2>
                <p className="text-lg text-gray-700 mt-2">
                    Tools for the intelligent, patient investor.
                </p>
            </div>

            {/* Feature Cards Section */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Buy Section */}
                <div className="shadow-lg rounded-lg p-6 text-center">
                    <div className="bg-[#3892BB] rounded-t-lg py-4">
                        <h3 className="text-2xl font-bold text-white">BUY</h3>
                    </div>
                    <img 
                        src={BuyImg} 
                        alt="Buy" 
                        className="w-full h-[200px] object-cover mb-4" 
                    />
                    <p className="font-bold text-gray-700">STOCKS, BONDS, CRYPTO</p>
                    <p className="text-gray-700 mt-2">
                        Buy and Sell, based on business fundamentals.
                    </p>
                </div>

                {/* Earn Section */}
                <div className="shadow-lg rounded-lg p-6 text-center">
                    <div className="bg-[#3892BB] rounded-t-lg py-4">
                        <h3 className="text-2xl font-bold text-white">EARN</h3>
                    </div>
                    <img 
                        src={EarnImg} 
                        alt="Earn" 
                        className="w-full h-[200px] object-cover mb-4" 
                    />
                    <p className="font-bold text-gray-700">BECOME A BUSINESS OF ONE</p>
                    <p className="text-gray-700 mt-2">
                        Your balance sheet & income statement, personalized to your portfolio holdings.
                    </p>
                </div>

                {/* Give Section */}
                <div className="shadow-lg rounded-lg p-6 text-center">
                    <div className="bg-[#3892BB] rounded-t-lg py-4">
                        <h3 className="text-2xl font-bold text-white">GIVE</h3>
                    </div>
                    <img 
                        src={GiveImg} 
                        alt="Give" 
                        className="w-full h-[200px] object-cover mb-4" 
                    />
                    <p className="font-bold text-gray-700">BUILD GENERATIONAL WEALTH</p>
                    <p className="text-gray-700 mt-2">
                        It takes a village... Invest in your children. Invite and enlist your family to help.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;
