import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import localeData from 'dayjs/plugin/localeData';

import * as holiday_jp from '@holiday-jp/holiday_jp';

import { TDateHoliday } from '../../types/common';

dayjs.extend(localeData);
dayjs.extend(isBetween);

export const getDayOfWeek = (date: string) => {
  const weekDays = dayjs.weekdaysShort();

  const dayInWeek = dayjs(date, 'yyyy-mm-dd').day();

  return weekDays[dayInWeek];
};

export const checkHoliday = (dayCheck: string | Dayjs): TDateHoliday => {
  const dayFormat = dayjs(dayCheck, 'yyyy-mm-dd');
  const weekDays = dayjs.weekdaysShort();
  const lastDayOfPrevMonth = dayjs(dayFormat).add(-1, 'day');
  const firstDayOfNext2Month = dayjs(dayFormat)
    .add(2, 'month')
    .startOf('month');

  const holidays = holiday_jp.between(
    new Date(lastDayOfPrevMonth.format('YYYY-MM-DD')),
    new Date(firstDayOfNext2Month.format('YYYY-MM-DD'))
  );

  const dayInWeek = dayjs(dayFormat, 'yyyy-mm-dd').day();

  const dateHoliday: TDateHoliday = {
    date: dayFormat,
    nameHoliday: null,
    dateType: 'normal',
    dayOfWeek: weekDays[dayInWeek],
    day: dayjs(dayFormat, 'yyyy-mm-dd').get('D'),
    month: dayjs(dayFormat, 'yyyy-mm-dd').get('month') + 1,
  };

  const isHoliday = holidays.find(
    (holiday) =>
      dayjs(holiday.date).format('YYYY-MM-DD') ===
      dayjs(dayFormat).format('YYYY-MM-DD')
  );

  if (isHoliday) {
    return {
      ...dateHoliday,
      nameHoliday: isHoliday.name,
      dateType: 'holiday',
    };
  } else {
    return {
      ...dateHoliday,
      dateType: dayInWeek === 6 ? 'weekend' : dayInWeek === 0 ? 'holiday' : 'normal',
    };
  }
};
