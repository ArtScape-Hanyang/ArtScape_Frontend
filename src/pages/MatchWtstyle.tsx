import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import nextbtn from '../asset/nextbtn.svg'
import { useNavigate } from "react-router-dom";
import SelectButton from "../components/SelectButton";
import { useState } from "react";

interface Level {
    width: number,
}

const MainContainer = styled.div`
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 0 1.5rem;
  position: relative;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 11rem;
    gap: 0.3rem;
`;

const H1 = styled.h1`
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 100% */
    letter-spacing: -0.0375rem;
    margin: 0;
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
`;

const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Btns = styled.div`
    margin-top: 5%;
    display: flex;
    gap: 0.75rem;
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 0.5rem;
    background-color: #E7E7EE;
    border-radius: 20px;
    margin-top: 41%;
`;

const Progress = styled.div<{ width: number }>`
    width: ${(props:Level) => props.width}%;
    height: 0.5rem;
    background-color: #52C1BF;
    border-radius: 20px;
    transition: width 0.3s ease;
`;

const NextBtn = styled.div`
    display: flex ;
    justify-content: flex-end;
    margin-top: 7%;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
    gap: 0.5rem;
    cursor: pointer;
    color: #52C1BF;
`;

function MatchWtstyle() {
    const maxItem = 12
    const avaliableItem = 12
    const [selectedBtn, setSelectedBtn] = useState<boolean[]>(Array(20).fill(false));
    const navigate = useNavigate();

    const handleSelect = (index: number) => {
        setSelectedBtn((prev) => 
        prev.map((isSelected, i) => (i === index ? !isSelected : isSelected)));
    }

    const handleNextClick = () => {
        navigate('/matching/mchlist');
    }

    return (
        <MainContainer>
            <GlobalStyle />
            <Title>
                <H1>단체전을 함께 하고 싶은</H1>
                <H1>작가님의 스타일에 대해 알려주세요!</H1>
                <H3>여러 개를 고를 수 있어요!</H3>
            </Title>
            <BtnContainer>
                <Btns>
                    <SelectButton 
                    label="시간 약속을 잘 지켜요"
                    width="10.9rem"
                    onClick={() => handleSelect(0)}
                    isSelected={selectedBtn[0]}></SelectButton>
                    <SelectButton
                    label="멋진 리더에요"
                    width="7.31rem"
                    onClick={() => handleSelect(1)}
                    isSelected={selectedBtn[1]}></SelectButton>
                </Btns>
                <Btns>
                    <SelectButton 
                    label="열정적으로 참여해요"
                    width="10.5rem"
                    onClick={() => handleSelect(2)}
                    isSelected={selectedBtn[2]}></SelectButton>
                    <SelectButton
                    label="즉흥적이에요"
                    width="7.06rem"
                    onClick={() => handleSelect(3)}
                    isSelected={selectedBtn[3]}></SelectButton>
                </Btns>
                <Btns>
                    <SelectButton 
                    label="계획형이에요"
                    width="7.06rem"
                    onClick={() => handleSelect(4)}
                    isSelected={selectedBtn[4]}></SelectButton>
                    <SelectButton
                    label="과정을 중요하게 생각해요"
                    width="12.5rem"
                    onClick={() => handleSelect(5)}
                    isSelected={selectedBtn[5]}></SelectButton>
                </Btns>
                <Btns>
                    <SelectButton 
                    label="결과를 중요하게 생각해요"
                    width="12.5rem"
                    onClick={() => handleSelect(6)}
                    isSelected={selectedBtn[6]}></SelectButton>
                    <SelectButton
                    label="도전적이에요"
                    width="7.06rem"
                    onClick={() => handleSelect(7)}
                    isSelected={selectedBtn[7]}></SelectButton>
                </Btns>
                <Btns>
                    <SelectButton 
                    label="완벽주의적 성향이 강해요"
                    width="12.4rem"
                    onClick={() => handleSelect(8)}
                    isSelected={selectedBtn[8]}></SelectButton>
                </Btns>
            </BtnContainer>
            <div>
                <ProgressBar>
                    <Progress width = {(avaliableItem*100/maxItem)}></Progress>
                </ProgressBar>
                <NextBtn onClick={handleNextClick}>
                    <button>이제, 더 넓은 세상으로</button>
                    <img src={nextbtn} />
                </NextBtn>
            </div>
        </MainContainer>
    )
}

export default MatchWtstyle;