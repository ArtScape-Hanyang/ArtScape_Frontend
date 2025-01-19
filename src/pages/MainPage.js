import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import Banner from "../components/Banner";
import EventBannerImg from "../asset/eventbanner1.png";
import ProfileImg1 from "../asset/profile1.png";
import ProfileImg2 from "../asset/profile2.png";
import ProfileImg3 from "../asset/profile3.png";
import NavBar from "../components/NavBar";
const MainPage = () => {
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(Header, {}), _jsx(NavBar, {}), _jsx(Banner, {}), _jsx(EventBanner, {}), _jsx(TextContainer, { children: _jsx(H5, { children: "\uD314\uB85C\uC6B0 \uC911\uC778 \uC791\uAC00" }) }), _jsxs(ProfileContainer, { children: [_jsx(ProfileImgContainer01, {}), _jsxs(ProfileTextContainer, { children: [_jsx(BodyS400, { children: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC131\uB3D9\uAD6C" }), _jsx(BodyM600, { children: "\uC774\uC7AC\uC6B1 \uC791\uAC00\uB2D8" }), _jsx(BodyR500, { children: "#\uC11C\uC591\uD654" })] })] }), _jsxs(ProfileContainer, { children: [_jsx(ProfileImgContainer02, {}), _jsxs(ProfileTextContainer, { children: [_jsx(BodyS400, { children: "\uACBD\uAE30\uB3C4 \uC548\uC0B0\uC2DC" }), _jsx(BodyM600, { children: "\uC2E0\uC740\uC11C \uC791\uAC00\uB2D8" }), _jsx(BodyR500, { children: "#\uC11C\uC591\uD654" })] })] }), _jsxs(ProfileContainer, { children: [_jsx(ProfileImgContainer03, {}), _jsxs(ProfileTextContainer, { children: [_jsx(BodyS400, { children: "\uC81C\uC8FC\uD2B9\uBCC4\uC790\uCE58\uB3C4 \uC81C\uC8FC\uC2DC" }), _jsx(BodyM600, { children: "\uC815\uC7AC\uBBFC \uC791\uAC00\uB2D8" }), _jsx(BodyR500, { children: "#\uC885\uAD50\uC608\uC220" })] })] }), _jsxs(ProfileContainer, { children: [_jsx(ProfileImgContainer03, {}), _jsxs(ProfileTextContainer, { children: [_jsx(BodyS400, { children: "\uC81C\uC8FC\uD2B9\uBCC4\uC790\uCE58\uB3C4 \uC81C\uC8FC\uC2DC" }), _jsx(BodyM600, { children: "\uC815\uC7AC\uBBFC \uC791\uAC00\uB2D8" }), _jsx(BodyR500, { children: "#\uC885\uAD50\uC608\uC220" })] })] }), _jsxs(ProfileContainer, { children: [_jsx(ProfileImgContainer03, {}), _jsxs(ProfileTextContainer, { children: [_jsx(BodyS400, { children: "\uC81C\uC8FC\uD2B9\uBCC4\uC790\uCE58\uB3C4 \uC81C\uC8FC\uC2DC" }), _jsx(BodyM600, { children: "\uC815\uC7AC\uBBFC \uC791\uAC00\uB2D8" }), _jsx(BodyR500, { children: "#\uC885\uAD50\uC608\uC220" })] })] })] }));
};
// 메인 컨테이너 스타일
const MainContainer = styled.div `
  width: 25.125rem;
  background-color: #ffffff;
  box-sizing: border-box;
`;
// 텍스트 컨테이너 스타일
const TextContainer = styled.div `
  align-items: center;
  position: relative;
  text-align: left;
`;
const EventBanner = styled.div `
  margin: 0 auto;
  margin-top: 1.5rem;
  background-color: aqua;
  width: 22.125rem;
  height: 5rem;
  flex-shrink: 0;
  border-radius: 0.75rem;

  background: url(${EventBannerImg}) no-repeat center center;
  background-size: cover; /* 이미지 크기 조정 */
  margin-bottom: 1.25rem;
`;
const H5 = styled.h5 `
  margin: 0;
  margin-left: 1.5rem;
  color: #000;

  /* Header/H5 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;

  margin-bottom: 1.25rem;
`;
const ProfileContainer = styled.div `
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
`;
const ProfileTextContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  margin-left: 0.75rem;
`;
const ProfileImgContainer01 = styled.div `
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--Gray-Scale-G200, #cdcdd6);
  background: url(${ProfileImg1}) no-repeat center center;
  background-size: cover;

  /* Shadow/DS200 */
  box-shadow: 0px 0px 8px 0px rgba(34, 34, 34, 0.3);
`;
const ProfileImgContainer02 = styled.div `
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--Gray-Scale-G200, #cdcdd6);
  background: url(${ProfileImg2}) no-repeat center center;
  background-size: cover;

  /* Shadow/DS200 */
  box-shadow: 0px 0px 8px 0px rgba(34, 34, 34, 0.3);
`;
const ProfileImgContainer03 = styled.div `
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--Gray-Scale-G200, #cdcdd6);
  background: url(${ProfileImg3}) no-repeat center center;
  background-size: cover;

  /* Shadow/DS200 */
  box-shadow: 0px 0px 8px 0px rgba(34, 34, 34, 0.3);
`;
const BodyS400 = styled.p `
  margin: 0;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 148%; /* 1.11rem */
  letter-spacing: -0.01875rem;
`;
const BodyM600 = styled.p `
  margin: 0;
  color: var(--Gray-Scale-Black, #17171b);

  /* Body/M600 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
`;
const BodyR500 = styled.p `
  margin: 0;
  color: var(--primary-G500, #52c1bf);

  /* Body/R500 */
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.875rem; /* 100% */
  letter-spacing: -0.02188rem;
`;
export default MainPage;
