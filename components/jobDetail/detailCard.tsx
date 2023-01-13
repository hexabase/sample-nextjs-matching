'use client';

import Image from 'next/image';
import React from 'react';
import { ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { TJobDetail } from '../../types/jobs/jobDetail';
import { getDay } from '../../utils/getDay';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(localeData);

dayjs().localeData();

function DetailCard({ date, price, time_start, time_end }: TJobDetail) {
  return (
    <div className="flexCol md:sticky md:top-20 md:h-[518px] md:rounded-[5px] md:bg-[#F4F4F4] md:shadow-2xl">
      <Image
        src="/images/img1.png"
        alt="image1"
        width={300}
        height={200}
        className="h-[200px] w-full object-cover md:rounded-t-[5px]"
      />

      <div className="flexCol h-56 py-5 md:h-36 md:px-4">
        <div className="font-bold md:hidden">
          <p className="text-[10px]">BnA_WALLのアルバイト・パート情報</p>
          <p className="text-base">
            アートホテルのフロントstaff♪→アートとオシャレが融合したホテルで、フロント業務全般をお願いします
          </p>
        </div>

        <div className="flex h-20 rounded-xl border-2 border-solid border-[aquamarine] bg-[#F7F7F7] px-4 py-3 md:h-36">
          <div className="relative mr-5 h-14 w-14 rounded-md bg-antiFlashWhite px-3 py-3 md:h-20 md:w-20 md:text-sm">
            <div className="flex flex-col items-center font-normal ">
              <p className="text-lg">21</p>
              <p className="text-[10px]	">水</p>
            </div>
            <p className="absolute top-0 left-0 h-5 w-5 bg-aquamarine p-1 text-[8px] md:h-6 md:w-6 md:text-sm">
              12
            </p>
          </div>

          <div className="flexCol font-bold">
            <div className="flexItemsCenter w-56">
              <ClockIcon className="mb-6 h-4 w-4" />
              <div className="ml-1.5 flex flex-row md:flex-col">
                <p className="">{`${date.format('YYYY/MM/DD')}(${getDay(
                  date
                )})`}</p>
                <p className="ml-1.5 font-normal">{`${time_start}~${time_end}`}</p>
              </div>
            </div>

            <div className="flexItemsCenter">
              <CurrencyDollarIcon className="h-4 w-4" />
              <p className="ml-1.5">{`${price.toLocaleString()}円/1時間`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10 w-full bg-[#fff] px-8 py-7 md:static md:rounded-[5px] md:bg-[#F4F4F4] md:pt-0">
        <div className="flexCenter flex-col">
          <p className="mb-2 text-xs font-medium md:mb-3 md:text-base">
            \最短30秒! カンタン入力！/
          </p>
          <button className="rounded-[40px] bg-pastelRed py-4 px-16 text-lg font-bold text-white">
            この求人に応募する
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
