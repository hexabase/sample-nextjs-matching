import { Dayjs } from 'dayjs';

const dateTypes = ['holiday', 'weekend', 'normal'] as const;
export type TDateType = typeof dateTypes[number];

export type TDateHoliday = {
  date: Dayjs;
  nameHoliday: string | null;
  dateType: TDateType;
  dayOfWeek: string;
  day: number;
  month: number;
};

export type TJob = {
  id: string;
  imgUrl: string;
  jobName: string;
  des: string;
  date: string;
  startTime: string;
  endTime: string;
  tags: string[];
  hourlyWage: number;
};
