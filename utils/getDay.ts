import 'dayjs/locale/ja';

import dayjs, { Dayjs } from 'dayjs';

dayjs.locale('ja');
dayjs().locale('ja');

export const getDay = (day: Dayjs) => {
  const daysOfWeek = dayjs.weekdaysShort();
  return daysOfWeek[dayjs(day, 'YYYY-MM-DD').day()];
};

export const getMonthDayCardJob = (day: Dayjs) => {
  const monthDayFormat = dayjs(day).format('MM/DD');

  return `${monthDayFormat}`;
};

export const getYearMonthDayCardJob = (day: Dayjs) => {
  const monthDayFormat = dayjs(day).format('YYYY/MM/DD');

  return `${monthDayFormat}`;
};

export const getTimeCardJob = (day: Dayjs) => {
  const timeFormat = dayjs(day).format('hh:mm');

  return `${timeFormat}`;
};
