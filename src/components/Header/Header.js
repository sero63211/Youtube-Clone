import React from "react";
import { HiMenu } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import "./Header.css";
import logo from "./ytlogo.png";
function Header() {
  return (
    <>
      <div className="header">
        <HiMenu className="header__bar" />

        {/*youtube logo*/}
        <img className="header__logo" src={logo} alt="" />
        {/*search bar*/}
        <div className="header__searchbar">
          <input className="header__input" type="text" placeholder="Search" />
        </div>
        <BsSearch className="header__searchIcon" />
        <FaUserAlt className="header__userIcon" />
      </div>
    </>
  );
}

export default Header;
