import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

import { TDateHoliday, TDateType } from '../../types/common';

dayjs.extend(localeData);

interface DateCardProps {
  date: TDateHoliday;
}

function getClassName(type: TDateType) {
  switch (type) {
    case 'holiday':
      return 'bg-pastelRed';
    case 'weekend':
      return 'bg-aquamarine';
    default:
      return null;
  }
}

export default function DateCard({ date }: DateCardProps) {
  const classNameOffDay = getClassName(date.dateType);

  return (
    <div
      className={`relative flex h-[51px] w-[51px] overflow-hidden rounded-[5px] border-[1px] border-antiFlashWhite text-center hover:shadow-md sm:h-14 sm:w-14 ${classNameOffDay}`}
    >
      <div className="relative h-[21.75px] w-[21.75px]  border-t-[21.75px] border-r-[21.75px] border-t-aquamarine border-r-transparent ">
        <p className="absolute left-[2px] top-[2px] w-[0.5rem] translate-y-[-1.5rem] text-[8px]">
          {date.month}
        </p>
      </div>
      <div className="absolute  flex h-[3.25rem] w-[3rem] flex-col items-center justify-center">
        <p className="text-[18px]">{date.day}</p>
        <p className="text-[10px]">{date.dayOfWeek}</p>
      </div>
    </div>
  );
}
