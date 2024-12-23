import React from 'react';
import FamilyImg1 from '../assets/feature1.jpg'; // Replace with actual image path
import FamilyImg2 from '../assets/family2.jpg'; // Replace with actual image path
import FamilyImg3 from '../assets/family3.jpg'; // Replace with actual image path
import { Link } from 'react-router-dom'
const BuildGenerationalWealth = () => {
    return (
        <div className="w-full py-12 bg-[#191D32] text-white">
            <div className="container mx-auto">
                {/* Principle Section */}
                <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8 bg-[#23293D] p-8 rounded-lg">
                    
                    {/* Text Section */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">3. Build generational wealth</h3>
                        <p className="italic text-[#FFCC00] mb-4">
                            "Time in the market beats timing the market."
                            <br />
                            — Kenneth Fisher
                        </p>
                        <p className="text-lg text-gray-300 mb-4">
                            Wes won his first share at 11 years old when his father bought him his first stock. Give your children and grandchildren the gift of a head start. Enlist the family. Spread the joy in building the future together.
                        </p>
                        <p className="text-lg text-gray-300 mb-6">With us you can.</p>
                        <Link to='/Login'>
                        <button className="px-6 py-2 bg-[#3892BB] text-white rounded-full hover:bg-blue-600 transition">
                            Give
                        </button>
                        </Link>
                    </div>

                    {/* Images Section */}
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {/* Top-left image */}
                        <img 
                            src={FamilyImg1} 
                            alt="Family 1" 
                            className="w-full h-auto object-cover rounded-lg"
                        />
                        {/* Top-right image spans two rows */}
                        <img 
                            src={FamilyImg2} 
                            alt="Family 2" 
                            className="w-full h-auto object-cover rounded-lg row-span-2"
                        />
                        {/* Bottom-left image */}
                        <img 
                            src={FamilyImg3} 
                            alt="Family 3" 
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildGenerationalWealth;
