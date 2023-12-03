import styled from "styled-components";

export const StyledCityList = styled.ul`
  width: 100%;
  height: 65vh;
  list-style: none;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledSearch = styled.input`
  border: none;
  outline: none;
  font-size: 24px;
  margin: 2rem;
  width: 100%;
  padding: 1rem 2rem;
  border-bottom: 1px solid #00000094;
  text-overflow: ellipsis;
  white-space: nowrap;
  background-image: url("/search.svg");
  background-position: center right 5%;
  background-repeat: no-repeat;
`;
