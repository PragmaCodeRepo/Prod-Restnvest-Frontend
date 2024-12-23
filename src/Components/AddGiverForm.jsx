import React, { useState, useEffect } from "react";
import BaseURL from "../Components/ApiConfig/BaseURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddGiverForm = ({ onGiverAdded }) => {
  const [childList, setChildList] = useState([]);
  const [giverName, setGiverName] = useState("");
  const [childId, setChildId] = useState("");
  const [contributionAmount, setContributionAmount] = useState("");
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const token = localStorage.getItem("AUTH_ACCESS_TOKEN");
        const response = await fetch(`${BaseURL}/api/children/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setChildList(data);
        } else {
          console.error("Failed to fetch children");
        }
      } catch (error) {
        console.error("Error fetching children:", error);
      }
    };

    fetchChildren();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("AUTH_ACCESS_TOKEN");

      const formData = new FormData();
      formData.append("name", giverName);
      formData.append("contribution_amount", contributionAmount);
      formData.append("child", childId);
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const response = await fetch(`${BaseURL}/api/givers/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const newGiver = await response.json();
        onGiverAdded(newGiver);
        setGiverName("");
        setChildId("");
        setContributionAmount("");
        setImageFile(null);
        toast.success("Giver added successfully!");
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to add giver.");
      }
    } catch (error) {
      console.error("Error adding giver:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Add Giver</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700">Giver Name</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={giverName}
            onChange={(e) => setGiverName(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Contribution Amount</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            value={contributionAmount}
            onChange={(e) => setContributionAmount(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Select Child</label>
          <select
            className="w-full border rounded p-2"
            value={childId}
            onChange={(e) => setChildId(e.target.value)}
            required
          >
            <option value="">Select Child</option>
            {childList.map((child) => (
              <option key={child.id} value={child.id}>
                {child.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full border rounded p-2"
            onChange={handleImageChange}
          />
        </div>
        
        <button
          type="submit"
          className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-700"
        >
          Add Giver
        </button>
      </form>
    </div>
  );
};

export default AddGiverForm;
