import styled, { css } from "styled-components";

export const Item = styled.div<ItemProps>`
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    max-width: 200px;
  }

  ${(props) =>
    props.$isOpen &&
    css`
      ${ContentBox} {
        max-height: 100vh;
      }
      ${ArrowIcon} {
        transform: rotate(180deg);
      }
    `}
`;

export const AccordionOuterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export interface ItemProps {
  $isOpen: boolean;
}

export const ContentBox = styled.div`
  width: 100%;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
`;

export const TiTleText = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 1.5rem;
  @media (min-width: 1024px) {
    font-size: 18px;
    margin-bottom: 2rem;
  }
`;

export const ArrowIcon = styled.div`
  font-size: 24px;
  padding-top: 8px;
  padding-bottom: 0;
  margin-bottom: 1rem;
  transition: transform 0.2s ease-in;
  transform-origin: center;
`;

export const AccordionUl = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const AccordionLi = styled.li`
  padding: 1rem 0;
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.58);
    font-size: 14px;
    line-height: 24px;
  }
  &:hover a {
    color: #000;
  }
  @media (min-width: 1024px) {
    a {
      font-size: 16px;
    }
  }
`;

export const AccorionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1.9rem;

    ${Item} {
      max-width: 200px;

      &:not(.active) ${ContentBox} {
        max-height: none;
      }

      ${TitleContainer} ${ArrowIcon} {
        display: none;
      }
    }
  }
`;

export const StyledFooterContainer = styled.div`
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1), 0 -2px 2px rgba(0, 0, 0, 0.06),
    0 0 2px rgba(0, 0, 0, 0.07);
  width: 100%;
  padding: 4rem;
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const StyledIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  a {
    margin-right: 20px;
  }
`;
