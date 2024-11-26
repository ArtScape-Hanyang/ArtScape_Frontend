import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"
import { useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface StyledButtonProps {
    isActive: boolean;
}

const MainContainer = styled.div`
  width: 25.125rem;
  min-height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
  position: relative;
  padding: 0;
`;

const H1 = styled.h1`
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.25rem; /* 100% */
    letter-spacing: -0.03125rem;  
    margin-top: 2.25rem;
    padding: 0 1.5rem;
`;

const H3 = styled.h3`
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

const StyledCalendar = styled(Calendar)`
    border: 1px solid #E7E7EE;
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
        color: #9696A6;
        font-size: 1rem;
        font-weight: 500;
        text-transform: lowercase;
    }

    && .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus,
    .react-calendar__tile--active {
        background-color: #52C1BF;
        border-radius: 0.5rem;
        width: 2rem;
    }

    && .react-calendar__navigation__arrow {
        font-size: large;
    }

    && .react-calendar__navigation__prev-button {
        color: #52C1BF;
        position: absolute;
        top: 1.25rem;
        right: 3rem;
        width: 0.5rem;
    }

    && .react-calendar__navigation__next-button {
        color: #52C1BF;
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
        background-color: #52C1BF !important;
        color: white;
        width: 2rem;
    }

    && .react-calendar__year-view__months, .react-calendar__tile--range {
        background-color: #52C1BF3D !important;
        color: black;
        border-radius: 0 !important;
    }

    .react-calendar__tile--now {
        background: lightcoral;
        border-radius: 14px;
    }

`;

const BtnContainer = styled.div`
    margin-top: 16.37rem;
    width: 100%-1.5rem;
    height: auto;
    padding: 0 1.5rem;
`;

const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${({isActive}) => (
    isActive ? "#52C1BF" : "#CDCDD6")};
    cursor: ${({isActive}) => (
    isActive ? "pointer" : "not-allowed")};
    width: 22.125rem;
    color: ${({isActive}) => (isActive ? "white" : "black")};
    height: 3.5rem;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
    border-radius: 1rem;
    /* Shadow/DS200 */
    box-shadow: 0px 0px 8px 0px rgba(34, 34, 34, 0.30);
`;

const DateRangeDisplay = styled.div`
    margin-top: 2rem;
    width: 21.8rem;
    margin-left: 1.5rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: 1px solid #E7E7EE;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
    color: #52C1BF;
`;

function PlanDate() {
    const today = new Date();
    const [date, setDate] = useState<Value>(today);
    const navigate = useNavigate();
    
    const handleDateChange = (newDate: Value) => {
        setDate(newDate);
    }

    const handleComplete = () => {
        if (!Array.isArray(date) || !date[0] || !date[1]) {
            return;
        }

        navigate('/multi_pln');
    }

    const formatRange = () => {
        if (Array.isArray(date) && date[0] && date[1]) {
            const startDate = moment(date[0]).format("YYYY. MM. DD");
            const endDate = moment(date[1]).format("YYYY. MM. DD");
            return `${startDate}->${endDate}`
        }
    }

    return (
        <MainContainer>
            <GlobalStyle />
            <Header />
            <H1>전시 날짜 선택</H1>
            <H3>전시를 개최할 날짜를 선택해보세요!</H3>
            {formatRange() ? (
                <DateRangeDisplay>{formatRange()}</DateRangeDisplay>)
            : null}
            <StyledCalendar
            locale="en-US"
            value={date}
            onChange={handleDateChange}
            calendarType="gregory"
            prev2Label={null}
            next2Label={null}
            formatDay={(locale, date) => moment(date).format("D")}
            selectRange={true}
            />
            <BtnContainer>
                <StyledButton onClick={handleComplete} isActive={Array.isArray(date) && !!date[0] && !!date[1]}>완료</StyledButton>
            </BtnContainer>
        </MainContainer>
    )
}

export default PlanDate;