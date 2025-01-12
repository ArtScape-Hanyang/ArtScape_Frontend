import styled from "styled-components";
import Banner1 from "../asset/banner1.png";
import { useState, useEffect } from "react";

// SlideProps 타입 정의
interface SlideProps {
  bgImage: string;
}

// WrapperProps 타입 정의
interface WrapperProps {
  translate: number;
}

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: string[] = [Banner1, Banner1, Banner1, Banner1, Banner1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, [slides.length]);

  return (
    <CarouselContainer>
      <CarouselWrapper translate={-currentSlide * 100}>
        {slides.map((slide, index) => (
          <Slide key={index} bgImage={slide} />
        ))}
      </CarouselWrapper>
      <DotsContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

// Carousel Container
const CarouselContainer = styled.div`
  width: 25.125rem;
  height: 15rem;
  flex-shrink: 0;
  margin: 0%.75 auto 0;
  border: 2px solid rgba(18, 19, 24, 0.04);
  overflow: hidden;
  position: relative;
`;

const CarouselWrapper = styled.div<WrapperProps>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}%);
  display: inline-flex;
  position: relative;
  overflow: visible;
  width: 100%;
  height: 100%;
`;

const Slide = styled.div<SlideProps>`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.bgImage}) center / cover no-repeat;

  @media (max-width: 768px) {
    background-size: cover;
  }
`;
const DotsContainer = styled.div`
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

const Dot = styled.div<{ isActive: boolean }>`
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 50%;
  background: ${(props) => (props.isActive ? "#fafbfb" : "#9696A6")};
  cursor: pointer;
`;

export default Banner;
