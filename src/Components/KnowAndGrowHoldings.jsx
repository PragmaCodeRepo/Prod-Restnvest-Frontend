import React from 'react';
import BalanceSheetImg from '../assets/invoice_1.jpg'; // Replace with actual image path
import { Link } from 'react-router-dom'
const KnowAndGrowHoldings = () => {
    return (
        <div className="w-full py-12 bg-[#191D32] text-white">
            <div className="container mx-auto">
                {/* Principle Section */}
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 bg-[#23293D] p-8 rounded-lg">
                    
                    {/* Image Section */}
                    <div className="flex-1">
                        <img 
                            src={BalanceSheetImg} 
                            alt="Know and grow your holdings" 
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">2. Know and grow your holdings</h3>
                        <p className="italic text-[#FFCC00] mb-4">
                            "The number one problem in today’s generation and economy is the lack of financial literacy."
                            <br />
                            — Alan Greenspan
                        </p>
                        <p className="text-lg text-gray-300 mb-4">
                            Build your own Berkshire Hathaway, one stock at a time. You own shares of businesses. You are a business. We assemble your personal consolidated balance sheet and income statement so you can see what you get for what you own.
                        </p>
                        <p className="text-lg text-gray-300 mb-6">
                            We do the math so you don’t have to.
                        </p>
                        <Link to='/Login'>
                        <button className="px-6 py-2 bg-[#3892BB] text-white rounded-full hover:bg-blue-600 transition">
                            Manage
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowAndGrowHoldings;
