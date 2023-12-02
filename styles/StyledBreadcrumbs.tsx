import styled from "styled-components";

export const BreadCrumbWrapper = styled.div`
  position: sticky !important;
  top: 0;
  z-index: 3;
  padding: 1.5rem;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #dbd9d7;
  background-color: #f9f9f9;
  padding-left: 145px;
  width: 100vw;
  margin: 0;
  margin-top: -4.8rem;
  box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.14);
  ol {
    margin-bottom: 0 !important;
  }
  a {
    text-decoration: none;
  }
  .breadcrumb-item.active {
    font-weight: 700;
    color: black;
  }
  @media (max-width: 768px) {
    padding-left: 2rem;
  }
`;
