import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import nextbtn from "../asset/nextbtn.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { saveDataToFirestore, getCurrentUserId } from "../utils/firebaseUtils";
import BackButton from "../components/backBtn";
function MatchLocation() {
    const maxItem = 12;
    const avaliableItem = 6;
    const navigate = useNavigate();
    const [isFSheetOpen, setIsFSheetOpen] = useState(false);
    const [isSSheetOpen, setIsSSheetOpen] = useState(false);
    const [finputValue, setFInputValue] = useState("");
    const [sinputValue, setSInputValue] = useState("");
    const [foptions, setFOptions] = useState([]);
    const [soptions, setSOptions] = useState([]);
    const handleNextClick = async () => {
        try {
            const userId = getCurrentUserId(); // UID 가져오기
            const regions = [finputValue, sinputValue].filter((region) => region !== ""); // 빈 값 제거
            console.log("저장할 지역 데이터:", regions);
            await saveDataToFirestore("matchData", userId, {
                regions, // 배열로 저장
            });
            console.log("데이터 저장 성공");
            navigate("/matching/form");
        }
        catch (error) {
            if (error instanceof Error) {
                console.error("데이터 저장 실패:", error.message);
            }
            else {
                console.error("알 수 없는 오류:", error);
            }
        }
    };
    const openFBottomSheet = () => setIsFSheetOpen(true);
    const openSBottomSheet = () => setIsSSheetOpen(true);
    const closeFBottomSheet = () => setIsFSheetOpen(false);
    const closeSBottomSheet = () => setIsSSheetOpen(false);
    const regionData = {
        서울특별시: [
            "강남구",
            "강동구",
            "강북구",
            "강서구",
            "관악구",
            "광진구",
            "구로구",
            "금천구",
            "노원구",
            "도봉구",
            "동대문구",
            "동작구",
            "마포구",
            "서대문구",
            "서초구",
            "성동구",
            "성북구",
            "송파구",
            "양천구",
            "영등포구",
            "용산구",
            "은평구",
            "종로구",
            "중구",
            "중랑구",
        ],
        부산광역시: [
            "강서구",
            "금정구",
            "기장군",
            "남구",
            "동구",
            "동래구",
            "부산진구",
            "북구",
            "사상구",
            "사하구",
            "서구",
            "수영구",
            "연제구",
            "영도구",
            "중구",
            "해운대구",
        ],
        대구광역시: [
            "남구",
            "달서구",
            "달성군",
            "동구",
            "북구",
            "서구",
            "수성구",
            "중구",
        ],
        인천광역시: [
            "강화군",
            "계양구",
            "남동구",
            "동구",
            "미추홀구",
            "부평구",
            "서구",
            "연수구",
            "옹진군",
            "중구",
        ],
        광주광역시: ["광산구", "남구", "동구", "북구", "서구"],
        대전광역시: ["대덕구", "동구", "서구", "유성구", "중구"],
        울산광역시: ["남구", "동구", "북구", "울주군", "중구"],
        세종특별자치시: ["세종시 전역"],
        경기도: [
            "가평군",
            "고양시 덕양구",
            "고양시 일산동구",
            "고양시 일산서구",
            "과천시",
            "광명시",
            "광주시",
            "구리시",
            "군포시",
            "김포시",
            "남양주시",
            "동두천시",
            "부천시",
            "성남시 분당구",
            "성남시 수정구",
            "성남시 중원구",
            "수원시 권선구",
            "수원시 영통구",
            "수원시 장안구",
            "수원시 팔달구",
            "시흥시",
            "안산시 단원구",
            "안산시 상록구",
            "안성시",
            "안양시 동안구",
            "안양시 만안구",
            "양주시",
            "양평군",
            "여주시",
            "연천군",
            "오산시",
            "용인시 기흥구",
            "용인시 수지구",
            "용인시 처인구",
            "의왕시",
            "의정부시",
            "이천시",
            "파주시",
            "평택시",
            "포천시",
            "하남시",
            "화성시",
        ],
        강원도: [
            "강릉시",
            "고성군",
            "동해시",
            "삼척시",
            "속초시",
            "양구군",
            "양양군",
            "영월군",
            "원주시",
            "인제군",
            "정선군",
            "철원군",
            "춘천시",
            "태백시",
            "평창군",
            "홍천군",
            "화천군",
            "횡성군",
        ],
        충청북도: [
            "괴산군",
            "단양군",
            "보은군",
            "영동군",
            "옥천군",
            "음성군",
            "제천시",
            "진천군",
            "청주시 상당구",
            "청주시 서원구",
            "청주시 청원구",
            "청주시 흥덕구",
            "충주시",
        ],
        충청남도: [
            "계룡시",
            "공주시",
            "금산군",
            "논산시",
            "당진시",
            "보령시",
            "부여군",
            "서산시",
            "서천군",
            "아산시",
            "예산군",
            "천안시 동남구",
            "천안시 서북구",
            "청양군",
            "태안군",
            "홍성군",
        ],
        전라북도: [
            "고창군",
            "군산시",
            "김제시",
            "남원시",
            "무주군",
            "부안군",
            "순창군",
            "완주군",
            "익산시",
            "임실군",
            "장수군",
            "전주시 덕진구",
            "전주시 완산구",
            "정읍시",
            "진안군",
        ],
        전라남도: [
            "강진군",
            "고흥군",
            "곡성군",
            "광양시",
            "구례군",
            "나주시",
            "담양군",
            "목포시",
            "무안군",
            "보성군",
            "순천시",
            "신안군",
            "여수시",
            "영광군",
            "영암군",
            "완도군",
            "장성군",
            "장흥군",
            "진도군",
            "함평군",
            "해남군",
            "화순군",
        ],
        경상북도: [
            "경산시",
            "경주시",
            "고령군",
            "구미시",
            "군위군",
            "김천시",
            "문경시",
            "봉화군",
            "상주시",
            "성주군",
            "안동시",
            "영덕군",
            "영양군",
            "영주시",
            "영천시",
            "예천군",
            "울릉군",
            "울진군",
            "의성군",
            "청도군",
            "청송군",
            "칠곡군",
            "포항시 남구",
            "포항시 북구",
        ],
        경상남도: [
            "거제시",
            "거창군",
            "고성군",
            "김해시",
            "남해군",
            "밀양시",
            "사천시",
            "산청군",
            "양산시",
            "의령군",
            "진주시",
            "창녕군",
            "창원시 마산합포구",
            "창원시 마산회원구",
            "창원시 성산구",
            "창원시 의창구",
            "창원시 진해구",
            "통영시",
            "하동군",
            "함안군",
            "함양군",
            "합천군",
        ],
        제주특별자치도: ["제주시", "서귀포시"],
    };
    const handleFInputChange = (value) => {
        setFInputValue(value);
        const filterOptions = Object.keys(regionData)
            .flatMap((city) => regionData[city].map((district) => `${city} ${district}`))
            .filter((region) => region.includes(value));
        setFOptions(filterOptions);
    };
    const handleSInputChange = (value) => {
        setSInputValue(value);
        const filterOptions = Object.keys(regionData)
            .flatMap((city) => regionData[city].map((district) => `${city} ${district}`))
            .filter((region) => region.includes(value));
        setSOptions(filterOptions);
    };
    const handleFRegionSelect = (region) => {
        setFInputValue(region);
        setFOptions([]);
        closeFBottomSheet();
    };
    const handleSRegionSelect = (region) => {
        setSInputValue(region);
        setSOptions([]);
        closeSBottomSheet();
    };
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(BackButton, {}), _jsxs(Title, { children: [_jsx(H1, { children: "\uC791\uAC00\uB2D8\uC774 \uB2E8\uCCB4\uC804\uC744" }), _jsx(H1, { children: "\uC8FC\uCD5C\uD558\uACE0\uC790 \uD558\uB294 \uC9C0\uC5ED\uC740 \uC5B4\uB514\uC778\uAC00\uC694?" }), _jsx(H3, { children: "\uC9C0\uC5ED\uC5D0 \uB9DE\uCD94\uC5B4 \uCD94\uCC9C\uD574 \uB4DC\uB9B4\uAC8C\uC694!" })] }), _jsxs(LocContainer, { children: [_jsx("h3", { children: "1\uC21C\uC704 \uC785\uB825" }), _jsx(Input, { type: "text", placeholder: "\uC9C0\uC5ED\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.", onClick: openFBottomSheet, value: finputValue, readOnly: true })] }), _jsxs(LocContainer, { children: [_jsx("h3", { children: "2\uC21C\uC704 \uC785\uB825" }), _jsx(Input, { type: "text", placeholder: "\uC9C0\uC5ED\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.", onClick: openSBottomSheet, value: sinputValue, readOnly: true })] }), _jsxs("div", { children: [_jsx(ProgressBar, { children: _jsx(Progress, { width: (avaliableItem * 100) / maxItem }) }), _jsxs(NextBtn, { onClick: handleNextClick, children: [_jsx("button", { children: "\uB2E4\uC74C\uC73C\uB85C" }), _jsx("img", { src: nextbtn })] })] }), _jsx(Overlay, { isOpen: isFSheetOpen, onClick: closeFBottomSheet }), _jsx(Overlay, { isOpen: isSSheetOpen, onClick: closeSBottomSheet }), _jsx(BottomSheet, { isOpen: isFSheetOpen, children: _jsxs("div", { children: [_jsx(BottomLabel, { children: "\uC2DC/\uB3C4 \uC785\uB825" }), _jsx(RealInput, { type: "text", placeholder: "\uC9C0\uC5ED\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", value: finputValue, onChange: (e) => handleFInputChange(e.target.value) }), foptions.length > 0 && (_jsx(SearchRegionList, { children: foptions.map((region, index) => (_jsx(SearchRegionItem, { onClick: () => handleFRegionSelect(region), children: region }, index))) }))] }) }), _jsx(BottomSheet, { isOpen: isSSheetOpen, children: _jsxs("div", { children: [_jsx(BottomLabel, { children: "\uC2DC/\uB3C4 \uC785\uB825" }), _jsx(RealInput, { type: "text", placeholder: "\uC9C0\uC5ED\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.", value: sinputValue, onChange: (e) => handleSInputChange(e.target.value) }), soptions.length > 0 && (_jsx(SearchRegionList, { children: soptions.map((region, index) => (_jsx(SearchRegionItem, { onClick: () => handleSRegionSelect(region), children: region }, index))) }))] }) })] }));
}
const MainContainer = styled.div `
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 0 1.5rem;
  position: relative;
  padding: 1.5rem 1.5rem;
  overflow: hidden;
`;
const Title = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: 11rem;
  gap: 0.3rem;
