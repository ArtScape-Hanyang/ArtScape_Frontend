import Header from "../components/header";
import { useState } from "react";
import LoginForm from "../layout/LoginForm";
import kakao from "../asset/kakao.svg";
import google from "../asset/google.svg";
import naver from "../asset/naver.svg";
const LoginPage = ({ children }) => {
  return (
    <div className="main-container">
      <div className="container">
        <Header />
        <div className="text-container">
          <div className="text-container--title">
            <h1>당신만의 전시를 찾아</h1>
            <h1>함께 떠나볼까요?</h1>
          </div>
        </div>
        <LoginForm />
        <div className="line-wrapper">
          <div className="line-container"></div>
          <p className="body-s400">SNS로 간편 로그인</p>
          <div className="line-container"></div>
        </div>
        <div className="social-login-btn">
          {" "}
          <img src={kakao} className="kakao-icon" alt="소셜카카오" />
          <img src={google} className="google-icon" alt="소셜카카오" />
          <img src={naver} className="naver-icon" alt="소셜카카오" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
