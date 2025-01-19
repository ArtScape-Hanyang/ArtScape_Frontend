import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useState } from "react";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BudgetContext } from "../layout/BudgetContext"; // Context 불러오기
import { db } from "../routes/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
const ArtRegiBugetPage = () => {
    const navigate = useNavigate();
    const { budgetItems, totalCost, perPersonCost, setBudgetItems } = useContext(BudgetContext);
    const [peopleCount, setPeopleCount] = useState(1);
    useEffect(() => {
        const fetchBudget = async () => {
            try {
                const docRef = doc(db, "plans", "mainPlan");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setBudgetItems(data.budget?.budgetItems || []);
                }
            }
            catch (error) {
                console.error("Error fetching budget data:", error);
            }
        };
        fetchBudget();
    }, [setBudgetItems]);
    const handleModifyClick = () => {
        navigate("/multi_pln/budget/edit");
    };
    const handleSave = async (e) => {
        e.preventDefault();
        try {
            await setDoc(doc(db, "plans", "mainPlan"), {
                budget: {
                    budgetItems,
                    totalCost,
                    perPersonCost: perPersonCost(peopleCount),
                },
            }, { merge: true });
            alert("예산이 저장되었습니다!");
            navigate("/multi_pln");
        }
        catch (error) {
            console.error("Error saving budget:", error);
            alert("예산 저장에 실패했습니다.");
        }
    };
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(Header, {}), _jsx(TextContainerTitle, { children: _jsx(Label, { children: "1\uC778\uB2F9 \uCD1D \uC608\uC0C1 \uBE44\uC6A9" }) }), _jsxs(CountNumContainer, { children: [_jsx(CountNum, { children: perPersonCost(peopleCount) }), _jsx(CountText, { children: "\uC6D0" })] }), _jsxs(CountNumContainer2, { children: [_jsx(Label2, { children: "\uCD1D \uC608\uC0C1 \uBE44\uC6A9" }), _jsx(Label2, { children: "\u20A9" }), _jsx(CountNum2, { children: totalCost })] }), _jsx(CountNumContainer2, { children: _jsxs(Label, { children: ["\uCC38\uC5EC \uC778\uC6D0 \uC218:", _jsx(Input, { type: "number", min: "1", value: peopleCount, onChange: (e) => setPeopleCount(Number(e.target.value)) })] }) }), _jsxs(BudgetForm, { onSubmit: handleSave, children: [budgetItems.map((item) => (_jsx(BudgetContaniner, { children: _jsxs(TextField, { children: [_jsx(M500Grey, { children: item.name }), _jsxs(BodyM500, { children: ["\u20A9", item.cost.toLocaleString("en-US")] })] }) }, item.id))), _jsxs(ButtonContainer, { children: [_jsx(Button, { type: "button", onClick: handleModifyClick, children: "\uC218\uC815" }), _jsx(SaveButton, { type: "submit", children: "\uC644\uB8CC" })] })] })] }));
};
const MainContainer = styled.div `
  width: 25.125rem;
  min-height: 54.625rem;
  background: var(--primary-White, #ffffff);
  box-sizing: border-box;
`;
const Label = styled.label `
  overflow: hidden;
  color: var(--primary-G500, #52c1bf);
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  text-overflow: ellipsis;

  /* Header/H4 */
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.125rem; /* 100% */
  letter-spacing: -0.02813rem;
`;
const Label2 = styled(Label) `
  overflow: hidden;
  color: var(--Gray-Scale-G300, #9696a6);
  text-overflow: ellipsis;

  /* Body/S600 */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 0.75rem; /* 100% */
  letter-spacing: -0.01875rem;
`;
const TextContainerTitle = styled.div `
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  top: 4.25rem;
`;
const CountNumContainer = styled.div `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  margin-top: 3.13rem;
`;
const CountNumContainer2 = styled(CountNumContainer) `
  display: inline-flex;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
const CountNum = styled.p `
  overflow: hidden;
  color: var(--Gray-Scale-Black, #17171b);
  text-align: right;
  font-feature-settings: "liga" off, "clig" off;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2rem; /* 80% */
  letter-spacing: -0.0625rem;
  margin: 0;
`;
const CountNum2 = styled(CountNum) `
  overflow: hidden;
  color: var(--Gray-Scale-G300, #9696a6);
  text-align: right;
  text-overflow: ellipsis;

  /* Body/S500 */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.75rem; /* 100% */
  letter-spacing: -0.01875rem;
`;
const CountText = styled.p `
  overflow: hidden;
  color: var(--Gray-Scale-Black, #17171b);
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 100% */
  letter-spacing: -0.04375rem;
`;
const BudgetContaniner = styled.div `
  display: flex;
  width: 20.125rem;
  padding: 1.25rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid var(--Gray-Scale-G100, #e7e7ee);
  background: var(--primary-White, #fafbfb);

  margin: 2.5rem 0 1rem 1.5rem;

  p:first-child {
    overflow: hidden;
    color: var(--Gray-Scale-G400, #656572);
    text-overflow: ellipsis;

    /* Body/M500 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
  }
  p:last-child {
    overflow: hidden;
    color: var(--Gray-Scale-Black, #17171b);
    text-align: right;
    text-overflow: ellipsis;

    /* Body/M500 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
  }
`;
const BodyM500 = styled.p `
  color: var(--Gray-Scale-G400, #656572);

  /* Body/M500 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
`;
const M500Grey = styled(BodyM500) `
  color: var(--Gray-Scale-G400, #656572);

  /* Body/M500 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;

  overflow: hidden;
  text-overflow: ellipsis;

  margin: 0;
`;
const TextField = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;
const BudgetForm = styled.form ``;
const Input = styled.input `
  width: 4.25rem;
  padding: 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 0.375rem;
  border: 1px solid var(--Gray-Scale-G100, #e7e7ee);
  color: var(--Gray-Scale-G400, #656572);
  /* Body/M500b */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.025rem;
  margin-top: 1rem;
  margin-left: 1rem;
  &::placeholder {
    color: var(--Gray-Scale-G300, #9696a6); /* 플레이스홀더 색상 변경 */
  }
`;
const SaveButton = styled.button `
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: var(--primary-G500, #52c1bf);
  color: #fafbfb;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25rem;

  &:hover {
    background-color: #aeaeae;
  }
`;
const ButtonContainer = styled.div `
  width: 22.125rem;
  height: 4rem;
  display: flex;
  padding: 0.75rem 1rem;
  justify-content: flex-start;
  gap: 0.5rem;
  margin: 0 auto;
`;
const Button = styled.button `
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: var(--primary-G500, #aeaeae);
  color: #fafbfb;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25rem;

  &:hover {
    background-color: #52c1bf;
  }
`;
export default ArtRegiBugetPage;
