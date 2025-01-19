import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Header from "../components/header";
import MapChart from "../components/MapChart";
import markerImage from "../asset/ic-location.png";
import search from "../asset/search.svg";
import { db } from "../routes/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const loadKakaoSDK = () => {
    const apiKey = import.meta.env.VITE_API_KEY; // 환경 변수에서 API 키 가져오기
    if (!apiKey) {
        console.error("API 키가 설정되지 않았습니다. .env 파일을 확인하세요.");
        return;
    }
    if (document.getElementById("kakao-map-script")) {
        console.log("Kakao Maps SDK가 이미 로드되었습니다.");
        return;
    }
    const script = document.createElement("script");
    script.id = "kakao-map-script"; // 중복 로드를 방지하기 위한 ID 설정
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services,clusterer`;
    script.async = true;
    script.onload = () => {
        console.log("Kakao Maps SDK 로드 완료!");
    };
    document.head.appendChild(script);
};
const MapPage = () => {
    const [input, setInput] = useState("");
    const [markers, setMarkers] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [map, setMap] = useState(null);
    const overlayRef = useRef(null);
    const navigate = useNavigate();
    const handleSearch = () => {
        if (!input.trim() || !map)
            return;
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(input, (data, status) => {
            if (status === kakao.maps.services.Status.OK) {
                const bounds = new kakao.maps.LatLngBounds();
                const newMarkers = data.map((place) => {
                    bounds.extend(new kakao.maps.LatLng(parseFloat(place.y), parseFloat(place.x)));
                    return {
                        id: place.id,
                        position: { lat: parseFloat(place.y), lng: parseFloat(place.x) },
                        content: place.place_name,
                        address: place.road_address_name || place.address_name,
                    };
                });
                setMarkers(newMarkers); // 검색된 마커 업데이트
                map.setBounds(bounds); // 지도 범위 재설정
            }
            else {
                alert("검색 결과를 찾을 수 없습니다.");
            }
        });
    };
    const handleClickOutside = (event) => {
        if (overlayRef.current instanceof HTMLDivElement &&
            !overlayRef.current.contains(event.target)) {
            setSelectedPlace(null);
        }
    };
    const handleSavePlace = async () => {
        if (!selectedPlace)
            return;
        try {
            console.log("Saving Place:", selectedPlace); // ✅ 저장되는 데이터 확인 로그 추가
            await setDoc(doc(db, "plans", "mainPlan"), {
                location: {
                    name: selectedPlace.content,
                    address: selectedPlace.address,
                    position: selectedPlace.position,
                },
            }, { merge: true });
            navigate("/multi_pln"); // ✅ PlanMain으로 이동
        }
        catch (error) {
            console.error("Error saving location:", error);
            alert("장소 저장에 실패했습니다.");
        }
    };
    useEffect(() => {
        loadKakaoSDK(); // ✅ Kakao SDK 로드
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (_jsxs(MainContainer, { children: [_jsx(Header, {}), _jsxs(SearchContainer, { children: [_jsx(SearchButton, { onClick: handleSearch, children: _jsx("img", { src: search }) }), _jsx(Input, { type: "text", value: input, onChange: (e) => setInput(e.target.value), placeholder: "\uC7A5\uC18C \uAC80\uC0C9" })] }), _jsx(Map, { center: { lat: 37.5665, lng: 126.978 }, style: { width: "100%", height: "700px" }, level: 3, disableDoubleClickZoom: true, draggable: true, zoomable: false, onCreate: setMap, children: markers.map((marker) => (_jsx(MapMarker, { position: marker.position, onClick: () => setSelectedPlace(marker), 
                    // 마커 클릭 시 선택된 장소 업데이트
                    image: {
                        src: markerImage,
                        size: {
                            width: 24,
                            height: 36,
                        },
                        options: {
                            offset: {
                                x: 27,
                                y: 69,
                            },
                        },
                    } }, marker.id))) }), selectedPlace && (_jsxs(FixedOverlayContainer, { ref: overlayRef, children: [_jsx(MapChart, { selectedPlace: selectedPlace }), _jsx(Button, { onClick: handleSavePlace, children: "\uC774 \uC7A5\uC18C \uC120\uD0DD\uD558\uAE30" })] })), _jsx(GlobalStyle, {})] }));
};
export default MapPage;
// Styled components
const MainContainer = styled.div `
  width: 25.125rem;
  height: 50.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
`;
const SearchContainer = styled.div `
  display: flex;
  align-items: center;
  margin: 0rem 1.5rem 0rem 1.5rem;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;
const Button = styled.button `
  height: 3.5rem;
  width: 22.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  padding: 1rem;

  background: var(--primary-G500, #52c1bf);
  color: #fafbfb;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;

  margin-top: 1rem;

  &:hover {
    background-color: #aeaeae;
  }
`;
const Input = styled.input `
  flex: 1;
  height: 2.5rem;
  padding: 0 1rem;
  border: 1px solid #ddd;
  border-radius: 0.75rem;
  background: var(--primary-White, #fafbfb);
  color: var(--Gray-Scale-G400, #656572);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  outline: none;
  cursor: pointer;
  &::placeholder {
    color: var(--Gray-Scale-G300, #9696a6);
  }
`;
const FixedOverlayContainer = styled.div `
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  max-width: 22.125rem;
  border-radius: 1rem;

  padding: 1rem;
`;
const SearchButton = styled.button `
  display: flex;
  width: 1rem;
  height: 1rem;
  padding: 0.0625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border: none;
  outline: none;
  cursor: pointer;
`;
