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
      className="h-[240px] md:h-[384px] md:gap-6 flex justify-between md:rounded-[5px] bg-white md:p-5 pb-3 hover:drop-shadow-md"
    >
      <div className='flex  flex-col md:gap-6 md:w-1/2'>
        <img
          src='/maskGroup.png'
          alt="image1"
          className="w-[170px] md:w-full rounded-t-md md:h-52 h-[122px] object-fit"
        />
        <div className='w-full flex flex-col md:flex-row md:gap-[30px]'>

          <p className='mt-[23px] md:mt-0 text-[14px] font-bold'>求職者数</p>
          <div className='flex'>
            <p className='text-[20px]'><span className='text-[50px] ml-[60px] md:ml-0 md:text-[80px] text-[#FF6666]'>3</span> 人</p>

          </div>

        </div>
      </div>

      <div className="pl-[18px] md:pl-0 md:w-64 flex flex-col pb-3 text-[9px] font-normal leading-[13px] md:text-xs w-1/2">
        <div className='w-[142px]'>
          <p className=" h-[49px] w-[142px] overflow-hidden overflow-ellipsis inline-block  md:h-20 text-[12px] font-bold md:leading-3 leading-4 md:w-[248px] md:text-sm lg:text-lg">
            {job.title}
          </p>
        </div>

        <div className='h-22 mt-[10px] md:h-24 flex flex-col gap-3 md:gap-1 md:pr-8 md:mt-[30px]'>
          <div className="flex items-center">
            <ClockIcon className="h-3 w-3 text-aquamarine md:h-4 md:w-4" />
            <p className="ml-1.5 font-bold md:text-base">
            </p>
            <p className="ml-1.5 text-[10px] md:mt-0.5 md:text-base">{`${job.startTime}〜${job.endTime}`}</p>
          </div>

          <div className=" flex  items-center">
            <MapPinIcon className="mr-3 h-3 w-3 text-aquamarine md:h-3 md:w-3 md:text-base" />
            <div className="w-full">
              <p className='w-full text-[10px] leading-3 md:text-base'>
                {job.workplace}
              </p>
            </div>
          </div>

          <div className=" flex items-center">
            <p className="mr-3">
              <CurrencyYenIcon className="h-3 w-3 text-aquamarine md:h-3 md:w-3 md:text-base" />
            </p>
            <div className='flex items-center gap-1'>
              <p className="text-[10px] md:text-[14px] font-bold md:text-base">
                {job.price.toLocaleString()}
              </p>
              <span className='text-[10px] md:text-base'>
                円/1時給
              </span>
            </div>
          </div>
        </div>

        <div className='w-[141px] md:w-56 h-28 flex flex-col gap-2 mt-6'>
          <p className='font-bold'>作業内容</p>
          <p className='h-20 text-[8px] md:text-sm'>
            {job.content}
          </p>
        </div>
      </div>
    </div>
  );
}