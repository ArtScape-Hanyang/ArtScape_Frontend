// src/components/Header.tsx

import React from "react";
import { Link } from "react-router-dom";
import logo from "../asset/logo.svg";
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
          <img src={logo} className="logo" alt="로고" />
        </Link>

        <Link to="/about">
          {" "}
          <img src={ringingbell} className="ringing-bell" alt="알람" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
