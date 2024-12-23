// src/components/StatsCard.js

import React from 'react';

export default function StatsCard({ title, value, percentage, icon }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="p-2 rounded-full bg-gray-700">{icon}</div>
          <div className="ml-4">
            <p className="text-sm text-gray-400">{title}</p>
            <h3 className="text-2xl font-semibold">{value}</h3>
          </div>
        </div>
        <p className={`text-sm ${percentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {percentage > 0 ? '+' : ''}{percentage}%
        </p>
      </div>
    </div>
  );
}
