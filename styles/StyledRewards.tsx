import styled from "styled-components";

export const RewardsContainer = styled.div`
  width: 100%;
  background-color: #f2f8f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 470px;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const TitleWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 4rem;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RewardsTitle = styled.h1`
  text-align: center;
  font-size: 28px;
`;

export const RewardButtons = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 40%;
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    width: 100%;
  }
`;

interface UnderlineProps {
  $left: number;
}

export const Underline = styled.div<UnderlineProps>`
  position: absolute;
  bottom: 0;
  height: 4px;
  width: 20%;
  background-color: #006241;
  transition: left 0.3s ease-out;
  left: ${({ $left }) => `${$left}%`};
`;

export const StarButton = styled.button`
  font-size: 25px;
  font-weight: 600;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  padding: 2rem 0;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoldStart = styled.span`
  color: #cba258;
  font-size: 14px;
  margin-left: 4px;
`;

export const ContentWrapper = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d4e9e2;
  box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.14);
`;

export const Content = styled.div`
  padding: 2rem 0;
  height: 100%;
  width: 60%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 70vh;
    width: 100%;
  }
`;

export const ContentImage = styled.img`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContentText = styled.div`
  @media (max-width: 768px) {
    text-align: center;
    padding: 0 1rem;
  }
`;

export const Promo = styled.p`
  margin-top: 1.5rem;
  font-size: 16px;
  max-width: 70%;
  line-height: 1.5;
  @media (max-width: 768px) {
    max-width: none;
  }
`;
