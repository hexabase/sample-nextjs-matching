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

import { useDateSelectedContext } from '../../../context/DateSelectedContext';
import { TDateHoliday } from '../../../types/common';
import DateCard from '../../dateCard';
import { checkHoliday } from '../../helpers';

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
  const { setDateSelected } = useDateSelectedContext();

  const lastDayOfPrevMonth = dayjs().add(-1, 'day');
  const firstDayOfNext2Month = dayjs().add(2, 'month').startOf('month');

  const dateArr: TDateHoliday[] = [];

  for (let index = 0; index < 63; index++) {
    const dayAdd = dayjs(dayjs().add(index, 'day'), 'yyyy-mm-dd');

    const between = dayjs(dayAdd).isBetween(
      lastDayOfPrevMonth,
      firstDayOfNext2Month
    );

    between && dateArr.push(checkHoliday(dayAdd));
  }

  return (
    <div
      className="no-scrollbar flex h-[5rem] w-full snap-x flex-nowrap gap-2.5 overflow-x-scroll scroll-smooth"
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
        <div
          key={index}
          className="snap-start"
          onClick={() => {
            if (date.dateType === 'normal') {
              console.log('asfsbduc');
              setDateSelected(date);
            }
          }}
        >
          <div
            className={`${
              date.dateType === 'normal'
                ? 'cursor-pointer'
                : 'cursor-not-allowed'
            } relative h-[51px] w-[51px]  sm:h-14 sm:w-14`}
          >
            <DateCard date={date} />
          </div>
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
