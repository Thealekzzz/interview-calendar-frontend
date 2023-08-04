import { styled } from "styled-components";
import { baseTheme } from "../../theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

export const HorizontalLine = styled.div.attrs((props) => ({
  style: {
    top: baseTheme.sizes.hourHeight * props['data-num'] + baseTheme.sizes.hourHeight / 2,
  }
}))`
  height: 1px;
  width: 100%;

  background-color: ${baseTheme.colors.lines};

  position: absolute;
`;

export const VerticallLine = styled.div.attrs((props) => ({
  style: {
    left: 100 / 7 * props['data-num'] + '%',
  }
}))`
  height: ${baseTheme.sizes.hourHeight * 25}px;
  width: 1px;
  
  background-color: ${baseTheme.colors.lines};

  position: absolute;
`;

export const Task = styled.div.attrs((props) => ({
  style: {
    top: props['data-top'],
    left: `${props['data-left']}%`,
    backgroundColor: props['data-chosen'] ? `${baseTheme.colors.task}ff` : '',
  },
}))`
  display: flex;
  height: ${baseTheme.sizes.hourHeight}px;
  width: ${100 / 7}%;

  background-color: ${baseTheme.colors.task}66;

  z-index: ${baseTheme.order.task};
  position: absolute;
  transform: translateY(${baseTheme.sizes.hourHeight / 2}px) scale(.9);
  
  transition: background-color .2s;
  cursor: pointer;

  &:hover {
    background-color: ${baseTheme.colors.task}88;
  }

  &:active {
    background-color: ${baseTheme.colors.task }cc;
  }
`;