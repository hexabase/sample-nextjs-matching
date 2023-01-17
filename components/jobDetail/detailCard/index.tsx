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
    <div className="flexCol md:sticky md:top-20 md:h-[518px] md:rounded-[5px] md:bg-[#F4F4F4] md:shadow-2xl">
      <div className="relative h-[17.5rem] w-full">
        <Image src="/images/img1.png" alt="image1" fill />
      </div>
      <div className="container-responsive">
        <div className="md:px-4">
          <div className="gap-3 pt-5 pb-12 font-bold sm:hidden">
            <p className="text-[10px]">{title}</p>
            <p className="text-base">{des}</p>
          </div>

          <div className="flex rounded-xl border-2 border-[aquamarine] bg-cultured px-4 py-3 md:h-36">
            <div className="relative mr-5 h-14 w-14 rounded-md bg-antiFlashWhite px-3 py-3 md:h-20 md:w-20 md:text-sm">
              <div className="flex flex-col items-center font-normal ">
                <p className="text-lg">21</p>
                <p className="text-[10px]	">水</p>
              </div>
              <p className="absolute top-0 left-0 h-5 w-5 bg-aquamarine p-1 text-[8px] md:h-6 md:w-6 md:text-sm">
                12
              </p>
            </div>

            <div className="flexCol text-sm font-bold">
              <div className="flexItemsCenter gap-1.5">
                <ClockIcon className="h-[18px] w-[18px] text-aquamarine" />
                <div className="flex gap-1.5 md:flex-col">
                  <p>{`${date.format('YYYY/MM/DD')}(${getDay(date)})`}</p>
                  <p className="font-normal">{`${start_time}~${end_time}`}</p>
                </div>
              </div>

              <div className="flexItemsCenter gap-1.5">
                <CurrencyYenIcon className="h-[18px] w-[18px] text-aquamarine" />
                <p>{`${price.toLocaleString()}円/1時間`}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flexCenter fixed bottom-0 left-0 z-10 w-full flex-col bg-white px-12 py-7 md:static md:rounded-[5px] md:bg-culturedF4 md:pt-0">
          <Apply />
        </div>
      </div>
    </div>
  );
}
