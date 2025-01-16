import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../routes/firebase";
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
  gap: 3.7rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-top: 0.75rem;
`;

const Logo = styled.img`
  height: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RingingBell = styled.img`
  display: flex;
  padding: 0rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;

const Chatting = styled.img`
  display: flex;
  padding: 0rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // 사용자가 로그인한 경우
        setIsLoggedIn(true);
      } else {
        // 사용자가 로그아웃한 경우
        setIsLoggedIn(false);
      }
    });

    // 컴포넌트가 언마운트될 때 Firebase listener 구독 해제
    return () => unsubscribe();
  }, []);

  return (
    <HeaderContainer>
      <GlobalStyle />
      <Nav>
        {" "}
        {isLoggedIn && (
          <Link to="/multi_pln">
            <RingingBell src={ringingbell} alt="알람" />
          </Link>
        )}
        <Link to="/">
          <Logo src={logoblack} alt="로고블랙" />
        </Link>
        {isLoggedIn && (
          <Link to="/matching">
            <Chatting src={chat} alt="채팅" />
          </Link>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
