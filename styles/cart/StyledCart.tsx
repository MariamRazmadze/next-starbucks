import styled from "styled-components";
import { OrderButton } from "../StyledCoffeePage";

export const StyledCart = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  display: flex;
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CartSummary = styled.div`
  background-color: #1e3932;
  color: white;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 30%;
  height: 100vh;
  width: 40vw;
  a {
    text-decoration: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 40vh;
    gap: 2rem;
  }
`;

export const BackToMenu = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
export const CartMain = styled.div``;

export const CartMainHeader = styled.h2`
  font-weight: 700 !important;
  font-size: 24px;
`;

export const CartItemsContainer = styled.div`
  height: 100%;
  max-height: 100vh;
  overflow-y: auto;
  width: 60vw;
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
  margin: 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContinueButton = styled(OrderButton)`
  bottom: 30px;
  right: 5rem;
  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
  }
`;

export const ClearButton = styled.button`
  border-radius: 9999px;
  border: 2px solid #cbd5e0;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #718096;
  transition-property: background-color, color;
  transition-duration: 300ms;
  font-size: 16px;
  padding: 0.625rem 1rem;
  &:hover {
    background-color: #cbd5e0;
    color: #2d3748;
  }

  &:focus {
    background-color: #cbd5e0;
    color: #2d3748;
    outline: none;
    box-shadow: 0 0 0 2px #edf2f7;
    position: relative;
  }
  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;
