import Header from "../components/header";
import { useState } from "react";
import LoginForm from "../layout/LoginForm";

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
      </div>
    </div>
  );
};

export default LoginPage;
