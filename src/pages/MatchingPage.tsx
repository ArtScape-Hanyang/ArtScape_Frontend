import React from "react";
import backbtn from "../asset/backbtn.svg";
import aimatchstar from "../asset/aimatchstar.png";
import nextbtn from "../asset/nextbtn.svg";
const MatchingPage = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="container--icon">
          <img src={backbtn} className="back-icon" alt="뒤로가기" />
        </div>
        <div className="text-container">
          <div className="text-container--title">
            <h2>AI가 찾아주는</h2>
            <h1>당신의 협업 파트너</h1>
          </div>
        </div>
        <div className="backgroundImg">
          <img src={aimatchstar} className="back-star" alt="배경이미지,," />
        </div>
        <div className="start--container">
          {" "}
          <div className="text-container">
            <div className="text-container--next">
              <h5>시작하기버튼!</h5>
            </div>
            <div className="container--icon">
              <img src={nextbtn} className="next-icon" alt="다음으로" />
            </div>
          </div>
        </div>
        {/* 페이지 내용 */}
      </div>
    </div>
  );
};

export default MatchingPage;
