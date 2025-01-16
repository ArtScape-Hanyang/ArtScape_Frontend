import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import nextbtn from "../asset/nextbtn.svg";
import { useNavigate } from "react-router-dom";
import SelectButton from "../components/SelectButton";
import { useState } from "react";
import { saveDataToFirestore, getCurrentUserId } from "../utils/firebaseUtils";
import BackButton from "../components/backBtn";

function MatchWtstyle() {
  const maxItem = 12;
  const avaliableItem = 12;
  const [selectedBtn, setSelectedBtn] = useState<boolean[]>(
    Array(20).fill(false)
  );
  const navigate = useNavigate();

  const styles = [
    "시간 약속을 잘 지켜요",
    "멋진 리더에요",
    "열정적으로 참여해요",
    "즉흥적이에요",
    "계획형이에요",
    "과정을 중요하게 생각해요",
    "결과를 중요하게 생각해요",
    "도전적이에요",
    "완벽주의적 성향이 강해요",
  ];
  const handleSelect = (index: number) => {
    setSelectedBtn((prev) =>
      prev.map((isSelected, i) => (i === index ? !isSelected : isSelected))
    );
  };

  const handleNextClick = async () => {
    try {
      const selectedStyles = styles.filter((_, index) => selectedBtn[index]);
      const userId = getCurrentUserId(); // UID 가져오기

      await saveDataToFirestore("matchData", userId, {
        workStyles: selectedStyles,
      });

      console.log("작업 스타일 데이터 저장 성공");
      navigate("/matching/wstyle");
    } catch (error) {
      if (error instanceof Error) {
        console.error("작업 스타일 데이터 저장 실패:", error.message);
      } else {
        console.error("알 수 없는 오류:", error);
      }
    }
  };
  return (
    <MainContainer>
      <GlobalStyle />
      <BackButton />
      <Title>
        <H1>단체전을 함께 하고 싶은</H1>
        <H1>작가님의 스타일에 대해 알려주세요!</H1>
        <H3>여러 개를 고를 수 있어요!</H3>
      </Title>
      <BtnContainer>
        {styles.map((style, index) => (
          <Btns key={index}>
            <SelectButton
              label={style}
              width="auto"
              onClick={() => handleSelect(index)}
              isSelected={selectedBtn[index]}
            />
          </Btns>
        ))}
      </BtnContainer>
      <div>
        <ProgressBar>
          <Progress width={(avaliableItem * 100) / maxItem}></Progress>
        </ProgressBar>
        <NextBtn onClick={handleNextClick}>
          <button>이제, 더 넓은 세상으로</button>
          <img src={nextbtn} />
        </NextBtn>
      </div>
    </MainContainer>
  );
}
interface Level {
  width: number;
}

const MainContainer = styled.div`
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem;
  overflow: hidden;
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
  flex-wrap: wrap; /* 줄바꿈 허용 */
  gap: 0.75rem;
`;

const Btns = styled.div`
  flex: 0 1 auto; /* 버튼의 크기를 컨테이너에 맞게 자동 조정 */
`;
const ProgressBar = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: #e7e7ee;
  border-radius: 20px;
  margin-top: 41%;
`;

const Progress = styled.div<{ width: number }>`
  width: ${(props: Level) => props.width}%;
  height: 0.5rem;
  background-color: #52c1bf;
  border-radius: 20px;
  transition: width 0.3s ease;
`;

const NextBtn = styled.div`
  display: flex;
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
  color: #52c1bf;
`;

export default MatchWtstyle;
