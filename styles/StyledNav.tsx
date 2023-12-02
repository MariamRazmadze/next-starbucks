import styled from "styled-components";

export const Nav = styled.nav`
  list-style: none;
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  padding: 0 4rem;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%),
    0 0 2px rgb(0 0 0 /7%);
  font-size: 14px;
`;

export const StyledNavbarBrand = styled.div`
  @media (max-width: 768px) {
    img {
      width: 40px;
    }
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLeft = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  text-transform: uppercase;
  margin-bottom: 0;
  flex: 1;
  margin-left: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarRight = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;

  img {
    margin-right: 10px;
  }
  li:first-child a {
    display: flex;
    align-items: center;
  }
  li:nth-child(2) {
    margin: 0 5px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavListItem = styled.li`
  margin: 0 15px;
  font-weight: 700;
  height: 100%;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
  a {
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
    padding-top: 7px;
    border-bottom: 7px solid transparent;
  }
  a:hover {
    color: #006241;
  }
  &:hover {
    svg {
      fill: #006241;
    }
  }
  & .active {
    border-bottom-color: #006241;
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;

export const NavIcon = styled.span`
  font-size: 22px;
`;
