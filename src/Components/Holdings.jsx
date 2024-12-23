import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASEURL from "../Components/ApiConfig/BaseURL";
import SellStockForm from "./SellStockForm";

const getCompanyLogoUrl = (companyName) => {
  const knownCompanies = {
    "Tesla, Inc.": "tesla.com",
    "Alphabet Inc.": "abc.xyz",
    "Apple Inc.": "apple.com",
    "Amazon.com, Inc.": "amazon.com",
    "Meta Platforms, Inc.": "facebook.com"
  };

  const domain = knownCompanies[companyName] 
    ? knownCompanies[companyName] 
    : `${companyName.split(' ')[0].toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;

  return `https://logo.clearbit.com/${domain}`;
};

const Holdings = () => {
  const [activeTab, setActiveTab] = useState("Companies"); 
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [showSellForm, setShowSellForm] = useState(false);

  const { user } = useContext(AuthContext);

  const tabs = ["Companies", "Currencies", "Commodities"];

  useEffect(() => {
    const fetchHoldings = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("AUTH_ACCESS_TOKEN");
        const response = await fetch(`${BASEURL}/api/transactions/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          const updatedData = data.map((holding) => ({
            ...holding,
            logo: getCompanyLogoUrl(holding.company)
          }));
          setHoldings(updatedData);
        } else {
          throw new Error("Failed to fetch holdings data.");
        }
      } catch (error) {
        setError(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  const handleSellClick = (stock) => {
    setSelectedStock(stock);
    setShowSellForm(true);
  };

  const handleSellSuccess = (soldQuantity) => {
    setHoldings((prevHoldings) =>
      prevHoldings
        .map((h) =>
          h.stock_ticker === selectedStock.stock_ticker
            ? { ...h, quantity: h.quantity - soldQuantity }
            : h
        )
        .filter((h) => h.quantity > 0)
    );
    setShowSellForm(false);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <ToastContainer />
      <h1 className="text-2xl font-semibold mb-6">Holdings</h1>

      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full font-medium ${
              activeTab === tab ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg border border-dashed border-gray-400 mb-4">
        <Link to="/Screener">
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md font-medium hover:bg-teal-600 cursor-pointer">
            Find stocks to buy
          </button>
        </Link>

        <p className="text-gray-600 text-sm">
          Below are the <span className="font-bold text-gray-800">3YR</span> changes to help you see trends.
        </p>
      </div>

      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-500"></div>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300 rounded-lg text-sm">
            <thead className="bg-gray-100">
              <tr className="bg-[#3892BB] text-white font-light">
                <th className="border border-gray-300 px-4 py-2">Company</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Stock Value</th>
                <th className="border border-gray-300 px-4 py-2">Revenue</th>
                <th className="border border-gray-300 px-4 py-2">Profit</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {holdings.map((holding, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold flex items-center space-x-2">
                    <img
                      src={holding.logo}
                      alt={holding.company}
                      className="w-8 h-8 rounded-full"
                      onError={(e) => (e.target.src = 'https://via.placeholder.com/40')}
                    />
                    <div>
                      {holding.company} <br />
                      <span className="text-gray-500 text-xs">
                        Ticker: {holding.stock_ticker}
                      </span>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {holding.quantity.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${holding.total_value.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${holding.revenue.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${holding.profit.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleSellClick(holding)}
                      className="bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600"
                    >
                      Sell
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showSellForm && selectedStock && (
        <SellStockForm
          stock={selectedStock}
          onClose={() => setShowSellForm(false)}
          onSell={(soldQuantity) => handleSellSuccess(soldQuantity)}
        />
      )}
    </div>
  );
};

export default Holdings;
