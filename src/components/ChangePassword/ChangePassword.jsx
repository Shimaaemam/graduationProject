import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import "./ChangePassword.css";

const ChangePasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputClasses =
    "w-full p-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500";
  const buttonClasses =
    "w-full py-2 bg-zinc-200 text-green-800 font-bold rounded-md hover:bg-zinc-300";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setPasswordError("Please fill in both password fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://clean-green-agriculture.vercel.app//auth/resetPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newPassword: newPassword,
            confirmPassword: confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          window.location.href = "/login";
        }, 2000);
      } else {
        setPasswordError("Password reset failed. Please try again.");
      }
    } catch (error) {
      setPasswordError("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-200 p-4">
      <div
        className="flex flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl"
        style={{ width: "50rem" }}
      >
        <div className="p-6 flex flex-col items-center justify-center bg-white">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Clean & Green
          </h2>
          <img
            src="/images/703b2f6803273e0b15898a7e18b647ff.png"
            alt="Plant"
            className="w-48 h-48 object-cover"
          />
        </div>
        <div className="p-6 bg-green-700 text-white flex flex-col justify-center w-full">
          <h2 className="text-2xl font-bold mb-4">Change your Password</h2>
          <p className="mb-6">
            Enter your new password, We're just being extra safe
          </p>
          <form className="space-y-4 w-full" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="new-password"
                className="block text-sm font-medium"
              >
                New Password
              </label>
              <div className="relative mt-1">
                <input
                  type="password"
                  id="new-password"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  className={inputClasses}
                  placeholder="Enter New Password"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium"
              >
                Confirm new password
              </label>
              <div className="relative mt-1">
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={inputClasses}
                  placeholder="Enter Confirmation New Password"
                />
              </div>
            </div>
            {passwordError && (
              <Alert
                variant="danger"
                className="text-center"
                style={{ color: "#721c24" }}
              >
                {passwordError}
              </Alert>
            )}
            {showAlert && (
              <Alert
                variant="success"
                className="text-center"
                style={{
                  backgroundColor: "#d4edda",
                  borderColor: "#c3e6cb",
                  color: "#155724",
                }}
              >
                Password reset successful..!
              </Alert>
            )}
            <button
              type="submit"
              className={buttonClasses}
              style={{ border: "none", cursor: "pointer" }}
              disabled={loading}
            >
              {loading ? "Resetting password..." : "Reset my password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
