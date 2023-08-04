import { styled } from "styled-components";
import { baseTheme } from "../../theme";

export const Container = styled.div`
  box-sizing: border-box;

  min-height: 80px;
  width: 100%;

  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  border-top: 1px solid ${baseTheme.colors.border};

  background-color: ${baseTheme.colors.bg};
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 4px;

  padding: 10px 20px;

  font-family: inherit;
  font-size: 20px;
  font-weight: 500;
  color: ${baseTheme.colors.primary};

  cursor: pointer;

  transition: ${baseTheme.transitions.bgc};

  &:hover {
    background-color: #00000008;
  }

  &:active {
    background-color: #00000012;
  }
`;