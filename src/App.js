import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from './components/Login/Login.jsx';
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.jsx";
import PasswordChangeForm from "./components/ChangePassword/ChangePassword.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import ProductPage from "./components/ProductDetails/ProductDetails.jsx";
import ChangePasswordForm from "./components/ChangePassword/ChangePassword.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<PasswordChangeForm />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/" element={isAuthenticated ? <Navigate to="/product" /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
