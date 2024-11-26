import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import photo from "../asset/photo.svg";
import profile from "../asset/profile.png";
import detail from "../asset/detail.svg";
import seemore from "../asset/seemore.svg";
import exhibitionphoto from "../asset/exhibitionphoto.svg";
import whitemap from "../asset/whitemap.svg";
import complete from "../asset/complete.svg";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../components/Button";

const MainContainer = styled.div`
  width: 25.125rem;
  height: auto;
  background-color: #ffffff;
  box-sizing: border-box;
  position: relative;
  padding:0;
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
  height: 3.75rem;
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
    height: 2.5rem;
    padding: 0 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid #e7e7ee;
    font-size: 1rem;
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
`;

const PlusContent = styled.div`
  width: 100%;
  min-height: 2.19rem;
  border: 1px solid #e7e7ee;
  border-radius: 0.5rem 0.5rem 0 0;
  margin-top: 0.75rem;
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
  width: 1.69rem;
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
  p:second-child {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
    color: #17171b;
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
    width: 100%;
    height: 2.5rem;
    border: 1px solid #e7e7ee;
    border-radius: 0.375rem;
    cursor: pointer;
    padding: 0;
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
  width: 100%-1.5rem;
  height: auto;
  padding: 0 1.5rem;
  display: flex;
  gap: 1.25rem;
  margin-top: 50%;
`;

function PlanMain() {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, description } = location.state || {};

  const handleTitleClick = () => {
    navigate(`/multi_pln/info`);
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

  const handleNoteClick = () => {
    navigate("/multi_pln/note");
  };

  const handleComplete = () => {
    navigate("/main");
  };

  return (
    <MainContainer>
      <GlobalStyle />
      <Header />
      <TitleContainer>
        <Profile>
          <img src={photo} alt="Profile" />
        </Profile>
        <InputContainer>
          <TitleInput
            value={title || ""}
            placeholder="전시 제목 입력"
            readOnly
            onClick={handleTitleClick}
          />
          <ContentInput
          value={description || ""}
          placeholder="전시 설명 입력..."
          readOnly
          onClick={handleTitleClick} />
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
            <ItemArtist>
              <ProfileImg width="1.75rem" height="1.75rem" src={profile} />
              <Name>김다현</Name>
            </ItemArtist>
            <SeemoreCon>
              <img src={seemore} />
              <img src={seemore} />
              <img src={seemore} />
            </SeemoreCon>
          </ItemName>
          <ItemImgContainer>
            <img src={exhibitionphoto} />
          </ItemImgContainer>
        </Items>
        <Items>
          <ItemName>
            <ItemArtist>
              <ProfileImg width="1.75rem" height="1.75rem" src={profile} />
              <Name>이재욱</Name>
            </ItemArtist>
            <SeemoreCon>
              <img src={seemore} />
              <img src={seemore} />
              <img src={seemore} />
            </SeemoreCon>
          </ItemName>
          <ItemImgContainer>
            <img src={exhibitionphoto} />
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
          <img src={exhibitionphoto} />
        </Poster>
      </PosterContainer>
      <ExhibitionDay>
        <H1>전시 날짜</H1>
        <Day
          readOnly
          placeholder="전시 날짜 선택"
          onClick={handleDateClick}
        ></Day>
      </ExhibitionDay>
      <ExhibitonLoc>
        <H1>전시 장소</H1>
        <Map onClick={handleLocClick}>
          <img src={whitemap} />
        </Map>
        <DetailMap>
          <h3>상세 주소</h3>
          <input type="text" placeholder="상세주소 입력" />
        </DetailMap>
      </ExhibitonLoc>
      <BudgetContainer>
        <H1>전시 예산</H1>
        <PlusContent></PlusContent>
        <PlusButton>
          <p onClick={handleBudgetClick}>+ 항목 추가하기</p>
        </PlusButton>
        <TotalBuget>
          <p>총 예상 비용</p>
          <p>₩ 0</p>
        </TotalBuget>
        <PersonBudget>
          <p>인당 총 예상 비용</p>
          <Money>
            <p>₩</p>
            <p>0</p>
          </Money>
        </PersonBudget>
      </BudgetContainer>
      <NoteContainer>
        <H1>Note</H1>
        <input type="text" readOnly onClick={handleNoteClick} />
      </NoteContainer>
      <BothContainer>
        <H1>우리의 공통점은</H1>
        <BothComponent>
          <Both width="2.93rem">
            <p>동양화</p>
          </Both>
          <Both width="2.93rem">
            <p>한국화</p>
          </Both>
          <Both width="4.81rem">
            <p>계획형이에요</p>
          </Both>
        </BothComponent>
      </BothContainer>
      <BtnContainer>
        <img src={complete} />
        <Button
          width="17.37rem"
          label="완료"
          backgroundColor="#52C1BF"
          color="white"
          onClick={handleComplete}
        ></Button>
      </BtnContainer>
    </MainContainer>
  );
}

export default PlanMain;
