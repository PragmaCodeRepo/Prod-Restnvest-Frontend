import React, { useEffect, useState } from 'react';
import Crypto from '../assets/trade.png';

const Promotion = () => {
    const [count, setCount] = useState(0);

    // Simulating live counter for number of people joined
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + Math.floor(Math.random() * 10 + 1)); // Increment by a random number
        }, 1000); // Update every 1 second
        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <div className="w-full bg-[#191D32] py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 items-center">
                {/* Left Section */}
                <div className="text-center">
                    <img src={Crypto} alt="Crypto" className="w-[300px] mx-auto hover:scale-110 transition-transform duration-500 ease-in-out" />
                </div>

                {/* Right Section */}
                <div className="text-white">
                    <h2 className="text-2xl md:text-3xl font-bold">Trade with Confidence.</h2>
                    <p className="my-8 text-gray-300">
                    Earn up to 12% annual returns on top stocks. Simply invest in trusted companies and watch your portfolio grow monthly with no restrictions and no limits.
                    </p>

                    {/* Live Counter Section */}
                    <div className="text-xl md:text-2xl font-semibold mb-6">
                        <span className="text-[#41ADAF]">{count}</span> people have already joined!
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-center justify-start">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="w-full md:w-auto px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF4400] text-black"
                        />
                        <button className="bg-[#FF4400] text-white px-6 py-3 rounded-md w-full md:w-auto hover:bg-[#FF6600] transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;
