import styled from "styled-components";

export const StyledNextButton = styled.button`
  position: absolute;
  top: 8%;
  right: 10%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  color: white;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
  &:hover {
    color: ${({ theme }) => theme.secondaryBackground};
  }
  @media (max-width: 768px) {
    top: 95%;
    left: 50%;
  }
`;

export const StyledFinishButton = styled(StyledNextButton)`
  border: 1px solid white;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px 30px;
  cursor: pointer;
  &:hover {
    background-color: #38514b;
  }
`;
