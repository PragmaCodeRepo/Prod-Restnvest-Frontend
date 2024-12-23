// src/components/Sidebar.js

import React, { useState } from 'react';
import {
  FaChartLine,
  FaListAlt,
  FaStar,
  FaHistory,
  FaNewspaper,
} from 'react-icons/fa';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-gray-800 text-white ${
        isOpen ? 'w-64' : 'w-20'
      } p-6 transition-all duration-300 flex flex-col h-screen overflow-y-auto`}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="mb-6 focus:outline-none">
        <span className="text-2xl">{isOpen ? '<<' : '>>'}</span>
      </button>
      <h1
        className={`text-3xl font-bold mb-10 transition-all ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        restnvest
      </h1>
      <nav className="space-y-4 flex-1">
        <a
          href="#portfolio"
          className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
        >
          <FaChartLine className="text-xl" /> {isOpen && <span>Portfolio</span>}
        </a>
        {/* Add more navigation items here */}
        <a
          href="#holdings"
          className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
        >
          <FaListAlt className="text-xl" /> {isOpen && <span>Holdings</span>}
        </a>
        <a
          href="#favorites"
          className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
        >
          <FaStar className="text-xl" /> {isOpen && <span>Favorites</span>}
        </a>
        <a
          href="#recommendations"
          className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
        >
          <FaChartLine className="text-xl" /> {isOpen && <span>Recommendations</span>}
        </a>
        <a
          href="#history"
          className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
        >
          <FaHistory className="text-xl" /> {isOpen && <span>Historical Data</span>}
        </a>
        <a
          href="#news"
          className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded"
        >
          <FaNewspaper className="text-xl" /> {isOpen && <span>News</span>}
        </a>
        {/* Additional items to simulate overflow */}
        {/* You can add more items here to test scrolling */}
      </nav>
    </div>
  );
}
