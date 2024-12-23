import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import kidImage from '../assets/boy.jpg'; // Update the image path

const GivenSection = () => {
  useEffect(() => {
    const getChartOptions = () => ({
      series: [75, 25], // Example percentages for given and remaining
      colors: ['#1C64F2', '#16BDCA'], // Blue and Cyan
      chart: {
        height: 320,
        width: '100%',
        type: 'donut',
      },
      stroke: {
        colors: ['transparent'],
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: 'Inter, sans-serif',
                offsetY: 20,
              },
              total: {
                showAlways: true,
                show: true,
                label: 'Given',
                fontFamily: 'Inter, sans-serif',
                formatter: function (w) {
                  const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                  return `$${sum}`;
                },
              },
              value: {
                show: true,
                fontFamily: 'Inter, sans-serif',
                offsetY: -20,
                formatter: function (value) {
                  return `$${value}`;
                },
              },
            },
            size: '80%',
          },
        },
      },
      grid: {
        padding: {
          top: -2,
        },
      },
      labels: ['Given', 'Remaining'],
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'bottom',
        fontFamily: 'Inter, sans-serif',
      },
    });

    const chartElement = document.getElementById('given-donut-chart');
    if (chartElement) {
      const chart = new ApexCharts(chartElement, getChartOptions());
      chart.render();

      // Cleanup
      return () => chart.destroy();
    }
  }, []);

  return (
    <div className="container mx-auto my-9">
      <div className="flex flex-row items-baseline">
        <h1 className="text-2xl font-semibold">Given</h1>
        <button className="ml-10 border-none bg-cyan-500 tracking-widest text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
          Give
        </button>
      </div>
      <div className="flex flex-row justify-between mt-5">
        {/* Chart Section */}
        <div>
          <div className="py-6" id="given-donut-chart"></div>
        </div>

        {/* Card Section */}
        <div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={kidImage} alt="Kid" />
            </a>
            <div className="p-5 bg-slate-200 rounded-b-3xl">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semi-bold tracking-tight text-customBlue dark:text-white">
                  Joshua
                </h5>
              </a>
              <div className="flex flex-row justify-between items-baseline">
                <p className="mb-3 font-bold text-2xl text-[#3892BB] dark:text-gray-400">$30</p>
                <span className="flex items-center text-sm rounded-full text-cyan-600 font-bold text-xl">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 6L18 18H6L12 6Z" fill="currentColor" />
                  </svg>
                  <span>+$10</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={kidImage} alt="Kid" />
          </a>
          <div className="p-5 bg-slate-200 rounded-b-3xl">
            <a href="#">
              <h5 className="mb-2 text-2xl font-semi-bold tracking-tight text-customBlue dark:text-white">
                Ellie
              </h5>
            </a>
            <div className="flex flex-row justify-between items-baseline">
              <p className="mb-3 font-bold text-2xl text-[#3892BB] dark:text-gray-400">$23,900</p>
              <span className="flex items-center text-sm rounded-full text-cyan-600 font-bold text-xl">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 6L18 18H6L12 6Z" fill="currentColor" />
                </svg>
                <span>+$18,099</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GivenSection;
