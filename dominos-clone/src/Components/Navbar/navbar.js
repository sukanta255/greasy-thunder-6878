import React from 'react';
import {Link} from "react-router-dom";

import "./navbar.css";
import logo_icon from "./logo_dominos.svg"

const navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-light fixed-top">
            <div className="container">
                {/* <Link className="navbar-logo" to="/"> */}
                    <img src={logo_icon} alt="dominos_logo" />
                {/* </Link> */}
            </div>
        </nav>
    </div>
  )
}

export default navbar