import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgIntroMobile from "../assets/books_bg.png";
import logo from "../assets/logo.png";

const Register = () => {
  const { signup } = useContext(AuthContext);
  const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    if (!username || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    if (!validatePassword(password)) {
      toast.error("Password must be at least 8 characters long and contain at least one letter and one number.");
      return;
    }

    const result = await signup(username, email, password);

    if (result.success) {
      toast.success("Signup successful! Redirecting to login...");
    } else {
      toast.error(result.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="Signup">
      <ToastContainer />
      <div
        className="lg:min-h-screen min-h-screen font-poppins bg-cover overflow-hidden lg:flex justify-center items-center py-24"
        style={{
          position: "relative",
          backgroundImage: `url(${bgIntroMobile})`,
          backgroundColor: "#23293D",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-85"></div>
        <div className="container relative z-20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <img src={logo} alt="Logo" className="w-25 h-16 mx-auto mb-4" />
            <h1 className="text-white text-3xl font-bold mb-2">Join Us Today!</h1>
          </div>

          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6 text-white text-center">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="bg-[#f0f0f0] text-gray-800 border border-white rounded-full p-4 w-full placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-[#f0f0f0] text-gray-800 border border-white rounded-full p-4 w-full placeholder-gray-400"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="bg-[#f0f0f0] text-gray-800 border border-white rounded-full p-4 w-full placeholder-gray-400"
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="bg-[#f0f0f0] text-gray-800 border border-white rounded-full p-4 w-full placeholder-gray-400"
              />
              <p className="text-xs text-gray-300">
               Note: Password must be at least 8 characters long, contain at least one letter and one number.
                
              </p>
              <button
                type="submit"
                className="bg-[#3892BB] hover:bg-blue-700 cursor-pointer font-semibold text-white py-3 px-6 rounded-full w-full"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
