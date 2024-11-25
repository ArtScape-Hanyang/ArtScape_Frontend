import { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";
import Header from "../components/header";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem;
`;

const Button = styled.button`
  height: 3.5rem;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  background: var(--primary-G500, #52c1bf);
  color: #fafbfb;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 1rem;

  &:hover {
    background-color: #aeaeae;
  }
`;

const MainContainer = styled.div`
  width: 25.125rem;
  min-height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const Input = styled.input`
  flex: 1;
  height: 3.5rem;
  padding: 0 1rem;
  border: 1px solid #ddd;
  border-radius: 0.75rem;
  background: var(--primary-White, #fafbfb);
  color: var(--Gray-Scale-G400, #656572);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;

  &::placeholder {
    color: var(--Gray-Scale-G300, #9696a6);
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  li {
    margin: 0.5rem 0;
    font-size: 1rem;
    font-family: Pretendard;
    color: #656572;
  }
`;

const MapPage = () => {
  const [input, setInput] = useState("");
  const [center, setCenter] = useState({ lat: 33.5563, lng: 126.79581 });
  const [places, setPlaces] = useState([]);
  const [map, setMap] = useState();

  const handleSearch = async () => {
    if (!input.trim()) return;

    // 키워드 검색
    const keywordRes = await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${input}`,
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_REST_API_KEY}`,
        },
      }
    );
    const keywordData = await keywordRes.json();

    if (keywordData.documents.length > 0) {
      // 키워드 검색 성공
      const { x, y } = keywordData.documents[0];
      setCenter({ lat: parseFloat(y), lng: parseFloat(x) }); // 지도 중심 이동

      // 예술 관련 장소 필터링
      const filteredPlaces = keywordData.documents.filter(
        (place) => place.category_group_code === "AT4"
      );
      setPlaces(filteredPlaces);
    } else {
      alert("검색 결과를 찾을 수 없습니다.");
    }
  };

  return (
    <MainContainer>
      <Header />
      <SearchContainer>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="장소 또는 주소 검색"
        />
        <Button onClick={handleSearch}>검색</Button>
      </SearchContainer>
      <Map
        center={center}
        style={{ width: "100%", height: "40rem" }}
        level={3}
        onCreate={setMap} // Map 객체 저장
      >
        {places.map((place) => (
          <MapMarker
            key={place.id}
            position={{ lat: parseFloat(place.y), lng: parseFloat(place.x) }}
            clickable={false} // 기본 인포윈도우 비활성화
          />
        ))}
        {places.map((place) => (
          <CustomOverlayMap
            key={`overlay-${place.id}`}
            position={{ lat: parseFloat(place.y), lng: parseFloat(place.x) }}
            yAnchor={1.5} // 오버레이 위치 조정
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #52c1bf",
                borderRadius: "10px",
                padding: "5px 10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                fontSize: "12px",
                fontFamily: "Pretendard",
                color: "#333",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              {place.place_name}
            </div>
          </CustomOverlayMap>
        ))}
      </Map>
      <List>
        {places.map((place) => (
          <li key={place.id}>
            {place.place_name} - {place.road_address_name || place.address_name}
          </li>
        ))}
      </List>
      <GlobalStyle />
    </MainContainer>
  );
};

export default MapPage;
