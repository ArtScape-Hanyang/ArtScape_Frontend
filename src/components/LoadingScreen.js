import { jsx as _jsx } from "react/jsx-runtime";
import { styled } from "styled-components";
const Wrapper = styled.div `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.span `
  font-size: 24px;
`;
export default function LoadingScreen() {
    return (_jsx(Wrapper, { children: _jsx(Text, { children: "Loading..." }) }));
}
