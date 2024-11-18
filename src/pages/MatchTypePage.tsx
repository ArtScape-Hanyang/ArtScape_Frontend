import typeDetail from '../asset/typeDetail.png'
import SelectButton from '../components/SelectButton'
import nextbtn from '../asset/nextbtn.svg'
import styled from 'styled-components'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyle from "../styles/GlobalStyle";


interface Level {
    width: number,
}

const MainContainer = styled.div`
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 0 1.5rem;
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

const Title = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 11rem;
    gap: 0.3rem;
`;

const OpenCost = styled.div`
    margin-top: 10%;
    color: var(--Gray-Scale-G400, #656572);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.125rem; /* 100% */
    letter-spacing: -0.02813rem;
`;

const Range = styled.div`
    margin-top: 10%;
    color: var(--Gray-Scale-G400, #656572);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.125rem; /* 100% */
    letter-spacing: -0.02813rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    position: relative;
`;

const TypeDetail = styled.img`
    width: var(---spacing-large, 1rem);
    height: var(---spacing-large, 1rem);
    cursor: pointer;
    position: relative;
`;

const ButtonGap = styled.div`
    display: flex;
    gap: 0.75rem;
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 0.5rem;
    background-color: #E7E7EE;
    border-radius: 20px;
    margin-top: 55%;
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

const Detail = styled.div`
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 0.75rem; /* 100% */
    letter-spacing: -0.01875rem;
    width: 22rem;
    padding: var(---spacing-small, 0.5rem);
    border-radius: 0.5rem;
    border: 1px solid var(--primary-G500, #52C1BF);
    background: var(--primary-White, #FAFBFB);
    color: #52C1BF;
    position: absolute;
    top: 3.2rem;
    left: 0;
`;



function MatchTypePage() {
    const maxItem = 12
    const avaliableItem = 2
    const [isDetailVisible, setIsDetailVisible] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleTypeDetailClick = () => {
        setIsDetailVisible(!isDetailVisible);
    }

    const handleNextClick = () => {
        navigate('/matching/personnel');
    }

    return (
        <MainContainer>
            <GlobalStyle />
                <Title>
                    <H1>작가님은</H1>
                    <H1>어떤 전시를 열고 싶으신가요?</H1>
                </Title>
                <OpenCost>
                    <h3>전시 입장 가격</h3>
                    <ButtonGap>
                        <SelectButton 
                        label="무료 전시"
                        onClick={() => setSelectedPrice("무료 전시")}
                        isSelected={selectedPrice === "무료 전시"}></SelectButton>
                        <SelectButton 
                        label="유료 전시"
                        onClick={() => setSelectedPrice("유료 전시")}
                        isSelected={selectedPrice === "유료 전시"}></SelectButton>
                        </ButtonGap>
                </OpenCost>
                <div>
                    <Range>
                        <h3>전시 규모</h3>
                        <TypeDetail src={typeDetail} onClick={handleTypeDetailClick}/>
                        {isDetailVisible && (
                            <Detail>소형 전시:<br></br> 20평 내외의 소규모 공간에서 진행하는 지인 관람객 
                                    위주의 전시<br></br> (전시 개최 이력이 없어 경험을 쌓고 싶은 아티스트에게 
                                    추천해요!)<br></br><br></br> 중형 전시:<br></br> 4-50평 내외의 공간에서 진행하는 외부 관람객 
                                    위주의 전시<br></br> (제대로 된 전시 이력을 쌓고 싶은 아티스트에게 추천해요!)<br></br><br></br>
                                    대형 전시:<br></br> 70평 이상의 공간에서 진행하는 외부 관람객 위주의 대규모 전시<br></br> 
                                    (유료 상업 전시를 희망하는 아티스트에게 추천해요!)</Detail>
                        )}
                    </Range>
                    <ButtonGap>
                        <SelectButton 
                        label="소형 전시"
                        onClick={() => setSelectedSize("소형 전시")}
                        isSelected = {selectedSize === "소형 전시"}></SelectButton>
                        <SelectButton 
                        label="중형 전시"
                        onClick={() => setSelectedSize("중형 전시")}
                        isSelected = {selectedSize === "중형 전시"}></SelectButton>
                        <SelectButton 
                        label="대형 전시"
                        onClick={() => setSelectedSize("대형 전시")}
                        isSelected = {selectedSize === "대형 전시"}></SelectButton>
                    </ButtonGap>
                </div>
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

export default MatchTypePage;