import React from 'react';
import BalanceSheet from '../assets/balancesheet.png';
import IncomeStatement from '../assets/invoice_1.jpg';
import { Fade } from 'react-awesome-reveal';

const PortfolioUnderstanding = () => {
    return (
        <div className="w-full bg-[#191D32] py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12 items-center">
                
                {/* Left Section - Images with Animation */}
                <Fade direction="left" triggerOnce>
                    <div className="flex justify-center md:justify-start space-x-6">
                        <img
                            src={IncomeStatement}
                            alt="Income Statement"
                            className="rounded-lg w-[200px] transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
                        />
                        <img
                            src={BalanceSheet}
                            alt="Balance Sheet"
                            className="rounded-lg w-[200px] transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
                        />
                    </div>
                </Fade>

                {/* Right Section - Textual Content */}
                <Fade direction="right" triggerOnce>
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                            Understand your Portfolio
                        </h2>
                        <blockquote className="my-4 text-[#41ADAF] italic text-xl md:text-2xl font-semibold">
                            “The number one problem in today’s generation and economy is the lack of financial literacy.”
                        </blockquote>
                        <p className="text-right text-gray-300 font-semibold mb-6">— Alan Greenspan</p>
                        <p className="text-lg md:text-xl text-gray-300">
                            Build your own Berkshire Hathaway, one stock at a time. You own shares of businesses. You are a business. We assemble your own consolidated balance sheet and income statement so you can see what you get for what you own.
                        </p>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default PortfolioUnderstanding;
