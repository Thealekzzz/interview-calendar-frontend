import React from 'react';
import { styled } from 'styled-components';
import { getMonth, getWeekNumber } from '../utils/date';

import arrowIcon from '../images/arrow.svg';
import { baseTheme } from '../theme';

const Container = styled.div`
  border-bottom: 1px solid ${baseTheme.colors.border};
`;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;

  text-align: center;

  margin: 10px 0 5px;
  padding-left: 100px;
  height: 56px;

  @media ${baseTheme.media.small} {
    & {
      padding-left: 50px;

    }
  }
`;

const WeekDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`;

const DaySymbol = styled.p`
  font-size: 11px;
  font-weight: 800;
  color: ${baseTheme.colors.text};
  
  @media ${baseTheme.media.small} {
    font-size: 10px;
  }
`;

const DayDate = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props['data-active'] ? baseTheme.colors.primary : 'transparent',
    color: props['data-active'] ? 'white' : baseTheme.colors.text,
  }
}))`
  font-size: 20px;
  font-weight: 400;
  
  height: 32px;
  width: 32px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 50%;

  @media ${baseTheme.media.small} {
    height: 28px;
    width: 28px;
    
    font-size: 16px;
  }
`;

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px 0 130px;
  margin-bottom: 15px;
  
  @media ${baseTheme.media.small} {
    padding: 0 10px;
  }
`;

const Arrow = styled.div`
  width: 32px;
  height: 32px;

  background: url(${arrowIcon}) no-repeat center;
  background-color: transparent;

  border-radius: 50%;

  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    background-color: #eaeaea;
  }

  &:first-child {
    transform: rotate(180deg);
  }
`;

const CurrentWeek = styled.p`
  font-weight: 500;

  
  @media ${baseTheme.media.small} {    
    font-size: 14px;
  }
`;

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
