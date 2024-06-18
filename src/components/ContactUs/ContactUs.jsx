import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
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
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message"></textarea>
          <button className="send_btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
