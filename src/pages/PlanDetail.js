import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../routes/firebase";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import photo from "../asset/photo.svg";
import profile from "../asset/profile.png";
import exhibitionphoto from "../asset/exhibitionphoto.svg";
import whitemap from "../asset/whitemap.svg";
import detail from "../asset/detail.svg";
const PlanDetail = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!id) {
                    console.error("No ID provided in the URL");
                    return;
                }
                console.log("Fetched ID:", id);
                const docRef = doc(db, "plandetail", id); // ✅ `plandetail/{id}`에서 불러오기
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const fetchedData = docSnap.data();
                    console.log("Fetched Data from plandetail:", fetchedData);
                    setData({
                        title: fetchedData.title || "제목 없음",
                        description: fetchedData.description || "설명 없음",
                        startDate: fetchedData.startDate || null,
                        endDate: fetchedData.endDate || null,
                        location: fetchedData.location || null,
                        artworkImages: fetchedData.artworkImages || [],
                        budget: fetchedData.budget || {
                            budgetItems: [],
                            totalCost: 0,
                            perPersonCost: 0,
                        },
                        notes: fetchedData.notes || [],
                        posterImage: fetchedData.posterImage || null, // ✅ 포스터 이미지 가져오기
                    });
                    console.log("🔥 Firestore에서 가져온 포스터 이미지:", fetchedData.posterImage);
                }
                else {
                    console.log("No such document in plandetail!");
                    setData({
                        title: "제목 없음",
                        description: "설명 없음",
                        startDate: null,
                        endDate: null,
                        location: null,
                        artworkImages: [],
                        budget: { budgetItems: [], totalCost: 0, perPersonCost: 0 },
                        notes: [],
                        posterImage: null,
                    });
                }
            }
            catch (error) {
                console.error("Error fetching plandetail:", error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);
    if (loading)
        return _jsx("p", { children: "Loading..." });
    if (!data)
        return _jsx("p", { children: "Data not found" });
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(Header, {}), _jsxs(TitleContainer, { children: [_jsx(Profile, { children: data.posterImage ? (_jsx("img", { src: data.posterImage, alt: "Uploaded Poster" })) : (_jsx("img", { src: photo, alt: "Default Profile" })) }), _jsxs(InputContainer, { children: [_jsx(TitleInput, { value: data.title || "", readOnly: true }), _jsx(ContentInput, { value: data.description || "", readOnly: true })] })] }), _jsxs(ArtistContainer, { children: [_jsx(H1, { children: "\uD611\uC5C5 \uC791\uAC00" }), _jsxs(Artist, { children: [_jsx(ProfileImg, { width: "2rem", height: "2rem", src: profile, alt: "\uD504\uB85C\uD544" }), _jsxs(NameContainer, { children: [_jsx(Name, { children: "\uAE40\uB2E4\uD604" }), _jsx(Major, { children: "\uB3D9\uC591\uD654, \uD55C\uAD6D\uD654" })] }), _jsx("img", { src: detail })] }), _jsxs(Artist, { children: [_jsx(ProfileImg, { width: "2rem", height: "2rem", src: profile, alt: "\uD504\uB85C\uD544" }), _jsxs(NameContainer, { children: [_jsx(Name, { children: "\uC774\uC7AC\uC6B1" }), _jsx(Major, { children: "\uB3D9\uC591\uD654, \uD55C\uAD6D\uD654" })] }), _jsx("img", { src: detail })] })] }), _jsxs(ItemsContainer, { children: [_jsx(H1, { children: "\uC804\uC2DC \uCD9C\uD488\uC791" }), _jsxs(Items, { children: [_jsx(ItemName, {}), _jsx(ItemImgContainer, { children: data.artworkImages?.length > 0 ? (_jsxs(_Fragment, { children: [_jsx(CarouselButton, { onClick: () => setCurrentImageIndex((prev) => (prev - 1 + (data.artworkImages?.length || 0)) %
                                                (data.artworkImages?.length || 1)), children: "<" }), _jsx("img", { src: data.artworkImages?.[currentImageIndex] || "", alt: `Artwork ${currentImageIndex}` }), _jsx(CarouselButton, { onClick: () => setCurrentImageIndex((prev) => (prev + 1) % (data.artworkImages?.length || 1)), children: ">" })] })) : (_jsx("p", { children: "\uCD9C\uD488\uC791\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })) })] }), _jsxs(Items, { children: [_jsx(ItemName, {}), _jsx(ItemImgContainer, { children: data.artworkImages?.length > 0 ? (_jsxs(_Fragment, { children: [_jsx(CarouselButton, { onClick: () => setCurrentImageIndex((prev) => (prev - 1 + (data.artworkImages?.length || 0)) %
                                                (data.artworkImages?.length || 1)), children: "<" }), _jsx("img", { src: data.artworkImages?.[currentImageIndex] || "", alt: `Artwork ${currentImageIndex}` }), _jsx(CarouselButton, { onClick: () => setCurrentImageIndex((prev) => (prev + 1) % (data.artworkImages?.length || 1)), children: ">" })] })) : (_jsx("p", { children: "\uCD9C\uD488\uC791\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })) })] })] }), _jsxs(PosterContainer, { children: [_jsx(PosterDetail, { children: _jsx(H1, { children: "\uC804\uC2DC \uD3EC\uC2A4\uD130" }) }), _jsx(Poster, { children: data.posterImage ? (_jsx("img", { src: data.posterImage, alt: "Uploaded Poster", onError: (e) => console.error("❌ 이미지 로드 오류", e) })) : (_jsx("img", { src: exhibitionphoto, alt: "Default Poster" })) })] }), _jsxs(ExhibitionDay, { children: [_jsx(H1, { children: "\uC804\uC2DC \uB0A0\uC9DC" }), _jsx(Day, { value: data.startDate && data.endDate
                            ? `${data.startDate} ~ ${data.endDate}`
                            : "전시 날짜 선택되지 않음", readOnly: true })] }), _jsxs(ExhibitonLoc, { children: [_jsx(H1, { children: "\uC804\uC2DC \uC7A5\uC18C" }), _jsx(Map, { children: _jsx("img", { src: whitemap, alt: "\uC9C0\uB3C4 \uC774\uBBF8\uC9C0" }) }), _jsxs(DetailMap, { children: [_jsx("h3", { children: "\uC0C1\uC138 \uC8FC\uC18C" }), _jsx("input", { type: "text", value: data.location
                                    ? `${data.location.name}, ${data.location.address}`
                                    : "", readOnly: true })] })] }), _jsxs(BudgetContainer, { children: [_jsx(H1, { children: "\uC804\uC2DC \uC608\uC0B0" }), data.budget?.budgetItems.map((item, index) => (_jsxs(PlusContent, { children: [_jsx("p", { children: item.name }), _jsxs("p", { children: ["\u20A9", item.cost.toLocaleString()] })] }, index))), _jsxs(TotalBuget, { children: [_jsx("p", { children: "\uCD1D \uC608\uC0C1 \uBE44\uC6A9" }), _jsxs("p", { children: ["\u20A9", data.budget?.totalCost.toLocaleString()] })] }), _jsxs(PersonBudget, { children: [_jsx("p", { children: "\uC778\uB2F9 \uCD1D \uC608\uC0C1 \uBE44\uC6A9" }), _jsxs(Money, { children: [_jsx("p", { children: "\u20A9" }), _jsx("p", { children: data.budget?.perPersonCost.toLocaleString() })] })] })] }), _jsxs(NoteContainer, { children: [_jsx(H1, { children: "Note" }), data.notes.length > 0 ? (data.notes.map((note, index) => (_jsx("input", { type: "text", value: `${note.mention ? `@${note.mention} ` : ""}${note.text}`, readOnly: true }, index)))) : (_jsx("input", { type: "text", value: "\uBA54\uBAA8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.", readOnly: true }))] })] }));
};
const MainContainer = styled.div `
  width: 25.125rem;
  height: auto;
  margin-bottom: 10rem;
  background-color: #ffffff;
  box-sizing: border-box;
  position: relative;
  padding: 0;
`;
const TitleContainer = styled.div `
  width: 100%-1.5rem;
  height: 4.94rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  gap: 1rem;
  margin-top: 5%;
`;
const Profile = styled.div `
  width: 4.25rem;
  height: 4.25rem;
  background-color: #e7e7ee;
  border-radius: 3.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 컨테이너에 꽉 차도록 설정 */
    border-radius: 3.75rem;
  }
`;
const InputContainer = styled.div `
  width: 16.87rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const TitleInput = styled.input `
  width: 15.37rem;
  height: 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid #cdcdd6;
  color: #9696a6;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25rem; /* 100% */
  letter-spacing: -0.03125rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
