import React, { useState } from "react";
import "./ForgotPassword.css";
import { Link} from "react-router-dom";

const PlantImage = () => (
  <div
    className="flex flex-col justify-center items-center p-6 bg-zinc-100"
    style={{ width: "20rem" }}
  >
    <h2 className="text-2xl font-bold text-green-800 mb-4">Clean & Green</h2>
    <img
      src="images/703b2f6803273e0b15898a7e18b647ff.png"
      alt="Plant"
      className="w-48 h-48 object-cover rounded-lg"
    />
  </div>
);

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
 

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError("");
    setMessage("");

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://clean-green-agriculture.vercel.app/auth/forgetPasswordCode",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setMessage("Check your email for the reset link!");
        setEmail("");
      } else {
        setEmailError(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      setEmailError("Something went wrong. Please try again.");
      console.error("An error occurred:", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
    setMessage("");
  };

  return (
    <div
      className="flex flex-col justify-center p-8 bg-green-700 text-white rounded-lg shadow-lg"
      style={{ width: "35rem" }}
    >
      <h2 className="text-2xl font-bold mb-4">Forget Password</h2>
      <p className="text-lg mb-2">Don't worry about your account</p>
      <p className="text-md mb-6">
        Enter your Email to get a link to reset your password.
      </p>
      <label htmlFor="email" className="text-sm mb-2">
        Email
      </label>
      <div className="relative">
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={`w-full p-2 focus:border-zinc-500 ${
            emailError ? "border-red-500" : "border-zinc-300"
          }`}
          placeholder="Write your email"
        />
        <span className="absolute right-2 top-2 text-zinc-500 cursor-pointer"></span>
      </div>
      {emailError && <p className="error-message">{emailError}</p>}
      {message && <p className="success-message">{message}</p>}
      <button
        className="text-green-800 border-none py-2 px-4 rounded-lg mb-4"
        style={{ cursor: loading ? "not-allowed" : "pointer", border: "none" }}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Sending..." : "Reset my Password"}
      </button>
      <p className="text-center text-sm">Check your email!</p>
      <p className="text-center text-sm mt-2">
        <Link to={`/login`} className="underline">
          Go back to login page?
        </Link>
      </p>
    </div>
  );
};

const ForgetPasswordPage = () => (
  <div className="flex justify-center items-center min-h-screen bg-zinc-100">
    <div className="flex flex-row bg-white shadow-lg rounded-lg overflow-hidden">
      <PlantImage />
      <ForgetPasswordForm />
    </div>
  </div>
);

export default ForgetPasswordPage;
