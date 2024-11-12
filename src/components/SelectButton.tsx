import styled from "styled-components";

interface SelectButtonProps {
    label: string;
}

const Button = styled.button`
  width: 90px;
  height: 32px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid var(--Gray-Scale-G200, #CDCDD6);
  font-size: 16px;
  font-weight: 600;
  color: var(--Gray-Scale-G300, #9696A6);
`;



function SelectButton({label}: SelectButtonProps) {
  return (
    <Button>{label}</Button>
  );
};

export default SelectButton;