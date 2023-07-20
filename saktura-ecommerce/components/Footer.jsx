import React from "react";
import { Regulamin, PolitykaPrywatnosci } from "components";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import logo from "../assets/logo.png";
import logoWhite from "../assets/logo_white.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-up">
          {/* <img className="logo-footer" src={logoWhite.src}></img> */}
          <div className="icons-footer">
            <a className="social-links" href="">
              <AiFillFacebook className="facebook" />
            </a>
            <a className="social-links" href="">
              <AiFillInstagram className="instagram" />
            </a>
          </div>
        </div>

        <hr className="dark-line"></hr>
        <div className="footer-down">
          <div className="policy">
            <p>Regulamin</p>
            <p>Polityka prywatności</p>
          </div>

          <div className="creator">
            <a href="https://github.com/czescCi" target="_blank">
              by stepniewska.js
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
