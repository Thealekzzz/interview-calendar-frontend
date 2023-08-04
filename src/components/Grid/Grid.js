import React from 'react';
import { baseTheme } from '../../theme';

import { Container, HorizontalLine, VerticallLine, Task } from './GridStyle';

const Grid = ({
    tasksThisWeek,
    weekDays,
    setIsTooltipOpen,
    setSelectedTask,
    setHoveredTask,
    selectedTask,
  }) => {
  function getTopCoordByTime(time, hourHeight) {
    const hour = time.split(':')[0];
    return hour * hourHeight;
  }

  function getLeftCoordByDate(date) {
    const day = date.split('-')[2]
    const dayOfWeek = weekDays.find((weekDay) => weekDay.day === +day)?.dayOfWeek || 0;
    return 100 / 7 * dayOfWeek;
  }

  function handleMouseEnterTask() {
    setIsTooltipOpen(true);
    setHoveredTask(this);
  }

  function handleMouseLeaveTask() {
    setIsTooltipOpen(false);
    setHoveredTask({});
  }

  function handleTaskClick() {
    setSelectedTask(this);
    setHoveredTask(this);
  }

  return (
    <Container>
      {Array(24).fill(0).map((_, index) => (
        <HorizontalLine key={index} data-num={index} />
      ))}
      {Array(7).fill(0).map((_, index) => (
        <VerticallLine key={index} data-num={index} />
      ))}
      {tasksThisWeek.map((task) => (
        <Task 
          key={task.id} 
          data-chosen={selectedTask.id === task.id} 
          data-top={getTopCoordByTime(task.time, baseTheme.sizes.hourHeight)}
          data-left={getLeftCoordByDate(task.date)}
          onMouseEnter={handleMouseEnterTask.bind(task)}
          onMouseLeave={handleMouseLeaveTask.bind(task)}
          onClick={handleTaskClick.bind(task)}
        />
      ))}
    </Container>
  );
};

export default Grid;