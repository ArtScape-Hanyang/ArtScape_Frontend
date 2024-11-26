import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface StyledButtonProps {
    isActive: boolean;
}

const MainContainer = styled.div`
  width: 25.125rem;
  min-height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
  position: relative;
  padding:0;
`;

const H1 = styled.h1`
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.25rem; /* 100% */
    letter-spacing: -0.03125rem;  
    margin-top: 2.25rem;
    padding: 0 1.5rem;
`;

const H3 = styled.h3`
    color: var(--Gray-Scale-G400, #656572);

    /* Body/M500 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
    margin-top: 1%;
    padding: 0 1.5rem;
`;

const TitleInput = styled.input`
    width: 20.6rem;
    height: 2.5rem;
    padding: 0 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid #E7E7EE;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;  
    background-color: #E7E7EE;
    margin: 0 1.5rem;
`;

const Textarea = styled.textarea`
  width: 20.6rem;
  padding: 0.75rem;
  resize: vertical;
  min-height: 3rem;
  max-height: 12rem;
  border-radius: 0.375rem;
  border: 1px solid var(--Gray-Scale-G100, #e7e7ee);

  /* Body/M500b */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.025rem;
  &::placeholder {
    color: var(--Gray-Scale-G300, #9696a6); /* 플레이스홀더 색상 변경 */
  }

  color: var(--Gray-Scale-G400, #656572);

  /* 최소 높이 */
  min-height: 17.625rem;
  resize: none;
  margin: 2rem 1.5rem;

`;

const BtnContainer = styled.div`
    margin-top: 16.37rem;
    width: 100%-1.5rem;
    height: auto;
    padding: 0 1.5rem;
`;

const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${({isActive}) => (
    isActive ? "#52C1BF" : "#CDCDD6")};
    cursor: ${({isActive}) => (
    isActive ? "pointer" : "not-allowed")};
    width: 22.125rem;
    color: ${({isActive}) => (isActive ? "white" : "black")};
    height: 3.5rem;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
    border-radius: 1rem;
    /* Shadow/DS200 */
    box-shadow: 0px 0px 8px 0px rgba(34, 34, 34, 0.30);
`;

function PlanInfo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const isButtonActive = title.trim() !== "" && description.trim() !== "";

    const handleComplete = () => {
        if (isButtonActive) {
            navigate("/multi_pln", { state: {title, description}});
        }
    }
    return (
        <MainContainer>
            <GlobalStyle />
            <Header />
            <H1>전시 정보 입력</H1>
            <H3>전시 제목, 설명 등을 자유롭게 작성해보세요!</H3>
            <TitleInput placeholder="전시 제목 입력" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <Textarea placeholder="전시 설명 입력" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <BtnContainer>
                <StyledButton isActive={isButtonActive} onClick={handleComplete}>완료</StyledButton>
            </BtnContainer>
        </MainContainer>
    )
}

export default PlanInfo;