import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backbtn from "../asset/backbtn.svg"; // 경로는 실제 파일 경로에 맞게 수정

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <BackButtonContainer onClick={handleBackClick}>
      <img src={backbtn} alt="뒤로가기 버튼" />
    </BackButtonContainer>
  );
};

export default BackButton;

// 스타일링 (필요 시 수정)
const BackButtonContainer = styled.div`
  cursor: pointer;
`;