`;
const ContentInput = styled.input `
  width: 15.37rem;
  height: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #cdcdd6;
  color: #9696a6;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
`;
const ArtistContainer = styled.div `
  margin-top: 2rem;
  width: 100%-1.5rem;
  height: 8.25rem;
  padding: 0 1.5rem;
`;
const H1 = styled.h1 `
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25rem; /* 100% */
  letter-spacing: -0.03125rem;
  margin: 0;
`;
const Artist = styled.div `
  width: 100%;
  height: 2rem;
  margin: 0;
  padding: 0.75rem 0;
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid #e7e7ee;
`;
const ProfileImg = styled.img `
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 1rem;
`;
const NameContainer = styled.div `
  width: 18.12rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;
const Name = styled.h1 `
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  margin: 0;
`;
const Major = styled.h3 `
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.75rem; /* 100% */
  letter-spacing: -0.01875rem;
  margin: 0;
`;
const ItemsContainer = styled.div `
  width: 100%-1.5rem;
  height: 56rem;
  padding: 0 1.5rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Items = styled.div `
  width: 100%;
  height: 25.38rem;
  border: 1px solid #e7e7ee;
  border-radius: 0.5rem;
`;
const ItemName = styled.div `
  width: 100%-0.75rem;
  height: 2.2rem;
  padding: 0.75rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
