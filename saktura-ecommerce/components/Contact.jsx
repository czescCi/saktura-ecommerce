import Link from "next/link";
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
        <hr className="dark-line"></hr>
        <div className="contact">
          <h2>Kontakt</h2>
        </div>
        <div className="contact-data">
          <div className="email">
            <a href="mailto:kontakt@firma.com?subject=Hello">
              <HiOutlineMail className="contact-icons" />
            </a>
            <p>Email</p>
            <a href="mailto:kontakt@firma.com?subject=Hello">
              kontakt@firma.com
            </a>
          </div>
          <div className="phone">
            <HiOutlinePhone className="contact-icons" />
            <p>Telefon</p>
            <p>+48 555 55 55</p>
          </div>
          <div className="account">
            <HiOutlineCurrencyEuro className="contact-icons" />
            <p>Konto</p>
            <p>20 1111 2222 5555 5555 5555 4444</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
