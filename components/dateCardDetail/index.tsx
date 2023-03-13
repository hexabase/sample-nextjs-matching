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

export default function DateCardDetail({ date }: DateCardProps) {
  const classNameOffDay = getClassName(date.dateType);

  return (
    <div
      className={`flex h-full w-[51px] sm:w-20 rounded-[5px] border-[1px] border-antiFlashWhite text-center hover:shadow-md ${classNameOffDay}`}
    >
      <div className="absolute h-[21.75px] w-[21.75px] border-t-[21.75px] border-r-[21.75px] border-t-aquamarine border-r-transparent">
        <p className="absolute left-[2px] top-[2px] w-[0.5rem] translate-y-[-1.5rem] text-[8px] sm:text-sm">
          {date.month}
        </p>
      </div>
      <div className="flex h-[3.25rem] w-full text-center flex-col items-center justify-center sm:h-20 sm:w-20">
        <p className="text-[18px] sm:text-4xl">{date.day}</p>
        <p className="text-[10px] sm:text-sm">{date.dayOfWeek}</p>
      </div>
    </div>
  );
}
