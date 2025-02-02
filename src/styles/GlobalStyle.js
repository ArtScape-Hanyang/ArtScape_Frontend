import { createGlobalStyle } from "styled-components";
// 변수명 앞에 두 개의 대시(--)를 붙여서 사용합니다.
// :root 의사 클래스는 문서 트리의 루트 요소를 선택합니다. <html> 요소와 동일합니다.
const GlobalStyle = createGlobalStyle `
  :root {
    width: 25.125rem;
    height: 54.625rem;
    margin: 0 auto;
    padding: 0rem 1.5rem 0rem 1.5rem;
    background-color: #e9e9e9;
    
    
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
   
    overflow-y: auto;
   
    font-family: 'Pretendard-Regular', sans-serif;
    
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
/* 기본 버튼 스타일 초기화 */
button {
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  font: inherit;
  cursor: pointer;
}

`;
export default GlobalStyle;
