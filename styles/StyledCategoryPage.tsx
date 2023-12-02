import styled from "styled-components";
export const MenuContainer = styled.main`
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const MenuDiv = styled.div`
  width: 100%;
`;

export const MenuH2 = styled.h2`
  color: #8f797d;
  font-weight: 600;
  padding: 2px 2rem;
`;

export const MenuH1 = styled.h1`
  padding: 1rem 2rem;
`;

export const MainTitle = styled(MenuH1)`
  font-size: 28px;
`;

export const MenuP = styled.p`
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.6;
  width: 80%;
`;

export const Coffees = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4.8rem;
  margin-top: 2rem;
  padding: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CoffeeHeading = styled.h1`
  padding: 2rem;
  border-bottom: 1px solid lightgray;
`;
