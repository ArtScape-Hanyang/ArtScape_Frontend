import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { storage, db } from "../routes/firebase"; // Firebase 설정 파일
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import photos from "../asset/photos.svg";
const ArtRegiDetailPage = () => {
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [artworkName, setArtworkName] = useState("");
    const [artworkDescription, setArtworkDescription] = useState("");
    const navigate = useNavigate();
    const textareaRef = useRef(null);
    const handleTextareaInput = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!imageFile || !artworkName || !artworkDescription) {
            alert("모든 필드를 채워주세요!");
            return;
        }
        try {
            // ✅ 1. Firebase Storage에 이미지 업로드
            const imageRef = ref(storage, `artworks/${uuidv4()}`);
            await uploadBytes(imageRef, imageFile);
            // ✅ 2. 업로드된 이미지의 URL 가져오기
            const imageUrl = await getDownloadURL(imageRef);
            // ✅ 3. Firestore에 메타데이터 저장
            const newArtwork = {
                imageUrl, // ✅ Firestore에 imageUrl 필드로 저장
                artworkName,
                artworkDescription,
                createdAt: new Date(),
            };
            await addDoc(collection(db, "artworks"), newArtwork);
            alert("출품작이 등록되었습니다!");
            // ✅ 4. 출품작 목록 페이지로 이동
            navigate("/multi_pln/entry/defalut");
        }
        catch (error) {
            console.error("Error uploading artwork:", error);
            alert("작품 등록 중 오류가 발생했습니다.");
        }
    };
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(Header, {}), _jsxs(TextContainerTitle, { children: [_jsx(H2, { children: "\uCD9C\uD488\uC791 \uB4F1\uB85D" }), _jsx(BodyM500, { children: "\uC774\uBC88 \uC804\uC2DC\uC5D0 \uCD9C\uD488\uD560 \uC791\uD488\uC744 \uB4F1\uB85D\uD574\uBCF4\uC138\uC694!" })] }), _jsxs(ArtPostForm, { onSubmit: handleSubmit, children: [_jsx(ImagePreviewWrapper, { htmlFor: "file-input", children: imagePreview ? (_jsx(ImagePreview, { src: imagePreview, alt: "\uBBF8\uB9AC\uBCF4\uAE30 \uC774\uBBF8\uC9C0" })) : (_jsx(PlaceholderIcon, { src: photos, alt: "\uC0AC\uC9C4 \uC544\uC774\uCF58" })) }), _jsx(FileInput, { id: "file-input", type: "file", accept: "image/*", onChange: handleImageChange }), _jsxs(ArtPostText, { children: [_jsx(Label, { htmlFor: "artwork-name", children: _jsx(H5, { children: "\uC791\uD488\uBA85" }) }), _jsx(Input, { id: "artwork-name", type: "text", placeholder: "\uC791\uD488\uBA85\uC744 \uC785\uB825\uD558\uC138\uC694", value: artworkName, onChange: (e) => setArtworkName(e.target.value) }), _jsx(Label, { htmlFor: "artwork-description", children: _jsx(H5, { children: "\uC791\uD488\uC18C\uAC1C" }) }), _jsx(Textarea, { id: "artwork-description", placeholder: "\uC791\uD488\uC5D0 \uB300\uD574 \uC124\uBA85\uD574 \uC8FC\uC138\uC694", ref: textareaRef, value: artworkDescription, onChange: (e) => setArtworkDescription(e.target.value), onInput: handleTextareaInput })] }), _jsx(Button, { type: "submit", children: "\uC791\uD488 \uB4F1\uB85D" })] })] }));
};
export default ArtRegiDetailPage;
// 메인 컨테이너 스타일
const MainContainer = styled.div `
  width: 25.125rem;

  background-color: #ffffff;
  box-sizing: border-box;
`;
const TextContainerTitle = styled.div `
  position: absolute;
  top: 5.25rem;
  align-self: stretch;
  margin-left: 1.5rem;
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
const H2 = styled.h2 `
  color: var(--Gray-Scale-Black, #17171b);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: -0.0375rem;
  margin: 0.5rem 0;
`;
const H5 = styled.h5 `
  color: var(--Gray-Scale-Black, #17171b);

  /* Header/H5 */
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
`;
const ImagePreviewWrapper = styled.label `
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
const ImagePreview = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지를 영역에 꽉 차게 조정 */
  object-position: center;
  display: block;
`;
const PlaceholderIcon = styled.img `
  width: 5.10713rem;
  height: 5.10713rem;
`;
const FileInput = styled.input `
  display: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
const Label = styled.label `
  font-size: 1rem;
  font-weight: 500;
  color: var(--Gray-Scale-Black, #17171b);
`;
const Input = styled.input `
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
const Textarea = styled.textarea `
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
const ArtPostForm = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center; /* 수평 가운데 정렬 */
`;
const ArtPostText = styled.div ``;
const Button = styled.button `
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
