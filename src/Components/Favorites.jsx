// src/components/Favorites.js

import React from 'react';

const favoriteStocks = ['AAPL', 'GOOGL', 'TSLA', 'AMZN'];

export default function Favorites() {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Favorite Stocks</h2>
      <ul>
        {favoriteStocks.map((stock, index) => (
          <li key={index} className="p-2 border-b border-gray-700 text-xs md:text-base">
            {stock}
          </li>
        ))}
      </ul>
    </div>
  );
}
