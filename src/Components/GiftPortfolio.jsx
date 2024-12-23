import React from 'react';
import Chart from 'react-apexcharts';

const GiftPortfolio = () => {
  // Bar Chart Configuration
  const chartOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        distributed: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#00A9B5'],
    xaxis: {
      categories: Array.from({ length: 24 }, (_, i) => `M${i + 1}`), // Months as categories
      labels: {
        style: {
          fontSize: '12px',
          colors: '#666',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px',
          colors: '#666',
        },
      },
    },
    grid: {
      show: true,
      borderColor: '#eee',
    },
    tooltip: {
      enabled: true,
    },
  };

  const chartSeries = [
    {
      name: 'Gifts Value',
      data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 1000) + 500), // Random data
    },
  ];

  return (
    <div className="container mx-auto px-6 py-8 mt-10">
      {/* Header Statistics */}
      <div className="flex justify-between items-center mb-6">
        {/* Total Gifts */}
        <div className="bg-white rounded-lg shadow-md p-4 text-center flex-1 mr-4">
          <h3 className="text-lg font-semibold text-gray-500">Total Gifts</h3>
          <p className="text-2xl font-bold text-gray-800">$5,031</p>
          <p className="text-green-500 text-sm font-semibold">+5.4% y/y</p>
        </div>
        {/* Gift Value Growth */}
        <div className="bg-white rounded-lg shadow-md p-4 text-center flex-1 ml-4">
          <h3 className="text-lg font-semibold text-gray-500">Gift Value Growth</h3>
          <p className="text-2xl font-bold text-gray-800">$9,001</p>
          <p className="text-green-500 text-sm font-semibold">+6.5% y/y</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <Chart options={chartOptions} series={chartSeries} type="bar" height={200} />
        {/* Time Range Selector */}
        <div className="flex justify-center mt-4 space-x-4">
          {['1M', '3M', '1Y', '3Y', '5Y', '10Y'].map((range, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium rounded ${
                range === '1Y'
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Description and CTA */}
      <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center">
        <p className="text-lg text-gray-700 font-medium mb-4">
          Setup your own investing account, find valuable companies at a discount and build your own personal wealth
        </p>
        <button className="bg-teal-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-teal-600">
          Get started
        </button>
      </div>
    </div>
  );
};

export default GiftPortfolio;
