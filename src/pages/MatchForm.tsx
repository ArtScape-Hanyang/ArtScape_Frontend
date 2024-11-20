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
    margin-top: 27%;
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
`;

function MatchForm() {
    const maxItem = 12
    const avaliableItem = 8
    const [selectedBtn, setSelectedBtn] = useState<boolean[]>(Array(20).fill(false));
    const navigate = useNavigate();

    const handleSelect = (index: number) => {
        setSelectedBtn((prev) => 
        prev.map((isSelected, i) => (i === index ? !isSelected : isSelected)));
    }

    const handleNextClick = () => {
        navigate('/matching/mystyle');
    }

    return (
        <MainContainer>
            <GlobalStyle />
            <Title>
                <H1>작가님이 전시할</H1>
                <H1>작품 형태는 무엇인가요?</H1>
                <H3>여러 개를 고를 수 있어요!</H3>
            </Title>
            <BtnContainer>
                <Btns>
                    <SelectButton 
                    label="서양화"
                    width="4.56rem"
                    onClick={() => handleSelect(0)}
                    isSelected={selectedBtn[0]}></SelectButton>
                    <SelectButton
                    label="동양화"
                    width="4.56rem"
                    onClick={() => handleSelect(1)}
                    isSelected={selectedBtn[1]}></SelectButton>
                    <SelectButton
                    label="조각"
                    width="3.75rem"
                    onClick={() => handleSelect(2)}
                    isSelected={selectedBtn[2]}></SelectButton>
                    <SelectButton
                    label="사진"
                    width="3.75rem"
                    onClick={() => handleSelect(3)}
                    isSelected={selectedBtn[3]}></SelectButton>
                </Btns>
                <Btns>
                    <SelectButton 
                    label="드로잉"
                    width="4.56rem"
                    onClick={() => handleSelect(4)}
                    isSelected={selectedBtn[4]}></SelectButton>
                    <SelectButton
                    label="미디어아트"
                    width="6.25rem"
                    onClick={() => handleSelect(5)}
                    isSelected={selectedBtn[5]}></SelectButton>
                    <SelectButton
                    label="비디오아트"
                    width="6.25rem"
                    onClick={() => handleSelect(6)}
                    isSelected={selectedBtn[6]}></SelectButton>
                </Btns>
                <Btns>
                    <SelectButton 
                    label="설치미술"
                    onClick={() => handleSelect(7)}
                    isSelected={selectedBtn[7]}></SelectButton>
                    <SelectButton
                    label="연필화"
                    width="4.56rem"
                    onClick={() => handleSelect(8)}
                    isSelected={selectedBtn[8]}></SelectButton>
                    <SelectButton
                    label="키네틱아트"
                    width="6.25rem"
                    onClick={() => handleSelect(9)}
                    isSelected={selectedBtn[9]}></SelectButton>
                </Btns>
                <Btns>
                    <SelectButton 
                    label="도자기"
                    width="4.56rem"
                    onClick={() => handleSelect(10)}
                    isSelected={selectedBtn[10]}></SelectButton>
                    <SelectButton
                    label="유리공예"
                    onClick={() => handleSelect(11)}
                    isSelected={selectedBtn[11]}></SelectButton>
                    <SelectButton
                    label="금속공예"
                    onClick={() => handleSelect(12)}
                    isSelected={selectedBtn[12]}></SelectButton>
                    <SelectButton
                    label="회화"
                    width="3.75rem"
                    onClick={() => handleSelect(13)}
                    isSelected={selectedBtn[13]}></SelectButton>
                </Btns>
                <Btns>
                    <SelectButton 
                    label="한국화"
                    width="4.56rem"
                    onClick={() => handleSelect(14)}
                    isSelected={selectedBtn[14]}></SelectButton>
                    <SelectButton
                    label="건축"
                    width="3.75rem"
                    onClick={() => handleSelect(15)}
                    isSelected={selectedBtn[15]}></SelectButton>
                    <SelectButton
                    label="공예"
                    width="3.75rem"
                    onClick={() => handleSelect(16)}
                    isSelected={selectedBtn[16]}></SelectButton>
                    <SelectButton
                    label="민속예술"
                    onClick={() => handleSelect(17)}
                    isSelected={selectedBtn[17]}></SelectButton>
                </Btns><Btns>
                    <SelectButton 
                    label="디자인"
                    width="4.56rem"
                    onClick={() => handleSelect(18)}
                    isSelected={selectedBtn[18]}></SelectButton>
                    <SelectButton
                    label="종교예술"
                    onClick={() => handleSelect(19)}
                    isSelected={selectedBtn[19]}></SelectButton>
                </Btns>
            </BtnContainer>
            <div>
                <ProgressBar>
                    <Progress width = {(avaliableItem*100/maxItem)}></Progress>
                </ProgressBar>
                <NextBtn onClick={handleNextClick}>
                    <button>다음으로</button>
                    <img src={nextbtn} />
                </NextBtn>
            </div>
        </MainContainer>
    )
}

export default MatchForm;