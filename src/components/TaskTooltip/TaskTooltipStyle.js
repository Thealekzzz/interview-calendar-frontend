import { styled } from "styled-components";
import { baseTheme } from "../../theme";

export const Container = styled.div.attrs((props) => ({
  style: {
    left: props['data-coord'][0] || 0,
    top: props['data-coord'][1] || 0,
    opacity: props['data-open'] ? 1 : 0,
    visibility: props['data-open'] ? 'visible' : 'hidden',
  },
}))`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 2px;

  max-width: 100%;
  width: ${baseTheme.sizes.tooltip.width}px;
  min-height: ${baseTheme.sizes.tooltip.height}px;

  padding: 10px;

  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 20px #00000020;

  position: absolute;

  z-index: ${baseTheme.order.modal};

  transition: 
    opacity .4s cubic-bezier(0.075, 0.82, 0.165, 1),
    visibility .4s cubic-bezier(0.075, 0.82, 0.165, 1);

`;

export const Title = styled.h2`
  font-size: 14px;
`;

export const Time = styled.p`
  font-size: 10px;
`;