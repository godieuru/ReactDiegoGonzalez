import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { CartWidget } from "./CartWidget";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState({
    womens: false,
    mens: false,
    accessories: false,
  });

  const toggleDropdown = (menu) => {
    setDropdown({ ...dropdown, [menu]: !dropdown[menu] });
  };

  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="navbarMenu">
        <li
          className="navbarItem"
          onMouseEnter={() => toggleDropdown("women's")}
          onMouseLeave={() => toggleDropdown("women's")}
        >
          WOMEN'S
          {dropdown["women's"] && (
            <ul className="dropdown">
              <li className="dropdownItem">Tops</li>
              <li className="dropdownItem">Bottoms</li>
              <li className="dropdownItem">Shoes</li>
            </ul>
          )}
        </li>

        <li
          className="navbarItem"
          onMouseEnter={() => toggleDropdown("men's")}
          onMouseLeave={() => toggleDropdown("men's")}
        >
          MEN'S
          {dropdown["men's"] && (
            <ul className="dropdown">
              <li className="dropdownItem">Shirts</li>
              <li className="dropdownItem">Pants</li>
              <li className="dropdownItem">Shoes</li>
            </ul>
          )}
        </li>

        <li
          className="navbarItem"
          onMouseEnter={() => toggleDropdown("accessories")}
          onMouseLeave={() => toggleDropdown("accessories")}
        >
          ACCESORIES
          {dropdown["accessories"] && (
            <ul className="dropdown">
              <li className="dropdownItem">Bags</li>
              <li className="dropdownItem">Jewelry</li>
              <li className="dropdownItem">Hats</li>
            </ul>
          )}
        </li>
      </ul>

      <div className="navbarIcons">
        <FontAwesomeIcon icon={faSearch} className="navbarIcon" />
        <FontAwesomeIcon icon={faHeart} className="navbarIcon" />
        <FontAwesomeIcon icon={faUser} className="navbarIcon" />
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
