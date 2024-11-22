import styled from "styled-components";
import Header from "../components/header";
import GlobalStyle from "../styles/GlobalStyle";
import { useContext, useState } from "react";
import { BudgetContext } from "../layout/BudgetContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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

const EditBudgetPage = () => {
  const { setBudgetItems } = useContext(BudgetContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState(""); // Default to empty string
  const navigate = useNavigate(); // Initialize navigate

  const handleAddItem = (e) => {
    e.preventDefault(); // Prevent default form submission
    const costNumber = parseFloat(cost); // Convert cost to a number

    if (name && !isNaN(costNumber) && costNumber > 0) {
      const newItem = { id: Date.now(), name, cost: costNumber };
      setBudgetItems((prevBudgetItems) => [...prevBudgetItems, newItem]); // Add new item to global budgetItems
      setName(""); // Reset name input
      setCost(""); // Reset cost input to empty string
      navigate("/multi_pln/budget"); // Redirect to budget page after adding the item
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
            onChange={(e) => setCost(Number(e.target.value))}
          />
        </BudgetContaniner>
        <Button type="submit">입력 완료</Button>
      </BudgetForm>
    </MainContainer>
  );
};

export default EditBudgetPage;