import styled from "styled-components";

export const StyledIngredienteButton = styled.div`
  border: 2px solid #f6a700;
  font-family: "Roboto";
  border-radius: 10px;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  background-color: ${({ isDisabled }) =>
    isDisabled ? "#f0f0f0" : "transparent"};
  color: ${({ isDisabled }) => (isDisabled ? "gray" : "black")};
  filter: ${({ isDisabled }) =>
    isDisabled ? "grayscale(100%) brightness(70%)" : "none"};
  pointer-events: ${({ isDisabled }) => (isDisabled ? "none" : "auto")};

  &:hover {
    background-color: ${({ isDisabled }) =>
      isDisabled ? "#f0f0f0" : "#f6a700"};
    color: ${({ isDisabled }) => (isDisabled ? "gray" : "white")};
  }
`;
