import { Button } from "@/styles/StyledAuth";
import styled from "styled-components";

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  align-items: flex-start;
  height: 100%;
  padding: 20% 10%;
  gap: 2rem;
`;

export const EmptyHeader = styled.h1`
  font-size: 36px;
  font-weight: 400;
  color: #000000de;
`;

export const EmptyText = styled.h3`
  color: #00000094;
  font-size: 19px;
`;

export const EmptyContent = styled.div`
  padding-left: 4rem;
  padding-top: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const EmptyButton = styled(Button)`
  min-width: 35px;
  min-height: 35px;
  font-weight: 700;
  padding: 7px 16px;
  font-size: 16px;
  color: #00754a;
  background-color: white;
`;
