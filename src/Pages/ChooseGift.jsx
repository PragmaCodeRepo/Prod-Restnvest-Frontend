import React, { useState } from 'react';
import bg_image from '../assets/books_bg.jpg'; // Replace with the correct path to your background image
import { Link } from 'react-router-dom';
const ChooseGift = () => {
    const [giftAmount, setGiftAmount] = useState('');
    const [gift, setGift] = useState('');
    const [frequency, setFrequency] = useState('');
    const [message, setMessage] = useState('');

    const handleGiftAmountChange = (e) => setGiftAmount(e.target.value);
    const handleGiftChange = (e) => setGift(e.target.value);
    const handleFrequencyChange = (e) => setFrequency(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);

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
                            <Link to="/giftsend" className="hover:text-[#00C4CC]">
                                Send
                            </Link>
                            
                            <li>Track gift</li>
                        </ul>
                    </div>

                    {/* Instructional Text */}
                    <p className="text-gray-400 mb-6 text-center">
                        Choose a gift of your choice or give cash and let them choose. <br />
                        If you choose stock, bonds, or crypto currencies, the system will purchase the selected asset at the market price at the time the funds clear.
                    </p>

                    {/* Gift Details Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="giftAmount" className="block mb-2">Gift Amount</label>
                            <input
                                type="text"
                                id="giftAmount"
                                placeholder="$ 500.00"
                                value={giftAmount}
                                onChange={handleGiftAmountChange}
                                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            />
                        </div>
                        <div>
                            <label htmlFor="gift" className="block mb-2">Gift</label>
                            <input
                                type="text"
                                id="gift"
                                placeholder="Tesla stock"
                                value={gift}
                                onChange={handleGiftChange}
                                className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            />
                        </div>
                    </div>

                    {/* Frequency Section */}
                    <div className="mb-6">
                        <label htmlFor="frequency" className="block mb-2">Frequency</label>
                        <input
                            type="text"
                            id="frequency"
                            placeholder="Once, weekly, monthly, yearly"
                            value={frequency}
                            onChange={handleFrequencyChange}
                            className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                        />
                    </div>

                    {/* Message Section */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block mb-2">Message</label>
                        <textarea
                            id="message"
                            placeholder="Write a personalized message"
                            value={message}
                            onChange={handleMessageChange}
                            className="w-full p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                            rows="5"
                        />
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

export default ChooseGift;
