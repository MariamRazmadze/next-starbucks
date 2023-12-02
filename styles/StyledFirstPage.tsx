import styled from "styled-components";

export const FirstPageWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 768px) {
    display: block;
  }
`;
export const StyledCoffee = styled.li`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  width: 100%;
  img {
    width: 12rem !important;
    height: 12rem !important;
    border-radius: 50%;
    aspect-ratio: 1;
  }
  @media (max-width: 768px) {
    img {
      width: 9rem !important;
      height: 9rem !important;
    }
  }
`;
export const MenuContainer = styled.main`
  margin-left: 10%;
  max-width: 100rem;
  width: 80rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;
export const MenuDiv = styled.div`
  width: 100%;
`;

export const MenuH1 = styled.h1`
  padding-bottom: 3rem;
  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const MainTitle = styled(MenuH1)`
  font-weight: 700;
  font-size: 28px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Coffees = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.8rem;
  margin-top: 2rem;
  padding: 0;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CoffeeHeading = styled.h1`
  padding: 2rem 0;
  font-weight: 700;
  border-bottom: 1px solid lightgray;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
