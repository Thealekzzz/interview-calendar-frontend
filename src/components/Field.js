import React from 'react';
import { styled } from 'styled-components';
import Grid from './Grid';
import { baseTheme } from '../theme';

const Container = styled.div`
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

const Time = styled.div`
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