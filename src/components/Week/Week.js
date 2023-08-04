import React from 'react';
import { getMonth, getWeekNumber } from '../../utils/date';

import { Container, Days, WeekDay, DaySymbol, DayDate, Control, CurrentWeek, Arrow } from './WeekStyle';

const Week = ({ offset, setOffset, weekDays }) => {
  function handleNextWeekButtonClick() {
    setOffset(prev => prev + 1);
  }
  
  function handlePrevWeekButtonClick() {
    setOffset(prev => prev - 1);
  }

  return (
    <Container>
      <Days>
        {weekDays.map(day => (
          <WeekDay key={day.day}>
            <DaySymbol>{day.symbol}</DaySymbol>
            <DayDate data-active={offset === 0 && new Date().getDay() === day.day ? 1 : 0}>{day.day}</DayDate>
          </WeekDay>
        ))}
      </Days>
      <Control>
        <Arrow onClick={handlePrevWeekButtonClick} />
        <CurrentWeek>
          {getMonth(offset)} / w. {getWeekNumber(offset)}
        </CurrentWeek>
        <Arrow onClick={handleNextWeekButtonClick} />
      </Control>
    </Container>
  );
};

export default Week;
