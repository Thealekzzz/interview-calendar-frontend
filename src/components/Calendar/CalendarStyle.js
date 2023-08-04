import { styled } from "styled-components";
import { baseTheme } from "../../theme";

export const Container = styled.div`
  max-width: ${baseTheme.sizes.calendar}px;
  height: 100vh;
  max-height: 100vh;

  background-color: ${baseTheme.colors.bg};

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  position: relative;
`;