import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from "styled-components";
import Banner1 from "../asset/banner1.png";
import { useState, useEffect } from "react";
const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [Banner1, Banner1, Banner1, Banner1, Banner1];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
    }, [slides.length]);
    return (_jsxs(CarouselContainer, { children: [_jsx(CarouselWrapper, { translate: -currentSlide * 100, children: slides.map((slide, index) => (_jsx(Slide, { bgImage: slide }, index))) }), _jsx(DotsContainer, { children: slides.map((_, index) => (_jsx(Dot, { isActive: index === currentSlide, onClick: () => setCurrentSlide(index) }, index))) })] }));
};
// Carousel Container
const CarouselContainer = styled.div `
  width: 25.125rem;
  height: 15rem;
  flex-shrink: 0;
  margin: 0%.75 auto 0;
  border: 2px solid rgba(18, 19, 24, 0.04);
  overflow: hidden;
  position: relative;
`;
const CarouselWrapper = styled.div `
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}%);
  display: inline-flex;
  position: relative;
  overflow: visible;
  width: 100%;
  height: 100%;
`;
const Slide = styled.div `
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.bgImage}) center / cover no-repeat;

  @media (max-width: 768px) {
    background-size: cover;
  }
`;
const DotsContainer = styled.div `
  position: absolute;
  bottom: 1rem;
  left: 80%;
  display: inline-flex;
  padding: 0.25rem;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 6.25rem;
  opacity: 0.8;
  background: var(--Gray-Scale-Black, #17171b);

  display: flex;
  align-items: center;
  gap: 0.25rem;
`;
const Dot = styled.div `
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background: ${(props) => (props.isActive ? "#fafbfb" : "#9696A6")};
  cursor: pointer;
`;
export default Banner;
