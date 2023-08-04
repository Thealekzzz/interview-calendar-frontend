import React from 'react';

import { Container, Button } from './ActionsStyle';


const Actions = ({ selectedTask, handleDeleteTask, handleTodayButtonClick }) => {
  return (
    <Container>
      <Button onClick={handleTodayButtonClick}>Today</Button>

      {selectedTask.id && (
        <Button onClick={handleDeleteTask}>Delete</Button>
      )}
    </Container>
  );
};

export default Actions;