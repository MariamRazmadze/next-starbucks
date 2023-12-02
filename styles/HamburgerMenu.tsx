import styled, { css } from "styled-components";

type HamburgerButtonProps = {
  $isOpen: boolean;
};

export const HamburgerButton = styled.button<HamburgerButtonProps>`
  cursor: pointer;
  width: 24px;
  height: 24px;
  position: relative;
  background: none;
  border: none;
  z-index: 10;
  transition: all 0.25s;
  display: none;
  & .hamburger-top,
  & .hamburger-middle,
  & .hamburger-bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 2px;
    background: #000000;
    transform: rotate(0);
    transition: all 0.5s;
  }
  .hamburger-middle {
    transform: translateY(7px);
  }
  .hamburger-bottom {
    transform: translateY(14px);
  }
  @media (max-width: 768px) {
    display: block;
  }

  ${(props) =>
    props.$isOpen &&
    css`
      & .hamburger-top {
        transform: rotate(45deg) translateY(6px) translateX(6px);
      }
      & .hamburger-middle {
        display: none;
      }
      & .hamburger-bottom {
        transform: rotate(-45deg) translateY(6px) translateX(-6px);
      }
    `}
`;

type MobileMenuProps = {
  $isOpen: boolean;
};

export const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  top: 10rem;
  right: 0;
  background-color: #ffffff;
  z-index: 1;
  color: black;
  width: 90%;
  height: 100%;
  padding: 30px;
  box-shadow: inset 0 4px 3px -3px rgb(0 0 0 / 10%),
    inset 0 4px 2px -2px rgb(0 0 0 / 7%);
  transition: all 0.3s;
  ul {
    line-height: 3;
    border-bottom: #777777 solid 1px;
    padding-bottom: 10px;
    padding-left: 0;
    margin-bottom: 30px;
  }
  button {
    margin-right: 1rem;
  }
  a {
    text-decoration: none;
    font-size: 20px;
  }
  a:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
  a:hover svg {
    fill: ${({ theme }) => theme.primaryColor};
  }
  div {
    margin-top: 20px;
  }
  div a {
    display: flex;
    align-items: center;
    font-size: 16px;
  }

  ${(props) =>
    !props.$isOpen &&
    css`
      transform: translateX(100%);
    `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
