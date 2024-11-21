import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/header";
import GlobalStyle from "../styles/GlobalStyle";
import add from "../asset/add.svg";
import { Link, useLocation } from "react-router-dom";

// 스타일 정의 (생략)

const MainContainer = styled.div`
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const TextContainerTitle = styled.div`
  position: absolute;
  top: 7rem;
  align-self: stretch;
  margin-left: 1.5rem;
`;

const BodyM500 = styled.p`
  color: var(--Gray-Scale-G400, #656572);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem;
  letter-spacing: -0.025rem;
  margin: 0;
`;

const H2 = styled.h2`
  color: var(--Gray-Scale-Black, #17171b);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: -0.0375rem;
  margin: 0.5rem 0;
`;

const Plusbutton = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.375rem;
  border: 1px solid var(--Gray-Scale-G100, #e7e7ee);
  background: var(--primary-White, #fafbfb);
  margin: 11.25rem 1.5rem 0;
  text-decoration: none;
  cursor: pointer;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
const ImagePreviewWrapper = styled.label`
  display: flex;
  width: 22.125rem;
  height: 22.125rem;
  margin-top: 7.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background: var(--Gray-Scale-G100, #e7e7ee);
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지를 영역에 꽉 차게 조정 */
  object-position: center;
  display: block;
`;

const ArtRegiPage = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // 위치에 따른 상태 전달 (Link로 전달한 state 가져오기)
  const location = useLocation();
  const state = location.state as { imagePreview: string | null };

  useEffect(() => {
    if (state?.imagePreview) {
      setImagePreview(state.imagePreview); // state로 받은 imagePreview 값으로 상태 갱신
    }
  }, [state]);
  return (
    <MainContainer>
      <GlobalStyle />
      <Header />
      <TextContainerTitle>
        <H2>출품작 등록</H2>
        <BodyM500>이번 전시에 출품할 작품을 등록해보세요!</BodyM500>
      </TextContainerTitle>
      {/* 이미지 미리보기 */}
      {imagePreview && (
        <ImagePreviewWrapper>
          <ImagePreview src={imagePreview} alt="등록된 이미지 미리보기" />
        </ImagePreviewWrapper>
      )}
      <Plusbutton
        to={{
          pathname: "/multi_pln/entryedit/defalut", // 이미지 등록 페이지로 이동
        }}
      >
        <img src={add} alt="추가버튼" />
      </Plusbutton>
    </MainContainer>
  );
};

export default ArtRegiPage;
