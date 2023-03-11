'use client';

import 'dayjs/locale/ja';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import dayjs from 'dayjs';

import {
  ClockIcon,
  CurrencyYenIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

import { TJobsItems} from '../../../types';
import { TItemLinks} from '../../../types/jobsList';
import { getFile } from '../../../utils/apis';
import { getMonthDayCardJob, getTimeCardJob } from '../../../utils/getDay';
import ImageSkeleton from '../../common/skeletons/imageSkeleton';
import { getDayOfWeek } from '../../helpers';

dayjs.locale('ja');
dayjs().locale('ja');
interface JobProps {
  job: TJobsItems;
}

export default function CardJob({ job }: JobProps) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState<string>();

  const {
    i_id,
    title,
    start_work_date,
    end_work_date,
    prefecture,
    city,
    address,
    hourly_wage,
    work_content,
    item_links,
  } = job;

  useEffect(() => {
    const getImageUrl = async () => {
      try {
        const res = await getFile(job.image);
        const imageBytes = new Uint8Array(res.data);
        const blob = new Blob([imageBytes.buffer], { type: 'image' });
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
      } catch (error) {
        console.log('error', error);
        setImageUrl('');
      }
    };

    getImageUrl();
  }, [job.image]);

  const handleClickCard = () => {
    router.push(`jobs-employer/${i_id}/${job.id}`);
  };

  const countJobSeekers = (itemLinks: TItemLinks) => {
    let count = 0;
    if (itemLinks.db_count > 0) {
      const link = itemLinks.links.find(l => l.d_id === process.env.NEXT_PUBLIC_JOB_SEEKERS_DATASTORE_ID);
      count = link?.item_count || 0;
    }
    return count;
  };

  return (
    <div
      onClick={handleClickCard}
      className="flex h-auto justify-between cursor-pointer bg-white p-4 pb-3 hover:drop-shadow-md md:gap-6 md:rounded-[5px] md:p-5"
    >
      <div className="flex w-1/2 flex-col md:gap-6">
        {!imageUrl ? (
          <div className="h-52 w-auto">
            <ImageSkeleton className="bg-gray opacity-10" />
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt="image1"
            className="h-[122px] w-auto rounded-t-md object-cover md:h-52"
            width="200"
            height="122"
          />
        )}

        <div className="w-full ">
          <div className="mt-[23px] text-[12px] font-bold md:mt-0 md:text-[14px]">
            求職者数
          </div>
          <div className="text-center text-[20px]">
            <span className="text-[50px] text-[#FF6666] md:ml-0 md:text-[80px]">
            {countJobSeekers(item_links)}
            </span>
            <span>人</span>
          </div>
        </div>
      </div>

      <div className="flex w-1/2 flex-col pl-[18px] text-[9px] font-normal leading-[13px] md:w-64 md:pl-0 md:pb-3 md:text-xs">
        <div className="w-auto sm:w-[142px]">
          <p className=" text-overflow-multiline inline-block h-[49px] w-auto text-[12px]  font-bold leading-4 sm:w-[142px]  md:h-20 md:w-[248px] md:text-sm lg:text-lg">
            {title}
          </p>
        </div>

        <div className="md:h-22 mt-[20px] flex flex-col gap-3 md:mt-[30px] md:h-24 md:gap-2 md:pr-8">
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 text-aquamarine md:h-5 md:w-5" />
            <p className="ml-1.5 font-bold md:text-sm">
              {getMonthDayCardJob(dayjs(start_work_date))}(
              {getDayOfWeek(start_work_date)})
            </p>
            <p className="ml-1.5 text-[10px] md:mt-0.5 md:text-sm">{`${getTimeCardJob(
              dayjs(start_work_date)
            )}〜${getTimeCardJob(dayjs(end_work_date))}`}</p>
          </div>

          <div className="flex items-center">
            <MapPinIcon className="mr-3 h-4 w-5 text-aquamarine md:h-5 md:w-6 md:text-base" />
            <div className="w-full">
              <p className="w-full text-[10px] leading-3 md:text-sm">
                {prefecture}
                {city}
                {address}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <p className="mr-3">
              <CurrencyYenIcon className="h-4 w-4 text-aquamarine md:h-5 md:w-5 md:text-base" />
            </p>
            <div className="flex items-center gap-1">
              <p className="text-[10px] font-bold md:text-[14px] md:text-sm">
                {hourly_wage}
              </p>
              <span className="text-[10px] md:text-sm">円/1時間</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex w-auto flex-col gap-2 sm:w-[141px] md:h-28 md:w-56">
          <p className="font-bold">作業内容</p>
          <p className="text-[8px] md:h-20 md:text-sm">{work_content}</p>
        </div>
      </div>
    </div>
  );
}
