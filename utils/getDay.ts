import dayjs, { Dayjs } from 'dayjs';

export const getDay = (day: Dayjs) => {
  const daysOfWeek = dayjs.weekdaysShort();
  return daysOfWeek[dayjs(day, 'YYYY-MM-DD').day()];
};


export const getMonthDayCardJob = (day: Dayjs) => {
  const monthDayFormat = dayjs(day).format('MM/DD');

  return `${monthDayFormat}`;
};
