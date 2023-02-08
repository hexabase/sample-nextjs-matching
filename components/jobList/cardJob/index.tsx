'use client';

import 'dayjs/locale/ja';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { ClockIcon, MapPinIcon, CurrencyYenIcon } from '@heroicons/react/24/outline';
import { LJobDetail } from '../../../types/jobsList';

dayjs.locale('ja');
dayjs().locale('ja');
interface JobProps {
  job: LJobDetail;
}

export default function CardJob({ job }: JobProps) {
  const router = useRouter();
  const handleClickCard = () => {
    router.push(`jobs-employer/${job.id}`);
  };

  return (
    <div
      onClick={handleClickCard}
      className="h-auto p-4 md:gap-6 flex justify-between md:rounded-[5px] bg-white md:p-5 pb-3 hover:drop-shadow-md"
    >
      <div className='flex  flex-col md:gap-6 md:w-1/2'>
        <img
          src='/maskGroup.png'
          alt="image1"
          className="w-[170px] md:w-full rounded-t-md md:h-52 h-[122px] object-fit"
        />
        <div className='w-full flex md:flex-row md:gap-[30px]'>
          <div className='mt-[23px] md:mt-0 text-[12px] md:text-[14px] font-bold'>求職者数</div>
          <div className='flex'>
            <div className='text-[20px] ml-[10px] md:ml-6 mt-7 md:mt-0'>
              <span className='text-[50px] md:ml-0 md:text-[80px] text-[#FF6666]'>3</span>
              <span>人</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pl-[18px] md:pl-0 md:w-64 flex flex-col md:pb-3 text-[9px] font-normal leading-[13px] md:text-xs w-1/2">
        <div className='w-[142px]'>
          <p className=" h-[49px] w-[142px] overflow-hidden overflow-ellipsis inline-block  md:h-20 text-[12px] font-bold md:leading-3 leading-4 md:w-[248px] md:text-sm lg:text-lg">
            {job.title}
          </p>
        </div>

        <div className='md:h-22 mt-[20px] md:h-24 flex flex-col gap-3 md:gap-2 md:pr-8 md:mt-[30px]'>
          <div className="flex items-center">
            <ClockIcon className="h-3 w-3 text-aquamarine md:h-4 md:w-4" />
            <p className="ml-1.5 font-bold md:text-sm">
              {job.tag}
            </p>
            <p className="ml-1.5 text-[10px] md:mt-0.5 md:text-sm">{`${job.startTime}〜${job.endTime}`}</p>
          </div>

          <div className=" flex  items-center">
            <MapPinIcon className="mr-3 h-3 w-3 text-aquamarine md:h-3 md:w-3 md:text-base" />
            <div className="w-full">
              <p className='w-full text-[10px] leading-3 md:text-sm'>
                {job.workplace}
              </p>
            </div>
          </div>

          <div className=" flex items-center">
            <p className="mr-3">
              <CurrencyYenIcon className="h-3 w-3 text-aquamarine md:h-3 md:w-3 md:text-base" />
            </p>
            <div className='flex items-center gap-1'>
              <p className="text-[10px] md:text-[14px] font-bold md:text-sm">
                {job.price.toLocaleString()}
              </p>
              <span className='text-[10px] md:text-sm'>
                円/1時給
              </span>
            </div>
          </div>
        </div>

        <div className='w-[141px] md:w-56 md:h-28 flex flex-col gap-2 mt-6'>
          <p className='font-bold'>作業内容</p>
          <p className='md:h-20 text-[8px] md:text-sm'>
            {job.content}
          </p>
        </div>
      </div>
    </div>
  );
}