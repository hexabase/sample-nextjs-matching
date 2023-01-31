import dayjs, { Dayjs } from 'dayjs';

export const getDay = (day: Dayjs) => {
  const daysOfWeek = dayjs.weekdaysShort();
  return daysOfWeek[dayjs(day, 'YYYY-MM-DD').day()];
};
