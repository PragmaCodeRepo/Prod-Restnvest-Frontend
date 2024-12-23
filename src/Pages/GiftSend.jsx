import React from 'react';
import bg_image from '../assets/books_bg.jpg'; // Replace with your background image

const GiftSend = () => {
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
                            <li>Choose recipient</li>
                            <li>Choose gift</li>
                            <li className="text-[#00C4CC]">Send</li>
                            <li>Track gift</li>
                        </ul>
                    </div>

                    {/* Confirmation Message */}
                    <p className="text-gray-400 mb-6 text-center">
                        Please review and confirm. This will also trigger an automatic email notification to their guardian.
                    </p>

                    {/* Message Preview Section */}
                    <div className="bg-white rounded-lg p-6 text-black mb-6">
                        <h3 className="font-bold mb-4">Message</h3>
                        <div className="bg-gray-100 rounded-lg p-4">
                            <p className="mb-4">
                                Jenna, <br />
                                Learning to invest early to build for your future is the best gift I could give you! <br />
                                We are getting old and may not be around to see you graduate and go to college, but we hope this helps you get there one day when you are all grown up and ready to take on the world! <br />
                                Love you, and Happy Birthday! <br />
                                Grandma & Grandpa
                            </p>
                            <div className="flex items-center space-x-4">
                                <img
                                    src="https://via.placeholder.com/50" // Add your recipient's image URL or profile picture
                                    alt="Profile"
                                    className="w-12 h-12 rounded-full"
                                />
                                <img
                                    src="https://via.placeholder.com/50x50.png?text=Tesla" // Add your stock/gift image
                                    alt="Tesla Stock"
                                    className="w-12 h-12 rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Gift Summary */}
                        <div className="mt-4 text-center">
                            <p className="text-lg font-semibold">May this gift grow and serve you well!</p>
                            <p className="text-xl font-bold">$500.00 - Tesla stock</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between mt-8">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg">Back</button>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftSend;
