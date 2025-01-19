import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../routes/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Navbar from "../components/NavBar";
import Header from "../components/header";
function PlanListPage() {
    const [plans, setPlans] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "plandetail"));
                const fetchedPlans = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    title: doc.data().title || "제목 없음",
                }));
                setPlans(fetchedPlans);
            }
            catch (error) {
                console.error("Error fetching plans:", error);
            }
        };
        fetchPlans();
    }, []);
    const handlePlanClick = (id) => {
        // ✅ id의 타입을 명확하게 지정
        navigate(`/plandetail/${id}`);
    };
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(Header, {}), _jsx(Navbar, {}), _jsxs(ListContainer, { children: [_jsx("h1", { children: "\uD0D0\uC0C9" }), _jsx(PlanList, { children: plans.map((plan) => (_jsx(PlanItem, { onClick: () => handlePlanClick(plan.id), children: plan.title }, plan.id))) })] })] }));
}
export default PlanListPage;
// Styled Components
const MainContainer = styled.div `
  width: 25.125rem;
  min-height: 50.625rem;
  height: auto;
  background-color: #ffffff;
  box-sizing: border-box;
  position: relative;
`;
const ListContainer = styled.div `
  padding: 1rem;
`;
const PlanList = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const PlanItem = styled.div `
  padding: 1rem;
  border: 1px solid #e7e7ee;
  border-radius: 0.5rem;
  background-color: #fafbfb;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--Gray-Scale-G400, #656572);

  /* Body/M500 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  &:hover {
    background-color: #e7f3f2;
  }
`;
