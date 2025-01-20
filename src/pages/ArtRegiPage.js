import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import add from "../asset/add.svg"; // 추가 버튼 이미지
import { deleteDoc, doc, collection, onSnapshot } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { db, storage } from "../routes/firebase";
const ArtRegiPage = () => {
    const [artworks, setArtworks] = useState([]);
    const navigate = useNavigate();
    // ✅ Firestore에서 출품작 가져오기 (실시간 업데이트 적용)
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "artworks"), (snapshot) => {
            const fetchedArtworks = snapshot.docs.map((doc) => {
                const data = doc.data();
                return {
                    id: doc.id, // Firestore 문서 ID 저장
                    imageUrl: data.imageUrl || "", // ✅ 데이터가 없을 경우 빈 문자열로 처리
                    artworkName: data.artworkName || "작품명 없음",
                    artworkDescription: data.artworkDescription || "설명 없음",
                };
            });
            setArtworks(fetchedArtworks);
            console.log("Fetched Artworks:", fetchedArtworks); // ✅ 콘솔에서 데이터 확인
        });
        return () => unsubscribe(); // 컴포넌트 언마운트 시 실시간 리스너 해제
    }, []);
    const handleDelete = async (id, imageUrl) => {
        try {
            // 1️⃣ Firestore 문서 삭제
            await deleteDoc(doc(db, "artworks", id));
            // 2️⃣ Storage에서 해당 이미지 삭제
            const imageRef = ref(storage, imageUrl);
            await deleteObject(imageRef)
                .then(() => console.log("이미지 삭제 완료!"))
                .catch((error) => console.error("Storage 이미지 삭제 오류:", error));
            // 3️⃣ 화면에서 해당 항목 제거
            setArtworks((prevArtworks) => prevArtworks.filter((artwork) => artwork.id !== id));
        }
        catch (error) {
            console.error("Error deleting artwork:", error);
        }
    };
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(Header, {}), _jsxs(TextContainerTitle, { children: [_jsx(H2, { children: "\uCD9C\uD488\uC791 \uBAA9\uB85D" }), _jsx(BodyM500, { children: "\uB4F1\uB85D\uB41C \uC791\uD488\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694!" })] }), artworks.length > 0 ? (artworks.map((artwork) => (_jsxs(InfoContainer, { children: [_jsx(ImagePreviewWrapper, { children: _jsx(ImagePreview, { src: artwork.imageUrl, alt: "\uB4F1\uB85D\uB41C \uC774\uBBF8\uC9C0" }) }), _jsx(H5, { children: artwork.artworkName }), _jsx(BodyM500, { children: artwork.artworkDescription }), _jsx(DeleteButton, { onClick: () => handleDelete(artwork.id, artwork.imageUrl), children: "\uC0AD\uC81C" })] }, artwork.id)))) : (_jsx("p", {})), _jsx(Plusbutton, { onClick: () => navigate("/multi_pln/entryedit/defalut"), children: _jsx("img", { src: add, alt: "\uCD94\uAC00\uBC84\uD2BC" }) })] }));
};
export default ArtRegiPage;
const MainContainer = styled.div `
  width: 25.125rem;
  min-height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
  padding-bottom: 1rem;
`;
const TextContainerTitle = styled.div `
  position: absolute;
  top: 7rem;
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
const H5 = styled.h2 `
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
const Plusbutton = styled.button `
  display: flex;
  width: 22.125rem;
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
const ImagePreviewWrapper = styled.label `
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
const ImagePreview = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지를 영역에 꽉 차게 조정 */
  object-position: center;
  display: block;
`;
const InfoContainer = styled.div `
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
const DeleteButton = styled.button `
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
