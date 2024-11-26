import { useState, useRef } from "react";
import styled from "styled-components";
import Header from "../components/header";
import GlobalStyle from "../styles/GlobalStyle";
import photos from "../asset/photos.svg";
import { useNavigate } from "react-router-dom"; // useNavigate 추가

const ArtRegiDetailPage = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [artworkName, setArtworkName] = useState<string>("");
  const [artworkDescription, setArtworkDescription] = useState<string>("");

  const navigate = useNavigate();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextareaInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newArtwork = {
      id: Date.now(),
      imagePreview,
      artworkName,
      artworkDescription,
    };

    // 기존 저장된 데이터를 불러오고 새로운 데이터를 추가
    const savedArtworks = JSON.parse(localStorage.getItem("artworks") || "[]");
    const updatedArtworks = [...savedArtworks, newArtwork];
    localStorage.setItem("artworks", JSON.stringify(updatedArtworks));

    alert("출품작이 등록되었습니다!");

    // ArtRegiPage로 이동
    navigate("/multi_pln/entry/defalut");
  };

  return (
    <MainContainer>
      <GlobalStyle />
      <Header />
      <TextContainerTitle>
        <H2>출품작 등록</H2>
        <BodyM500>이번 전시에 출품할 작품을 등록해보세요!</BodyM500>
      </TextContainerTitle>
      <ArtPostForm onSubmit={handleSubmit}>
        <ImagePreviewWrapper htmlFor="file-input">
          {imagePreview ? (
            <ImagePreview src={imagePreview} alt="미리보기 이미지" />
          ) : (
            <PlaceholderIcon src={photos} alt="사진 아이콘" />
          )}
        </ImagePreviewWrapper>
        <FileInput
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <ArtPostText>
          <Label htmlFor="artwork-name">
            <H5>작품명</H5>
          </Label>
          <Input
            id="artwork-name"
            type="text"
            placeholder="작품명을 입력하세요"
            value={artworkName}
            onChange={(e) => setArtworkName(e.target.value)}
          />

          <Label htmlFor="artwork-description">
            <H5>작품소개</H5>
          </Label>
          <Textarea
            id="artwork-description"
            placeholder="작품에 대해 설명해 주세요"
            ref={textareaRef}
            value={artworkDescription}
            onChange={(e) => setArtworkDescription(e.target.value)}
            onInput={handleTextareaInput}
          />
        </ArtPostText>
        <Button type="submit">작품 등록</Button>
      </ArtPostForm>
    </MainContainer>
  );
};

export default ArtRegiDetailPage;

// 메인 컨테이너 스타일
const MainContainer = styled.div`
  width: 25.125rem;

  background-color: #ffffff;
  box-sizing: border-box;
`;

const TextContainerTitle = styled.div`
  position: absolute;
  top: 5.25rem;
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

const H5 = styled.h5`
  color: var(--Gray-Scale-Black, #17171b);

  /* Header/H5 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
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

  cursor: pointer;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지를 영역에 꽉 차게 조정 */
  object-position: center;
  display: block;
`;

const PlaceholderIcon = styled.img`
  width: 5.10713rem;
  height: 5.10713rem;
`;

const FileInput = styled.input`
  display: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: var(--Gray-Scale-Black, #17171b);
`;

const Input = styled.input`
  width: 20.6rem;
  padding: 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 0.375rem;
  border: 1px solid var(--Gray-Scale-G100, #e7e7ee);
  color: var(--Gray-Scale-G400, #656572);
  /* Body/M500b */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.025rem;

  outline: none;
  cursor: pointer;
  &::placeholder {
    color: var(--Gray-Scale-G300, #9696a6); /* 플레이스홀더 색상 변경 */
  }
`;

const Textarea = styled.textarea`
  width: 20.6rem;
  padding: 0.75rem;
  resize: vertical;
  min-height: 3rem;
  max-height: 12rem;
  border-radius: 0.375rem;
  border: 1px solid var(--Gray-Scale-G100, #e7e7ee);

  /* Body/M500b */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 1.2rem */
  letter-spacing: -0.025rem;

  outline: none;
  cursor: pointer;
  &::placeholder {
    color: var(--Gray-Scale-G300, #9696a6); /* 플레이스홀더 색상 변경 */
  }

  color: var(--Gray-Scale-G400, #656572);

  /* 최소 높이 */
  min-height: 3rem;
  resize: none;
`;

const ArtPostForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수평 가운데 정렬 */
`;

const ArtPostText = styled.div``;

const Button = styled.button`
  width: 22.125rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background: var(--primary-G500, #52c1bf);
  color: #fafbfb;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25rem;

  margin-top: 6.75rem;
  margin-bottom: 2.75rem;

  &:hover {
    background-color: #aeaeae;
  }
`;
