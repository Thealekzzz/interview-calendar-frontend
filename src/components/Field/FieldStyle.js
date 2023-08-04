import { styled } from "styled-components";
import { baseTheme } from "../../theme";

export const Container = styled.div`
  display: flex;

  background-color: white;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px; 
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    
    scrollbar-face-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;

    scrollbar-arrow-color: #888;
    scrollbar-track-color: #f1f1f1;
  }

`;

export const Time = styled.div`
  display: grid;
  grid-template-columns: 100px;
  grid-template-rows: repeat(24, ${baseTheme.sizes.hourHeight}px);
  justify-items: center;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  color: ${baseTheme.colors.textMinor};

  @media ${baseTheme.media.small} {
    & {
      grid-template-columns: 50px;
      font-size: 12px;

    }
  }
`;