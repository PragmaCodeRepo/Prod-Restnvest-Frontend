// import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthContext";
import Navbar from "./Components/Navbar";
import Footer from "./Pages/Footer";

// Public Pages
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Waitlisted from "./Pages/Waitlisted";
import IntelligentInvesting from "./Pages/IntelligentInvesting";
import AboutRestInvest from "./Pages/AboutRestInvest";

// Dashboard and Features
import Dashboard from "./Dashboard/Dashboard";
import StepsToInvest from "./Pages/StepsToInvest";


// Profile Setup and Gifting
import ProfileSetup from "./Pages/ProfileSetup";
import SetBankInfo from "./Pages/SetBankInfo";
import ChooseRecipient from "./Pages/ChooseRecipient";
import ChooseGift from "./Pages/ChooseGift";
import GiftSend from "./Pages/GiftSend";
import GiversPortfolio from "./Pages/GiversPortfolio";

// Other Pages
import Screener from "./Pages/Screener";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Register from "./Pages/Register";
import StockDetails from "./Components/StockDetails";
import CompanyOwnership from "./Components/CompanyOwnership";
import FAQ from "./Components/FAQ";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        {/* Navbar displayed on all pages */}
        <Navbar />

        {/* Route configurations */}
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route
              path="/"
              element={
                <>
                  <Waitlisted />
                  <IntelligentInvesting />
                  <StepsToInvest />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/aboutus" element={<AboutRestInvest />} />

            {/* Private Routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/gift-profile"
              element={
                // <PrivateRoute>
                  <ProfileSetup />
                // </PrivateRoute>
              }
            />
            <Route
              path="/bankinfo"
              element={
                <PrivateRoute>
                  <SetBankInfo />
                </PrivateRoute>
              }
            />
            <Route
              path="/chooserecipient"
              element={
                <PrivateRoute>
                  <ChooseRecipient />
                </PrivateRoute>
              }
            />
            <Route
              path="/choosegift"
              element={
                <PrivateRoute>
                  <ChooseGift />
                </PrivateRoute>
              }
            />
            <Route
              path="/giftsend"
              element={
                <PrivateRoute>
                  <GiftSend />
                </PrivateRoute>
              }
            />
            <Route
              path="/givers-portfolio"
              element={
                <PrivateRoute>
                  <GiversPortfolio />
                </PrivateRoute>
              }
            />
            <Route
              path="/screener"
              element={
                <PrivateRoute>
                  <Screener />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                
                  <Register/>
                
              }
            />
             <Route
              path="/stock/:symbol"
              element={
                <PrivateRoute>
                  <StockDetails/>
                </PrivateRoute>
              }
            />
            <Route
              path="/companyownership"
              element={
               <CompanyOwnership/>
              }
            />
            <Route
              path="/faq"
              element={
               <FAQ/>
              }
            />
            <Route
              path="/contactus"
              element={
               <ContactUs/>
              }
            />
          </Routes>
        </div>

        {/* Footer displayed on all pages */}
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
