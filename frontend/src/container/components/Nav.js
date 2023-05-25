import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo-tiltle">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Coat_of_arms_of_Morocco.svg/586px-Coat_of_arms_of_Morocco.svg.png?20230506182918"
          alt=""
        />
        <h3>DGAPR</h3>
      </div>
      <div className="title">
        <h3>Magasin</h3>
      </div>
      <div className="nav-items"></div>
    </div>
  );
};

export default Nav;
