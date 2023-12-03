import styled from "styled-components";
import { Button } from "@/components/UI/Button";

export const CityIcon = styled.span`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.58);
`;

export const CityButton = styled(Button)`
  background-color: #00754a;
  border-color: #00754a;
  color: white;
  font-size: 13px;
  font-weight: 700;
  margin-top: 2rem;
  &:hover {
    background-color: #16815b;
  }
`;

export const CityName = styled.h3`
  font-weight: 700;
  font-size: 1.4rem;
`;

export const CityIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 0.5rem;
  width: 90px;
`;

export const DeleteButton = styled.button`
  height: 2rem;
  aspect-ratio: 1;
  border-radius: 50%;
  border: none;
  background-color: #fbbc05;
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s;
`;

export const StoreClosed = styled.div`
  display: flex;
  gap: 5px;
  margin: 5px 0;
`;

export const CitySpan = styled.span`
  color: rgba(0, 0, 0, 0.58);
  font-size: 1.3rem;
`;

export const CityParagraph = styled.p`
  font-size: 1.3rem;
`;

export const CityItemContainer = styled.div<{ $isActive: boolean }>`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 7px;
  padding: 1rem 2rem 1rem 4rem;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  background-color: ${(props) => (props.$isActive ? "#e5f0ec" : "initial")};
  border: ${(props) => (props.$isActive ? "2px solid #006241" : "none")};
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  overscroll-behavior-y: none;
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
