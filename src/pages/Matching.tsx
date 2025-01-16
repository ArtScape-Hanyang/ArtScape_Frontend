import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import aimatchstar from "../asset/aimatchstar.png";
import nextbtn from "../asset/nextbtn.svg";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/backBtn";

const MainContainer = styled.div`
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem;
  overflow: hidden;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  gap: 0.3rem;
`;

const AI = styled.h1`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 100% */
  letter-spacing: -0.0375rem;
  margin: 0;
  color: #52c1bf;
`;

const H1 = styled.h1`
  font-family: Pretendard;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 100% */
  letter-spacing: -0.04375rem;
  margin: 0;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 35rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
`;

const BackImg = styled.img`
  width: 35rem;
  height: 100%;
  position: absolute;
`;

const NextBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  gap: 0.5rem;
  cursor: pointer;
  color: #656572;
`;

function Matching() {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate("/matching/type");
  };
  return (
    <MainContainer>
      <GlobalStyle />
      <BackButton />
      <Title>
        <AI>AI가 찾아주는</AI>
        <H1>당신의 협업 파트너</H1>
      </Title>
      <ImgContainer>
        <BackImg src={aimatchstar} />
      </ImgContainer>
      <NextBtn onClick={handleNextClick}>
        <button>시작하기</button>
        <img src={nextbtn} />
      </NextBtn>
    </MainContainer>
  );
}

export default Matching;
