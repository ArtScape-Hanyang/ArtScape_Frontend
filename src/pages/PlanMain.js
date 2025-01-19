import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import profile from "../asset/profile.png";
import detail from "../asset/detail.svg";
import seemore from "../asset/seemore.svg";
import exhibitionphoto from "../asset/exhibitionphoto.png";
import whitemap from "../asset/whitemap.svg";
import complete from "../asset/complete.svg";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { doc, getDoc, collection, getDocs, addDoc, setDoc, deleteDoc, } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "../routes/firebase"; // Firebase 설정 파일
function PlanMain() {
    const navigate = useNavigate();
    const [key, setKey] = useState(0); // 컴포넌트 강제 초기화용 키
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [artworkImages, setArtworkImages] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [notes, setNotes] = useState([]);
    const [budget, setBudget] = useState({
        budgetItems: [],
        totalCost: 0,
        perPersonCost: 0,
    });
    const [location, setLocation] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "artworks"));
                const fetchedImages = querySnapshot.docs.map((doc) => doc.data().imageUrl);
                console.log("✅ 가져온 이미지 리스트:", fetchedImages);
                setArtworkImages(fetchedImages);
            }
            catch (error) {
                console.error("❌ Error fetching artworks:", error);
            }
        };
        fetchArtworks();
    }, [key]); // ✅ key 값이 변경될 때마다 실행
    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "plans", "mainPlan");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    console.log("✅ 불러온 데이터:", data); // 데이터 확인
                    setTitle(data.title || "");
                    setDescription(data.description || "");
                }
                else {
                    console.log("❌ No such document!");
                }
            }
            catch (error) {
                console.error("❌ Error fetching plan info:", error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchDates = async () => {
            try {
                const docRef = doc(db, "plans", "mainPlan");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setStartDate(data.startDate || null);
                    setEndDate(data.endDate || null);
                }
                else {
                    console.log("No such document!");
                }
            }
            catch (error) {
                console.error("Error fetching dates:", error);
            }
        };
        fetchDates();
    }, []);
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const docRef = doc(db, "plans", "mainPlan");
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    console.log("📌 Fetched Notes:", data.notes); // ✅ 가져온 데이터 확인
                    setNotes(data.notes || []);
                }
                else {
                    console.log("❌ No notes found!");
                }
            }
            catch (error) {
                console.error("❌ Error fetching notes:", error);
            }
        };
        fetchNotes();
    }, []);
    useEffect(() => {
        const fetchBudget = async () => {
            try {
                const docSnap = await getDoc(doc(db, "plans", "mainPlan"));
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setBudget(data.budget || { budgetItems: [], totalCost: 0, perPersonCost: 0 });
                }
                else {
                    console.log("No budget data found");
                }
            }
            catch (error) {
                console.error("Error fetching budget:", error);
            }
        };
        fetchBudget();
    }, []);
    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const docSnap = await getDoc(doc(db, "plans", "mainPlan"));
                if (docSnap.exists()) {
                    const locationData = docSnap.data().location;
                    setLocation(locationData || null); // ✅ 기본값 추가
                }
                else {
                    console.log("No location data found");
                }
            }
            catch (error) {
                console.error("Error fetching location:", error);
            }
        };
        fetchLocation();
    }, []);
    const handleNextImage = () => {
        if (artworkImages.length > 0) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % artworkImages.length);
        }
    };
    const handlePrevImage = () => {
        if (artworkImages.length > 0) {
            setCurrentImageIndex((prevIndex) => prevIndex === 0 ? artworkImages.length - 1 : prevIndex - 1);
        }
    };
    const [posterImage, setPosterImage] = useState(null);
    const fileInputRef = useRef(null);
    // 🔹 Firebase에서 기존 포스터 이미지 가져오기 (초기 로드 시)
    useEffect(() => {
        const fetchPoster = async () => {
            try {
                const docSnap = await getDoc(doc(db, "plans", "mainPlan"));
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setPosterImage(data.posterImage || null);
                }
            }
            catch (error) {
                console.error("❌ Error fetching poster:", error);
            }
        };
        fetchPoster();
    }, []);
    // 🔹 파일 업로드 핸들러 (Firebase Storage에 저장)
    const handleFileChange = async (event) => {
        if (!event.target.files || event.target.files.length === 0)
            return;
        const file = event.target.files[0];
        const storageRef = ref(storage, `posters/${file.name}`); // 🔥 Storage 경로 설정
        try {
            await uploadBytes(storageRef, file); // 🔥 Firebase Storage에 업로드
            const downloadURL = await getDownloadURL(storageRef); // 🔥 업로드된 이미지 URL 가져오기
            setPosterImage(downloadURL); // ✅ 이미지 상태 업데이트
            // 🔹 Firestore에 저장
            await setDoc(doc(db, "plans", "mainPlan"), { posterImage: downloadURL }, { merge: true });
            console.log("✅ 포스터 이미지 저장 완료:", downloadURL);
        }
        catch (error) {
            console.error("❌ Error uploading poster image:", error);
        }
    };
    useEffect(() => {
        const saveToFirestore = async () => {
            if (title ||
                description ||
                startDate ||
                endDate ||
                location ||
                notes.length > 0) {
                try {
                    await setDoc(doc(db, "plans", "mainPlan"), {
                        title,
                        description,
                        artworkImages,
                        startDate,
                        endDate,
                        notes,
                        budget,
                        location,
                        posterImage,
                    });
                    console.log("✅ plans/mainPlan에 데이터 저장됨");
                }
                catch (error) {
                    console.error("❌ plans/mainPlan 저장 오류:", error);
                }
            }
        };
        saveToFirestore();
    }, [
        title,
        description,
        startDate,
        endDate,
        location,
        notes,
        artworkImages,
        budget,
        posterImage,
    ]);
    const resetForm = async () => {
        console.log("🔄 PlanMain 상태 초기화");
        setTitle("");
        setDescription("");
        setArtworkImages([]); // 🔥 artworkImages도 초기화
        setStartDate(null);
        setEndDate(null);
        setNotes([]);
        setBudget({ budgetItems: [], totalCost: 0, perPersonCost: 0 });
        setLocation(null);
        setPosterImage(null);
        try {
            await deleteDoc(doc(db, "plans", "mainPlan"));
            console.log("🗑️ plans/mainPlan 초기화 완료");
        }
        catch (error) {
            console.error("❌ plans/mainPlan 초기화 실패:", error);
        }
    };
    const handleComplete = async () => {
        try {
            const mainPlanRef = doc(db, "plans", "mainPlan");
            const mainPlanSnap = await getDoc(mainPlanRef);
            if (mainPlanSnap.exists()) {
                const mainPlanData = mainPlanSnap.data();
                // ✅ `plandetail`에 새로운 문서로 저장
                await addDoc(collection(db, "plandetail"), mainPlanData);
                // ✅ `plans/mainPlan` 초기화
                await resetForm(); // ✅ "완료" 버튼을 눌렀을 때만 실행!
                // ✅ Firestore에서 artworks 컬렉션 삭제 (artworkImages 완전히 초기화)
                const querySnapshot = await getDocs(collection(db, "artworks"));
                querySnapshot.forEach(async (doc) => {
                    await deleteDoc(doc.ref);
                });
                // ✅ 상태 초기화
                setTitle("");
                setDescription("");
                setArtworkImages([]); // 🔥 artworkImages 강제 초기화
                setStartDate(null);
                setEndDate(null);
                setNotes([]);
                setBudget({ budgetItems: [], totalCost: 0, perPersonCost: 0 });
                setLocation(null);
                setPosterImage(null);
                // 🔥 강제 리렌더링
                setKey((prevKey) => prevKey + 1);
                alert("✅ 데이터가 저장되었습니다!");
                navigate("/explore");
            }
            else {
                console.error("❌ plans/mainPlan 데이터 없음!");
            }
        }
        catch (error) {
            console.error("❌ Error moving data to plandetail:", error);
            alert("저장에 실패했습니다.");
        }
    };
    const handleNoteClick = (note) => {
        // PlanNote 페이지로 이동하면서 메모 데이터를 전달
        navigate("/multi_pln/note", { state: { note } });
    };
    const handleTitleClick = () => {
        navigate("/multi_pln/info");
    };
    const handleDateClick = () => {
        navigate("/multi_pln/Exhidate");
    };
    const handleLocClick = () => {
        navigate("/multi_pln/map");
    };
    const handleBudgetClick = () => {
        navigate("/multi_pln/budget");
    };
    const handleEntryClick = () => {
        navigate("entry/defalut");
    };
    return (_jsxs(MainContainer, { children: [_jsx(GlobalStyle, {}), _jsx(Header, {}), _jsxs(TitleContainer, { children: [_jsx(Profile, { children: posterImage ? (_jsx("img", { src: posterImage, alt: "Uploaded Poster" })) : (_jsx("img", { src: profile, alt: "Default Profile" })) }), _jsxs(InputContainer, { children: [_jsx(TitleInput, { value: title || "", placeholder: "\uC804\uC2DC \uC81C\uBAA9 \uC785\uB825", readOnly: true, onClick: handleTitleClick }), _jsx(ContentInput, { value: description || "", placeholder: "\uC804\uC2DC \uC124\uBA85 \uC785\uB825...", readOnly: true, onClick: handleTitleClick })] })] }), _jsxs(ArtistContainer, { children: [_jsx(H1, { children: "\uD611\uC5C5 \uC791\uAC00" }), _jsxs(Artist, { children: [_jsx(ProfileImg, { width: "2rem", height: "2rem", src: profile, alt: "\uD504\uB85C\uD544" }), _jsxs(NameContainer, { children: [_jsx(Name, { children: "\uAE40\uB2E4\uD604" }), _jsx(Major, { children: "\uB3D9\uC591\uD654, \uD55C\uAD6D\uD654" })] }), _jsx("img", { src: detail })] }), _jsxs(Artist, { children: [_jsx(ProfileImg, { width: "2rem", height: "2rem", src: profile, alt: "\uD504\uB85C\uD544" }), _jsxs(NameContainer, { children: [_jsx(Name, { children: "\uC774\uC7AC\uC6B1" }), _jsx(Major, { children: "\uB3D9\uC591\uD654, \uD55C\uAD6D\uD654" })] }), _jsx("img", { src: detail })] })] }), _jsxs(ItemsContainer, { children: [_jsx(H1, { children: "\uC804\uC2DC \uCD9C\uD488\uC791" }), _jsxs(Items, { children: [_jsxs(ItemName, { children: [_jsxs(ItemArtist, { children: [_jsx(ProfileImg, { width: "1.75rem", height: "1.75rem", src: profile }), _jsx(Name, { children: "\uAE40\uB2E4\uD604" })] }), _jsxs(SeemoreCon, { onClick: handleEntryClick, children: [_jsx("img", { src: seemore }), _jsx("img", { src: seemore }), _jsx("img", { src: seemore })] })] }), _jsx(ItemImgContainer, { children: artworkImages.length > 0 ? (_jsxs(_Fragment, { children: [_jsx(CarouselButton, { onClick: handlePrevImage, children: "<" }), _jsx("img", { src: artworkImages[currentImageIndex], alt: `Artwork ${currentImageIndex}` }), _jsx(CarouselButton, { onClick: handleNextImage, children: ">" })] })) : (_jsx("img", { src: exhibitionphoto })) })] }), _jsxs(Items, { children: [_jsxs(ItemName, { children: [_jsxs(ItemArtist, { children: [_jsx(ProfileImg, { width: "1.75rem", height: "1.75rem", src: profile }), _jsx(Name, { children: "\uC774\uC7AC\uC6B1" })] }), _jsxs(SeemoreCon, { onClick: handleEntryClick, children: [_jsx("img", { src: seemore }), _jsx("img", { src: seemore }), _jsx("img", { src: seemore })] })] }), _jsx(ItemImgContainer, { children: artworkImages.length > 0 ? (_jsxs(_Fragment, { children: [_jsx(CarouselButton, { onClick: handlePrevImage, children: "<" }), _jsx("img", { src: artworkImages[currentImageIndex], alt: `Artwork ${currentImageIndex}` }), _jsx(CarouselButton, { onClick: handleNextImage, children: ">" })] })) : (_jsx("img", { src: exhibitionphoto })) })] })] }), _jsxs(PosterContainer, { children: [_jsxs(PosterDetail, { children: [_jsx(H1, { children: "\uC804\uC2DC \uD3EC\uC2A4\uD130" }), _jsxs(SeemoreCon, { onClick: () => fileInputRef.current?.click(), children: [_jsx("img", { src: seemore }), _jsx("img", { src: seemore }), _jsx("img", { src: seemore })] })] }), _jsx(Poster, { children: posterImage ? (_jsx("img", { src: posterImage, alt: "Uploaded Poster" })) : (_jsx("img", { src: exhibitionphoto, alt: "Default Poster" })) }), _jsx("input", { type: "file", accept: "image/*", ref: fileInputRef, style: { display: "none" }, onChange: handleFileChange })] }), _jsxs(ExhibitionDay, { children: [_jsx(H1, { children: "\uC804\uC2DC \uB0A0\uC9DC" }), _jsx(Day, { placeholder: startDate && endDate
                            ? `${startDate} ~ ${endDate}`
                            : "전시 날짜 선택", readOnly: true, onClick: handleDateClick })] }), _jsxs(ExhibitonLoc, { children: [_jsx(H1, { children: "\uC804\uC2DC \uC7A5\uC18C" }), _jsx(Map, { onClick: handleLocClick, children: _jsx("img", { src: whitemap, alt: "\uC9C0\uB3C4 \uC774\uBBF8\uC9C0" }) }), _jsxs(DetailMap, { children: [_jsx("h3", { children: "\uC0C1\uC138 \uC8FC\uC18C" }), _jsx("input", { type: "text", value: location
                                    ? `${location.name}, ${location.address}`
                                    : "장소를 선택해주세요", readOnly: true })] })] }), _jsxs(BudgetContainer, { children: [_jsx(H1, { children: "\uC804\uC2DC \uC608\uC0B0" }), budget.budgetItems.map((item, index) => (_jsxs(PlusContent, { children: [_jsx("p", { children: item.name }), _jsxs("p", { children: ["\u20A9", item.cost.toLocaleString()] })] }, index))), _jsx(PlusButton, { onClick: handleBudgetClick, children: _jsx("p", { children: "+ \uD56D\uBAA9 \uCD94\uAC00\uD558\uAE30" }) }), _jsxs(TotalBuget, { children: [_jsx("p", { children: "\uCD1D \uC608\uC0C1 \uBE44\uC6A9" }), _jsxs("p", { children: ["\u20A9", budget.totalCost.toLocaleString()] })] }), _jsxs(PersonBudget, { children: [_jsx("p", { children: "\uC778\uB2F9 \uCD1D \uC608\uC0C1 \uBE44\uC6A9" }), _jsxs(Money, { children: [_jsx("p", { children: "\u20A9" }), _jsx("p", { children: budget.perPersonCost.toLocaleString() })] })] })] }), _jsxs(NoteContainer, { children: [_jsx(H1, { children: "Note" }), (notes.length > 0 ? notes : [{ mention: "", text: "" }]).map((note, index) => (_jsx("input", { type: "text", value: `${note.mention ? `@${note.mention} ` : ""}${note.text}`, readOnly: true, onClick: () => handleNoteClick(note), placeholder: "\uBA54\uBAA8\uB97C \uC785\uB825\uD558\uC138\uC694" }, index)))] }), _jsxs(BothContainer, { children: [_jsx(H1, { children: "\uC6B0\uB9AC\uC758 \uACF5\uD1B5\uC810\uC740" }), _jsxs(BothComponent, { children: [_jsx(Both, { width: "2.93rem", children: _jsx("p", { children: "\uB3D9\uC591\uD654" }) }), _jsx(Both, { width: "2.93rem", children: _jsx("p", { children: "\uD55C\uAD6D\uD654" }) }), _jsx(Both, { width: "4.81rem", children: _jsx("p", { children: "\uACC4\uD68D\uD615\uC774\uC5D0\uC694" }) })] })] }), _jsxs(BtnContainer, { children: [_jsx("img", { src: complete }), _jsx(Button, { width: "17.37rem", label: "\uC644\uB8CC", backgroundColor: "#52C1BF", color: "white", onClick: handleComplete })] })] }, key));
}
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
const ItemArtist = styled.div `
  width: 7rem;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
const SeemoreCon = styled.div `
  display: flex;
  gap: 0.12rem;
  cursor: pointer;
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
const PlusButton = styled.div `
  width: 100%;
  height: 1.69rem;
  border-radius: 0 0 0.5rem 0.5rem;
  border: 1px solid #e7e7ee;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    color: #656572;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 0.75rem; /* 100% */
    letter-spacing: -0.01875rem;
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
const BothContainer = styled.div `
  width: 100%-1.5rem;
  height: auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
`;
const BothComponent = styled.div `
  width: 100%;
  height: auto;
  display: flex;
  gap: 0.5rem;
`;
const Both = styled.div `
  width: ${(props) => props.width};
  height: 1.5rem;
  padding: 0.5rem;
  background-color: #e7e7ee;
  color: #656572;
  border-radius: 0.375rem;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 0.75rem; /* 100% */
    letter-spacing: -0.01875rem;
  }
`;
const BtnContainer = styled.div `
  width: calc(100% - 1.5rem);
  height: auto;
  padding: 0 1.5rem;
  display: flex;
  gap: 1.25rem;
  margin-top: 5rem;
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
export default PlanMain;
