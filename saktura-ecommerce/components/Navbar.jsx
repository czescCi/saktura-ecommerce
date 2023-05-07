import React, { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

console.log(logo);

function Navbar() {
  const [isActive, setActive] = useState(false);

  const handleToogle = () => {
    setActive(!isActive);
    }

  return (
    <>
      <section>
        <div className="logo">
          <a href="#"><img id="logo" src={logo}></img></a>
        </div>

        <nav className={isActive ? "active" : "navigation"}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Cart</a>
        </nav>
        <div className="toogleBox">
          <a href="#" onClick={handleToogle}><img className={isActive ? "menu" : "hide"} src={menu}></img><img className={isActive ? "close" : "show"} src={close}></img></a>
        </div>
      </section>
    </>
  );
}

export default Navbar;
