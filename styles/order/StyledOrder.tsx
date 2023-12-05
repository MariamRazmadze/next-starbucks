import styled from "styled-components";
import { StyledCart } from "../cart/StyledCart";
import { WaveButton } from "@/styles/StyledCoffeePage";
import { CardStyles } from "@/app/UI/CardStyles";
import { CartHeader, BackToMenu } from "../cart/StyledCart";
import { Button } from "@/styles/StyledAuth";

export const StyledOrder = styled(StyledCart)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  gap: 4rem;
  background-color: #f9f9f9;
  @media (max-width: 768px) {
    align-items: flex-start;
    padding-top: 15%;
  }
`;

export const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  color: white;
  background-color: #00754a;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #006241;
  }
`;
export const OrderFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 500px;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const OrderInput = styled.input`
  border-radius: 50px;
  border: 1px solid #1e3932;
  padding: 0.5rem 1rem;
  font-size: 14px;
  transition: all 0.3s ease-out;
  width: 100%;

  &::placeholder {
    color: #1e3932;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #00754a;
  }

  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 500px;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const OrderButton = styled(WaveButton)<{ disabled?: boolean }>`
  float: right;
`;

export const OrderGoBack = styled(GoBackButton)`
  position: fixed;
  top: 0;
  left: 2rem;
  background-color: #1e3932;
  font-weight: 700;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  width: 30%;
`;

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 2rem;
    padding-top: 4rem;
  }
`;

export const OrderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

export const OrderContainer = styled(OrderHeader)`
  border-bottom: 1px solid #006241;
  border-top: 1px solid #cba258;
  padding: 1rem 2rem;
  font-size: 16px;
`;

export const EstimatedP = styled.p`
  font-size: 14px;
  color: #78716c;
`;

export const OrderStatus = styled.div`
  background-color: #00754a;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 14px;
`;

export const OrderCart = styled.div`
  ${CardStyles} {
    width: 100%;
    max-width: none;
    margin: 1rem 0;
    padding: 2rem;
  }
`;

export const CardP = styled.p`
  font-size: 14px;
`;

export const CardTotal = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const OrderCartHeader = styled(CartHeader)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  a {
    text-decoration: none;
  }
`;

export const OrderBackToMenu = styled(BackToMenu)`
  color: #006241;
  text-decoration: none;
`;
export const FetchAddressWrapper = styled.span`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const FetchAddressButton = styled(Button)`
  position: absolute;
  right: 0;
  height: 100%;
  font-size: 14px;
  border: 2px solid #cbd5e0;
  color: #718096;
  &:hover,
  &:focus {
    background-color: #cbd5e0;
    color: #2d3748;
    box-shadow: 0 0 0 2px #edf2f7;
  }
`;
