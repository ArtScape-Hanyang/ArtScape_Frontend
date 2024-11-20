import styled from "styled-components";

interface ButtonProps {
    label: string;
    width: string;
    backgroundColor: string;
    onClick: () => void;
    color: string;
}

const ButtonStyle = styled.button<{width: string; backgroundColor: string; color: string;}>`
    width: ${(props) => props.width};
    height: 3.5rem;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 1rem;
    /* Shadow/DS200 */
    box-shadow: 0px 0px 8px 0px rgba(34, 34, 34, 0.30);
    color: ${(props) => props.color};
`;

function Button({label, width, backgroundColor, color, onClick}: ButtonProps) {
    return (
        <ButtonStyle width={width} backgroundColor={backgroundColor} color={color} onClick={onClick}>{label}</ButtonStyle>
    )
}

export default Button;