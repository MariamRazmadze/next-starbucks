import styled from "styled-components";
interface StyledCoffeeProps {
  $unavailable: boolean;
}

export const StyledCoffee = styled.li<StyledCoffeeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  width: 100%;
  cursor: pointer;
  color: ${({ $unavailable }) => ($unavailable ? "#888" : "inherit")};

  img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    aspect-ratio: 1;
    filter: ${({ $unavailable }) => ($unavailable ? "grayscale()" : "none")};
    opacity: ${({ $unavailable }) => ($unavailable ? "0.8" : "1")};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 0.4rem 0;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    text-align: center;
  }

  p {
    font-size: 1.4rem;
    font-weight: 300;
    font-style: italic;
    margin-bottom: auto;
  }

  span {
    display: block;
    font-size: 1.6rem;
  }
`;
