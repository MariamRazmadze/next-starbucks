import styled from "styled-components";

export const StyledCartOverview = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  background: #1e3932;
  color: white;
  height: 75px;
  width: 100%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: white;
    font-size: 19px;
    font-weight: 700;
  }
`;

export const CartDiv = styled.div`
  background-image: url("/cart/cart.svg");
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
`;
