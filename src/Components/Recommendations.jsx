// src/components/Recommendations.js

import React from 'react';

const recommendedStocks = [
  { name: 'MSFT', action: 'Buy' },
  { name: 'NFLX', action: 'Sell' },
  { name: 'AMZN', action: 'Buy' },
];

export default function Recommendations() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Recommended Stocks</h2>
      <ul>
        {recommendedStocks.map((stock, index) => (
          <li key={index} className="p-2 border-b border-gray-700 flex justify-between text-xs md:text-base">
            {stock.name} <span>{stock.action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
