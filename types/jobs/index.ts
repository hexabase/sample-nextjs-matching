import dayjs from 'dayjs';
import { ReactNode } from 'react';

export type TJobDetail = {
  date: dayjs.Dayjs;
  price: number;
  start_time: string;
  end_time: string;
  title: string;
  des: string;
  jobDetail: string | ReactNode;
  jobContent: string;
  workplace: string;
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