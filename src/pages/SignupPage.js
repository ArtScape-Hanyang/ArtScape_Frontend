import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import SignupForm from "../layout/SignupForm";
import Header from "../components/header";
const SignupPage = () => {
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(Header, {}), _jsx(TextContainer, { children: _jsx(TextContainerTitle, { children: _jsx(H1, { children: "\uD68C\uC6D0\uAC00\uC785" }) }) }), _jsx(SignupForm, {})] }));
};
// 메인 컨테이너 스타일
const MainContainer = styled.div `
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
`;
// 텍스트 컨테이너 스타일
const TextContainer = styled.div `
  align-items: center;
  position: relative;
  text-align: left;
`;
const TextContainerTitle = styled.div `
  position: absolute;
  top: 0.56rem;
  align-self: stretch;
  margin-left: 1rem;
`;
// h1 스타일
const H1 = styled.h1 `
  color: var(--Gray-Scale-Black, #17171b);
  font-feature-settings: "liga" off, "clig" off;
  font-family: Pretendard;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 100% */
  letter-spacing: -0.04375rem;
  margin: 0.5rem;
`;
export default SignupPage;
