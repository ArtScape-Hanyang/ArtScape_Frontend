import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #fff;
  top: 14rem;
  justify-content: center;
  width: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 22.125rem;
`;

const Label = styled.label`
  justify-content: left;
  display: block;
  margin-bottom: 0.5rem;
  text-align: left;
  font-family: Pretendard, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--Gray-Scale-Black, #17171b);
`;

const Input = styled.input`
  margin-bottom: 1.25rem;
  border: 1px solid #ddd;
  height: 3rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: var(--Gray-Scale-G100, #e7e7ee);
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: var(--primary-G500, #52c1bf);
  height: 4rem;
  color: #fafbfb;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25rem;

  &:hover {
    background-color: #aeaeae;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 1rem;
  margin-bottom: 2.38rem;
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid var(--Gray-Scale-Black, #17171b);
`;

const SignupLink = styled(Link)`
  color: var(--primary-G500, #52c1bf);
  text-align: right;
  margin-left: 12rem;
`;

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <LoginContainer>
      <StyledForm action="/submit-form" method="POST">
        <Label htmlFor="email">이메일 입력</Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="이메일을 입력하세요"
          required
        />

        <Label htmlFor="password">패스워드 입력</Label>
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="패스워드를 입력하세요"
          required
        />

        <CheckboxContainer>
          <Checkbox
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={rememberMe}
            onChange={handleCheckboxChange}
          />
          <Label htmlFor="rememberMe">자동 로그인</Label>
          <Label>
            <SignupLink to="/signup">회원가입</SignupLink>
          </Label>
        </CheckboxContainer>

        <Button type="submit">로그인</Button>
      </StyledForm>
    </LoginContainer>
  );
};

export default LoginForm;
