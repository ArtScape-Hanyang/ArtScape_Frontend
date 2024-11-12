// src/components/Header.tsx

import React from "react";
import { Link } from "react-router-dom";
import logoblack from "../asset/logo-black.svg";
import ringingbell from "../asset/ringing-bell.svg";
const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <Link to="/about">
          {" "}
          <img src={ringingbell} className="ringing-bell" alt="알람" />
        </Link>

        <Link to="/matching">
          {" "}
          <img src={logoblack} className="logo-black" alt="로고블랙" />
        </Link>

        <Link to="/login">
          {" "}
          <img src={ringingbell} className="ringing-bell" alt="알람" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
