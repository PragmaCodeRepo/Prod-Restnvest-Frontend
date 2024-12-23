import React, { useState, useEffect } from "react";
import BaseURL from "../Components/ApiConfig/BaseURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddChildForm = ({ onChildAdded }) => {
  const [childName, setChildName] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [imageFile, setImageFile] = useState(null); // State to store image file
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const [childList, setChildList] = useState([]); // State to store child data from API

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const token = localStorage.getItem("AUTH_ACCESS_TOKEN"); // Use updated token logic

        if (!token) {
          toast.error("You are not authorized. Please log in.");
          return;
        }

        const response = await fetch(`${BaseURL}/api/children/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setChildList(data);
        } else {
          console.error("Failed to fetch child data");
        }
      } catch (error) {
        console.error("Error fetching child data:", error);
      }
    };

    fetchChildren();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const token = localStorage.getItem("AUTH_ACCESS_TOKEN"); // Use updated token logic

      if (!token) {
        toast.error("You are not authorized. Please log in.");
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("name", childName);
      formData.append("monthly_contribution", parseFloat(monthlyContribution)); // Ensure number type
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const response = await fetch(`${BaseURL}/api/children/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const newChild = await response.json();
        console.log(newChild)
        onChildAdded(newChild); // Notify parent of the new child
        setChildName("");
        setMonthlyContribution("");
        setImageFile(null);
        toast.success("Child added successfully!");
      } else if (response.status === 401) {
        toast.error("Session expired. Please log in again.");
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Failed to add child.");
      }
    } catch (error) {
      console.error("Error creating child:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading
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
      <form className="bg-white p-6 rounded shadow-md" onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4">Add Child</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Child Name</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            placeholder="Enter child name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Monthly Contribution</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            placeholder="Enter monthly contribution"
            min="0"
            required
          />
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
          disabled={loading} // Disable button while loading
        >
          {loading ? "Adding..." : "Add Child"}
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-8 mb-4">Children List</h2>
      <ul>
        {childList.map((child) => (
          <li key={child.id} className="mb-4 border p-4 rounded">
            <img 
              src={`${BaseURL}${child.image}`} 
              alt={child.name} 
              className="w-16 h-16 object-cover rounded-full mb-2" 
            />
            <p><strong>Name:</strong> {child.name}</p>
            <p><strong> Contribution:</strong> ${child.monthly_contribution}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddChildForm;
