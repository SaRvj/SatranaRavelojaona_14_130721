import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
      <header className="nav">
        <Link className="nav_logo" to="/">
          {/* <img src={Logo} alt="Logo Wealth Health" className="nav_logo--img" /> */}
          <p className="nav_logo--title">HRnet</p>
        </Link>
        <Link className="custom__button" to="/employee-list">
          View Current Employees
        </Link>
      </header>
    );
  }
  
  export default Nav;