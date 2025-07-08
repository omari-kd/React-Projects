import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { faTypo3 } from "@fortawesome/free-brands-svg-icons";
import { Button } from "../Button/Button";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  });

  window.addEventListener("resize", showButton);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            Big Farms
          </a>
          <FontAwesomeIcon icon={faTypo3} />
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="navitem">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="navitem">
              <a
                href="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </a>
            </li>
            <li className="navitem">
              <a
                href="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </a>
            </li>
            <li className="navitem">
              <a
                href="/"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}
