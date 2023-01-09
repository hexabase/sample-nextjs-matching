'use client';
import dayjs, { Dayjs } from 'dayjs';

interface DateCardProps {
  date: Dayjs;
  dateType: 'normal' | 'selected' | 'dayOff';
}

export default function DateCard({ date, dateType }: DateCardProps) {
  const dayOfWeeks = ['日', '月', '火', '水', '木', '金', '土'];
  const dayOffClass =
    dateType === 'dayOff'
      ? 'bg-pastelRed'
      : dateType === 'selected'
      ? 'bg-aquamarine'
      : null;

  const month = dayjs(date, 'yyyy-mm-dd').get('month') + 1;
  const day = dayjs(date, 'yyyy-mm-dd').get('D');
  const dayOfWeek = dayjs(date, 'yyyy-mm-dd').day();

  return (
    <div
      className={`flex h-[51px] w-[51px] overflow-hidden  rounded-[5px] border-[1px] border-antiFlashWhite text-center ${dayOffClass}`}
    >
      <div className="relative h-[21.75px] w-[21.75px]  border-t-[21.75px] border-r-[21.75px] border-t-aquamarine border-r-transparent ">
        <p className="absolute left-[2px] top-[2px] w-[0.5rem] translate-y-[-1.5rem] text-[8px]">
          {month}
        </p>
      </div>
      <div className="absolute  flex h-[3.25rem] w-[3rem] flex-col items-center justify-center">
        <p className="text-[18px]">{day}</p>
        <p className="text-[10px]">{dayOfWeeks[dayOfWeek]}</p>
      </div>
    </div>
  );
}
