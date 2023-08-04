import { styled } from "styled-components";
import { baseTheme } from "../../theme";

export const Wrapper = styled.div.attrs((props) => ({
  style: {
    opacity: props.open ? 1 : 0,
    visibility: props.open ? 'visible' : 'hidden',
  }
}))`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #00000080;

  z-index: ${baseTheme.order.modal};
  
  transition: 
    ${baseTheme.transitions.opacity},
    ${baseTheme.transitions.visibility};
`;

export const Popup = styled.div.attrs((props) => ({
  style: {
    transform: props.open ? 'translate(0)' : 'translateY(10px)',
  }
}))`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 30px;

  max-width: 100%;
  width: 400px;
  min-height: 300px;

  margin: 20px;
  padding: 20px;

  border-radius: 10px;
  background-color: white;

  transition: ${baseTheme.transitions.transform};
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;

  font-size: 14px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;

  border-radius: 3px;
  border: 2px solid #ccc;
  
  outline: none;

  &:focus {
    border-color: ${baseTheme.colors.accent};
  }
`;

export const Button = styled.button`
  background-color: ${baseTheme.colors.primary}dd;
  padding: 10px 20px;

  font-weight: bold;
  font-size: 14px;
  font-family: inherit;
  letter-spacing: 1px;
  color: white;

  border: none;
  outline: none;

  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background-color: ${baseTheme.colors.primary};

  }

  &:disabled {
    background-color: #ddd;
    cursor: auto;
  }
`;