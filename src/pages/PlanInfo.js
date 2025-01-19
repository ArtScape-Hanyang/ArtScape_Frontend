import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../routes/firebase";
import { doc, setDoc } from "firebase/firestore";
function PlanInfo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const isButtonActive = title.trim() !== "" && description.trim() !== "";
    const handleComplete = async () => {
        if (!isButtonActive) {
            alert("모든 필드를 입력해주세요!");
            return;
        }
        try {
            await setDoc(doc(db, "plans", "mainPlan"), {
                title: title.trim(),
                description: description.trim(),
            });
            console.log("✅ 데이터 저장 완료!");
            navigate("/multi_pln"); // 저장 후 이동
            alert("데이터가 저장되었습니다!");
            // 상태 초기화
            setTitle("");
            setDescription("");
        }
        catch (error) {
            console.error("❌ Error writing document:", error);
            alert("저장에 실패했습니다.");
        }
    };
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(Header, {}), _jsx(H1, { children: "\uC804\uC2DC \uC815\uBCF4 \uC785\uB825" }), _jsx(H3, { children: "\uC804\uC2DC \uC81C\uBAA9, \uC124\uBA85 \uB4F1\uC744 \uC790\uC720\uB86D\uAC8C \uC791\uC131\uD574\uBCF4\uC138\uC694!" }), _jsx(TitleInput, { placeholder: "\uC804\uC2DC \uC81C\uBAA9 \uC785\uB825", value: title, onChange: (e) => setTitle(e.target.value) }), _jsx(Textarea, { placeholder: "\uC804\uC2DC \uC124\uBA85 \uC785\uB825", value: description, onChange: (e) => setDescription(e.target.value) }), _jsx(BtnContainer, { children: _jsx(StyledButton, { isActive: isButtonActive, onClick: handleComplete, children: "\uC644\uB8CC" }) })] }));
}
const MainContainer = styled.div `
  width: 25.125rem;
  min-height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
  position: relative;
  padding: 0;
`;
const H1 = styled.h1 `
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25rem; /* 100% */
  letter-spacing: -0.03125rem;
  margin-top: 2.25rem;
  padding: 0 1.5rem;
`;
const H3 = styled.h3 `
  color: var(--Gray-Scale-G400, #656572);

  /* Body/M500 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  margin-top: 1%;
  padding: 0 1.5rem;
`;
const TitleInput = styled.input `
  width: 20.6rem;
  height: 2.5rem;
  padding: 0 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #e7e7ee;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  background-color: #e7e7ee;
  margin: 0 1.5rem;
`;
const Textarea = styled.textarea `
  width: 20.6rem;
  padding: 0.75rem;
  resize: vertical;
  min-height: 3rem;
  max-height: 12rem;
  border-radius: 0.375rem;
  border: 1px solid var(--Gray-Scale-G100, #e7e7ee);

  /* Body/M500b */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.025rem;
  &::placeholder {
    color: var(--Gray-Scale-G300, #9696a6); /* 플레이스홀더 색상 변경 */
  }

  color: var(--Gray-Scale-G400, #656572);

  /* 최소 높이 */
  min-height: 17.625rem;
  resize: none;
  margin: 2rem 1.5rem;
`;
const BtnContainer = styled.div `
  margin-top: 16.37rem;
  width: 100%-1.5rem;
  height: auto;
  padding: 0 1.5rem;
`;
const StyledButton = styled.button `
  background-color: ${({ isActive }) => (isActive ? "#52C1BF" : "#CDCDD6")};
  cursor: ${({ isActive }) => (isActive ? "pointer" : "not-allowed")};
  width: 22.125rem;
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  height: 3.5rem;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  border-radius: 1rem;
  /* Shadow/DS200 */
  box-shadow: 0px 0px 8px 0px rgba(34, 34, 34, 0.3);
`;
export default PlanInfo;
