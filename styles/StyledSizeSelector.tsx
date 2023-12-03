import styled from "styled-components";

export const SizeSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SizeOptions = styled.h2`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 1rem;
  position: relative;
  &::after {
    background: #d4e9e2;
    border-radius: 12px;
    bottom: 0;
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;
export const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SizeImage = styled.div`
  margin: 0;
`;

export const SizeName = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

export const SizeInOz = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
  margin: 1rem;
  appearance: none;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  padding: 2.5rem;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: background-color 1s ease, background-image 2s ease;
  &:checked {
    background-color: #d4e9e2;
    border: 2px solid #00754a;
  }
`;
