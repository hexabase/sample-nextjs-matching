import dayjs from 'dayjs';

export type TJobDetail = {
  date: dayjs.Dayjs;
  price: number;
  time_start: string;
  time_end: string;
};
