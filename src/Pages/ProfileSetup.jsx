import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import BgImage from '../assets/books_bg.jpg'; // Replace with your background image
import { Link } from 'react-router-dom'; // Import Link for navigation

const ProfileSetup = () => {
    const [profilePic, setProfilePic] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePic(URL.createObjectURL(file));
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center relative flex justify-center items-center"
            style={{
                backgroundImage: `url(${BgImage})`, // Background image
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
                            <li className="text-[#00C4CC]">Setup your profile</li>
                            <li>
                                {/* Link to SetBankInfo component */}
                                <Link to="/bankinfo" className="hover:text-[#00C4CC]">
                                    Setup bank info
                                </Link>
                            </li>
                            <li>
                            <Link to="/chooserecipient" className="hover:text-[#00C4CC]">
                                    Choose recipient
                                </Link>
                            </li>
                            <li>Choose gift</li>
                            <li>Send</li>
                            <li>Track gift</li>
                        </ul>
                    </div>

                    {/* Name Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="firstName" className="block mb-2">Your first name</label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Enter first name"
                                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-2">Last name</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Enter last name"
                                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            />
                        </div>
                    </div>

                    {/* Address Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="streetAddress" className="block mb-2">Street Address</label>
                            <input
                                type="text"
                                id="streetAddress"
                                placeholder="Enter street address"
                                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            />
                        </div>
                        <div>
                            <label htmlFor="apt" className="block mb-2">Unit, Suite or Apartment</label>
                            <input
                                type="text"
                                id="apt"
                                placeholder="Optional"
                                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                            <label htmlFor="city" className="block mb-2">City</label>
                            <input
                                type="text"
                                id="city"
                                placeholder="Enter city name"
                                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            />
                        </div>
                        <div>
                            <label htmlFor="state" className="block mb-2">State</label>
                            <input
                                type="text"
                                id="state"
                                placeholder="Enter state"
                                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            />
                        </div>
                        <div>
                            <label htmlFor="zipCode" className="block mb-2">Zip Code</label>
                            <input
                                type="text"
                                id="zipCode"
                                placeholder="Enter zip code"
                                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            />
                        </div>
                    </div>

                    {/* Profile Picture Section */}
                    <div className="mb-6">
                        <label className="block mb-2">PROFILE PICTURE (jpeg format, optional)</label>
                        <p className="text-sm mb-4">Upload an image if you would like your recipients to see a personalized picture of whom the gifts are from</p>
                        <div className="flex items-center space-x-4">
                            <div className="w-24 h-24 bg-gray-800 flex items-center justify-center rounded-lg overflow-hidden">
                                {profilePic ? (
                                    <img src={profilePic} alt="Profile Preview" className="object-cover w-full h-full" />
                                ) : (
                                    <FaUpload size={40} className="text-[#00C4CC]" />
                                )}
                            </div>
                            <input
                                type="file"
                                accept="image/jpeg"
                                onChange={handleImageUpload}
                                className="w-full p-2 rounded-lg bg-gray-800 text-white"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between mt-8">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg">Cancel</button>
                        <button className="bg-[#00C4CC] hover:bg-[#00A8A8] text-white px-8 py-3 rounded-lg">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSetup;
