import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import nextbtn from '../asset/nextbtn.svg'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Level {
    width: number,
}

const regionData = { 
    서울특별시: ["강남구", "강동구", "강북구", "강서구", "관악구", "광진구",
        "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구",
        "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구",
        "용산구", "은평구", "종로구", "중구", "중랑구"
    ]
}

const MainContainer = styled.div`
  width: 25.125rem;
  height: 54.625rem;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 0 1.5rem;
  position: relative;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 11rem;
    gap: 0.3rem;
`;

const H1 = styled.h1`
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem; /* 100% */
    letter-spacing: -0.0375rem;
    margin: 0;
`;

const H3 = styled.h3`
    color: var(--Gray-Scale-G400, #656572);

    /* Body/M500 */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
    margin-top: 1%;
`;

const LocContainer = styled.div`
    margin-top: 10%;
    color: #656572;

    /* Body/M500 */
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
`;

const Input = styled.input`
    width: 20.5rem;
    height: 2rem;
    border-radius: 0.5rem;
    background-color: #E7E7EE;
    border: 0;
    padding: 1rem;
    color: #17171B;
    font-size: 1rem;
    cursor: pointer;
`;

const RealInput = styled.input`
    width: 20.5rem;
    height: 2rem;
    border-radius: 0.5rem;
    border: 0;
    padding: 1rem;
    color: #17171B;
    font-size: 1rem;
    background-color: #E7E7EE;
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 0.5rem;
    background-color: #E7E7EE;
    border-radius: 20px;
    margin-top: 35%;
`;

const Progress = styled.div<{ width: number }>`
    width: ${(props:Level) => props.width}%;
    height: 0.5rem;
    background-color: #52C1BF;
    border-radius: 20px;
`;

const NextBtn = styled.div`
    display: flex ;
    justify-content: flex-end;
    margin-top: 7%;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1rem; /* 100% */
    letter-spacing: -0.025rem;
    gap: 0.5rem;
    cursor: pointer;
`;

const BottomSheet = styled.div<{ isOpen: boolean }>`
    width: 22.2rem;
    height: 70%;
    position: absolute;
    background-color: white;
    left: 0;
    bottom: ${(props) => (props.isOpen ? "0.5%" : "-100%")};
    border-radius: 1.25rem;
    padding: 1.5rem;
    border: 1px solid black;
    z-index: 10;
    transition: bottom 0.3s ease;
`;

const BottomLabel = styled.h3`
    color: #656572;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.125rem; /* 100% */
    letter-spacing: -0.02813rem;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
    z-index: 9;
`;

const SearchRegionList = styled.div`
    border: 1px solid #E7E7EE;
    box-shadow: 0px 0px 4px 0px rgba(23, 23, 27, 0.10);
    z-index: 100;
    overflow-y: auto;
    border-radius: 0.5rem;
    max-height: 30rem;
`;

const SearchRegionItem = styled.div`
    padding: 1rem;
    cursor: pointer;
    color: #656572;
    font-size: 1.125rem;
`;

function MatchLocation() {
    const maxItem = 12
    const avaliableItem = 6
    const navigate = useNavigate();
    const [isFSheetOpen, setIsFSheetOpen] = useState(false);
    const [isSSheetOpen, setIsSSheetOpen] = useState(false);
    const [finputValue, setFInputValue] = useState<string>("");
    const [sinputValue, setSInputValue] = useState<string>("");
    const [foptions, setFOptions] = useState<string[]>([]);
    const [soptions, setSOptions] = useState<string[]>([]);
    const [_selectedRegion, setSelectedRegion] = useState<string>("");

    const handleNextClick = () => {
        navigate('/matching/form')
    }

    const openFBottomSheet = () => {
        setIsFSheetOpen(true);
    }

    const openSBottomSheet = () => {
        setIsSSheetOpen(true);
    }

    const closeFBottomSheet = () => {
        setIsFSheetOpen(false);
    }

    const closeSBottomSheet = () => {
        setIsSSheetOpen(false);
    }

    const handleFInputChange = (value: string) => {
        setFInputValue(value);

        const filterOptions = [
            ...regionData.서울특별시.map(district => `서울특별시 ${district}`)
        ].filter(region => region.includes(value));

        setFOptions(filterOptions);
    }  
    
    const handleSInputChange = (value: string) => {
        setSInputValue(value);

        const filterOptions = [
            ...regionData.서울특별시.map(district => `서울특별시 ${district}`)
        ].filter(region => region.includes(value));

        setSOptions(filterOptions);
    }

    const handleFRegionSelect = (region: string) => {
        setSelectedRegion(region);
        setFInputValue(region);
        setFOptions([]);
        closeFBottomSheet();
    }    

    const handleSRegionSelect = (region: string) => {
        setSelectedRegion(region);
        setSInputValue(region);
        setSOptions([]);
        closeSBottomSheet();
    }

    return (
        <MainContainer>
            <GlobalStyle />
            <Title>
                <H1>작가님이 단체전을</H1>
                <H1>주최하고자 하는 지역은 어디인가요?</H1>
                <H3>지역에 맞추어 추천해 드릴게요!</H3>
            </Title>
            <LocContainer>
                <h3>1순위 입력</h3>
                <Input 
                type="text" 
                placeholder="지역을 입력해 주세요."
                onClick={openFBottomSheet}
                value={finputValue}
                readOnly/>
            </LocContainer>
            <LocContainer>
                <h3>2순위 입력</h3>
                <Input 
                type="text" 
                placeholder="지역을 입력해 주세요."
                onClick={openSBottomSheet}
                value={sinputValue}
                readOnly/>
            </LocContainer>
            <div>
                <ProgressBar>
                    <Progress width = {(avaliableItem*100/maxItem)}></Progress>
                </ProgressBar>
                <NextBtn onClick={handleNextClick}>
                    <button>다음으로</button>
                    <img src={nextbtn} />
                </NextBtn>
            </div>

            {/* 오버레이 */}
            <Overlay isOpen={isFSheetOpen} onClick={closeFBottomSheet} />
            <Overlay isOpen={isSSheetOpen} onClick={closeSBottomSheet} />

            {/* 바텀시트 */}
            <BottomSheet isOpen={isFSheetOpen}>
                <div>
                    <BottomLabel>시/도 입력</BottomLabel>
                    <RealInput 
                    type="text" 
                    placeholder="지역을 입력해주세요."
                    value={finputValue}
                    onChange={(e) => handleFInputChange(e.target.value)}/>
                    {foptions.length > 0 && (
                        <SearchRegionList>
                            {foptions.map((region, index) => (
                                <SearchRegionItem 
                                key={index}
                                onClick={() => handleFRegionSelect(region)}>
                                    {region}
                                </SearchRegionItem>
                            ))}
                        </SearchRegionList>
                    )}
                </div>
            </BottomSheet>
            <BottomSheet isOpen={isSSheetOpen}>
                <div>
                    <BottomLabel>시/도 입력</BottomLabel>
                    <RealInput 
                    type="text" 
                    placeholder="지역을 입력해주세요."
                    value={sinputValue}
                    onChange={(e) => handleSInputChange(e.target.value)}/>
                    {soptions.length > 0 && (
                        <SearchRegionList>
                            {soptions.map((region, index) => (
                                <SearchRegionItem 
                                key={index}
                                onClick={() => handleSRegionSelect(region)}>
                                    {region}
                                </SearchRegionItem>
                            ))}
                        </SearchRegionList>
                    )}
                </div>
            </BottomSheet>
        </MainContainer>
    )
}

export default MatchLocation;