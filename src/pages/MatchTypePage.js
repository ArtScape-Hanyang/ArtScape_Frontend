import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import nextbtn from "../asset/nextbtn.svg";
import typeDetail from "../asset/typeDetail.png";
import SelectButton from "../components/SelectButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveDataToFirestore, getCurrentUserId } from "../utils/firebaseUtils";
import BackButton from "../components/backBtn";
function MatchTypePage() {
    const maxItem = 12;
    const avaliableItem = 2;
    const navigate = useNavigate();
    const [isDetailVisible, setIsDetailVisible] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const handleTypeDetailClick = () => {
        setIsDetailVisible(!isDetailVisible);
    };
    const handleNextClick = async () => {
        try {
            const userId = getCurrentUserId(); // UID 가져오기
            await saveDataToFirestore("matchData", userId, {
                selectedPrice: selectedPrice || "입력되지 않음",
                selectedSize: selectedSize || "입력되지 않음",
            });
            console.log("데이터 저장 및 이동 성공");
            navigate("/matching/personnel");
        }
        catch (error) {
            console.error("오류 발생:", error);
        }
    };
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(BackButton, {}), _jsxs(Title, { children: [_jsx(H1, { children: "\uC791\uAC00\uB2D8\uC740" }), _jsx(H1, { children: "\uC5B4\uB5A4 \uC804\uC2DC\uB97C \uC5F4\uACE0 \uC2F6\uC73C\uC2E0\uAC00\uC694?" })] }), _jsxs(OpenCost, { children: [_jsx("h3", { children: "\uC804\uC2DC \uC785\uC7A5 \uAC00\uACA9" }), _jsxs(ButtonGap, { children: [_jsx(SelectButton, { label: "\uBB34\uB8CC \uC804\uC2DC", onClick: () => setSelectedPrice("무료 전시"), isSelected: selectedPrice === "무료 전시" }), _jsx(SelectButton, { label: "\uC720\uB8CC \uC804\uC2DC", onClick: () => setSelectedPrice("유료 전시"), isSelected: selectedPrice === "유료 전시" })] })] }), _jsxs(Range, { children: [_jsx("h3", { children: "\uC804\uC2DC \uADDC\uBAA8" }), _jsx(TypeDetail, { src: typeDetail, onClick: handleTypeDetailClick }), isDetailVisible && (_jsxs(Detail, { children: ["\uC18C\uD615 \uC804\uC2DC:", _jsx("br", {}), " 20\uD3C9 \uB0B4\uC678\uC758 \uC18C\uADDC\uBAA8 \uACF5\uAC04\uC5D0\uC11C \uC9C4\uD589\uD558\uB294 \uC9C0\uC778 \uAD00\uB78C\uAC1D \uC704\uC8FC\uC758 \uC804\uC2DC", _jsx("br", {}), " (\uC804\uC2DC \uAC1C\uCD5C \uC774\uB825\uC774 \uC5C6\uC5B4 \uACBD\uD5D8\uC744 \uC313\uACE0 \uC2F6\uC740 \uC544\uD2F0\uC2A4\uD2B8\uC5D0\uAC8C \uCD94\uCC9C\uD574\uC694!)", _jsx("br", {}), _jsx("br", {}), " \uC911\uD615 \uC804\uC2DC:", _jsx("br", {}), " 4-50\uD3C9 \uB0B4\uC678\uC758 \uACF5\uAC04\uC5D0\uC11C \uC9C4\uD589\uD558\uB294 \uC678\uBD80 \uAD00\uB78C\uAC1D \uC704\uC8FC\uC758 \uC804\uC2DC", _jsx("br", {}), " (\uC81C\uB300\uB85C \uB41C \uC804\uC2DC \uC774\uB825\uC744 \uC313\uACE0 \uC2F6\uC740 \uC544\uD2F0\uC2A4\uD2B8\uC5D0\uAC8C \uCD94\uCC9C\uD574\uC694!)", _jsx("br", {}), _jsx("br", {}), "\uB300\uD615 \uC804\uC2DC:", _jsx("br", {}), " 70\uD3C9 \uC774\uC0C1\uC758 \uACF5\uAC04\uC5D0\uC11C \uC9C4\uD589\uD558\uB294 \uC678\uBD80 \uAD00\uB78C\uAC1D \uC704\uC8FC\uC758 \uB300\uADDC\uBAA8 \uC804\uC2DC", _jsx("br", {}), "(\uC720\uB8CC \uC0C1\uC5C5 \uC804\uC2DC\uB97C \uD76C\uB9DD\uD558\uB294 \uC544\uD2F0\uC2A4\uD2B8\uC5D0\uAC8C \uCD94\uCC9C\uD574\uC694!)"] }))] }), _jsxs(ButtonGap, { children: [_jsx(SelectButton, { label: "\uC18C\uD615 \uC804\uC2DC", onClick: () => setSelectedSize("소형 전시"), isSelected: selectedSize === "소형 전시" }), _jsx(SelectButton, { label: "\uC911\uD615 \uC804\uC2DC", onClick: () => setSelectedSize("중형 전시"), isSelected: selectedSize === "중형 전시" }), _jsx(SelectButton, { label: "\uB300\uD615 \uC804\uC2DC", onClick: () => setSelectedSize("대형 전시"), isSelected: selectedSize === "대형 전시" })] }), _jsx(ProgressBar, { children: _jsx(Progress, { width: (avaliableItem * 100) / maxItem }) }), _jsxs(NextBtn, { onClick: handleNextClick, children: [_jsx("button", { children: "\uB2E4\uC74C\uC73C\uB85C" }), _jsx("img", { src: nextbtn })] })] }));
}
const MainContainer = styled.div `
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem;
  overflow: hidden;
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
const Title = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: 11rem;
  gap: 0.3rem;
`;
const OpenCost = styled.div `
  margin-top: 10%;
  color: var(--Gray-Scale-G400, #656572);
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem; /* 100% */
  letter-spacing: -0.02813rem;
`;
const Range = styled.div `
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
const TypeDetail = styled.img `
  width: var(---spacing-large, 1rem);
  height: var(---spacing-large, 1rem);
  cursor: pointer;
  position: relative;
`;
const ButtonGap = styled.div `
  display: flex;
  flex-wrap: wrap; /* 줄바꿈 허용 */
  gap: 0.75rem;
  white-space: nowrap;
`;
const ProgressBar = styled.div `
  width: 100%;
  height: 0.5rem;
  background-color: #e7e7ee;
  border-radius: 20px;
  margin-top: 55%;
`;
const Progress = styled.div `
  width: ${(props) => props.width}%;
  height: 0.5rem;
  background-color: #52c1bf;
  border-radius: 20px;
  transition: width 0.3s ease;
`;
const NextBtn = styled.div `
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
`;
const Detail = styled.div `
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.75rem; /* 100% */
  letter-spacing: -0.01875rem;
  width: 22rem;
  padding: var(---spacing-small, 0.5rem);
  border-radius: 0.5rem;
  border: 1px solid var(--primary-G500, #52c1bf);
  background: var(--primary-White, #fafbfb);
  color: #52c1bf;
  position: absolute;
  top: 3.2rem;
  left: 0;
`;
export default MatchTypePage;
