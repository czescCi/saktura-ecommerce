import React from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineCurrencyEuro,
} from "react-icons/hi";

function Contact() {
  return (
    <>
      <div className="contact-container">
        <hr></hr>
        <div className="contact">
          <h1>Kontakt</h1>
        </div>
        <div className="contact-data">
          <div className="email">
            <HiOutlineMail className="contact-icons" />
            <h2>Email</h2>
            <h3>kontakt@firma.com</h3>
          </div>
          <div className="phone">
            <HiOutlinePhone className="contact-icons" />
            <h2>Telefon</h2>
            <h3>+48 555 55 55</h3>
          </div>
          <div className="account">
            <HiOutlineCurrencyEuro className="contact-icons" />
            <h2>Konto</h2>
            <h3>20 1111 2222 5555 5555 5555 4444</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
