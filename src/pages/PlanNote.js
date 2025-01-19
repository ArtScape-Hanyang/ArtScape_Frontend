import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import { useEffect, useState } from "react";
import { db } from "../routes/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
function PlanNote() {
    const [containers, setContainers] = useState([]);
    // Firestore에서 메모 불러오기
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const docRef = doc(db, "plans", "mainPlan");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setContainers(data.notes || []);
                }
                else {
                    console.log("No such document!");
                }
            }
            catch (error) {
                console.error("Error fetching notes:", error);
            }
        };
        fetchNotes();
    }, []);
    // 새 메모 추가
    const handleAddContainer = () => {
        setContainers((prev) => [
            ...prev,
            { id: prev.length, text: "", mention: "" },
        ]);
    };
    // 메모 내용 변경
    const handleChange = (id, field, value) => {
        setContainers((prev) => prev.map((container) => container.id === id ? { ...container, [field]: value } : container));
    };
    // 메모 삭제
    const handleDelete = (id) => {
        setContainers((prev) => prev.filter((container) => container.id !== id));
    };
    // 메모 저장
    const handleSave = async () => {
        try {
            await setDoc(doc(db, "plans", "mainPlan"), { notes: containers }, { merge: true });
            alert("메모가 저장되었습니다!");
        }
        catch (error) {
            console.error("Error saving notes:", error);
            alert("메모 저장에 실패했습니다.");
        }
    };
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(Header, {}), _jsx(H1, { children: "Note" }), _jsx(H3, { children: "\uC790\uC720\uB86D\uAC8C \uAE30\uB85D\uD574\uBCF4\uC138\uC694!" }), _jsx(TotalInputContainer, { children: containers.map((container) => (_jsxs(InputContainer, { children: [_jsxs(MentionContainer, { children: [_jsx("span", { children: "@" }), _jsx("input", { type: "text", placeholder: "\uD611\uC5C5 \uC791\uAC00\uB2D8", value: container.mention, onChange: (e) => handleChange(container.id, "mention", e.target.value) })] }), _jsx("textarea", { placeholder: "\uB0A8\uAE30\uACE0 \uC2F6\uC740 Note\uB97C \uC791\uC131\uD574\uBCF4\uC138\uC694.", value: container.text, onChange: (e) => handleChange(container.id, "text", e.target.value), onInput: (e) => {
                                e.currentTarget.style.height = "auto";
                                e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                            } }), _jsx(DeleteButton, { onClick: () => handleDelete(container.id), children: "\uC0AD\uC81C" })] }, container.id))) }), _jsx(PlusBtn, { onClick: handleAddContainer, children: "+" }), _jsx(SaveButton, { onClick: handleSave, children: "\uC644\uB8CC" })] }));
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
  font-weight: 700;
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
const TotalInputContainer = styled.div `
  width: 100%-1.5rem;
  height: auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
const InputContainer = styled.div `
  width: 100%-1.5rem;
  height: auto;
  border-radius: 0.375rem;
  border: 1px solid #e7e7ee;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  textarea {
    background-color: transparent;
    border: none;
    resize: none;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
    overflow: hidden;
  }
`;
const MentionContainer = styled.div `
  width: 6rem;
  height: 1rem;
  background-color: rgba(82, 193, 191, 0.16);
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem;
  color: #52c1bf;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  input {
    min-width: 3.37rem;
    background-color: transparent;
    border: none;
    color: #52c1bf;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 0.75rem; /* 100% */
    letter-spacing: -0.01875rem;
    &::placeholder {
      color: #52c1bf; /* 플레이스홀더 색상 변경 */
    }
  }
`;
const PlusBtn = styled.button `
  width: 22.125rem;
  height: 2.5rem;
  border: 1px solid #e7e7ee;
  border-radius: 0.375rem;
  color: #656572;
  margin-left: 1.5rem;
  margin-top: 0.75rem;
  font-size: 1.5rem;
`;
const SaveButton = styled.button `
  width: 22.125rem;
  height: 3.5rem;
  margin: 1.5rem auto;
  display: block;
  background-color: #52c1bf;
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 0.375rem;
  cursor: pointer;
`;
const DeleteButton = styled.button `
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: #ff3333;
  }
`;
export default PlanNote;
