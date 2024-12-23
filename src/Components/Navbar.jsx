import React, { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Replace with the correct path to your logo
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext'; // Import the AuthContext for user authentication

const Navbar = () => {
  const { user, isAuthenticated, logout, setUser } = useContext(AuthContext); // Extract user info and logout function from AuthContext
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate('/signup');
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  // Function to simulate dynamic balance update (optional, can be tied to sell/buy logic)
  const updateBalance = (newBalance) => {
    setUser((prevUser) => ({
      ...prevUser,
      balance: newBalance,
    }));
  };

  return (
    <header className="w-full h-[90px] border-b border-gray-700 bg-[#191D32] fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
        {/* Logo Section with Link to Homepage */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-18 h-10" />
          <h1 className="text-xl font-bold tracking-wider text-white ml-2">
            restnvest<span className="text-[#41ADAF]"></span>
          </h1>
        </Link>

        {/* Navigation Menu */}
        <ul
          className={`fixed top-[90px] right-0 w-full h-full bg-[#191D32] flex flex-col items-center space-y-6 pt-10 transition-all duration-300 md:flex md:flex-row md:static md:w-auto md:h-auto md:space-y-0 md:pt-0 md:space-x-8 text-white font-semibold md:space-x-6 ${
            click ? 'block' : 'hidden md:flex'
          }`}
        >
          {isAuthenticated ? (
            <>
              <li className="md:px-0">
                <p className="text-white">Hi, {user?.username}</p>
              </li>
              <li className="md:px-0">
                <p className="text-white">Balance: ${user?.balance?.toFixed(2)}</p>
              </li>
              <li className="md:px-0">
                <button
                  onClick={handleLogout}
                  className="hover:text-[#3892BB] transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="md:px-0">
                <Link to="/login" className="hover:text-[#3892BB] transition">
                  Sign In
                </Link>
              </li>
              <li className="md:px-0">
                <button
                  onClick={handleCreateAccount}
                  className="bg-[#3892BB] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#41ADAF] transition"
                >
                  Create Account
                </button>
              </li>
            </>
          )}
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={handleClick}>
          {click ? (
            <FaTimes size={24} className="text-white" />
          ) : (
            <FaBars size={24} className="text-white" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