`;
const H1 = styled.h1 `
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 100% */
  letter-spacing: -0.0375rem;
  margin: 0;
`;
const H3 = styled.h3 `
  color: var(--Gray-Scale-G400, #656572);

  /* Body/M500 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  margin-top: 1%;
`;
const LocContainer = styled.div `
  margin-top: 10%;
  color: #656572;

  /* Body/M500 */
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
`;
const Input = styled.input `
  width: 20.5rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: #e7e7ee;
  border: 0;
  padding: 1rem;
  color: #17171b;
  font-size: 1rem;
  cursor: pointer;
`;
const RealInput = styled.input `
  width: 20.5rem;
  height: 2rem;
  border-radius: 0.5rem;
  border: 0;
  padding: 1rem;
  color: #17171b;
  font-size: 1rem;
  background-color: #e7e7ee;
`;
const ProgressBar = styled.div `
  width: 100%;
  height: 0.5rem;
  background-color: #e7e7ee;
  border-radius: 20px;
  margin-top: 35%;
`;
const Progress = styled.div `
  width: ${(props) => props.width}%;
  height: 0.5rem;
  background-color: #52c1bf;
  border-radius: 20px;
`;
const NextBtn = styled.div `
  display: flex;
  justify-content: flex-end;
  margin-top: 7%;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  gap: 0.5rem;
  cursor: pointer;
`;
const BottomSheet = styled.div `
  width: 22.2rem;
  height: 70%;
  position: absolute;
  background-color: white;
  left: 0;
  bottom: ${(props) => (props.isOpen ? "0.5%" : "-100%")};
  border-radius: 1.25rem;
  padding: 1.5rem;
  border: 1px solid black;
  z-index: 10;
  transition: bottom 0.3s ease;
`;
const BottomLabel = styled.h3 `
  color: #656572;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem; /* 100% */
  letter-spacing: -0.02813rem;
`;
const Overlay = styled.div `
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  z-index: 9;
`;
const SearchRegionList = styled.div `
  border: 1px solid #e7e7ee;
  box-shadow: 0px 0px 4px 0px rgba(23, 23, 27, 0.1);
  z-index: 100;
  overflow-y: auto;
  border-radius: 0.5rem;
  max-height: 30rem;
`;
const SearchRegionItem = styled.div `
  padding: 1rem;
  cursor: pointer;
  color: #656572;
  font-size: 1.125rem;
`;
export default MatchLocation;
