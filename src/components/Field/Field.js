import React from 'react';
import Grid from '../Grid/Grid';

import { Container, Time } from './FieldStyle';

const times = Array(24).fill(0).map((_, index) => `${index < 10 ? '0' : ''}${index}:00`);

const Field = ({ tasksThisWeek, weekDays, setIsTooltipOpen, setSelectedTask, setHoveredTask, selectedTask }) => {
  return (
    <Container>
      <Time>
        {times.map((time) => (
          <p key={time}>{time}</p>
        ))}
      </Time>
      <Grid 
        tasksThisWeek={tasksThisWeek} 
        weekDays={weekDays} 
        setIsTooltipOpen={setIsTooltipOpen} 
        setSelectedTask={setSelectedTask}
        setHoveredTask={setHoveredTask}
        selectedTask={selectedTask}
      />
    </Container>
  );
};

export default Field;