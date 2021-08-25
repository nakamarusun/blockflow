import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper deep-purple lighten-1">
        <ul id="nav-mobile" className="left">
          <li><NavLink to="/" activeClassName="light-blue lighten-1" exact>Home</NavLink></li>
          <li><NavLink to="/notes" activeClassName="light-blue lighten-1">Notes</NavLink></li>
          <li><NavLink to="/about" activeClassName="light-blue lighten-1">About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;