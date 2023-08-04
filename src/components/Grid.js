import React from 'react';
import { styled } from 'styled-components';
import { baseTheme } from '../theme';

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const HorizontalLine = styled.div`
  height: 1px;
  width: 100%;

  background-color: #eee;

  position: absolute;
  top: ${(props) => baseTheme.sizes.hourHeight * props['data-num'] + baseTheme.sizes.hourHeight / 2}px;
`;

const VerticallLine = styled.div`
  height: ${baseTheme.sizes.hourHeight * 25}px;
  width: 1px;
  
  background-color: #eee;

  position: absolute;
  left: ${(props) => 100 / 7 * props['data-num']}%;
`;

const Task = styled.div.attrs((props) => ({
  style: {
    top: props['data-top'],
    left: `${props['data-left']}%`,
    backgroundColor: props['data-chosen'] ? '#4488aaff' : '',
  },
}))`
  display: flex;
  height: ${baseTheme.sizes.hourHeight}px;
  width: ${100 / 7}%;

  background-color: #4488aa66;

  z-index: 10;
  position: absolute;
  transform: translateY(${baseTheme.sizes.hourHeight / 2}px) scale(.9);
  
  transition: background-color .2s;
  cursor: pointer;

  &:hover {
    background-color: #4488aa88;
  }

  &:active {
    background-color: #4488aacc;
  }
`;

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
    setHoveredTask(this)
  }

  function handleMouseLeaveTask() {
    setIsTooltipOpen(false);
    setHoveredTask({})
  }

  function handleTaskClick() {
    setSelectedTask(this);
    console.log(this)
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