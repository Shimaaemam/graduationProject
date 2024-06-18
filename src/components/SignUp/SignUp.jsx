import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://clean-green-agriculture.vercel.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sign up failed. Please try again.");
      }

      const data = await response.json();
      if (data.success) {
        setMessage("Sign up successful!");
      } else {
        setMessage("Sign up failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="page-container">
      <div className="signup-page-container">
        <div className="plant-image-container">
          <h2 className="plant-image-header">Clean & Green</h2>
          <img
            src="/images/703b2f6803273e0b15898a7e18b647ff.png"
            alt="Plant"
            className="plant-image"
            style={{ height: "25rem" }}
          />
        </div>
        <div className="signup-form-container">
          <h2 className="signup-form-header">Sign up</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="form-space">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className={`input-classes ${errors.name ? "input-error" : ""}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            <div className="form-space">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className={`input-classes ${errors.email ? "input-error" : ""}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="form-space">
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className={`input-classes ${
                  errors.password ? "input-error" : ""
                }`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>
            <div className="form-space">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                className={`input-classes ${
                  errors.confirmPassword ? "input-error" : ""
                }`}
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p className="error-message">{errors.confirmPassword}</p>
              )}
            </div>
            <button type="submit" className="button-classes" disabled={loading}>
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </form>
          {message && <p className="signup-form-message">{message}</p>}
          <p className="signup-form-text">
            Already have an account?{" "}
            <Link to="/login" className="signup-form-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
