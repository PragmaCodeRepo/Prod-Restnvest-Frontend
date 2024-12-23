import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* Thin gray line at the top of the footer */}
            <div className="w-full h-[1px] bg-gray-600 opacity-90"></div>

            <div className="bg-[#191D32] py-10">
                <div className="max-w-[1200px] mx-auto flex justify-around items-start px-4 md:px-8 lg:px-16">
                    {/* Company Section */}
                    <div className="text-white flex flex-col items-center">
                        <h5 className="text-lg font-semibold">Company</h5>
                        <span className="w-8 h-1 bg-[#41ADAF] block my-2"></span>
                        
                        <a href="/aboutus" className="block my-2 hover:text-[#41ADAF] transition-colors duration-300">About</a>
                        
                    </div>

                    {/* Product Section */}
                    <div className="text-white flex flex-col items-center">
                        <h5 className="text-lg font-semibold">Product</h5>
                        <span className="w-8 h-1 bg-[#41ADAF] block my-2"></span>
                        <a href="/" className="block my-2 hover:text-[#41ADAF] transition-colors duration-300">About</a>
                        <a href="/faq" className="block my-2 hover:text-[#41ADAF] transition-colors duration-300">FAQ</a>
                    </div>

                    {/* Investing Section */}
                    <div className="text-white flex flex-col items-center">
                        <h5 className="text-lg font-semibold">Investing</h5>
                        <span className="w-8 h-1 bg-[#41ADAF] block my-2"></span>
                        <a href="/contactus" className="block my-2 hover:text-[#41ADAF] transition-colors duration-300">Contact Us</a>
                        <a href="/dashboard" className="block my-2 hover:text-[#41ADAF] transition-colors duration-300">Investing/Gifting </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
