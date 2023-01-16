import dayjs from 'dayjs';

export type TJobDetail = {
  date: dayjs.Dayjs;
  price: number;
  time_start: string;
  time_end: string;
};

export type TDetailCardProps = {
  handleOpenModal: () => void;
  job: {
    date: dayjs.Dayjs;
    price: number;
    time_start: string;
    time_end: string;
  };
};

export type TJobModalProps = {
  handleCloseModal: () => void;
  job: {
    date: dayjs.Dayjs;
    price: number;
    time_start: string;
    time_end: string;
  };
};
