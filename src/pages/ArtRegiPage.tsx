import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/header";
import GlobalStyle from "../styles/GlobalStyle";
import add from "../asset/add.svg";
import { Link } from "react-router-dom";

const ArtRegiPage = () => {
  const [artworks, setArtworks] = useState<
    {
      id: number;
      imagePreview: string | null;
      artworkName: string;
      artworkDescription: string;
    }[]
  >([]);

  useEffect(() => {
    // 로컬 스토리지에서 데이터 불러오기
    const savedArtworks = JSON.parse(localStorage.getItem("artworks") || "[]");
    setArtworks(savedArtworks);
  }, []);

  const handleDelete = (id: number) => {
    // 해당 ID를 가진 출품작 삭제
    const updatedArtworks = artworks.filter((artwork) => artwork.id !== id);
    setArtworks(updatedArtworks);
    // 로컬 스토리지에 업데이트된 데이터 저장
    localStorage.setItem("artworks", JSON.stringify(updatedArtworks));
  };

  return (
    <MainContainer>
      <GlobalStyle />
      <Header />
      <TextContainerTitle>
        <H2>출품작 목록</H2>
        <BodyM500>등록된 작품을 확인해보세요!</BodyM500>
      </TextContainerTitle>
      {artworks.map((artwork) => (
        <InfoContainer key={artwork.id}>
          {artwork.imagePreview && (
            <ImagePreviewWrapper>
              <ImagePreview
                src={artwork.imagePreview}
                alt="등록된 이미지 미리보기"
              />
            </ImagePreviewWrapper>
          )}
          {artwork.artworkName && <H5>{artwork.artworkName}</H5>}
          {artwork.artworkDescription && (
            <BodyM500>{artwork.artworkDescription}</BodyM500>
          )}{" "}
          {/* 삭제 버튼 추가 */}
          <DeleteButton onClick={() => handleDelete(artwork.id)}>
            삭제
          </DeleteButton>
        </InfoContainer>
      ))}
      <Plusbutton to="/multi_pln/entryedit/defalut">
        <img src={add} alt="추가버튼" />
      </Plusbutton>
    </MainContainer>
  );
};

export default ArtRegiPage;

const MainContainer = styled.div`
  width: 25.125rem;
  min-height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
  padding-bottom: 1rem;
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
const H5 = styled.h2`
  color: var(--Gray-Scale-Black, #17171b);
  /* Header/H5 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  margin: 0;
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
  margin: 9.25rem 1.5rem 1rem 1.5rem;
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
  width: 20.125rem;
  height: 20.125rem;
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
const InfoContainer = styled.div`
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  width: 20.125rem;
  flex-direction: column;
  padding: 0.75rem;
  gap: 0.75rem;
  background: var(--primary-White, #fafbfb);
  top: 8.25rem;
  left: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--Gray-Scale-G100, #e7e7ee);
`;
const DeleteButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  background: var(--primary-G500, #52c1bf);
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4d4d;
  }
`;
