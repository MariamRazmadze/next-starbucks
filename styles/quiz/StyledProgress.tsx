import styled, { css } from "styled-components";

export const StyledProgress = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20%;
`;

export const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 4rem;
  gap: 5rem;
`;

export const StyledListItem = styled.li<{ isActive: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 3rem;
  width: 3rem;
  font-size: 14px;
  font-weight: 700;
  ${(props) =>
    props.isActive &&
    css`
      border-radius: 50%;
      border: 0.03125rem solid #d4e9e2;
      background-color: #d4e9e2;
      color: #1e3932;
      opacity: 1;
      -webkit-transition: background-color 1.5s ease-in-out;
      transition: background-color 1.5s ease-in-out;
      opacity: 0.5;
    `}

  &::before {
    content: "";
    display: block;
    position: absolute;
    right: 100%;
    width: 1.875rem;
    opacity: 0.5;
    top: 50%;
    width: 4.875rem;
    border: 0.03125rem dashed #d4e9e2;
    opacity: 1;
  }

  &:first-child::before {
    content: none;
  }
`;
