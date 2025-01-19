import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
const StyledButton = styled.button `
  padding: 0.5rem 1rem;
  width: ${({ width }) => width || "5.63rem"};
  height: 2rem;
  background-color: white;
  border-radius: 8px;
  border: ${({ isSelected }) => isSelected
    ? "1px solid #52C1BF"
    : "1px solid var(--Gray-Scale-G200, #CDCDD6)"};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  color: ${(props) => props.isSelected ? "#52C1BF" : "var(--Gray-Scale-G300, #9696A6)"};
`;
const SelectButton = ({ label, width, onClick, isSelected = false, }) => {
    return (_jsx(StyledButton, { isSelected: isSelected, width: width, onClick: onClick, children: label }));
};
export default SelectButton;
