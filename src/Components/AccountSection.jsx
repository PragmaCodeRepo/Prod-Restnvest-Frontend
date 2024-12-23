import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import AddChildForm from "./AddChildForm";
import BaseURL from "../Components/ApiConfig/BaseURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import kidImage from "../assets/person1.png";
import user from "../assets/user.png";

const AccountSection = () => {
  const [children, setChildren] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const { logout } = useContext(AuthContext);

  // Fetch children from the API
  const fetchChildren = async () => {
    try {
      const token = localStorage.getItem("AUTH_ACCESS_TOKEN");

      if (!token) {
        console.error("No access token found. Please log in again.");
        alert("Your session has expired. Please log in.");
        logout();
        return;
      }

      const response = await fetch(`${BaseURL}/api/children/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setChildren(data);
      } else if (response.status === 401) {
        console.error("Unauthorized: Token expired or invalid.");
        alert("Your session has expired. Please log in.");
        logout();
      } else {
        console.error("Error fetching children:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching children:", error);
    }
  };

  useEffect(() => {
    fetchChildren();
  }, []);

  // Handle when a child is successfully added
  const handleChildAdded = (newChild) => {
    setChildren((prevChildren) => [...prevChildren, newChild]);
    setShowForm(false);
    toast.success("Child added successfully!");
  };

  // Handle child deletion
  const handleDeleteChild = async (childId) => {
    try {
      const token = localStorage.getItem("AUTH_ACCESS_TOKEN");

      if (!token) {
        console.error("No access token found. Please log in again.");
        alert("Your session has expired. Please log in.");
        logout();
        return;
      }

      const response = await fetch(`${BaseURL}/api/children/${childId}/`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setChildren((prevChildren) => prevChildren.filter((child) => child.id !== childId));
        toast.success("Child deleted successfully!");
      } else if (response.status === 401) {
        console.error("Unauthorized: Token expired or invalid.");
        alert("Your session has expired. Please log in.");
        logout();
      } else {
        console.error("Error deleting child:", response.statusText);
        toast.error("Failed to delete child. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting child:", error);
      toast.error("Failed to delete child. Please try again.");
    }
  };

  return (
    <div className="container mx-auto my-9">
      <ToastContainer />
      <div className="flex flex-row items-baseline mb-6">
        <h1 className="text-2xl font-semibold">Accounts</h1>
        <button
          onClick={() => setShowForm(true)}
          className="ml-10 border-none bg-cyan-500 tracking-widest text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add
        </button>
      </div>

      {showForm && (
        <div className="mb-6">
          <AddChildForm onChildAdded={handleChildAdded} />
        </div>
      )}

      <div className="flex flex-wrap justify-around">
        {/* Main Account Card */}
        <div
          className="w-64 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <img className="rounded-t-lg w-full h-40 object-cover" src={user} alt="User" />
          <div className="p-5 bg-slate-200 rounded-b-3xl">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-customBlue dark:text-white">
              User Account
            </h5>
            <p className="mb-3 font-bold text-2xl text-[#3892BB] dark:text-gray-400">
              $10,000
            </p>
            <span className="mb-3 font-bold text-sm text-gray-600 dark:text-gray-400">
              Main Account
            </span>
            <button 
              onClick={() => toast.info("Main account cannot be deleted.")}
              className="mt-3 w-full bg-gray-400 text-white py-2 rounded-lg cursor-not-allowed"
              disabled
            >
              Delete
            </button>
          </div>
        </div>

        {/* Child Account Cards */}
        {children.map((child) => (
          <div
            key={child.id}
            className="w-64 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img 
              className="rounded-t-lg w-full h-40 object-cover" 
              src={child.image ? `${BaseURL}${child.image}` : kidImage} 
              alt={child.name} 
            />
            <div className="p-5 bg-slate-200 rounded-b-3xl">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-customBlue dark:text-white">
                {child.name}
              </h5>
              <p className="mb-3 font-bold text-2xl text-[#3892BB] dark:text-gray-400">
                ${parseFloat(child.balance).toFixed(2)}
              </p>
              <span className="mb-3 font-bold text-sm text-gray-600 dark:text-gray-400">
                + ${parseFloat(child.monthly_contribution).toFixed(2)} monthly
              </span>
              <button 
                onClick={() => handleDeleteChild(child.id)} 
                className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountSection;
