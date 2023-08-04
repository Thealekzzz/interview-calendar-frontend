import { styled } from "styled-components";
import { baseTheme } from "../../theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: white;
  border-bottom: 1px solid ${baseTheme.colors.border};

  min-height: ${baseTheme.sizes.header.height.default}px;
  padding: 0 30px;

  @media ${baseTheme.media.small} {
    & {
      min-height: ${baseTheme.sizes.header.height.small}px;
    }
  }
`;

export const Title = styled.h1`
  letter-spacing: -1px;
  font-weight: 200;

  @media ${baseTheme.media.small} {
    font-size: 24px;
  }
`;

export const AddButton = styled.button`
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border-radius: 50px;
  border: none;

  cursor: pointer;
  transition: background-color .2s;

  &:hover{
    background-color: #f1f1f1;
  }

`;