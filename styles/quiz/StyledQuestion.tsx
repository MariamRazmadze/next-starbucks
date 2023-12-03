import styled from "styled-components";

export const QuestionWrapper = styled.div`
  background-color: #1e3932;
  height: 100vh;
  color: white;
  width: 100%;
`;
export const StyledQuestion = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5rem;
  padding-left: 10rem;
  gap: 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 4rem;
  }
`;

export const QuestionBlock = styled.div`
  width: 50%;

  h3 {
    margin-bottom: 2.375rem;
    font-size: 38px;
  }
  p {
    opacity: 0.5;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
  }
`;
