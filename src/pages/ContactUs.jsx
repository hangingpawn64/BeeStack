import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="heading pl-28">CONTACT US</div>

      <div className="section-title items-center self-center flex flex-col">
        <div className="flex flex-row justify-center items-center">
          <img src="/images/mail.png" alt="mail-icon" />
          Mail
        </div>
      </div>
      <br />
      <div className="mails self-center">
        <ul>
          <li>
            For project and business inquiries, please email us at{" "}
            <u>bizdev@rajasoftwarelabs.com</u>
          </li>
          <li>
            For Career related inquiries, please send your resume and cover
            letter to <u>careers@rajasoftwarelabs.com</u>
          </li>
          <li>
            For all other questions, please write us at{" "}
            <u>info@rajasoftwarelabs.com.</u>
          </li>
        </ul>
      </div>

      <div className="section-title items-center self-center flex flex-col">
        <div className="flex flex-row justify-center items-center">
          <img src="/images/location.png" alt="mail-icon" />
          Location
        </div>
      </div>

      <div className="mails self-center pb-2 m-0">
        <ul>
          <li>Our Main Office is situated at Vishnupuri, Nanded- 431606</li>
        </ul>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2991.5031993826015!2d77.31840532945651!3d19.148947050752547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1762078572246!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="gmap"
        ></iframe>
        <p className="address pb-8">
          <br/>
          Nanded, India<br/>BeeStack Software Labs Pvt.<br/>Ltd.8th Floor, Mont Vert
          Velocity,<br/> Survey #140/1, Baner Pashan Link Road,<br/>Nanded- 431606
        </p>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
