// src/components/Header.tsx

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoblack from "../asset/logo-black.svg";
import ringingbell from "../asset/ringing-bell.svg";
import chat from "../asset/chatting.svg";
import GlobalStyle from "../styles/GlobalStyle";

const HeaderContainer = styled.header`
  width: 25.125rem;
  display: flex;
  height: 4.13rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

const Nav = styled.nav`
  display: flex;
  gap: 6rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 0.75rem;
`;

const Logo = styled.img`
  width: 9.08631rem;
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

const RingingBell = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  padding: 1.5rem 0rem;
`;

const Chatting = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <GlobalStyle />
      <Nav>
        <Link to="/matching">
          <Chatting src={chat} alt="채팅" />
        </Link>
        <Link to="/login">
          <Logo src={logoblack} alt="로고블랙" />
        </Link>
        <Link to="/multi_pln">
          <RingingBell src={ringingbell} alt="알람" />
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
