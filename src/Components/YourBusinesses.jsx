import React, { useState } from 'react';

const YourBusinesses = () => {
  const [selectedYear, setSelectedYear] = useState('2024'); // Default selected year

  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

  const getColumnClasses = (year) =>
    selectedYear === year ? 'bg-[#3892BB] text-white' : '';

  const getCellClasses = (year) =>
    selectedYear === year ? 'text-[#3892BB] font-bold' : 'text-gray-600';

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semi-bold">Your Businesses</h1>
        <p className="text-gray-600 mt-2">
          The companies you own are growing earnings slower than the general market at{' '}
          <span className="text-[#3892BB] font-bold">2%</span> versus{' '}
          <span className="text-[#3892BB] font-bold">3%</span>, which implies that if people in the stock market still
          pay the same multiple for your companies and the rest, then you risk the value of the stocks you chose{' '}
          <span className="text-red-500 font-bold">not growing as fast</span> as the benchmark SP500.
        </p>
      </div>

      {/* Income Table */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-[#3892BB] mb-4">Income</h2>
        <div className="overflow-x-auto border border-gray-300 rounded-lg">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2"> </th>
                {['2024', '2023', '2022'].map((year) => (
                  <th
                    key={year}
                    className={`px-4 py-2 cursor-pointer ${getColumnClasses(
                      year
                    )}`}
                    onClick={() => handleYearClick(year)}
                  >
                    {year}
                  </th>
                ))}
                <th className="px-4 py-2">Growth</th>
                <th className="px-4 py-2">SP500</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Revenue', values: ['$35,020', '$31,715', '$29,000'], growth: '+21%', sp500: '+16%' },
                { label: 'Profit', values: ['$10,020', '$9,014', '$7,710'], growth: '+13%', sp500: '+12%' },
                { label: 'Gross Margins', values: ['40%', '38%', '35%'], growth: '+2%', sp500: '+3%' },
                { label: 'Net Margins', values: ['29%', '29%', '26%'], growth: '+2%', sp500: '+3%' },
              ].map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 font-semibold">{row.label}</td>
                  {row.values.map((value, i) => (
                    <td key={i} className={`px-4 py-2 ${getCellClasses(['2024', '2023', '2022'][i])}`}>
                      {value}
                    </td>
                  ))}
                  <td className="px-4 py-2 text-green-500 font-bold">{row.growth}</td>
                  <td className="px-4 py-2 text-gray-600">{row.sp500}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Balance Sheet Table */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-[#3892BB] mb-4">Balance Sheet</h2>
        <div className="overflow-x-auto border border-gray-300 rounded-lg">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2"> </th>
                {['2024', '2023', '2022'].map((year) => (
                  <th
                    key={year}
                    className={`px-4 py-2 cursor-pointer ${getColumnClasses(
                      year
                    )}`}
                    onClick={() => handleYearClick(year)}
                  >
                    {year}
                  </th>
                ))}
                <th className="px-4 py-2">Growth</th>
                <th className="px-4 py-2">SP500</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: 'Assets', values: ['$70,020', '$62,000', '$55,000'], growth: '+21%', sp500: '+16%' },
                { label: 'Liabilities', values: ['$12,000', '$12,000', '$11,000'], growth: '0%', sp500: '0%' },
                { label: 'Equity', values: ['$58,000', '$50,000', '$47,000'], growth: '+15%', sp500: '+9%' },
              ].map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 font-semibold">{row.label}</td>
                  {row.values.map((value, i) => (
                    <td key={i} className={`px-4 py-2 ${getCellClasses(['2024', '2023', '2022'][i])}`}>
                      {value}
                    </td>
                  ))}
                  <td className="px-4 py-2 text-green-500 font-bold">{row.growth}</td>
                  <td className="px-4 py-2 text-gray-600">{row.sp500}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default YourBusinesses;
