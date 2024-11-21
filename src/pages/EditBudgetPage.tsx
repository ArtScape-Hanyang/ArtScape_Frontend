import styled from "styled-components";
import Header from "../components/header";
import GlobalStyle from "../styles/GlobalStyle";
// 메인 컨테이너 스타일
const MainContainer = styled.div`
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
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
  top: 2.25rem;
  align-self: stretch;
  margin-left: 1.5rem;
`;
// h1 스타일
const H2 = styled.h1`
  color: var(--Gray-Scale-Black, #17171b);
  font-feature-settings: "liga" off, "clig" off;

  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 100% */
  letter-spacing: -0.0375rem;
`;

const BodyM500 = styled.p`
  color: var(--Gray-Scale-G400, #656572);

  /* Body/M500 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
`;

const EditBudgetPage = () => {
  return (
    <MainContainer>
      <GlobalStyle />
      <Header />
      <TextContainer>
        <TextContainerTitle>
          <H2>지출 항목 입력</H2>
          <BodyM500>예상되는 지출을 자유롭게 작성해보세요!</BodyM500>
        </TextContainerTitle>
      </TextContainer>
    </MainContainer>
  );
};

export default EditBudgetPage;
