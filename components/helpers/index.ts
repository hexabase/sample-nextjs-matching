import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(localeData);

export const getDayOfWeek = (date: string) => {
  const weekDays = dayjs.weekdaysShort();

  const dayInWeek = dayjs(date, 'yyyy-mm-dd').day();

  return weekDays[dayInWeek];
};
