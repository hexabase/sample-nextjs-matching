'use client';

import Image from 'next/image';

import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

import { ClockIcon, CurrencyYenIcon } from '@heroicons/react/24/outline';

import { TJobDetail } from '../../../types/jobs';
import { getDay } from '../../../utils/getDay';
import Apply from '../apply';

dayjs.extend(localeData);

dayjs().localeData();

interface DetailCardProps {
  job: TJobDetail;
}

export default function DetailCard({ job }: DetailCardProps) {
  const { date, start_time, end_time, price, title, des } = job;

  return (
    <div className="flexCol top-20 w-full md:sticky md:block md:h-[581px] md:w-96 lg:w-[25rem] md:rounded-[5px] md:bg-culturedF4 md:shadow-2xl">
      <div className="md-h-[18rem] relative h-[17.5rem] w-full">
        <Image src="/images/img1.png" alt="image1" fill />
      </div>
      <div className="container-responsive md:mx-0 md:mt-8 md:px-5">
        <div className="gap-3 pt-5 pb-12 font-bold md:hidden">
          <p className="text-[10px]">{title}</p>
          <p className="text-base">{des}</p>
        </div>

        <div className="flex rounded-xl border-2 border-[aquamarine] bg-cultured px-4 py-3 md:mb-5 md:h-[7.25rem]">
          <div className="md:text-md relative mr-5 h-14 w-14 rounded-md bg-antiFlashWhite px-3 py-3 md:h-20 md:w-20">
            <div className="flex flex-col items-center font-normal ">
              <p className="text-lg">21</p>
              <p className="text-[10px]	">水</p>
            </div>
            <p className="md:text-md absolute top-0 left-0 h-5 w-5 bg-aquamarine p-1 text-[8px] md:h-6 md:w-6">
              12
            </p>
          </div>

          <div className="flexCol text-md font-bold md:text-lg">
            <div className="flexItemsCenter gap-1.5">
              <ClockIcon className="h-[18px] w-[18px] text-aquamarine" />
              <div className="flex gap-1.5 md:flex-col">
                <p>{`${date.format('YYYY/MM/DD')}(${getDay(date)})`}</p>
                <p className="font-normal">{`${start_time}~${end_time}`}</p>
              </div>
            </div>

            <div className="flexItemsCenter gap-1.5">
              <CurrencyYenIcon className="h-[18px] w-[18px] text-aquamarine" />
              <p>
                {`${price.toLocaleString()}`}
                <span className="font-normal">円/1時間</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flexCenter fixed bottom-0 left-0 z-30 w-full flex-col bg-white py-7 sm:hidden md:static md:flex md:rounded-[5px] md:bg-culturedF4 md:pt-0">
          <Apply />
        </div>
      </div>
    </div>
  );
}
