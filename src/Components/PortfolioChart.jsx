import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import priceData from '../assets/btcdata.json';
import moment from 'moment';

const PortfolioChart = () => {
  const options = { style: 'currency', currency: 'USD' };
  const numberFormat = new Intl.NumberFormat('en-US', options);

  const configPortfolioChart = {
    chart: {
      height: 500, // Increased height of the chart
      backgroundColor: '#ffffff',
    },
    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: 'datetime',
      labels: {
        style: {
          color: '#555',
        },
      },
    },
    yAxis: {
      labels: {
        formatter: function () {
          return numberFormat.format(this.value);
        },
        style: {
          color: '#555',
        },
      },
      gridLineColor: 'rgba(0, 0, 0, 0.1)',
    },
    tooltip: {
      shared: true,
      formatter: function () {
        return `${numberFormat.format(this.y)}<br/>${moment(this.x).format('MMMM Do YYYY, h:mm A')}`;
      },
      backgroundColor: '#f9f9f9',
      borderColor: '#396399',
      style: {
        color: '#333',
      },
    },
    plotOptions: {
      series: {
        showInNavigator: true,
        gapSize: 6,
        marker: {
          enabled: false,
        },
      },
    },
    series: [
      {
        name: 'Bitcoin Price',
        type: 'spline',
        data: priceData.map(([timestamp, value]) => [timestamp, value]),
        color: '#396399',
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  return (
    <div className="bg-white text-gray-800 p-6">
      {/* Chart Section */}
      <div className="w-full">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType="stockChart"
          options={configPortfolioChart}
        />
      </div>

      {/* Timeline Tab Section */}
      <div className="mt-6 flex justify-between items-center bg-[#3892BB] p-4 rounded-md shadow-md">
        {/* Time Range Buttons */}
        <div className="flex space-x-4">
          {['1M', '3M', '1Y', '3Y', '5Y'].map((label, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm font-medium rounded ${
                label === '1Y'
                  ? 'bg-white text-[#3892BB]00 shadow'
                  : 'text-white bg-[#3892BB] hover:bg-teal-400'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="bg-white text-[#3892BB] px-4 py-2 text-sm font-medium rounded shadow hover:bg-gray-100">
            Earnings
          </button>
          <button className="bg-white text-[#3892BB] px-4 py-2 text-sm font-medium rounded shadow hover:bg-gray-100">
            Earnings Multiple
          </button>
          <button className="border border-white text-white px-4 py-2 text-sm font-medium rounded hover:bg-teal-400">
            Portfolio Value
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioChart;
