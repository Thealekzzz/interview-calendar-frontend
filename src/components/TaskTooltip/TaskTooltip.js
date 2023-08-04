import React, { useEffect, useState } from 'react';
import { baseTheme } from '../../theme';

import { Container, Title, Time } from './TaskTooltipStyle';

const TaskTooltip = ({ isOpen, hoveredTask }) => {
  const handleMouseMove = (evt) => {
    let x, y;

    if (window.innerWidth > baseTheme.sizes.calendar) {
      x = Math.min(
        evt.clientX - (window.innerWidth - baseTheme.sizes.calendar) / 2 + 20,
        baseTheme.sizes.calendar - baseTheme.sizes.tooltip.width - 10,
      );
      y = evt.clientY + 20;

    } else {
      x = Math.min(
        evt.clientX + 20,
        window.innerWidth - baseTheme.sizes.tooltip.width - 10,
      );
      y = evt.clientY + 20;
    }

    setCoord([x, y]);
  }

  const [coord, setCoord] = useState([0, 0]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      setCoord([0, 0]);
    }
  }, [isOpen])

  return (
    <Container data-open={isOpen} data-coord={coord}>
      <Time>{hoveredTask.date} {hoveredTask.time}</Time>
      <Title>{hoveredTask.name}</Title>
    </Container>
  );
};

export default TaskTooltip;