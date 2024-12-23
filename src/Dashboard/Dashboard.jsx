import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Navbar from "../Components/Navbar";
import PortfolioChart from "../Components/PortfolioChart";
import Section1 from "../Components/Section1";
import AccountSection from "../Components/AccountSection";
import Givers from "../Components/Givers";
import GivenSection from "../Components/GivenSection";
import YourBusinesses from "../Components/YourBusinesses";
import Holdings from "../Components/Holdings";
import CompanyOwnership from "../Components/CompanyOwnership";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="dashboard">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main content */}
      <main className="dashboard-content mt-10 pt-20">
        {/* User Info */}
        <div className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-lg mb-6">
          <h1 className="text-lg font-bold">Welcome, {user?.username || "User"}!</h1>
          <div className="flex items-center space-x-4">
            {/* <p className="text-sm">Balance: $10,000</p> */}
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Portfolio Chart */}
        <section className="dashboard-section chart-section">
          <PortfolioChart />
        </section>

        {/* Information sections */}
        <section className="dashboard-section">
          <Section1 />
        </section>

        <section className="dashboard-section">
          <AccountSection />
        </section>

        <section className="dashboard-section">
          <Givers />
        </section>

        <section className="dashboard-section">
          {/* <GivenSection /> */}
        </section>

        <section className="dashboard-section">
          <CompanyOwnership/>
        </section>

        <section className="dashboard-section">
          <Holdings />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
