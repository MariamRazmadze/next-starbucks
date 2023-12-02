import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid;
  border-radius: 50px;
  padding: 7px 16px;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
`;

export const LightButton = styled(Button)`
  border-color: #000000;
  background-color: white;
  color: #000000;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

export const DarkButton = styled(Button)`
  border-color: #000000;
  background-color: #000000;
  color: white;
  &:hover {
    background-color: #333;
  }
`;
