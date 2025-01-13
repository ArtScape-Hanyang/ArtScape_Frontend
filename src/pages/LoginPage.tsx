import styled from "styled-components";
import Header from "../components/header";
import LoginForm from "../layout/LoginForm";
import kakao from "../asset/kakao.svg";
import google from "../asset/google.svg";
import naver from "../asset/naver.svg";
import GlobalStyle from "../styles/GlobalStyle";

// 로그인 페이지 컴포넌트
const LoginPage = () => {
  return (
    <MainContainer>
      <GlobalStyle />
      <StyledHeader />
      <TextContainer>
        <TextContainerTitle>
          <H1>당신만의 전시를 찾아</H1>
          <H1>함께 떠나볼까요?</H1>
        </TextContainerTitle>
      </TextContainer>
      <LoginForm />
      <LineWrapper>
        <LineContainer />
        <BodyS400>SNS로 간편 로그인</BodyS400>
        <LineContainer />
      </LineWrapper>
      <SocialLoginBtn>
        <img src={kakao} alt="소셜카카오" />
        <img src={google} alt="소셜구글" />
        <img src={naver} alt="소셜네이버" />
      </SocialLoginBtn>
    </MainContainer>
  );
};
// 메인 컨테이너 스타일
const MainContainer = styled.div`
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
`;

// 헤더 스타일
const StyledHeader = styled(Header)`
  width: 25.125rem;
  display: flex;
  height: 3.25rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

// 텍스트 컨테이너 스타일
const TextContainer = styled.div`
  align-items: center;
  gap: 8px;
  position: relative;
  text-align: left;
`;
const TextContainerTitle = styled.div`
  position: absolute;
  top: 7rem;
  align-self: stretch;
  margin-left: 1.5rem;
`;
// 라인 래퍼 스타일
const LineWrapper = styled.div`
  margin-top: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LineContainer = styled.div`
  content: "";

  width: 7.03125rem;
  height: 0.0625rem;
  background-color: #cdcdd6;
`;

// 소셜 로그인 버튼 스타일
const SocialLoginBtn = styled.div`
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
const H1 = styled.h1`
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
const BodyS400 = styled.p`
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 148%; /* 1.11rem */
  letter-spacing: -0.01875rem;
`;

export default LoginPage;
