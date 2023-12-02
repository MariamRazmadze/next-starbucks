import styled from "styled-components";

export const StyledSideMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 125px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SideMenuHeader = styled.h2`
  font-weight: 19px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  margin-left: 1rem;
`;
