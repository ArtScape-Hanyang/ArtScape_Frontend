import styled from "styled-components";

interface SelectButtonProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
}

const Button = styled.button<{ isSelected: boolean }>`
  width: 5.63rem;
  height: 2rem;
  background-color: white;
  border-radius: 8px;
  border: ${({ isSelected }) => (isSelected ? "1px solid #52C1BF" : "1px solid var(--Gray-Scale-G200, #CDCDD6)")};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  color: ${({ isSelected }) => (isSelected ? "#52C1BF" : "var(--Gray-Scale-G300, #9696A6)")};
`;



function SelectButton({label, isSelected, onClick}: SelectButtonProps) {
  return (
    <Button isSelected={isSelected} onClick={onClick}>{label}</Button>
  );
};

export default SelectButton;