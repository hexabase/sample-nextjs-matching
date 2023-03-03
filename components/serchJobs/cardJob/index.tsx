'use client';

import 'dayjs/locale/ja';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import dayjs from 'dayjs';

import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

import { TJob } from '../../../types';
import Tag from '../../common/Tag';
import { getDayOfWeek } from '../../helpers';

dayjs.locale('ja');
dayjs().locale('ja');

interface JobProps {
  job: TJob;
}

export default function CardJob({ job }: JobProps) {
  const router = useRouter();

  const dayOfWeek = getDayOfWeek(job.date);

  const handleClickCard = () => {
    router.push(`/jobs/${job.id}`);
  };

  return (
    <div
      onClick={handleClickCard}
      className="cursor-pointer rounded-[5px] bg-white pb-3 hover:drop-shadow-md"
    >
      <Image
        src={job.imgUrl === '' ? '/img1.png' : job.imgUrl}
        alt="image1"
        width={176}
        height={128}
        className="w-full rounded-t-md"
      />

      <div className="px-2.5 pb-3 pt-1.5 text-[9px] font-normal leading-[13px] md:text-xs">
        <p className="leading[10px] text-[7px] md:mt-2.5 md:text-xs">
          {job.jobName}
        </p>

        <p className="mt-1.5 h-10 text-[8px] font-bold leading-3 md:max-w-[248px] md:text-sm">
          {job.des}
        </p>

        <div className="mt-2 flex max-w-[162px] md:mt-6 ">
          <ClockIcon className="mt-0.5 h-3 w-3 text-aquamarine md:h-4 md:w-4" />
          <p className="ml-1.5 font-bold md:text-sm">
            {`${dayjs(job.date).format('MM/DD')} ${dayOfWeek}`}
          </p>
          <p className="ml-1.5 md:mt-0.5">{`${job.startTime}〜${job.endTime}`}</p>
        </div>

        <div className="mt-4 flex max-w-[162px] items-center">
          <MapPinIcon className="h-3 w-3 text-aquamarine md:h-3 md:w-3 md:text-xs" />
          <div className="flex flex-wrap gap-1 md:text-xs">
            {job.tags[0] &&
              job.tags.map((tag, indexTag) => (
                <Tag
                  key={indexTag}
                  tagName={tag}
                  className="bg-antiFlashWhite text-[9px] leading-3"
                />
              ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-end">
          <p className="mr-1 pt-2">時給</p>
          <p className="text-[24px] md:font-bold">
            {job.hourlyWage.toLocaleString()}
          </p>
          <p className="ml-0.5 pt-1.5 md:text-sm">円</p>
        </div>
      </div>
    </div>
  );
}
