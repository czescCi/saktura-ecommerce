import React, { useState } from "react";
import Link from 'next/link';
import logo from "../assets/logo.png";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "/context/StateContext";

function Navbar() {
  const [isActive, setActive] = useState(false);
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const handleToogle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <nav className={isActive ? "asia" : "artur"}>
        <Link href="/">
          <img className="logo-desktop" src={logo.src}></img>
        </Link>
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

          <Link href="/">
            <img className="logo-nav" src={logo.src}></img>
          </Link>
          <div className="icons">
            <button type="button">
              <AiOutlineUser className="user-icon" />
            </button>

            <button type="button" onClick={() => setShowCart(true)}>
              <AiOutlineShopping className="cart-icon" />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button>
          </div>
        </div>
        <div className="icons-desktop">
          <button type="button">
            <AiOutlineUser className="user-icon" />
          </button>

          <button type="button" onClick={() => setShowCart(true)}>
            <AiOutlineShopping className="cart-icon" />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
          {showCart && <Cart />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
