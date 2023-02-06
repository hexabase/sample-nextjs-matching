'use client';

import Image from 'next/image';

import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

import { ClockIcon, CurrencyYenIcon } from '@heroicons/react/24/outline';

import { TJobDetail } from '../../../types/jobs';
import { getDay } from '../../../utils/getDay';
import DateCard from '../../dateCard';
import { checkHoliday } from '../../helpers';

import DateCardDetail from '../../dateCardDetail';
import { LJobDetail } from '../../../types/jobsList';

dayjs.extend(localeData);

dayjs().localeData();

interface DetailCardProps {
  job: LJobDetail;
}

export default function DetailCard({ job }: DetailCardProps) {
  const { price, title, des } = job;


  return (
    <div className="">
      <Image src="/maskGroup.png" alt="image1" width={550} height={300} />
    </div>
  );
}
