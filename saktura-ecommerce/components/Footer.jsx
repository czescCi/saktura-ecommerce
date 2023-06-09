import React from "react";
import { Regulamin, PolitykaPrywatnosci } from "components";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-up">
          <img className="logo-footer" src={logo.src}></img>
          <AiFillFacebook className="facebook" />
          <AiFillInstagram className="instagram" />
        </div>

        <hr className="dark-line"></hr>

        <div className="footer-down">
          <p>Regulamin</p>
          <p>Polityka prywatności</p>

          <a
            className="creator"
            href="https://github.com/czescCi"
            target="_blank"
          >
            by stepniewska.js
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
