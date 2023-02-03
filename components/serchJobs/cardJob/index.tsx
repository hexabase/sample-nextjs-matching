'use client';

import 'dayjs/locale/ja';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import dayjs from 'dayjs';

import { ClockIcon, MapPinIcon, CurrencyYenIcon } from '@heroicons/react/24/outline';

import { TJob } from '../../../types/jobs';
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
      className=" gap-6 flex rounded-[5px] bg-white p-5 pb-3 hover:drop-shadow-md"
    >
      <div className='flex flex-col gap-6'>

        <Image
          src={job.imgUrl === '' ? '/maskGroup.png' : job.imgUrl}
          alt="image1"
          width={284}
          height={205.51}
          className="w-full rounded-t-md w-72 h-52"
        />
        <p className='text-[14px] font-bold'>求職者数</p>
      </div>

      <div className="w-64 flex flex-col gap-6 pb-3 text-[9px] font-normal leading-[13px] md:text-xs">
        <div>

          <p className="h-20 text-[8px] font-bold leading-3 md:max-w-[248px] md:text-sm">
            {job.des}
          </p>
        </div>

        <div className='h-24 flex flex-col gap-3'>

          <div className="flex max-w-[162px]">
            <ClockIcon className="h-3 w-3 text-aquamarine md:h-4 md:w-4" />
            <p className="ml-1.5 font-bold md:text-sm">
              {`${dayjs(job.date).format('MM/DD')} ${dayOfWeek}`}
            </p>
            <p className="ml-1.5 md:mt-0.5">{`${job.startTime}〜${job.endTime}`}</p>
          </div>

          <div className=" flex max-w-[162px] items-center">
            <MapPinIcon className="mr-3 h-3 w-3 text-aquamarine md:h-3 md:w-3 md:text-xs" />
            <div className="flex md:text-xs">
              {/* {job.tags[0] &&
                job.tags.map((tag, indexTag) => (
                  <Tag
                    key={indexTag}
                    tagName={tag}
                    className="bg-antiFlashWhite text-[9px] leading-3"
                  />
                ))} */}
              <p className='leading-3'>

                {job.place}
              </p>
            </div>
          </div>

          <div className=" flex items-center">
            <p className="mr-3">
              <CurrencyYenIcon className="h-3 w-3 text-aquamarine md:h-3 md:w-3 md:text-xs" />
            </p>
            <div className='flex gap-1'>

              <p className="text-[14px] md:font-bold">
                {job.hourlyWage.toLocaleString()}


              </p>
              <span>
                円/時給
              </span>
            </div>
            {/* <p className="ml-0.5 pt-1.5 md:text-sm">円</p> */}
          </div>
        </div>

        <div className='w-56 h-28 flex flex-col gap-2 mt-3'>
          <p className='font-bold'>作業内容</p>
          <p className='h-20'>
            {job.jobDetail}
          </p>
        </div>
      </div>
    </div>
  );
}
