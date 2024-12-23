import React from 'react';
import kidImage from '../assets/boy.jpg';
const YourTreasures = () => {
  const treasures = [
    {
      name: 'Joshua',
      image: kidImage, // Replace with actual image URL
      given: '$30',
      gains: '+$10',
    },
    {
      name: 'Ellie',
      image: kidImage, // Replace with actual image URL
      given: '$23,900',
      gains: '+$18,099',
    },
    {
      name: 'James',
      image: kidImage, // Replace with actual image URL
      given: '$299',
      gains: '+$100',
    },
  ];

  const recurringGivings = [
    {
      gift: '$10 to Joshua',
      frequency: 'Monthly',
      startingOn: '02/01/2024',
      giftsSoFar: '9',
    },
    {
      gift: '$20 to James',
      frequency: 'Monthly',
      startingOn: '06/01/2008',
      giftsSoFar: '196',
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Your Treasures Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Your treasures</h2>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md font-medium hover:bg-teal-600">
            Give
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {treasures.map((treasure, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden flex flex-col items-center p-6"
            >
              <img
                src={treasure.image}
                alt={treasure.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{treasure.name}</h3>
              <p className="text-gray-500 mt-2">{treasure.given}</p>
              <p className="text-teal-500 font-medium text-sm mt-1">{treasure.gains} gains</p>
            </div>
          ))}
        </div>
      </div>

      {/* Your Recurring Giving Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your recurring giving</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-300">Gift</th>
                <th className="px-4 py-2 border border-gray-300">Frequency</th>
                <th className="px-4 py-2 border border-gray-300">Starting on</th>
                <th className="px-4 py-2 border border-gray-300">Gifts given so far</th>
                <th className="px-4 py-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recurringGivings.map((giving, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">{giving.gift}</td>
                  <td className="px-4 py-2 border border-gray-300">{giving.frequency}</td>
                  <td className="px-4 py-2 border border-gray-300">{giving.startingOn}</td>
                  <td className="px-4 py-2 border border-gray-300">{giving.giftsSoFar}</td>
                  <td className="px-4 py-2 border border-gray-300 space-x-2">
                    <button className="bg-pink-500 text-white px-4 py-1 rounded-md hover:bg-pink-600">
                      End
                    </button>
                    <button className="bg-teal-500 text-white px-4 py-1 rounded-md hover:bg-teal-600">
                      Change
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default YourTreasures;
