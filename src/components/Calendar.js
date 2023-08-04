import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import { baseTheme } from '../theme';

import Header from './Header';
import Week from './Week';
import Field from './Field';
import Actions from './Actions';
import AddPopup from './AddPopup';
import { getWeekDays } from '../utils/date';

const Container = styled.div`
  max-width: ${baseTheme.sizes.calendar.maxWidth}px;
  height: 100vh;
  max-height: 100vh;

  background-color: #fafafa;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  position: relative;
`;

const Calendar = () => {
  function handleAddTask(values) {
    values.id = new Date().getTime();
    
    setTasks((prev) => {
      const curr = [...prev, values];
      localStorage.setItem('tasks', JSON.stringify(curr));
      return curr;
    });
  }

  const [offset, setOffset] = useState(0);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [tasksThisWeek, setTasksThisWeek] = useState([]);
  const [weekDays, setWeekDays] = useState(getWeekDays(offset));
  
  useEffect(() => {
    console.log(tasksThisWeek);
  }, [tasksThisWeek]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  useEffect(() => {
    setWeekDays(getWeekDays(offset));
  }, [offset]);

  useEffect(() => {
    const mondayDate = weekDays[0].date;
    const sundayDate = weekDays[6].date;

    setTasksThisWeek(tasks.filter((task) => task.date >= mondayDate && task.date <= sundayDate));
  }, [tasks, weekDays]);

  return (
    <Container>
      <Header setIsAddPopupOpen={setIsAddPopupOpen} />
      <Week offset={offset} setOffset={setOffset} weekDays={weekDays} />
      <Field tasksThisWeek={tasksThisWeek} weekDays={weekDays} />
      <Actions />
      <AddPopup isOpen={isAddPopupOpen} setIsOpen={setIsAddPopupOpen} onSubmit={handleAddTask}/>

    </Container>
  );
};

export default Calendar;