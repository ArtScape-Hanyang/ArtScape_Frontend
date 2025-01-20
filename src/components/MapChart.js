import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import styled from "styled-components";
import navigation from "../asset/navigation.svg";
const MainContainer = styled.div `
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  align-self: stretch;
  border-radius: 1rem;
  background: var(--primary-White, #fafbfb);

  /* Shadow/DS200 */
  box-shadow: 0px 0px 8px 0px rgba(34, 34, 34, 0.3);
`;
const TitleContainer = styled.div `
  display: flex;
  width: 20.125rem;
  align-items: center;
  gap: 0.5rem;
`;
const H3 = styled.h3 `
  color: var(--Gray-Scale-Black, #17171b);
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;

  /* Header/H3 */
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.25rem; /* 100% */
  letter-spacing: -0.03125rem;
  margin: 0;
`;
const BodyM500 = styled.p `
  color: var(--Gray-Scale-G400, #656572);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: -0.025rem;
  margin: 0;
`;
const BodyS500 = styled.p `
  color: var(--Gray-Scale-G400, #656572);
  text-align: center;

  /* Body/S500 */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.75rem; /* 100% */
  letter-spacing: -0.01875rem;
  margin: 0;
`;
const AddressContainer = styled.div `
  display: flex;
  width: 20.125rem;
  align-items: center;
  gap: 0.5rem;
`;
const KmView = styled.div `
  display: flex;
  padding: 0.25rem;
  align-items: center;
  gap: 0.25rem;
  border-radius: 0.25rem;
  background: var(--primary-G500, #52c1bf);
`;
const BodyS500white = styled(BodyS500) `
  color: var(--Gray-Scale-G400, #ffffff);
  text-align: center;

  /* Body/S500 */
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 0.75rem; /* 100% */
  letter-spacing: -0.01875rem;
  margin: 0;
`;
const TrView = styled.div `
  display: flex;
  width: 1rem;
  height: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  background: #ef7d1d;
`;
const PrView = styled(TrView) `
  background: var(--Secondary-R400, #ff4040);
`;
const MapChart = ({ selectedPlace }) => {
    return (_jsxs(MainContainer, { children: [_jsxs(TitleContainer, { children: [_jsxs(H3, { children: [" ", selectedPlace?.content || "선택된 장소가 없습니다."] }), _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1rem", height: "1rem", viewBox: "0 0 16 15", fill: "none", children: _jsx("path", { d: "M12.2065 12.6011C12.4324 13.3275 12.5454 13.6907 12.4577 13.8694C12.382 14.0238 12.2322 14.1285 12.0611 14.1464C11.8632 14.1673 11.5611 13.9363 10.9567 13.4743L8.4862 11.5856C8.3122 11.4526 8.22521 11.3861 8.12939 11.3605C8.04484 11.3379 7.95583 11.3379 7.87127 11.3605C7.77546 11.3861 7.68846 11.4526 7.51447 11.5856L5.04394 13.4743C4.4396 13.9363 4.13743 14.1673 3.93954 14.1464C3.76848 14.1285 3.61867 14.0238 3.54293 13.8694C3.45531 13.6907 3.56826 13.3275 3.79417 12.6011L4.78308 9.4213C4.84306 9.22845 4.87304 9.13203 4.867 9.0395C4.86166 8.95777 4.83633 8.8786 4.79323 8.80896C4.74443 8.73011 4.66403 8.66901 4.50324 8.5468L1.8907 6.56127C1.31394 6.12294 1.02556 5.90377 0.991726 5.71061C0.962456 5.54352 1.01991 5.37298 1.14432 5.25765C1.28813 5.12434 1.65034 5.12434 2.37476 5.12434H5.52045C5.73241 5.12434 5.83838 5.12434 5.92798 5.0884C6.00709 5.05667 6.07677 5.00525 6.1304 4.93902C6.19116 4.864 6.22241 4.76273 6.28489 4.56019L7.23589 1.47777C7.46642 0.730565 7.58168 0.356964 7.75685 0.2593C7.9082 0.174913 8.09246 0.174913 8.24382 0.2593C8.41898 0.356964 8.53425 0.730565 8.76478 1.47777L9.71577 4.56019C9.77826 4.76273 9.8095 4.864 9.87026 4.93902C9.9239 5.00525 9.99358 5.05667 10.0727 5.0884C10.1623 5.12434 10.2683 5.12434 10.4802 5.12434H13.6255C14.3498 5.12434 14.712 5.12434 14.8558 5.25765C14.9802 5.37297 15.0377 5.5435 15.0084 5.71059C14.9746 5.90374 14.6863 6.12291 14.1096 6.56124L11.4974 8.5468C11.3366 8.669 11.2562 8.73011 11.2074 8.80895C11.1643 8.8786 11.139 8.95776 11.1337 9.03948C11.1276 9.13201 11.1576 9.22843 11.2176 9.42127L12.2065 12.6011Z", fill: "#EE81A5" }) }), _jsx(BodyM500, { children: "4.8" })] }), _jsxs(AddressContainer, { children: [_jsxs(KmView, { children: [" ", _jsx("img", { src: navigation, alt: "\uB124\uBE44\uAC8C\uC774\uD130" }), _jsx(BodyS500white, { children: "4km" })] }), _jsx(BodyS500, { children: selectedPlace?.address || "선택된 장소가 없습니다." })] }), _jsxs(AddressContainer, { children: [_jsx(TrView, { children: _jsx(BodyS500white, { children: "3" }) }), _jsx(BodyM500, { children: "\uC218\uC11C\uC5ED 6\uBC88 \uCD9C\uAD6C \uB3C4\uBCF4 25\uBD84" }), _jsx(BodyS500, { children: " (BUS 10\uBD84)" })] }), _jsxs(AddressContainer, { children: [_jsx(PrView, { children: _jsx(BodyS500white, { children: "P" }) }), _jsx(BodyM500, { children: "\uC8FC\uCC28\uBD88\uAC00" })] })] }));
};
export default MapChart;