`;
const ItemImgContainer = styled.div `
  background-color: #d9d9d9;
  width: 100%;
  height: 22.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 0.5rem 0.5rem;
  position: relative; /* 버튼 위치 조정 */
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 컨테이너에 꽉 차도록 설정 */
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;
const PosterContainer = styled.div `
  width: 100%-1.5rem;
  height: 31.75rem;
  padding: 0 1.5rem;
`;
const PosterDetail = styled.div `
  width: 99%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Poster = styled.div `
  width: 100%;
  height: 29.5rem;
  border-radius: 0.5rem;
  background: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  background-color: #d9d9d9;
  border-radius: 0.5rem;
  position: relative; /* 버튼 위치 조정 */
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 컨테이너에 꽉 차도록 설정 */
    border-radius: 0.5rem;
  }
`;
const ExhibitionDay = styled.div `
  width: 100%-1.5rem;
  height: auto;
  padding: 0 1.5rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
const Day = styled.input `
  width: 100%-0.75rem;
  height: 2.25rem;
  background-color: #e7e7ee;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  padding: 0 0.75rem;
  cursor: pointer;
  border: none;
`;
const ExhibitonLoc = styled.div `
  width: 100%-1.5rem;
  height: auto;
  margin-top: 2rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;
const Map = styled.div `
  width: 22.125rem;
  height: 5.75rem;
  background-color: #e7e7ee;
  border-radius: 0.5rem;
  display: flex;
  overflow: hidden;
  cursor: pointer;
`;
const DetailMap = styled.div `
  width: 100%;
  min-height: 3.75rem;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  h3 {
    color: #656572;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
    margin: 0;
  }

  input {
    width: 100%-0.75rem;
    min-height: 2.5rem; /* 최소 높이 설정 */
    height: auto; /* 자동 높이 조절 */
    padding: 0 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid #e7e7ee;

    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;

    overflow: hidden;
    color: var(--Gray-Scale-G300, #9696a6);
    text-overflow: ellipsis;

    /* Body/M500 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
  }
`;
const BudgetContainer = styled.div `
  width: 100%-1.5rem;
  height: auto;
  padding: 0 1.5rem;
  margin-top: 2rem;
  h1 {
    margin-bottom: 0.75rem;
  }
`;
const PlusContent = styled.div `
  display: flex;
  width: 100%;
  min-height: 2.19rem;
  border: 1px solid #e7e7ee;
  border-radius: 0.5rem 0.5rem 0 0;
  margin-top: 0.75rem;
  flex-direction: row;
  padding: 0.75rem 0rem;
  justify-content: space-between;

  p {
    padding: 1rem;
    font-family: Pretendard, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: #656572;
    margin: 0;
  }

  p:first-child {
    font-weight: 600;
    color: #17171b;
  }

  p:last-child {
    color: #52c1bf;
  }
`;
const TotalBuget = styled.div `
  width: 100%-0.75rem;
  height: 1.75rem;
  border: 1px solid #e7e7ee;
  border-radius: 0.5rem;
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  justify-content: space-between;

  p {
    color: #656572;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 0.75rem; /* 100% */
    letter-spacing: -0.01875rem;
  }
`;
const PersonBudget = styled.div `
  width: 100%-0.75rem;
  height: 2.5rem;
  border: 1px solid #e7e7ee;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 0 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p:first-child {
    color: #656572;
    font-size: 1rem;
    font-weight: 500;
    line-height: 0.75rem; /* 100% */
    letter-spacing: -0.01875rem;
  }
`;
const Money = styled.div `
  height: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  p:first-child {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 0.75rem; /* 100% */
    letter-spacing: -0.01875rem;
    color: #52c1bf;
  }
  p:last-child {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
    color: var(--Gray-Scale-Black, #17171b);
  }
`;
const NoteContainer = styled.div `
  width: 100%-1.5rem;
  height: auto;
  margin-top: 2rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    height: 2.5rem;
    border: 1px solid #e7e7ee;
    border-radius: 0.375rem;
    cursor: pointer;
    display: flex;
    padding: 0.5rem 0.75rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.25rem;
    align-self: stretch;

    overflow: hidden;
    color: var(--Gray-Scale-G300, #9696a6);
    text-overflow: ellipsis;

    /* Body/M500 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
  }
`;
const CarouselButton = styled.button `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:first-child {
    left: 10px;
  }

  &:last-child {
    right: 10px;
  }
`;
export default PlanDetail;
