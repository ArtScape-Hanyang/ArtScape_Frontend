import styled from "styled-components";

interface SelectButtonProps {
  label: string;
  width?: string;
  onClick: () => void;
  isSelected?: boolean;
}

const StyledButton = styled.button<{ isSelected: boolean; width?: string }>`
  padding: 0.5rem 1rem;
  width: ${({ width }) => width || "5.63rem"};
  height: 2rem;
  background-color: white;
  border-radius: 8px;
  border: ${({ isSelected }) =>
    isSelected
      ? "1px solid #52C1BF"
      : "1px solid var(--Gray-Scale-G200, #CDCDD6)"};
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  color: ${(props) =>
    props.isSelected ? "#52C1BF" : "var(--Gray-Scale-G300, #9696A6)"};
`;

const SelectButton: React.FC<SelectButtonProps> = ({
  label,
  width,
  onClick,
  isSelected = false,
}) => {
  return (
    <StyledButton
      isSelected={isSelected} // DOM으로 전달되지 않음
      width={width}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default SelectButton;
