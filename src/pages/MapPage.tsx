import React, { useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MapPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_API_KEY
    }&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.5563, 126.79581),
          level: 3,
        };
        new window.kakao.maps.Map(container, options);
      });
    };
  }, []);

  return (
    <MainContainer>
      <GlobalStyle />
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </MainContainer>
  );
};

export default MapPage;
