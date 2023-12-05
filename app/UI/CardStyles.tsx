import styled from "styled-components";

export const CardStyles = styled.div`
  padding: 1rem;
  box-shadow: 0px 0px 0.5px 0px #00000024, 0px 1px 1px 0px #0000003d;
  border-radius: 14px;
  background-color: white;
  margin: 2rem;
  max-width: 500px;
  @media (max-width: 768px) {
    max-width: none;
    width: 100%;
    margin: 1rem 0;
  }
`;
