import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "../style/header.scss";
const Header = () => {
  return (
    <>
      <div className="nav">
        <h1>Codinghar</h1>
        <div className="link">
          <HashLink to={"/#home"}>HOme</HashLink>
          <Link to={"/contact"}>Contact</Link>
          <HashLink to={"/#about"}>About</HashLink>
          <HashLink to={"#brand"}>Brand</HashLink>
          <Link to={"/services"}>Services</Link>
        </div>

      </div>
    </>
  );
}

export default Header;