import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../routes/firebase";
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
const StyledCalendar = styled(Calendar) `
  border: 1px solid #e7e7ee;
  border-radius: 0.5rem;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25rem; /* 100% */
  letter-spacing: -0.03125rem;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 20rem;

  && .react-calendar__navigation {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  && .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    color: #9696a6;
    font-size: 1rem;
    font-weight: 500;
    text-transform: lowercase;
  }

  && .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: #52c1bf;
    border-radius: 0.5rem;
    width: 2rem;
  }

  && .react-calendar__navigation__arrow {
    font-size: large;
  }

  && .react-calendar__navigation__prev-button {
    color: #52c1bf;
    position: absolute;
    top: 1.25rem;
    right: 3rem;
    width: 0.5rem;
  }

  && .react-calendar__navigation__next-button {
    color: #52c1bf;
    position: absolute;
    top: 1.25rem;
    right: 0.75rem;
  }

  && .react-calendar__navigation__label {
    font-size: 1rem;
    font-weight: 600;
    position: absolute;
    top: 1.25rem;
    left: 0.75rem;
  }

  && .react-calendar__tile--rangeStart,
  && .react-calendar__tile--rangeEnd {
    border-radius: 0.5rem !important;
    background-color: #52c1bf !important;
    color: white;
    width: 2rem;
  }

  && .react-calendar__year-view__months,
  .react-calendar__tile--range {
    background-color: #52c1bf3d !important;
    color: black;
    border-radius: 0 !important;
  }

  .react-calendar__tile--now {
    background: lightcoral;
    border-radius: 14px;
  }
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
const DateRangeDisplay = styled.div `
  margin-top: 2rem;
  width: 21.8rem;
  margin-left: 1.5rem;
  height: 2rem;
  border-radius: 0.5rem;
  border: 1px solid #e7e7ee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  color: #52c1bf;
`;
function PlanDate() {
    const today = new Date();
    const [date, setDate] = useState(today);
    const navigate = useNavigate();
    const handleDateChange = (newDate) => {
        setDate(newDate);
    };
    const handleComplete = async () => {
        if (!Array.isArray(date) || !date[0] || !date[1]) {
            return;
        }
        const startDate = moment(date[0]).format("YYYY-MM-DD");
        const endDate = moment(date[1]).format("YYYY-MM-DD");
        try {
            // Firestore에 데이터 저장
            await setDoc(doc(db, "plans", "mainPlan"), {
                startDate,
                endDate,
            }, { merge: true });
            alert("날짜가 저장되었습니다!");
            navigate("/multi_pln");
        }
        catch (error) {
            console.error("Error saving date:", error);
            alert("날짜 저장에 실패했습니다.");
        }
    };
    const formatRange = () => {
        if (Array.isArray(date) && date[0] && date[1]) {
            const startDate = moment(date[0]).format("YYYY. MM. DD");
            const endDate = moment(date[1]).format("YYYY. MM. DD");
            return `${startDate} -> ${endDate}`;
        }
    };
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(Header, {}), _jsx(H1, { children: "\uC804\uC2DC \uB0A0\uC9DC \uC120\uD0DD" }), _jsx(H3, { children: "\uC804\uC2DC\uB97C \uAC1C\uCD5C\uD560 \uB0A0\uC9DC\uB97C \uC120\uD0DD\uD574\uBCF4\uC138\uC694!" }), formatRange() ? (_jsx(DateRangeDisplay, { children: formatRange() })) : null, _jsx(StyledCalendar, { locale: "en-US", value: date, onChange: handleDateChange, calendarType: "gregory", prev2Label: null, next2Label: null, formatDay: (locale, date) => moment(date).format("D"), selectRange: true }), _jsx(BtnContainer, { children: _jsx(StyledButton, { onClick: handleComplete, isActive: Array.isArray(date) && !!date[0] && !!date[1], children: "\uC644\uB8CC" }) })] }));
}
export default PlanDate;
