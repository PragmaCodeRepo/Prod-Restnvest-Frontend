import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import BASEURL from "../Components/ApiConfig/BaseURL";
import "react-toastify/dist/ReactToastify.css";

const SellStockForm = ({ stock, onClose, onSell }) => {
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSell = async () => {
    if (!quantity || quantity <= 0) {
      setError("Please enter a valid quantity.");
      return;
    }

    if (quantity > stock.quantity) {
      setError("You cannot sell more than the available quantity.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("AUTH_ACCESS_TOKEN");
      const response = await fetch(`${BASEURL}/api/sell_stock/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ stock_ticker: stock.stock_ticker, quantity }),
      });
      const result = await response.json();

      if (response.ok) {
        toast.success("Stock sold successfully!", { position: "top-center" });
        onSell(quantity); // Update the UI after a successful sell
        onClose(); // Close the form
      } else {
        toast.error(result.error || "Something went wrong.", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("An error occurred while selling the stock.", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <ToastContainer position="top-center" autoClose={5000} />
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Sell {stock.company}
        </h2>

        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-medium mb-2"
          >
            Quantity (Available: {stock.quantity})
          </label>
          <input
            id="quantity"
            type="number"
            min="1"
            max={stock.quantity}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter quantity to sell"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handleSell}
            disabled={loading}
            className={`px-4 py-2 font-medium text-white rounded-md ${
              loading
                ? "bg-teal-400 cursor-not-allowed"
                : "bg-teal-500 hover:bg-teal-600"
            }`}
          >
            {loading ? "Processing..." : "Sell Stock"}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 font-medium text-white bg-red-300 hover:bg-red-400 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellStockForm;
