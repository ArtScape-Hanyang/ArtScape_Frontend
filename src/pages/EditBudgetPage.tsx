import { useContext, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import { BudgetContext } from "../layout/BudgetContext";
import { db } from "../routes/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const EditBudgetPage = () => {
  const { setBudgetItems } = useContext(BudgetContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const navigate = useNavigate();

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    const costNumber = parseFloat(cost);

    if (name && !isNaN(costNumber) && costNumber > 0) {
      const newItem = { id: Date.now(), name, cost: costNumber };

      try {
        // Firebase에 새로운 데이터로 덮어쓰기
        const updatedBudgetItems = [newItem]; // 새 항목으로 기존 예산 초기화
        await setDoc(
          doc(db, "plans", "mainPlan"),
          { budget: { budgetItems: updatedBudgetItems } },
          { merge: true }
        );

        // Context 업데이트
        setBudgetItems(updatedBudgetItems);

        alert("예산이 업데이트되었습니다!");
        setName("");
        setCost("");
        navigate("/multi_pln/budget");
      } catch (error) {
        console.error("Error updating budget item:", error);
        alert("예산 업데이트에 실패했습니다.");
      }
    }
  };

  return (
    <MainContainer>
      <GlobalStyle />
      <Header />
      <TextContainer>
        <TextContainerTitle>
          <H2>지출 항목 입력</H2>
          <BodyM500>예상되는 지출을 자유롭게 작성해보세요!</BodyM500>
        </TextContainerTitle>
      </TextContainer>
      <BudgetForm onSubmit={handleAddItem}>
        <BudgetContaniner>
          <M500Grey>지출 항목</M500Grey>
          <Input
            type="text"
            placeholder="항목명"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <M500Grey>지출 금액</M500Grey>
          <Input
            type="number"
            placeholder="금액"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </BudgetContaniner>
        <Button type="submit">입력 완료</Button>
      </BudgetForm>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 25.125rem;
  min-height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  align-items: center;
  gap: 8px;
  position: relative;
  text-align: left;
  top: 2.25rem;
`;

const TextContainerTitle = styled.div`
  position: absolute;
  align-self: stretch;
  margin-left: 1.5rem;
`;

const H2 = styled.h1`
  color: var(--Gray-Scale-Black, #17171b);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: -0.0375rem;
`;

const BodyM500 = styled.p`
  color: var(--Gray-Scale-G400, #656572);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: -0.025rem;
`;

const M500Grey = styled(BodyM500)`
  color: var(--Gray-Scale-G400, #656572);
  margin: 0;
`;

const BudgetContaniner = styled.div`
  display: flex;
  width: 20.125rem;
  padding: 1.25rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid var(--Gray-Scale-G100, #e7e7ee);
  background: var(--primary-White, #fafbfb);
  margin-top: 0.75rem;
  margin-left: 1.5rem;
`;

const BudgetForm = styled.form`
  margin-top: 8.75rem;
`;

const Input = styled.input`
  display: flex;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
  border-radius: 0.5rem;
  background: var(--Gray-Scale-G100, #e7e7ee);
  border: none;

  &::placeholder {
    color: var(--Gray-Scale-G300, #9696a6);
  }

  &:nth-of-type(1) {
    margin-bottom: 0.75rem;
  }
`;

const Button = styled.button`
  width: 22.125rem;
  height: 4rem;
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
  margin: 17.5rem 1.5rem 0 1.5rem;

  &:hover {
    background-color: #aeaeae;
  }
`;

export default EditBudgetPage;
