import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BASEURL from "../Components/ApiConfig/BaseURL";

export const AuthContext = createContext(); // Export AuthContext

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("AUTH_USER");
    const accessToken = localStorage.getItem("AUTH_ACCESS_TOKEN");

    if (storedUser && accessToken) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch(`${BASEURL}/api/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();

        const userData = { 
          username, 
          balance: data.balance 
        };

        localStorage.setItem("AUTH_USER", JSON.stringify(userData));
        localStorage.setItem("AUTH_ACCESS_TOKEN", data.tokens.access);

        setUser(userData);
        setIsAuthenticated(true);
        navigate("/dashboard");
        return { success: true };
      } else {
        throw new Error("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      return { success: false, message: error.message };
    }
  };

  const signup = async (username, email, password) => {
    try {
      const response = await fetch(`${BASEURL}/api/signup/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        const userData = { 
          username, 
          email, 
          balance: data.balance 
        };

        localStorage.setItem("AUTH_USER", JSON.stringify(userData));
        localStorage.setItem("AUTH_ACCESS_TOKEN", data.tokens.access);

        setUser(userData);
        setIsAuthenticated(true);
        navigate("/login");
        return { success: true };
      } else {
        throw new Error("Signup failed");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      return { success: false, message: error.message };
    }
  };

  const updateUserBalance = (newBalance) => {
    if (user) {
      const updatedUser = { ...user, balance: newBalance };
      setUser(updatedUser);
      localStorage.setItem("AUTH_USER", JSON.stringify(updatedUser));
    }
  };

  const logout = async () => {
    const token = localStorage.getItem("AUTH_ACCESS_TOKEN");

    if (token) {
      await fetch(`${BASEURL}/api/logout/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
    }

    localStorage.removeItem("AUTH_USER");
    localStorage.removeItem("AUTH_ACCESS_TOKEN");

    setUser(null);
    setIsAuthenticated(false);
    navigate("/login");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        signup,
        logout,
        updateUserBalance,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
