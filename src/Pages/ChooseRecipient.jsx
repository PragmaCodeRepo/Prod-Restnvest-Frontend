import React, { useState } from 'react';
import bg_image from '../assets/books_bg.jpg'; // Import the background image
import { Link } from 'react-router-dom';
const ChooseRecipient = () => {
    const [selectedAccount, setSelectedAccount] = useState('');

    const handleAccountSelection = (e) => {
        setSelectedAccount(e.target.value);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center relative flex justify-center items-center"
            style={{
                backgroundImage: `url(${bg_image})`, // Use the imported background image
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
                            <li>Setup bank info</li>
                            <li className="text-[#00C4CC]">Choose recipient</li>
                            <Link to="/choosegift" className="hover:text-[#00C4CC]">
                                Choose Gift 
                            </Link>
                            <li>Send</li>
                            <li>Track gift</li>
                        </ul>
                    </div>

                    {/* Description Text */}
                    <p className="text-gray-400 mb-6 text-center">
                        To find the people you know and love, they need to have an account set up already, which you can look up with an email address. <br />
                        If they are adults, search by their email address. <br />
                        If they are children, find them by their guardian’s email address. We will show the names of the children associated with their account, so you can give to the child you choose.
                    </p>

                    {/* Email Input Section */}
                    <div className="mb-6">
                        <label htmlFor="recipientEmail" className="block mb-2 text-sm">Gift recipient email address (or parent/guardian)</label>
                        <input
                            type="email"
                            id="recipientEmail"
                            placeholder="examplename@gmail.com"
                            className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                        />
                    </div>

                    {/* Accounts Radio Buttons Section */}
                    <div className="mb-6">
                        <p className="text-gray-400 mb-2">Accounts</p>
                        <div className="flex flex-col space-y-4">
                            <label className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name="account"
                                    value="Jake"
                                    checked={selectedAccount === 'Jake'}
                                    onChange={handleAccountSelection}
                                    className="form-radio h-5 w-5 text-[#00C4CC]"
                                />
                                <span>Jake</span>
                            </label>
                            <label className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name="account"
                                    value="Jenna"
                                    checked={selectedAccount === 'Jenna'}
                                    onChange={handleAccountSelection}
                                    className="form-radio h-5 w-5 text-[#00C4CC]"
                                />
                                <span>Jenna</span>
                            </label>
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex justify-between mt-8">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg">Back</button>
                        <button className="bg-[#00C4CC] hover:bg-[#00A8A8] text-white px-8 py-3 rounded-lg">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseRecipient;
