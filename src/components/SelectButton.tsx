import styled from "styled-components";

interface SelectButtonProps {
    label: string;
}

const Button = styled.button`
  width: 5.63rem;
  height: 2rem;
  background-color: white;
  border-radius: 8px;
  border: 1px solid var(--Gray-Scale-G200, #CDCDD6);
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  color: var(--Gray-Scale-G300, #9696A6);
`;



function SelectButton({label}: SelectButtonProps) {
  return (
    <Button>{label}</Button>
  );
};

export default SelectButton;