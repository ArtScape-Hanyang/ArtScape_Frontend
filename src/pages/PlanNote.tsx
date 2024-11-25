import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    font-weight: 700;
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

const TotalInputContainer = styled.div`
    width: 100%-1.5rem;
    height: auto;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const InputContainer = styled.div`
    width: 100%-1.5rem;
    height: auto;
    border-radius: 0.375rem;
    border: 1px solid #E7E7EE;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    textarea {
        background-color: transparent;
        border: none;
        resize: none;
        font-family: Pretendard;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1rem; /* 100% */
        letter-spacing: -0.025rem;
        overflow: hidden;
    }
`;

const MentionContainer = styled.div`
    width: 6rem;
    height: 1rem;
    background-color: rgba(82, 193, 191, 0.16);
    border: none;
    border-radius: 0.25rem;
    padding: 0.25rem;
    color: #52C1BF;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;

    input {
        min-width: 3.37rem;
        background-color: transparent;
        border: none;
        color: #52C1BF;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 600;
        line-height: 0.75rem; /* 100% */
        letter-spacing: -0.01875rem;
        &::placeholder {
            color: #52C1BF; /* 플레이스홀더 색상 변경 */
        }
    }
`;

const PlusBtn = styled.button`
    width: 22.125rem;
    height: 2.5rem;
    border: 1px solid #E7E7EE;
    border-radius: 0.375rem;
    color: #656572;
    margin-left: 1.5rem;
    margin-top: 0.75rem;
    font-size: 1.5rem;
`;

function PlanNote() {
    const [containers, setContainers] = useState([0]);

    const handleAddContainer = () => {
        setContainers((prev) => [...prev, prev.length]);
    }

    const handleResize = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    return (
        <MainContainer>
            <GlobalStyle />
            <Header />
            <H1>Note</H1>
            <H3>자유롭게 기록해보세요!</H3>
            <TotalInputContainer>
                {containers.map((id) => (
                    <InputContainer key={id}>
                        <MentionContainer>
                            <span>@</span>
                            <input type="text" placeholder="협업 작가님"/>
                        </MentionContainer>
                        <textarea onInput={handleResize} placeholder="남기고 싶은 Note를 작성해보세요."/>
                    </InputContainer>
                ))}
            </TotalInputContainer>
            <PlusBtn onClick={handleAddContainer}>+</PlusBtn>
        </MainContainer>
    )
}

export default PlanNote;