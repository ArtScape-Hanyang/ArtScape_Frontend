import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import Header from "../components/header";
import LoginForm from "../layout/LoginForm";
import kakao from "../asset/kakao.svg";
import google from "../asset/google.svg";
import naver from "../asset/naver.svg";
import GlobalStyle from "../styles/GlobalStyle";
//import KakaoLogin from "react-kakao-login";
//const kakaoClientId = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;
const LoginPage = () => {
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(StyledHeader, {}), _jsx(TextContainer, { children: _jsxs(TextContainerTitle, { children: [_jsx(H1, { children: "\uB2F9\uC2E0\uB9CC\uC758 \uC804\uC2DC\uB97C \uCC3E\uC544" }), _jsx(H1, { children: "\uD568\uAED8 \uB5A0\uB098\uBCFC\uAE4C\uC694?" })] }) }), _jsx(LoginForm, {}), _jsxs(LineWrapper, { children: [_jsx(LineContainer, {}), _jsx(BodyS400, { children: "SNS\uB85C \uAC04\uD3B8 \uB85C\uADF8\uC778" }), _jsx(LineContainer, {})] }), _jsxs(SocialLoginBtn, { children: [_jsx("img", { src: kakao, alt: "\uC18C\uC15C\uCE74\uCE74\uC624" }), _jsx("img", { src: google, alt: "\uC18C\uC15C\uAD6C\uAE00" }), _jsx("img", { src: naver, alt: "\uC18C\uC15C\uB124\uC774\uBC84" })] })] }));
};
// 메인 컨테이너 스타일
const MainContainer = styled.div `
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
`;
// 헤더 스타일
const StyledHeader = styled(Header) `
  width: 25.125rem;
  display: flex;
  height: 3.25rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;
// 텍스트 컨테이너 스타일
const TextContainer = styled.div `
  align-items: center;
  gap: 8px;
  position: relative;
  text-align: left;
`;
const TextContainerTitle = styled.div `
  position: absolute;
  top: 7rem;
  align-self: stretch;
  margin-left: 1.5rem;
`;
// 라인 래퍼 스타일
const LineWrapper = styled.div `
  margin-top: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const LineContainer = styled.div `
  content: "";

  width: 7.03125rem;
  height: 0.0625rem;
  background-color: #cdcdd6;
`;
// 소셜 로그인 버튼 스타일
const SocialLoginBtn = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.38rem;
  gap: 2.5rem;

  img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
// Body S400 스타일
const BodyS400 = styled.p `
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 148%; /* 1.11rem */
  letter-spacing: -0.01875rem;
`;
export default LoginPage;
