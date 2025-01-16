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
import seemore from "../asset/seemore.svg";
import whitemap from "../asset/whitemap.svg";
import detail from "../asset/detail.svg";

const PlanDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [posterImage, setPosterImage] = useState(null);

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
            ...fetchedData,
            artworkImages: fetchedData.artworkImages || [],
            budget: fetchedData.budget || {
              budgetItems: [],
              totalCost: 0,
              perPersonCost: 0,
            },
            notes: fetchedData.notes || [],
          });

          // ✅ 포스터 이미지도 `plandetail/{id}`에서 가져오기
          setPosterImage(fetchedData.posterImage || null);
        } else {
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
      } catch (error) {
        console.error("Error fetching plandetail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Data not found</p>;

  return (
    <MainContainer>
      <GlobalStyle />
      <Header />
      <TitleContainer>
        <Profile>
          {posterImage ? (
            <img src={posterImage} alt="Uploaded Poster" />
          ) : (
            <img src={photo} alt="Default Profile" />
          )}
        </Profile>
        <InputContainer>
          <TitleInput value={data.title || ""} readOnly />
          <ContentInput value={data.description || ""} readOnly />
        </InputContainer>
      </TitleContainer>
      <ArtistContainer>
        <H1>협업 작가</H1>
        <Artist>
          <ProfileImg width="2rem" height="2rem" src={profile} alt="프로필" />
          <NameContainer>
            <Name>김다현</Name>
            <Major>동양화, 한국화</Major>
          </NameContainer>
          <img src={detail} />
        </Artist>
        <Artist>
          <ProfileImg width="2rem" height="2rem" src={profile} alt="프로필" />
          <NameContainer>
            <Name>이재욱</Name>
            <Major>동양화, 한국화</Major>
          </NameContainer>
          <img src={detail} />
        </Artist>
      </ArtistContainer>
      <ItemsContainer>
        <H1>전시 출품작</H1>
        <Items>
          <ItemName>
            <SeemoreCon>
              <img src={seemore} />
              <img src={seemore} />
              <img src={seemore} />
            </SeemoreCon>
          </ItemName>
          <ItemImgContainer>
            {data.artworkImages?.length > 0 ? (
              <>
                <CarouselButton
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) =>
                        (prev - 1 + (data.artworkImages?.length || 0)) %
                        (data.artworkImages?.length || 1)
                    )
                  }
                >
                  {"<"}
                </CarouselButton>
                <img
                  src={data.artworkImages?.[currentImageIndex] || ""}
                  alt={`Artwork ${currentImageIndex}`}
                />
                <CarouselButton
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) => (prev + 1) % (data.artworkImages?.length || 1)
                    )
                  }
                >
                  {">"}
                </CarouselButton>
              </>
            ) : (
              <p>출품작이 없습니다.</p>
            )}
          </ItemImgContainer>
        </Items>
        <Items>
          <ItemName>
            <SeemoreCon>
              <img src={seemore} />
              <img src={seemore} />
              <img src={seemore} />
            </SeemoreCon>
          </ItemName>
          <ItemImgContainer>
            {data.artworkImages?.length > 0 ? (
              <>
                <CarouselButton
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) =>
                        (prev - 1 + (data.artworkImages?.length || 0)) %
                        (data.artworkImages?.length || 1)
                    )
                  }
                >
                  {"<"}
                </CarouselButton>
                <img
                  src={data.artworkImages?.[currentImageIndex] || ""}
                  alt={`Artwork ${currentImageIndex}`}
                />
                <CarouselButton
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) => (prev + 1) % (data.artworkImages?.length || 1)
                    )
                  }
                >
                  {">"}
                </CarouselButton>
              </>
            ) : (
              <p>출품작이 없습니다.</p>
            )}
          </ItemImgContainer>
        </Items>
      </ItemsContainer>

      <PosterContainer>
        <PosterDetail>
          <H1>전시 포스터</H1>
          <SeemoreCon>
            <img src={seemore} />
            <img src={seemore} />
            <img src={seemore} />
          </SeemoreCon>
        </PosterDetail>
        <Poster>
          {posterImage ? (
            <img src={posterImage} alt="Uploaded Poster" />
          ) : (
            <img src={exhibitionphoto} alt="Default Poster" />
          )}
        </Poster>
      </PosterContainer>

      <ExhibitionDay>
        <H1>전시 날짜</H1>
        <Day
          value={
            data.startDate && data.endDate
              ? `${data.startDate} ~ ${data.endDate}`
              : "전시 날짜 선택되지 않음"
          }
          readOnly
        />
      </ExhibitionDay>

      <ExhibitonLoc>
        <H1>전시 장소</H1>
        <Map>
          <img src={whitemap} alt="지도 이미지" />
        </Map>
        <DetailMap>
          <h3>상세 주소</h3>
          <input
            type="text"
            value={
              data.location
                ? `${data.location.name}, ${data.location.address}`
                : ""
            }
            readOnly
          />
        </DetailMap>
      </ExhibitonLoc>

      <BudgetContainer>
        <H1>전시 예산</H1>
        {data.budget?.budgetItems.map((item, index) => (
          <PlusContent key={index}>
            <p>{item.name}</p>
            <p>₩{item.cost.toLocaleString()}</p>
          </PlusContent>
        ))}
        <TotalBuget>
          <p>총 예상 비용</p>
          <p>₩{data.budget?.totalCost.toLocaleString()}</p>
        </TotalBuget>
        <PersonBudget>
          <p>인당 총 예상 비용</p>
          <Money>
            <p>₩</p>
            <p>{data.budget?.perPersonCost.toLocaleString()}</p>
          </Money>
        </PersonBudget>
      </BudgetContainer>

      <NoteContainer>
        <H1>Note</H1>
        {data.notes.length > 0 ? (
          data.notes.map((note, index) => (
            <input
              key={index}
              type="text"
              value={`${note.mention ? `@${note.mention} ` : ""}${note.text}`}
              readOnly
            />
          ))
        ) : (
          <input type="text" value="메모가 없습니다." readOnly />
        )}
      </NoteContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 25.125rem;
  height: auto;
  margin-bottom: 10rem;
  background-color: #ffffff;
  box-sizing: border-box;
  position: relative;
  padding: 0;
