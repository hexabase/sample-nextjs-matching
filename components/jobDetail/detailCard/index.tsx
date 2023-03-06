'use client';

import Image from 'next/image';

import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

import { ClockIcon, CurrencyYenIcon } from '@heroicons/react/24/outline';

import { TFieldValueConvert } from '../../../types';
import { getTimeCardJob, getYearMonthDayCardJob } from '../../../utils/getDay';
import DateCardDetail from '../../dateCardDetail';
import { checkHoliday, getDayOfWeek } from '../../helpers';
import Apply from '../apply';

dayjs.extend(localeData);

dayjs().localeData();

type TDetailCardProps = {
  handleOpenModal: () => void;
  job?: TFieldValueConvert;
};

export default function DetailCard({ handleOpenModal, job }: TDetailCardProps) {
  const dateHoliday = checkHoliday(job?.start_work_date);

  return (
    <div className="flexCol top-20 w-full md:sticky md:block md:h-[581px] md:w-96 md:rounded-[5px] md:bg-culturedF4 md:shadow-2xl lg:w-[25rem]">
      <div className="md-h-[18rem] relative h-[17.5rem] w-full">
        <Image src="/images/img1.png" alt="image1" fill />
      </div>
      <div className="container-responsive md:mx-0 md:mt-8 md:px-5">
        <div className="gap-3 pt-5 pb-12 font-bold md:hidden">
          <p className="text-[10px]"> {job?.job_title}</p>
          <p className="text-base"> {job?.sub_title}</p>
        </div>

        <div className="flex gap-x-4 rounded-xl border-2 border-[aquamarine] bg-cultured px-4 py-3 md:mb-5 md:h-[7.25rem]">
          <div className="h-[51px] w-[51px] sm:h-20 sm:w-20">
            <DateCardDetail date={dateHoliday} />
          </div>
          <div className="flexCol text-md font-bold md:text-lg">
            <div className="flex items-stretch gap-1.5">
              <ClockIcon className="h-[18px] w-[18px] text-aquamarine md:mt-1" />
              <div className="flex md:block">
                <p>
                  {getYearMonthDayCardJob(dayjs(job?.start_work_date))}(
                  {getDayOfWeek(job?.start_work_date)})
                </p>
                <p className="font-normal">{`${getTimeCardJob(
                  dayjs(job?.start_work_date)
                )}~${getTimeCardJob(dayjs(job?.end_work_date))}`}</p>
              </div>
            </div>

            <div className="flexItemsCenter gap-1.5">
              <CurrencyYenIcon className="h-[18px] w-[18px] text-aquamarine" />
              <p>
                {`${job?.hourly_wage.toLocaleString()}`}
                <span className="font-normal">円/1時間</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flexCenter fixed bottom-0 left-0 z-30 w-full flex-col bg-white py-7 sm:hidden md:static md:flex md:rounded-[5px] md:bg-culturedF4 md:pt-0">
          <Apply handleOpenModal={handleOpenModal} />
        </div>
      </div>
    </div>
  );
}
