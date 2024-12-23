// src/components/Topbar.js

import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

export default function Topbar() {
  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center flex-col md:flex-row">
      <div className="text-lg font-semibold mb-4 md:mb-0">Resnvest</div>
      <div className="flex items-center space-x-4">
        <FaBell className="text-2xl" />
        <div className="flex items-center">
          <FaUserCircle className="text-3xl" />
          <span className="ml-2 hidden sm:block">User</span>
        </div>
      </div>
    </div>
  );
}
