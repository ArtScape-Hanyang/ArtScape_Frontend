import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import aimatchstar from "../asset/aimatchstar.png";
import nextbtn from "../asset/nextbtn.svg";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/backBtn";
const MainContainer = styled.div `
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem;
  overflow: hidden;
`;
const Title = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
  gap: 0.3rem;
`;
const AI = styled.h1 `
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 100% */
  letter-spacing: -0.0375rem;
  margin: 0;
  color: #52c1bf;
`;
const H1 = styled.h1 `
  font-family: Pretendard;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 100% */
  letter-spacing: -0.04375rem;
  margin: 0;
`;
const ImgContainer = styled.div `
  width: 100%;
  height: 35rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
`;
const BackImg = styled.img `
  width: 35rem;
  height: 100%;
  position: absolute;
`;
const NextBtn = styled.div `
  display: flex;
  justify-content: flex-end;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  gap: 0.5rem;
  cursor: pointer;
  color: #656572;
`;
function Matching() {
    const navigate = useNavigate();
    const handleNextClick = () => {
        navigate("/matching/type");
    };
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(BackButton, {}), _jsxs(Title, { children: [_jsx(AI, { children: "AI\uAC00 \uCC3E\uC544\uC8FC\uB294" }), _jsx(H1, { children: "\uB2F9\uC2E0\uC758 \uD611\uC5C5 \uD30C\uD2B8\uB108" })] }), _jsx(ImgContainer, { children: _jsx(BackImg, { src: aimatchstar }) }), _jsxs(NextBtn, { onClick: handleNextClick, children: [_jsx("button", { children: "\uC2DC\uC791\uD558\uAE30" }), _jsx("img", { src: nextbtn })] })] }));
}
export default Matching;
