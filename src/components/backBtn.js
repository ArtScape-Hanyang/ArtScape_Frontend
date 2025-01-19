import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backbtn from "../asset/backbtn.svg"; // 경로는 실제 파일 경로에 맞게 수정
const BackButton = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };
    return (_jsx(BackButtonContainer, { onClick: handleBackClick, children: _jsx("img", { src: backbtn, alt: "\uB4A4\uB85C\uAC00\uAE30 \uBC84\uD2BC" }) }));
};
export default BackButton;
// 스타일링 (필요 시 수정)
const BackButtonContainer = styled.div `
  cursor: pointer;
`;
