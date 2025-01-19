import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataFromFirestore, getCurrentUserId } from "../utils/firebaseUtils";
import BackButton from "../components/backBtn";
function MatchMchlist() {
    const navigate = useNavigate();
    const [data, setData] = useState({
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
                const userId = getCurrentUserId(); // ✅ 현재 사용자 UID 가져오기
                const fetchedData = await getDataFromFirestore("matchData", userId);
                console.log("가져온 데이터:", fetchedData);
                setData({
                    selectedPrice: fetchedData?.selectedPrice || "입력되지 않음",
                    selectedSize: fetchedData?.selectedSize || "입력되지 않음",
                    groupSize: fetchedData?.groupSize || "입력되지 않음",
                    regions: fetchedData?.regions?.length
                        ? fetchedData.regions
                        : [
                            fetchedData?.firstLocation || "입력되지 않음",
                            fetchedData?.secondLocation || "입력되지 않음",
                        ].filter((region) => region !== "입력되지 않음"),
                    artworkTypes: fetchedData?.artworkTypes?.length
                        ? fetchedData.artworkTypes
                        : ["입력되지 않음"], // ✅ 기본값 추가
                    workStyles: fetchedData?.workStyles?.length
                        ? fetchedData.workStyles
                        : ["입력되지 않음"], // ✅ 기본값 추가
                });
            }
            catch (error) {
                console.error("데이터 로드 실패:", error);
            }
        };
        fetchData();
    }, []);
    if (!data) {
        return _jsx("p", { children: "Loading..." });
    }
    const handlePrevClick = () => {
        navigate("/matching/type");
    };
    const handleNextClick = () => {
        navigate("/");
    };
    return (_jsxs(MainContainer, { children: [_jsx(BackButton, {}), _jsx(GlobalStyle, {}), _jsxs(Title, { children: [_jsx(H1, { children: "\uC791\uAC00\uB2D8\uC758 \uC804\uC2DC \uC2A4\uD0C0\uC77C\uC744" }), _jsx(H1, { children: "\uC9C4\uC2E4\uC740 \uC5B8\uC81C\uB098 \uD558\uB098!" })] }), data ? (_jsxs(Container, { children: [_jsxs(ResultComponent, { children: [_jsx(Label, { children: "\uC804\uC2DC \uC785\uC7A5 \uAC00\uACA9" }), _jsx(ResultBtn, { width: "5.656rem", children: data.selectedPrice })] }), _jsxs(ResultComponent, { children: [_jsx(Label, { children: "\uC804\uC2DC \uADDC\uBAA8" }), _jsx(ResultBtn, { width: "5.656rem", children: data.selectedSize })] }), _jsxs(ResultComponent, { children: [_jsx(Label, { children: "\uB2E8\uCCB4\uC804 \uC778\uC6D0 \uC218" }), _jsx(ResultBtn, { width: "10rem", children: data.groupSize || "입력되지 않음" })] }), _jsxs(ResultComponent, { children: [_jsx(Label, { children: "\uB2E8\uCCB4\uC804 \uC8FC\uCD5C \uC9C0\uC5ED" }), _jsx(Btns, { children: data.regions.length > 0 ? (data.regions.map((region, index) => (_jsx(ResultBtn, { width: "auto", children: region }, index)))) : (_jsx(ResultBtn, { width: "auto", children: "\uC9C0\uC5ED \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4." })) })] }), _jsxs(ResultComponent, { children: [_jsx(Label, { children: "\uC791\uD488 \uD615\uD0DC" }), _jsx(Btns, { children: data.artworkTypes.length > 0 ? (data.artworkTypes.map((type, index) => (_jsx(ResultBtn, { width: "auto", children: type }, index)))) : (_jsx(ResultBtn, { width: "auto", children: "\uC785\uB825\uB418\uC9C0 \uC54A\uC74C" }) // ✅ 기본값 추가
                                ) })] }), _jsxs(ResultComponent, { children: [_jsx(Label, { children: "\uC791\uAC00\uB2D8\uC758 \uC791\uC5C5 \uC2A4\uD0C0\uC77C" }), _jsx(Btns, { children: data.workStyles.length > 0 ? (data.workStyles.map((style, index) => (_jsx(ResultBtn, { width: "auto", children: style }, index)))) : (_jsx(ResultBtn, { width: "auto", children: "\uC785\uB825\uB418\uC9C0 \uC54A\uC74C" }) // ✅ 기본값 추가
                                ) })] }), _jsxs(BtnContainer, { children: [_jsx(Button, { label: "\uC218\uC815\uD558\uAE30", width: "7rem", backgroundColor: "white", color: "black", onClick: handlePrevClick }), _jsx(Button, { label: "\uC800\uC7A5\uD558\uAE30", width: "14.1rem", backgroundColor: "#52C1BF", color: "white", onClick: handleNextClick })] })] })) : (_jsx("p", { children: "\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC911..." }))] }));
}
const MainContainer = styled.div `
  width: 25.125rem;
  height: auto;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem;
  overflow: hidden;
  position: relative;
`;
const Title = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: 2.75rem;
  gap: 0.3rem;
`;
const H1 = styled.h1 `
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 100% */
  letter-spacing: -0.0375rem;
  margin: 0;
`;
const Container = styled.div `
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const ResultComponent = styled.div `
  display: flex;
  flex-direction: column;
`;
const Label = styled.h3 `
  color: #656572;

  /* Body/L500 */
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.125rem; /* 100% */
  letter-spacing: -0.02813rem;
`;
const ResultBtn = styled.button `
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
const Btns = styled.div `
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  flex: 0 1 auto; /* 버튼의 크기를 컨테이너에 맞게 자동 조정 */
`;
const BtnContainer = styled.div `
  width: 100%;
  height: 8rem;
  display: flex;
  margin-top: 20%;
  gap: 1rem;

  flex-wrap: wrap; /* 줄바꿈 허용 */
`;
export default MatchMchlist;
