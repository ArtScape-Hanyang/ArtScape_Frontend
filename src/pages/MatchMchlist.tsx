import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataFromFirestore, getCurrentUserId } from "../utils/firebaseUtils";

function MatchMchlist() {
  interface MatchData {
    selectedPrice: string;
    selectedSize: string;
    groupSize?: string;
    regions: string[];
    artworkTypes: string[];
    workStyles: string[];
  }
  const [data, setData] = useState<MatchData>({
    selectedPrice: "입력되지 않음",
    selectedSize: "입력되지 않음",
    groupSize: "입력되지 않음",
    regions: [],
    artworkTypes: [],
    workStyles: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = getCurrentUserId(); // UID 가져오기
        const fetchedData = await getDataFromFirestore<MatchData>(
          "matchData",
          userId
        );

        console.log("가져온 데이터:", fetchedData);

        const regions = fetchedData?.regions?.length
          ? fetchedData.regions
          : [
              fetchedData?.firstLocation || "",
              fetchedData?.secondLocation || "",
            ].filter((region) => region !== ""); // 빈 값 제거

        setData({
          selectedPrice: fetchedData?.selectedPrice || "입력되지 않음",
          selectedSize: fetchedData?.selectedSize || "입력되지 않음",
          groupSize: fetchedData?.groupSize || "입력되지 않음",
          regions,
          artworkTypes: fetchedData?.artworkTypes || [],
          workStyles: fetchedData?.workStyles || [],
        });
      } catch (error) {
        console.error("데이터 로드 실패:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  const navigate = useNavigate();

  const handlePrevClick = () => {
    navigate("/matching/type");
  };

  const handleNextClick = () => {
    navigate("/");
  };

  return (
    <MainContainer>
      <GlobalStyle />
      <Title>
        <H1>작가님의 전시 스타일을</H1>
        <H1>진실은 언제나 하나!</H1>
      </Title>
      {data ? (
        <Container>
          <ResultComponent>
            <Label>전시 입장 가격</Label>
            <ResultBtn width="5.62rem">{data.selectedPrice}</ResultBtn>
          </ResultComponent>
          <ResultComponent>
            <Label>전시 규모</Label>
            <ResultBtn width="5.62rem">{data.selectedSize}</ResultBtn>
          </ResultComponent>
          <ResultComponent>
            <Label>단체전 인원 수</Label>
            <ResultBtn width="9.75rem">
              {data.groupSize || "입력되지 않음"}
            </ResultBtn>
          </ResultComponent>
          <ResultComponent>
            <Label>단체전 주최 지역</Label>
            <Btns>
              {data.regions.length > 0 ? (
                data.regions.map((region, index) => (
                  <ResultBtn key={index} width="auto">
                    {region}
                  </ResultBtn>
                ))
              ) : (
                <ResultBtn width="auto">지역 정보가 없습니다.</ResultBtn>
              )}
            </Btns>
          </ResultComponent>

          <ResultComponent>
            <Label>작품 형태</Label>
            <Btns>
              {data.artworkTypes.map((type, index) => (
                <ResultBtn key={index} width="auto">
                  {type}
                </ResultBtn>
              ))}
            </Btns>
          </ResultComponent>
          <ResultComponent>
            <Label>작가님의 작업 스타일</Label>
            <Btns>
              {data.workStyles.map((style, index) => (
                <ResultBtn key={index} width="auto">
                  {style}
                </ResultBtn>
              ))}
            </Btns>
          </ResultComponent>
          <BtnContainer>
            <Button
              label="수정하기"
              width="7rem"
              backgroundColor="white"
              color="black"
              onClick={handlePrevClick}
            />
            <Button
              label="저장하기"
              width="14.1rem"
              backgroundColor="#52C1BF"
              color="white"
              onClick={handleNextClick}
            />
          </BtnContainer>
        </Container>
      ) : (
        <p>데이터를 불러오는 중...</p>
      )}
    </MainContainer>
  );
}

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
  padding-top: 2.75rem;
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
  margin-top: 10%;
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

const ResultBtn = styled.button<{ width: string }>`
  white-space: nowrap;
  border-radius: 0.5rem;
  background: #f0fafa;
  width: ${(props) => props.width};
  height: 2rem;
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  /* Shadow/DS100 */
  box-shadow: 0px 0px 4px 0px rgba(34, 34, 34, 0.3);

  color: #52c1bf;

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
  flex: 0 1 auto; /* 버튼의 크기를 컨테이너에 맞게 자동 조정 */
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  margin-top: 20%;
  gap: 1rem;

  flex-wrap: wrap; /* 줄바꿈 허용 */
`;

export default MatchMchlist;
