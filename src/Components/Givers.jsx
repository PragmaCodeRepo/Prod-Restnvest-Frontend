import React, { useState, useEffect } from "react"; 
import AddGiverForm from "./AddGiverForm"; 
import { Doughnut } from "react-chartjs-2"; 
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from "chart.js"; 
import BaseURL from "../Components/ApiConfig/BaseURL";

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const Givers = () => {
  const [givers, setGivers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchGivers = async () => {
    try {
      const token = localStorage.getItem("AUTH_ACCESS_TOKEN");
      const response = await fetch(`${BaseURL}/api/givers/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setGivers(data);
      } else {
        console.error("Failed to fetch givers");
      }
    } catch (error) {
      console.error("Error fetching givers:", error);
    }
  };

  const handleGiverAdded = (newGiver) => {
    setGivers((prevGivers) => [...prevGivers, newGiver]);
    setShowForm(false);
  };

  const handleDeleteGiver = async (giverId) => {
    try {
      const token = localStorage.getItem("AUTH_ACCESS_TOKEN");
      const response = await fetch(`${BaseURL}/api/givers/${giverId}/`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setGivers((prevGivers) => prevGivers.filter((giver) => giver.id !== giverId));
      } else {
        console.error("Failed to delete giver");
      }
    } catch (error) {
      console.error("Error deleting giver:", error);
    }
  };

  const chartData = {
    labels: givers.map((giver) => giver.name),
    datasets: [
      {
        data: givers.map((giver) => parseFloat(giver.contribution_amount)),
        backgroundColor: ["#1C64F2", "#16BDCA", "#20B2AA", "#FFD700", "#FF4500"],
        hoverBackgroundColor: ["#1C64F2", "#16BDCA", "#20B2AA", "#FFD700", "#FF4500"],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw}`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  useEffect(() => {
    fetchGivers();
  }, []);

  return (
    <div className="container mx-auto my-9">
      <div className="flex flex-row items-baseline">
        <h1 className="text-3xl font-bold text-gray-800">Givers</h1>
        <button
          onClick={() => setShowForm(true)}
          className="ml-10 border-none bg-cyan-600 text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-full text-sm px-6 py-3"
        >
          Add
        </button>
      </div>

      {showForm && <AddGiverForm onGiverAdded={handleGiverAdded} />}

      <div className="flex flex-row justify-between mt-5">
        <div className="flex-1">
          <div className="py-6" style={{ width: "100%", height: "400px" }}>
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>

        <div className="flex flex-wrap gap-20 w-full md:w-2/3">
          {givers.map((giver) => (
            <div
              key={giver.id}
              className="w-64 bg-slate-200 border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" className="block">
                <img
                  className="rounded-t-lg w-full h-40 object-cover"
                  src={`${BaseURL}${giver.image}`} 
                  alt={giver.name}
                />
              </a>
              <div className="p-5 bg-slate-200 rounded-b-3xl h-max">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-customBlue dark:text-white">{giver.name}</h5>
                </a>
                <div className="flex flex-col justify-between items-baseline">
                  <p className="mb-3 font-bold text-2xl text-[#3892BB] dark:text-gray-400">${giver.contribution_amount}</p>
                  
                  <span className="flex items-center text-sm rounded-full text-cyan-600 font-bold">
                    <svg
                      className="w-6 h-6 mr-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 6L18 18H6L12 6Z" fill="currentColor" />
                    </svg>
                    Given to: {giver.child}
                  </span>
                </div>
                <button 
                  onClick={() => handleDeleteGiver(giver.id)} 
                  className="mt-3 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Givers;
