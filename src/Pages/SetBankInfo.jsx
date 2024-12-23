import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import bg_image from '../assets/books_bg.jpg'; // Import the background image at the top

const SetBankInfo = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center relative flex justify-center items-center"
            style={{
                backgroundImage: `url(${bg_image})`, // Use the imported image variable
            }}
        >
            {/* Full page black overlay */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-4xl p-8">
                <div className="bg-black bg-opacity-70 p-8 rounded-lg text-white shadow-lg">
                    <h2 className="text-4xl font-bold text-center mb-6">Get set up & gifting</h2>

                    {/* Steps Navigation */}
                    <div className="flex justify-center mb-8">
                        <ul className="flex space-x-4 text-sm">
                            <li>Setup your profile</li>
                            <li className="text-[#00C4CC]">Setup bank info</li>
                            <Link to="/chooserecipient" className="hover:text-[#00C4CC]">
                                Choose Receipt 
                            </Link>
                            <li>Choose gift</li>
                            <li>Send</li>
                            <li>Track gift</li>
                        </ul>
                    </div>

                    {/* Bank Info Section */}
                    <div className="grid grid-cols-1 gap-6 mb-6">
                        <div>
                            <label htmlFor="accountName" className="block mb-2">Account Name</label>
                            <input
                                type="text"
                                id="accountName"
                                placeholder="Give your account a name"
                                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            />
                        </div>
                        <div>
                            <label htmlFor="bankName" className="block mb-2">Bank Name</label>
                            <input
                                type="text"
                                id="bankName"
                                placeholder="Enter the name of your bank"
                                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            />
                        </div>
                        <div>
                            <label htmlFor="bankType" className="block mb-2">Bank Type</label>
                            <input
                                type="text"
                                id="bankType"
                                placeholder="Only domestic US banks are supported for now"
                                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            />
                        </div>
                        <div>
                            <label htmlFor="routingNumber" className="block mb-2">Routing Number</label>
                            <input
                                type="text"
                                id="routingNumber"
                                placeholder="Enter the 9-digit routing number for your account"
                                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            />
                        </div>
                        <div>
                            <label htmlFor="accountNumber" className="block mb-2">Account Number</label>
                            <input
                                type="text"
                                id="accountNumber"
                                placeholder="Enter your bank account number"
                                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between mt-8">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg">Back</button>
                        <button className="bg-[#00C4CC] hover:bg-[#00A8A8] text-white px-8 py-3 rounded-lg">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetBankInfo;
