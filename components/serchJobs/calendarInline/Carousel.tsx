import {
  Dispatch,
  ForwardedRef,
  forwardRef,
  ReactNode,
  SetStateAction,
} from 'react';

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import localeData from 'dayjs/plugin/localeData';

import * as holiday_jp from '@holiday-jp/holiday_jp';

import { TDateHoliday } from '../../../types/common';
import DateCard from '../../dateCard';

dayjs.extend(localeData);

dayjs.extend(isBetween);

const ForwardedCarousel = ({
  forwardedRef,
  setDisabledPrev,
  setDisabledNext,
}: {
  forwardedRef: ForwardedRef<HTMLDivElement>;
  setDisabledPrev: Dispatch<SetStateAction<boolean>>;
  setDisabledNext: Dispatch<SetStateAction<boolean>>;
}) => {
  const weekDays = dayjs.weekdaysShort();
  const lastDayOfPrevMonth = dayjs().add(-1, 'day');
  const firstDayOfNext2Month = dayjs().add(2, 'month').startOf('month');

  const holidays = holiday_jp.between(
    new Date(lastDayOfPrevMonth.format('YYYY-MM-DD')),
    new Date(firstDayOfNext2Month.format('YYYY-MM-DD'))
  );

  const dateArr: TDateHoliday[] = [];

  for (let index = 0; index < 63; index++) {
    const dayAdd = dayjs(dayjs().add(index, 'day'), 'yyyy-mm-dd');

    const between = dayjs(dayAdd).isBetween(
      lastDayOfPrevMonth,
      firstDayOfNext2Month
    );

    if (between) {
      const dayInWeek = dayjs(dayAdd, 'yyyy-mm-dd').day();

      const dateHoliday: TDateHoliday = {
        date: dayAdd,
        nameHoliday: null,
        dateType: 'normal',
        dayOfWeek: weekDays[dayInWeek],
        day: dayjs(dayAdd, 'yyyy-mm-dd').get('D'),
        month: dayjs(dayAdd, 'yyyy-mm-dd').get('month') + 1,
      };

      const isHoliday = holidays.find(
        (holiday) =>
          dayjs(holiday.date).format('YYYY-MM-DD') ===
          dayjs(dayAdd).format('YYYY-MM-DD')
      );

      if (isHoliday) {
        dateArr.push({
          ...dateHoliday,
          nameHoliday: isHoliday.name,
          dateType: 'holiday',
        });
      } else {
        dateArr.push({
          ...dateHoliday,
          dateType: dayInWeek === 6 ? 'weekend' : 'normal',
        });
      }
    }
  }

  return (
    <div
      className="no-scrollbar flex w-full snap-x flex-nowrap gap-2.5 overflow-x-scroll scroll-smooth"
      ref={forwardedRef}
      onScroll={(event) => {
        if (
          event.currentTarget.scrollWidth -
            event.currentTarget.scrollLeft -
            event.currentTarget.clientWidth <
          2
        ) {
          setDisabledNext(true);
        } else {
          setDisabledNext(false);
        }

        if (event.currentTarget.scrollLeft === 0) {
          setDisabledPrev(true);
        } else {
          setDisabledPrev(false);
        }
      }}
    >
      {dateArr.map((date, index) => (
        <div key={index} className="snap-start">
          <DateCard date={date} />
        </div>
      ))}
    </div>
  );
};

interface Props {
  children?: ReactNode;
  setDisabledPrev: Dispatch<SetStateAction<boolean>>;
  setDisabledNext: Dispatch<SetStateAction<boolean>>;
}
export type Ref = HTMLDivElement;

const Carousel = forwardRef<Ref, Props>((props, ref) => {
  return (
    <ForwardedCarousel
      forwardedRef={ref}
      setDisabledPrev={props.setDisabledPrev}
      setDisabledNext={props.setDisabledNext}
    />
  );
});

Carousel.displayName = 'Carousel';

export default Carousel;
