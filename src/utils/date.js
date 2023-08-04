export function getMondayDate(weekOffset) {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const diff = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
  
  return new Date(today.setDate(diff) + weekOffset * 1000 * 60 * 60 * 24 * 7);
}

export function getWeekDays(weekOffset) {
  const symbols = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const mondayDate = getMondayDate(weekOffset);
  const result = [];

  symbols.forEach((symbol, index) => {
    const month = `${mondayDate.getMonth() + 1 < 10 ? '0' : ''}${mondayDate.getMonth() + 1}`;
    const day = `${mondayDate.getDate() < 10 ? '0' : ''}${mondayDate.getDate()}`;

    result.push({ 
      symbol,
      day: mondayDate.getDate(),
      date: `${mondayDate.getFullYear()}-${month}-${day}`,
      dayOfWeek: index,
    });
    mondayDate.setDate(mondayDate.getDate() + 1);
  });

  return result;
}

export function getMonth(weekOffset) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const today = new Date(new Date().getTime() + weekOffset * 1000 * 60 * 60 * 24 * 7);

  return `${months[today.getMonth()]} ${today.getFullYear()}`;
}

export function getWeekNumber(weekOffset) {
  const today = new Date(new Date().getTime() + weekOffset * 1000 * 60 * 60 * 24 * 7);

  const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  const pastDaysOfYear = (today - firstDayOfYear) / (1000 * 60 * 60 * 24);

  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}