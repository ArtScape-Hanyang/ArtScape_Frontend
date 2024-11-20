import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  width: 25.125rem;
  height: auto;
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

const Container = styled.div`
    margin-top: 20%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const ResultComponent = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.h3`
    color: #656572;

    /* Body/L500 */
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.125rem; /* 100% */
    letter-spacing: -0.02813rem;
`;

const ResultBtn = styled.button<{width: string}>`
    border-radius: 0.5rem;
    background: #F0FAFA;
    width: ${(props) => props.width};
    height: 2rem;

    /* Shadow/DS100 */
    box-shadow: 0px 0px 4px 0px rgba(34, 34, 34, 0.30);
    
    color: #52C1BF;

    /* Header/H5 */
    font-size: 1rem;
    font-weight: 600;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
`;

const Btns = styled.div`
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
`;

const BtnContainer = styled.div`
    width: 100%;
    height: 8rem;
    display: flex;
    margin-top: 20%;
    gap: 1rem;
`;

function MatchMchlist() {
    const navigate = useNavigate();

    const handlePrevClick = () => {
        navigate('/matching/type');
    }

    const handleNextClick = () => {
        navigate('/multi_pln/default');
    }
    return (
        <MainContainer>
            <GlobalStyle />
            <Title>
                <H1>작가님의 전시 스타일을</H1>
                <H1>진실은 언제나 하나!</H1>
            </Title>
            <Container>
                <ResultComponent>
                    <Label>전시 입장 가격</Label>
                    <ResultBtn width="5.62rem">유료 전시</ResultBtn>
                </ResultComponent>
                <ResultComponent>
                    <Label>전시 규모</Label>
                    <ResultBtn width="5.62rem">중형 전시</ResultBtn>
                </ResultComponent>
                <ResultComponent>
                    <Label>단체전 인원 수</Label>
                    <ResultBtn width="9.75rem">최소 2명 ~ 최대 3명</ResultBtn>
                </ResultComponent>
                <ResultComponent>
                    <Label>단체전 주최 지역</Label>
                    <Btns>
                        <ResultBtn width="9rem">서울특별시 강남구</ResultBtn>
                        <ResultBtn width="10.68rem">제주특별자치도 제주시</ResultBtn>
                    </Btns>
                </ResultComponent>
                <ResultComponent>
                    <Label>작품 형태</Label>
                    <Btns>
                        <ResultBtn width="4.56rem">도자기</ResultBtn>
                        <ResultBtn width="3.75rem">공예</ResultBtn>
                    </Btns>
                </ResultComponent>
                <ResultComponent>
                    <Label>작가님의 작업 스타일</Label>
                    <Btns>
                        <ResultBtn width="10.25rem">시간 약속을 잘 지켜요</ResultBtn>
                        <ResultBtn width="11.68rem">결과를 중요하게 생각해요</ResultBtn>
                        <ResultBtn width="7.06rem">도전적이에요</ResultBtn>
                    </Btns>
                </ResultComponent>
                <ResultComponent>
                    <Label>작가님의 작업 스타일</Label>
                    <ResultBtn width="10.25rem">시간 약속을 잘 지켜요</ResultBtn>
                </ResultComponent>
                <BtnContainer>
                    <Button 
                    label="수정하기"
                    width="7rem"
                    backgroundColor="white"
                    color="black"
                    onClick={handlePrevClick}></Button>
                    <Button 
                    label="저장하기"
                    width="14.1rem"
                    backgroundColor="#52C1BF"
                    color="white"
                    onClick={handleNextClick}></Button>
                </BtnContainer>
            </Container>
        </MainContainer>
    )
}

export default MatchMchlist;