`;

const TitleContainer = styled.div`
  width: 100%-1.5rem;
  height: 4.94rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  gap: 1rem;
  margin-top: 5%;
`;

const Profile = styled.div`
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

const InputContainer = styled.div`
  width: 16.87rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TitleInput = styled.input`
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

const ContentInput = styled.input`
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

const ArtistContainer = styled.div`
  margin-top: 2rem;
  width: 100%-1.5rem;
  height: 8.25rem;
  padding: 0 1.5rem;
`;

const H1 = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25rem; /* 100% */
  letter-spacing: -0.03125rem;
  margin: 0;
`;

const Artist = styled.div`
  width: 100%;
  height: 2rem;
  margin: 0;
  padding: 0.75rem 0;
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid #e7e7ee;
`;

const ProfileImg = styled.img<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 1rem;
`;

const NameContainer = styled.div`
  width: 18.12rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Name = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem; /* 100% */
  letter-spacing: -0.025rem;
  margin: 0;
`;

const Major = styled.h3`
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 0.75rem; /* 100% */
  letter-spacing: -0.01875rem;
  margin: 0;
`;

const ItemsContainer = styled.div`
  width: 100%-1.5rem;
  height: 56rem;
  padding: 0 1.5rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Items = styled.div`
  width: 100%;
  height: 25.38rem;
  border: 1px solid #e7e7ee;
  border-radius: 0.5rem;
`;

const ItemName = styled.div`
  width: 100%-0.75rem;
  height: 2.2rem;
  padding: 0.75rem;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: space-between;
`;

const ItemArtist = styled.div`
  width: 7rem;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const SeemoreCon = styled.div`
  display: flex;
  gap: 0.12rem;
  cursor: pointer;
`;

const ItemImgContainer = styled.div`
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

const PosterContainer = styled.div`
  width: 100%-1.5rem;
  height: 31.75rem;
  padding: 0 1.5rem;
`;

const PosterDetail = styled.div`
  width: 99%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Poster = styled.div`
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

const ExhibitionDay = styled.div`
  width: 100%-1.5rem;
  height: auto;
  padding: 0 1.5rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Day = styled.input`
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

const ExhibitonLoc = styled.div`
  width: 100%-1.5rem;
  height: auto;
  margin-top: 2rem;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Map = styled.div`
  width: 22.125rem;
  height: 5.75rem;
  background-color: #e7e7ee;
  border-radius: 0.5rem;
  display: flex;
  overflow: hidden;
  cursor: pointer;
`;

const DetailMap = styled.div`
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

const BudgetContainer = styled.div`
  width: 100%-1.5rem;
  height: auto;
  padding: 0 1.5rem;
  margin-top: 2rem;
  h1 {
    margin-bottom: 0.75rem;
  }
`;

const PlusContent = styled.div`
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

const PlusButton = styled.div`
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

const TotalBuget = styled.div`
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

const PersonBudget = styled.div`
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

const Money = styled.div`
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

const NoteContainer = styled.div`
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

const BothContainer = styled.div`
  width: 100%-1.5rem;
  height: auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const BothComponent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 0.5rem;
`;

const Both = styled.div<{ width: string }>`
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

const BtnContainer = styled.div`
  width: calc(100% - 1.5rem);
  height: auto;
  padding: 0 1.5rem;
  display: flex;
  gap: 1.25rem;
  margin-top: 5rem;
`;
const CarouselButton = styled.button`
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
