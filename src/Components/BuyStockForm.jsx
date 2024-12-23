import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import BASEURLL from "../Components/ApiConfig/BaseURL";
import "react-toastify/dist/ReactToastify.css";

const BuyStockForm = ({ stock, onClose }) => {
  const { updateUserBalance } = useContext(AuthContext);
  const [quantity, setQuantity] = useState(1);
  const [recipient, setRecipient] = useState("");
  const [contributor, setContributor] = useState("");
  const [children, setChildren] = useState([]);
  const [givers, setGivers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const BASEURL = `${BASEURLL}/api`;

  // Fetch recipients (children) and contributors (givers)
  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const token = localStorage.getItem("AUTH_ACCESS_TOKEN");
        const response = await fetch(`${BASEURL}/children/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setChildren(data);
        } else {
          throw new Error("Failed to fetch recipients.");
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    const fetchGivers = async () => {
      try {
        const token = localStorage.getItem("AUTH_ACCESS_TOKEN");
        const response = await fetch(`${BASEURL}/givers/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setGivers(data);
        } else {
          throw new Error("Failed to fetch contributors.");
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchChildren();
    fetchGivers();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("AUTH_ACCESS_TOKEN");

      if (!recipient || !contributor) {
        toast.error("Please select a recipient and contributor.");
        setLoading(false);
        return;
      }

      const response = await fetch(`${BASEURL}/buy-stock/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          stock_ticker: stock.ticker,
          quantity,
          purchase_price: stock.price,
          recipient,
          contributor,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Successfully purchased the stock!", {
          onClose: () => {
            // Redirect to dashboard after 2 seconds (allows the toast to display)
            navigate("/dashboard");
          },
        });
        updateUserBalance(result.new_balance); // Update balance in AuthContext
      } else {
        toast.error(result.error || "Transaction failed.");
      }
    } catch (error) {
      toast.error("Transaction failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <ToastContainer />
      <h2 className="text-xl font-semibold mb-4">Buy {stock.company}</h2>

      {/* Quantity Input */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Quantity</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Recipient Dropdown */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Recipient</label>
        <select
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Recipient</option>
          {children.map((child) => (
            <option key={child.id} value={child.id}>
              {child.name}
            </option>
          ))}
        </select>
      </div>

      {/* Contributor Dropdown */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Contributor</label>
        <select
          value={contributor}
          onChange={(e) => setContributor(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Contributor</option>
          {givers.map((giver) => (
            <option key={giver.id} value={giver.id}>
              {giver.name}
            </option>
          ))}
        </select>
      </div>

      {/* Submit and Cancel Buttons */}
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className={`bg-teal-500 text-white px-6 py-2 rounded-lg ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Submit"}
        </button>
        <button
          onClick={onClose}
          className="ml-4 bg-gray-500 text-white px-6 py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BuyStockForm;
