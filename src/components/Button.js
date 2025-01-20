import { jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
const ButtonStyle = styled.button `
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
function Button({ label, width, backgroundColor, color, onClick }) {
    return (_jsx(ButtonStyle, { width: width, backgroundColor: backgroundColor, color: color, onClick: onClick, children: label }));
}
export default Button;
