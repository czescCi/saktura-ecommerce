import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";

function Navbar() {
  const [isActive, setActive] = useState(false);

  const handleToogle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <nav className={isActive ? "asia" : "artur"}>
        <a href="#">
          <img className="logo-desktop" src={logo.src}></img>
        </a>
        <div className={isActive ? "active" : "navigation"}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="toogle-box">
          <a href="#" onClick={handleToogle}>
            <button className={isActive ? "hide-menu" : "show-menu"}>
              <RxHamburgerMenu />
            </button>
            <button className={isActive ? "show-x" : "hide-x"}>
              <RxCross2 />
            </button>
          </a>

          <a href="#">
            <img className="logo-nav" src={logo.src}></img>
          </a>
          <div className="icons">
            <button type="button" className="user-icon">
              <AiOutlineUser />
            </button>

            <button type="button" className="cart-icon">
              <AiOutlineShopping />
              <span className="cart-item-qty">1</span>
            </button>
          </div>
        </div>
        <div className="icons-desktop">
          <button type="button" className="user-icon">
            <AiOutlineUser />
          </button>

          <button type="button" className="cart-icon" >
            <AiOutlineShopping />
            <span className="cart-item-qty">1</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
