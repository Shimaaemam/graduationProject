import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const Token =
    "CleanAndGreen_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M2JlNzM0NWY3YzQwMzdjNTc0YTdmMiIsImVtYWlsIjoiYWxkb255YTMzOUBnbWFpbC5jb20iLCJpYXQiOjE3MTg1NzExODMsImV4cCI6MTcxODY1NzU4M30.7uCiG_JZIWqeAtSzl4rFJOc3y8j1HDDZ8T0ZDphZYEk";
    localStorage.setItem("token" , Token)

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess("");

    const token = localStorage.getItem("token"); 

    try {
      const response = await fetch(
        "https://clean-green-agriculture.vercel.app/contactus",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const data = await response.json();
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <div>
        <h3>Get Office Info</h3>
        <p>
          Claritas est etiam processus dynamicus, qui sequitur mutationem
          consuetudium lectorum. Mirum<br></br> est notare quam littera gothica,
          quam nunc putamus parum claram, anteposuerit litterarum<br></br>{" "}
          formas humanitatis per seacula quarta decima et quinta decima
        </p>
        <div className="info-container">
          <div className="info-item">
            <div>
              <h4>Address</h4>
              <FaMapMarkerAlt className="icon" size={45} />
              <p>Giza, Egypt</p>
            </div>
          </div>
          <div className="info-item">
            <div>
              <h4>Phone</h4>
              <FaPhone className="icon" size={45} />
              <p>+20102913215</p>
            </div>
          </div>
          <div className="info-item">
            <div>
              <h4>E-mail</h4>
              <FaEnvelope className="icon" size={45} />
              <p>clean54@sena@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>Stay in touch! Contact us</h3>
        <p>
          Have a question? Give us a call or fill out the contact form. We'd
          love to hear from you.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
          ></textarea>
          <button className="send_btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
};

export default ContactUs;