import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext"; // Ensure this path is correct
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgIntroMobile from "../assets/books_bg.png";
import logo from "../assets/logo.png";

const Login = () => {
  const { login } = useContext(AuthContext); // Access the login function from AuthContext
  const [formData, setFormData] = useState({ username: "", password: "" });

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;

    if (!username || !password) {
      toast.error("Please fill in both fields.");
      return;
    }

    const result = await login(username, password);

    if (result.success) {
      toast.success("Logged in successfully!");
    } else {
      toast.error(result.message || "Login failed.");
    }
  };

  return (
    <div className="Login">
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
            <h1 className="text-white text-3xl font-bold mb-2">Invest. Give. Live.</h1>
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
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="bg-[#f0f0f0] text-gray-800 border border-white rounded-full p-4 w-full placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-[#3892BB] hover:bg-blue-700 cursor-pointer font-semibold text-white py-3 px-6 rounded-full w-full"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
