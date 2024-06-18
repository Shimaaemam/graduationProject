import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 5;
  };

  const handleBlur = (field) => {
    if (field === "email" && !validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
    }

    if (field === "password" && !validatePassword(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 5 characters",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({ email: "", password: "" });

    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      return;
    }

    if (!validatePassword(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 5 characters",
      }));
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://clean-green-agriculture.vercel.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      setLoading(false);

      if (response.ok) {
        console.log("Login successful");
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: data.error?.email || "",
          password: data.error?.password || "",
        }));
      }
    } catch (error) {
      setLoading(false);
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="left-section" style={{ width: "15rem" }}>
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Clean & Green
          </h2>
          <img src="/images/703b2f6803273e0b15898a7e18b647ff.png" alt="Plant" />
        </div>
        <div className="right-section" style={{ width: "32rem" }}>
          <h2 className="text-3xl font-bold mb-6">Log in</h2>
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="input"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => handleBlur("email")}
                placeholder="Email"
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="mb-6 relative">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                className="input"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => handleBlur("password")}
                placeholder="Password"
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
              <span className="svg-icon">
                <svg
                  className="h-5 w-5 text-zinc-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12h.01M19.07 4.93a10 10 0 11-14.14 0m14.14 0a10 10 0 01-14.14 0m14.14 0L12 12m0 0L4.93 4.93"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="flex mb-6">
              <label className="checkbox-label flex items-center">
                <input type="checkbox" />
                <span className="remember-me ml-2">Remember me.</span>
              </label>
              <span className="ml-4"></span>
              <Link to={`/forget-password`} className="ml-2" style={{marginLeft : "150px"}}>
                Forget Password?
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="login-button"
                type="submit"
                style={{ cursor: loading ? "not-allowed" : "pointer" }}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </div>
          </form>
          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <Link to={`/signUp`} className="register-link">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
