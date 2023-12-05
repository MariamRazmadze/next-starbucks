import styled from "styled-components";

export const StarCost = styled.div`
  border: 1px solid "#cba258";
  border-radius: 6px;
  color: "#cba258";
  font-size: 14px;
  padding: 0 8px;
  width: fit-content;
`;

export const CardContentWrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
`;

export const CardImage = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  aspect-ratio: 1;

  @media (max-width: 768px) {
    width: 9rem;
    height: 9rem;
  }
`;

export const Starz = styled(StarCost)`
  color: #000000de;
  border: none;
  padding: 0;
  font-size: 16px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
