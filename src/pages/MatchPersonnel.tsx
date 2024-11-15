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

const PeopleContainer = styled.div`
    margin-top: 10%;
    color: #656572;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
`;

const InputContainer = styled.div`
    display: flex;
    gap: 0.75rem;
`;

const Input = styled.input`
    width: 20.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    background-color: #E7E7EE;
    border: 0;
    padding: 0 1rem;
    color: #656572;
    font-size: 1rem;
`;

const People = styled.p`
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;  
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

function MatchPersonnel() {
    const maxItem = 12
    const avaliableItem = 4
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/matching/location')
    }

    return (
        <MainContainer>
            <GlobalStyle />
            <Title>
                <H1>작가님이 희망하는</H1>
                <H1>단체전 인원 수는 몇 명인가요?</H1>
            </Title>
            <PeopleContainer>
                <h3>최소 인원</h3>
                <InputContainer>
                    <Input type="number" />
                    <People>명</People>
                </InputContainer>
            </PeopleContainer>
            <PeopleContainer>
                <h3>최대 인원</h3>
                <InputContainer>
                    <Input type="number" />
                    <People>명</People>
                </InputContainer>
            </PeopleContainer>
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

export default MatchPersonnel;