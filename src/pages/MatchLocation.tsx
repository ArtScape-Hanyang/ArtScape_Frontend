import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import nextbtn from '../asset/nextbtn.svg'
import { useNavigate } from "react-router-dom";

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
    margin: 0;
`;

const LocContainer = styled.div`
    margin-top: 10%;
    color: #656572;

    /* Body/M500 */
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
`;

const Input = styled.input`
    width: 20.5rem;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: #E7E7EE;
    border: 0;
    padding: 1rem;
    color: #9696A6;
    font-size: 1rem;
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 0.5rem;
    background-color: #E7E7EE;
    border-radius: 20px;
    margin-top: 40%;
`;

const Progress = styled.div<{ width: number }>`
    width: ${(props:Level) => props.width}%;
    height: 0.5rem;
    background-color: #52C1BF;
    border-radius: 20px;
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

function MatchLocation() {
    const maxItem = 12
    const avaliableItem = 6
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/matching/form')
    }

    return (
        <MainContainer>
            <GlobalStyle />
            <Title>
                <H1>작가님이 단체전을</H1>
                <H1>주최하고자 하는 지역은 어디인가요?</H1>
                <H3>지역에 맞추어 추천해 드릴게요!</H3>
            </Title>
            <LocContainer>
                <h3>1순위 입력</h3>
                <Input type="text" placeholder="지역을 입력해 주세요."/>
            </LocContainer>
            <LocContainer>
                <h3>2순위 입력</h3>
                <Input type="text" placeholder="지역을 입력해 주세요."/>
            </LocContainer>
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

export default MatchLocation;