import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
// 메인 컨테이너 스타일
const MainContainer = styled.div`
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const SignupPage = () => {
  return (
    <MainContainer>
      <GlobalStyle />
      <h1>회원가입 페이지</h1>
      {/* 회원가입 폼을 여기에 작성 */}
    </MainContainer>
  );
};

export default SignupPage;
