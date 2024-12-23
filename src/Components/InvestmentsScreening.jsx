import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BASEURL from "../Components/ApiConfig/BaseURL";
import "react-toastify/dist/ReactToastify.css";
import BuyStockForm from "./BuyStockForm";

const getCompanyLogoUrl = (companyName) => {
  const knownCompanies = {
    Tesla: "tesla.com",
    Apple: "apple.com",
    Nvidia: "nvidia.com",
    Amazon: "amazon.com",
    Meta: "facebook.com",
    Alphabet: "abc.xyz",
  };

  const domain = knownCompanies[companyName]
    ? knownCompanies[companyName]
    : `${companyName
        .split(" ")[0]
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")}.com`;

  return `https://logo.clearbit.com/${domain}`;
};

const InvestmentScreening = () => {
  const [activeTab, setActiveTab] = useState("Companies");
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showBuyForm, setShowBuyForm] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const tabs = ["Companies", "Currencies", "Commodities"];

  const defaultSymbols = [
    { symbol: "TSLA", company: "Tesla" },
    { symbol: "AAPL", company: "Apple" },
    { symbol: "NVDA", company: "Nvidia" },
  ];

  const fetchStockData = async (symbol, company) => {
    try {
      const response = await fetch(
        `${BASEURL}/api/get_stock_data/?symbol=${symbol}`
      );
      const result = await response.json();

      if (response.ok) {
        return {
          logo: getCompanyLogoUrl(company),
          company,
          ticker: symbol,
          price: result.closing_price,
          revenue: result.revenue !== "N/A" ? result.revenue : "N/A",
          profit: result.profit !== "N/A" ? result.profit : "N/A",
          yearsToBreakeven:
            result.years_to_breakeven !== "N/A"
              ? result.years_to_breakeven
              : "N/A",
        };
      } else {
        throw new Error(result.error || "Failed to fetch stock data.");
      }
    } catch (err) {
      toast.error("Error fetching stock data.");
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const results = [];
      for (const { symbol, company } of defaultSymbols) {
        const stockData = await fetchStockData(symbol, company);
        if (stockData) {
          results.push(stockData);
        }
      }
      setData(results);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleStockClick = (symbol) => {
    navigate(`/stock/${symbol}`);
  };

  const handleSearch = async () => {
    if (!searchQuery) return;

    setLoading(true);
    const searchResult = await fetchStockData(
      searchQuery.toUpperCase(),
      searchQuery.toUpperCase()
    );

    if (searchResult) {
      setData([searchResult, ...data]);
    }
    setLoading(false);
  };

  const handleBuyClick = (e, stock) => {
    e.stopPropagation();
    setSelectedStock(stock);
    setShowBuyForm(true);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <ToastContainer />
      <h1 className="text-3xl font-bold mb-6 text-[#3892BB]">
        Investment Screener
      </h1>

      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full font-medium ${
              activeTab === tab
                ? "bg-[#3892BB] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mb-6 flex space-x-4">
        <input
          type="text"
          placeholder="Search for a stock (e.g., TSLA, AAPL)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          onClick={handleSearch}
          className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600"
        >
          Search
        </button>
      </div>

      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-500"></div>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <table className="min-w-full border border-gray-300 text-left">
            <thead className="bg-[#3892BB] text-white ">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Company</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Revenue</th>
                <th className="border border-gray-300 px-4 py-2">Profit</th>
                <th className="border border-gray-300 px-4 py-2">
                  Years to Breakeven
                </th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((stock, index) => (
                <tr
                  key={index}
                  onClick={() => handleStockClick(stock.ticker)}
                  className="hover:bg-gray-50 cursor-pointer"
                >
                  <td className="flex items-center space-x-3 px-4 py-2 border border-gray-300">
                    <img
                      src={stock.logo}
                      alt={stock.company}
                      className="w-10 h-10 rounded"
                      onError={(e) =>
                        (e.target.src = "https://via.placeholder.com/40")
                      }
                    />
                    <div>
                      <p className="font-bold text-gray-800">{stock.company}</p>
                      <p className="text-sm text-gray-500">
                        Ticker: {stock.ticker}
                      </p>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${parseFloat(stock.price).toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${stock.revenue}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${stock.profit}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {stock.yearsToBreakeven}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={(e) => handleBuyClick(e, stock)}
                      className="bg-teal-500 text-white px-3 py-1 rounded-md hover:bg-teal-600"
                    >
                      Buy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showBuyForm && selectedStock && (
        <BuyStockForm
          stock={selectedStock}
          onClose={() => setShowBuyForm(false)}
        />
      )}
    </div>
  );
};

export default InvestmentScreening;
