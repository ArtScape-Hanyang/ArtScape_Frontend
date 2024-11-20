import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/header";
import photo from "../asset/photo.svg";
import profile from "../asset/profile.png";
import detail from "../asset/detail.svg";
import seemore from "../asset/seemore.svg";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  width: 25.125rem;
  height: auto;
  background-color: #ffffff;
  box-sizing: border-box;
  position: relative;
  padding: 3.75rem 0;
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
    background-color: #E7E7EE;
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
    border: 1px solid #CDCDD6;
    color: #9696A6;
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
    border: 1px solid #CDCDD6;
    color: #9696A6;
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
    border-bottom: 1px solid #E7E7EE;
`;

const ProfileImg = styled.img<{width: string; height: string;}>`
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
    background-color: #ccc;
    width: 100%-1.5rem;
    height: 53.5rem;
    padding: 0 1.5rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const Items = styled.div`
    width: 100%;
    height: 25.37rem;
    background-color: aliceblue;
    border: 1px solid #E7E7EE;
    border-radius: 0.5rem;
`;

const ItemName = styled.div`
    width: 100%-0.75rem;
    height: 2.75rem;
    padding: 0.75rem;
    display: flex;
    gap: 0.75rem;
    align-items: center;
`;

const SeemoreCon = styled.div`
    margin-left: 63%;
    display: flex;
    gap: 0.12rem;
    cursor: pointer;
`;

function PlanMain() {
    const navigate = useNavigate();

    const handleTitleClick = () =>{
        navigate('/multi_pln/info');
    }
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
                    placeholder="전시 제목 입력"
                    readOnly
                    onClick={handleTitleClick}/>
                    <ContentInput 
                    placeholder="전시 설명 입력..."/>
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
                    <img src={detail}/>
                </Artist>
                <Artist>
                    <ProfileImg width="2rem" height="2rem" src={profile} alt="프로필" />
                    <NameContainer>
                        <Name>이재욱</Name>
                        <Major>동양화, 한국화</Major>
                    </NameContainer>
                    <img src={detail}/>
                </Artist>
            </ArtistContainer>
            <ItemsContainer>
                <H1>전시 출품작</H1>
                <Items>
                    <ItemName>
                        <ProfileImg width="1.75rem" height="1.75rem" src={profile}/>
                        <Name>김다현</Name>
                        <SeemoreCon>
                            <img src={seemore} />
                            <img src={seemore} />
                            <img src={seemore} />
                        </SeemoreCon>
                    </ItemName>

                </Items>
            </ItemsContainer>
        </MainContainer>
    )
}

export default PlanMain;