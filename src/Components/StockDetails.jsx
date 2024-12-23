import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BASEURL from "../Components/ApiConfig/BaseURL";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StockDetails = () => {
  const { symbol } = useParams();
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState("table"); // "table" or "graph"
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStockDetails = async () => {
      try {
        const response = await fetch(
          `${BASEURL}/api/stock_details/${symbol}/`
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Failed to fetch stock details");
        }

        const timeSeries = data.historicalPrices?.["Time Series (Daily)"] || {};
        const formattedPrices = Object.entries(timeSeries).map(
          ([date, priceData]) => ({
            date,
            open: parseFloat(priceData["1. open"]),
            high: parseFloat(priceData["2. high"]),
            low: parseFloat(priceData["3. low"]),
            close: parseFloat(priceData["4. close"]),
            volume: parseInt(priceData["5. volume"]),
          })
        );

        setStockData({
          ...data,
          historicalPrices: formattedPrices,
        });
      } catch (error) {
        console.error("Error fetching stock details:", error);
        setError("Failed to load stock details.");
      } finally {
        setLoading(false);
      }
    };

    fetchStockDetails();
  }, [symbol]);

  if (loading)
    return (
      <p className="text-center text-teal-500 font-semibold">Loading...</p>
    );
  if (error)
    return <p className="text-center text-red-500 font-semibold">{error}</p>;

  // Graph data for Chart.js
  const graphData = stockData?.historicalPrices.slice(0, 20).reverse(); // Latest 20 entries
  const graphLabels = graphData?.map((price) => price.date);
  const openPrices = graphData?.map((price) => price.open);
  const closePrices = graphData?.map((price) => price.close);

  const chartData = {
    labels: graphLabels,
    datasets: [
      {
        label: "Open Price",
        data: openPrices,
        borderColor: "rgba(56, 189, 248, 1)", // Tailwind blue-400
        backgroundColor: "rgba(56, 189, 248, 0.5)",
      },
      {
        label: "Close Price",
        data: closePrices,
        borderColor: "rgba(34, 197, 94, 1)", // Tailwind green-500
        backgroundColor: "rgba(34, 197, 94, 0.5)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-teal-500 hover:text-teal-600 transition font-semibold flex items-center"
      >
        ← Back
      </button>

      <div className="bg-white p-6 shadow-lg rounded-lg mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {stockData.company.toUpperCase()} Details
        </h1>

        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-700">
            📈 Historical Prices
          </h2>
          <button
            className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
            onClick={() =>
              setViewMode(viewMode === "table" ? "graph" : "table")
            }
          >
            {viewMode === "table"
              ? "Switch to Graph View"
              : "Switch to Table View"}
          </button>
        </div>

        {viewMode === "table" ? (
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full text-left text-sm text-gray-500">
              <thead className="bg-teal-100">
                <tr>
                  <th>Date</th>
                  <th>Open</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Close</th>
                  <th>Volume</th>
                </tr>
              </thead>
              <tbody>
                {stockData.historicalPrices.slice(0, 20).map((price, index) => (
                  <tr key={index} className="hover:bg-teal-50">
                    <td>{price.date}</td>
                    <td>${price.open.toFixed(2)}</td>
                    <td>${price.high.toFixed(2)}</td>
                    <td>${price.low.toFixed(2)}</td>
                    <td>${price.close.toFixed(2)}</td>
                    <td>{price.volume.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <Line data={chartData} options={chartOptions} />
        )}

        <h2 className="text-xl font-semibold text-gray-700 mt-10">
          📰 Latest News
        </h2>

        {Array.isArray(stockData.news) && stockData.news.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {stockData.news.map((news, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="font-bold text-gray-800 mb-2">{news.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{news.description}</p>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:underline"
                >
                  Read more →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 mt-4">No news available.</p>
        )}
      </div>
    </div>
  );
};

export default StockDetails;
