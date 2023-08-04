import React, { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Week from '../Week/Week';
import Field from '../Field/Field';
import Actions from '../Actions/Actions';
import AddPopup from '../AddPopup/AddPopup';
import TaskTooltip from '../TaskTooltip/TaskTooltip';

import { getWeekDays } from '../../utils/date';
import { Container } from './CalendarStyle';

const Calendar = () => {
  function handleAddTask(task) {
    task.id = new Date().getTime();
    
    setTasks((prev) => {
      const curr = [...prev, task];
      localStorage.setItem('tasks', JSON.stringify(curr));
      return curr;
    });
  }

  function handleDeleteTask() {
    setTasks(prev => {
      const curr = prev.filter((task) => task.id !== selectedTask.id);
      localStorage.setItem('tasks', JSON.stringify(curr));
      return curr;
    });
    setSelectedTask({});
  }

  function handleTodayButtonClick() {
    setSelectedTask({});
    setIsTooltipOpen(false);
    setOffset(0);
  }

  const [offset, setOffset] = useState(0);
  const [weekDays, setWeekDays] = useState(getWeekDays(offset));

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [tasksThisWeek, setTasksThisWeek] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});
  const [hoveredTask, setHoveredTask] = useState({});

  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

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
      <Field 
        tasksThisWeek={tasksThisWeek} 
        weekDays={weekDays} 
        setIsTooltipOpen={setIsTooltipOpen} 
        setSelectedTask={setSelectedTask}
        setHoveredTask={setHoveredTask}
        selectedTask={selectedTask}
      />
      <Actions selectedTask={selectedTask} handleDeleteTask={handleDeleteTask} handleTodayButtonClick={handleTodayButtonClick} />

      <AddPopup isOpen={isAddPopupOpen} setIsOpen={setIsAddPopupOpen} onSubmit={handleAddTask} />
      <TaskTooltip isOpen={isTooltipOpen} hoveredTask={hoveredTask} />

    </Container>
  );
};

export default Calendar;