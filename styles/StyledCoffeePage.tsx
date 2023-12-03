import styled, { keyframes } from "styled-components";

export const TopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background-color: #1f3933;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MiddleSection = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10%;
  align-items: center;
  padding: 5%;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem 0;
  background-color: #1f3933;
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 35%;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const PlaceholderImage = styled.img`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const CoffeeImage = styled.img`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const HeaderTexts = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const CoffeeName = styled.h1`
  font-size: 36px;
  color: white;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Calories = styled.div`
  color: #a8b2a7;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 19px;
  }
`;

export const BottomTextsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 25%;
  margin: 2% 5%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 3rem;
  }
`;

export const StarCost = styled.div`
  border: 1px solid #cba258;
  border-radius: 6px;
  color: #cba258;
  font-size: 14px;
  padding: 0 8px;
  width: fit-content;
`;

export const CoffeeDescription = styled.div`
  color: #a8b2a7;
  font-size: 14px;
  font-weight: 500;
`;

export const Includes = styled.p`
  font-size: 14px;
  color: white;
  font-weight: 700;
`;

export const MiddleSpan = styled.span`
  color: #00754a;
  margin-left: 5px;
`;

export const MiddleTexts = styled.div`
  padding-bottom: 5%;
  width: 220px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const wave = keyframes`
  0% {
    background-position: 100% 0;
  }
  50% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 100%;
  }
`;

export const WaveButton = styled.button`
  background-color: #00754a;
  border: none;
  outline: none;
  border-radius: 500px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.24) 0 8px 12px rgba(0, 0, 0, 0.14);
  color: white;
  display: inline-block;
  font-size: 19px;
  font-weight: 600;
  line-height: 1.2;
  overflow: hidden;
  padding: 18px 2.4rem;
  position: relative;
  text-align: center;
  text-decoration: none;

  &:active {
    background: linear-gradient(
      90deg,
      #00754a 0%,
      rgba(255, 255, 255, 0.5) 100%
    );
    background-size: 200% 100%;
    animation: ${wave} 0.5s ease-out forwards;
  }
`;

export const OrderButton = styled(WaveButton)`
  position: fixed;
  right: 4rem;
  bottom: 120px;
`;

export const MenuBody = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10%;
  @media (max-width: 768px) {
    display: block;
  }
`;
