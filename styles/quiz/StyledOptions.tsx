import styled, { css } from "styled-components";

export const StyledOptions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-left: 4rem;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
    padding: 0;
  }
`;

type ButtonProps = {
  $isAnswer?: boolean;
  $isCorrect?: boolean;
  $isWrong?: boolean;
};

export const ButtonOption = styled.button<ButtonProps>`
  display: inline-flex;
  background-color: transparent;
  color: white;
  margin: 0 1.25rem 1.25rem 0;
  min-height: 2.625rem;
  border: 0.0625rem solid hsla(0, 0%, 100%, 0.3);
  border-radius: 0.4375rem;
  align-items: center;
  padding: 10px 30px;
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 2px;
  &:not([disabled]):hover {
    background-color: #38514b;
  }

  &[disabled]:hover {
    cursor: not-allowed;
  }

  ${(props) =>
    props.$isAnswer &&
    css`
      transform: translateX(0.5rem);
    `}

  ${(props) =>
    props.$isCorrect &&
    css`
      background-color: #d4e9e2;
      color: #1e3932;
    `}

   ${(props) =>
    props.$isWrong &&
    css`
      background-color: #b04a5a;
    `}
`;
