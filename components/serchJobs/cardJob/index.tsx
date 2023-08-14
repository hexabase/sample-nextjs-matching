'use client';

import 'dayjs/locale/ja';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import dayjs from 'dayjs';

import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

import ImageSkeleton from '../../common/skeletons/imageSkeleton';
import Tag from '../../common/Tag';
import { getDayOfWeek } from '../../helpers';
import { FileObject, Item } from '@hexabase/hexabase-js';

dayjs.locale('ja');
dayjs().locale('ja');

interface JobProps {
  job: Item;
}

export default function CardJob({ job }: JobProps) {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState<string>();
  const dayOfWeek = getDayOfWeek(job.get<Date>('start_work_date')!);

  const handleClickCard = () => {
    router.push(`/jobs/${job.id}`);
  };

  useEffect(() => {
    const getImageUrl = async () => {
      try {
        const images = job.get<FileObject[] | undefined>('image');
        if (!images) return;
        await images[0].download();
        const blob = images[0].data as unknown;
        const imageUrl = URL.createObjectURL(blob as Blob);
        setImageUrl(imageUrl);
      } catch (error) {
        console.log('error', error);
        setImageUrl('');
      }
    };

    getImageUrl();
  }, [job.get('image')]);

  return (
    <div
      onClick={handleClickCard}
      className="cursor-pointer rounded-[5px] bg-white pb-3 duration-100 ease-linear hover:shadow-lg"
    >
      {!imageUrl ? (
        <div className="h-52 w-auto">
          <ImageSkeleton className="bg-gray opacity-10" />
        </div>
      ) : (
        <div className="h-[51] w-full">
          <Image
            src={imageUrl}
            alt="image1"
            width={176}
            height={128}
            className="w-full rounded-t-md"
          />
        </div>
      )}

      <div className="px-3 py-3 leading-[13px] md:px-5">
        <p className="leading[10px] w-full truncate text-xs md:mt-2.5">
          {job.get<string>('sub_title')}
        </p>

        <p className="mt-2 inline-block h-auto h-10 min-h-[50px] w-full pb-0 text-xs font-bold line-clamp-3 md:min-h-[60px] md:text-sm">
          {job.get<string>('job_title')}
        </p>

        <div className="mt-4 flex w-full items-center justify-start md:mt-6 md:mt-2 md:items-center">
          <ClockIcon className="mr-1 hidden h-5 w-5 flex-none text-aquamarine md:block md:h-5 md:w-5" />
          <div className="flex w-full flex-col items-start justify-start md:flex-row md:items-center">
            <p className="mr-1 text-sm font-bold">
              {`${dayjs(job.get<Date>('start_work_date')).format('MM/DD')}(${dayOfWeek})`}
            </p>
            <p className="text-sm md:mt-0.5">{`${dayjs(job.get<Date>('start_work_date')).format('HH:MM')}〜${dayjs(job.get<Date>('end_work_date')).format('HH:MM')}`}</p>
          </div>
        </div>

        <div className="mt-4 flex w-full items-center">
          <MapPinIcon className="mr-1 hidden h-4 w-4 text-aquamarine md:block md:h-5 md:w-5 md:text-xs" />
          <div className="flex gap-1 md:text-xs">
            {job.get<string>('prefecture') &&
              ([job.get<string>('prefecture'), job.get<string>('city')] as (string[])).map((tag, indexTag) => (
                <Tag
                  key={indexTag}
                  tagName={tag}
                  className="bg-antiFlashWhite text-[9px] leading-3"
                />
              ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end">
          <p className="mr-1 pt-2 text-sm">時給</p>
          <p className="text-2xl md:font-bold">
            {job.get<number>('hourly_wage', 0)!.toLocaleString()}
          </p>
          <p className="ml-0.5 pt-1.5 text-sm">円</p>
        </div>
      </div>
    </div>
  );
}
