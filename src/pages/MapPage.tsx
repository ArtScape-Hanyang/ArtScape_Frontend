import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

const MainContainer = styled.div`
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffc0c0;
  box-sizing: border-box;
`;
const MapPage = () => {
  return (
    <MainContainer>
      <GlobalStyle />
    </MainContainer>
  );
};

export default MapPage;
