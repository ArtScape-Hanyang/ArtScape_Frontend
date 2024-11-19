import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";

const MainContainer = styled.div`
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffc0c0;
  box-sizing: border-box;
`;

const BackGroundImgContainer = styled.div`
  background-color: #ff7c7c;
  position: absolute;
  width: 25.125rem;
  height: 15rem;
  z-index: 0;
  top: 0;
`;

const ProfilePage = () => {
  return (
    <MainContainer>
      <GlobalStyle />
      <BackGroundImgContainer>
        {" "}
        <Header />
      </BackGroundImgContainer>
    </MainContainer>
  );
};

export default ProfilePage;
