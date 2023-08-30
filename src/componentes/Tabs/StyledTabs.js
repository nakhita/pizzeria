import styled from "styled-components";

export const StyledTabButtons = styled.div`
  display: flex;
`;

export const StyledTabButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  &.active-tab {
    background-color: #f0f0f0;
  }
`;
export const StyledTabSubContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
`;

export const StyledTabContent = styled.div`
  transition: opacity 0.3s;
  opacity: 1;
`;
