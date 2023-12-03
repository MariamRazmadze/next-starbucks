import styled from "styled-components";
export const StyledSidebar = styled.div`
  flex-basis: 56rem;
  background-color: white;
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 4.8rem);

  @media (max-width: 768px) {
    flex-basis: 100%;
    max-height: 50%;
    overflow: auto;
  }
`;
