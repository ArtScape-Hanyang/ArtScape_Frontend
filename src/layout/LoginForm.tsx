import React, { useState } from "react";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false); // 자동 로그인 상태 관리

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe); // 체크박스 상태 토글
  };
  return (
    <div className="login-container">
      <form action="/submit-form" method="POST">
        <label htmlFor="email" className="body-r500">
          이메일 입력
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="이메일을 입력하세요"
          required
        />

        <label htmlFor="password" className="body-r500">
          패스워드 입력
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="패스워드를 입력하세요"
          required
        />
        {/* 자동 로그인 체크박스 추가 */}
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={rememberMe}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="rememberMe" className="body-r500">
            자동 로그인
          </label>
          <label className="body-r500">
            <Link to="/signup" className="signup-link-text">
              회원가입
            </Link>
          </label>
        </div>

        <button type="submit">
          <h3>로그인</h3>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
