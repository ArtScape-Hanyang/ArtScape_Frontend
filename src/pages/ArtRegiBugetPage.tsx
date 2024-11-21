import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  width: 25.125rem;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const Label = styled.label`
  overflow: hidden;
  color: var(--primary-G500, #52c1bf);
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  text-overflow: ellipsis;

  /* Header/H4 */
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.125rem; /* 100% */
  letter-spacing: -0.02813rem;
`;

const TextContainerTitle = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  top: 4.25rem;
`;

const CountNumContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin-top: 4.13rem;
`;

const CountNum = styled.p`
  overflow: hidden;
  color: var(--Gray-Scale-Black, #17171b);
  text-align: right;
  font-feature-settings: "liga" off, "clig" off;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; /* 80% */
  letter-spacing: -0.0625rem;
`;

const CountText = styled.p`
  overflow: hidden;
  color: var(--Gray-Scale-Black, #17171b);
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 100% */
  letter-spacing: -0.04375rem;
`;

const Button = styled.button`
  width: 22.125rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: var(--primary-G500, #52c1bf);
  color: #fafbfb;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25rem;

  margin-top: 6.75rem;
  margin-bottom: 2.75rem;

  &:hover {
    background-color: #aeaeae;
  }
`;

const ModifyButton = styled(Button)`
  width: 14.125rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  color: var(--Gray-Scale-Black, #17171b);
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25rem;
  background: var(--primary-White, #fafbfb);

  /* Shadow/DS200 */
  box-shadow: 0px 0px 8px 0px rgba(34, 34, 34, 0.3);

  margin-top: 6.75rem;
  margin-bottom: 2.75rem;

  &:hover {
    background-color: #aeaeae;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 22.125rem;
  height: 11.25rem;

  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
  margin-top: 25.25rem;
  margin-bottom: 0.25rem;
`;

const ArtRegiBugetPage = () => {
  const navigate = useNavigate(); // 페이지 전환을 위한 useNavigate 사용

  const handleModifyClick = () => {
    navigate("/multi_pln/budget/edit"); // 원하는 경로로 이동
  };

  return (
    <MainContainer>
      <GlobalStyle />
      <Header />
      <TextContainerTitle>
        <Label>1인당 총 예상 비용</Label>
      </TextContainerTitle>
      <CountNumContainer>
        <CountNum>0</CountNum>
        <CountText>원</CountText>
      </CountNumContainer>

      <ButtonContainer>
        <ModifyButton type="button" onClick={handleModifyClick}>
          직접 입력
        </ModifyButton>
        <Button type="submit">항목 추가</Button>
      </ButtonContainer>
    </MainContainer>
  );
};

export default ArtRegiBugetPage;
