'use client';

import Image from 'next/image';


import { LJobDetail } from '../../../types/jobsList';
interface DetailCardProps {
  job: LJobDetail;
}

export default function DetailCard({ job }: DetailCardProps) {
  return (
    <div className="">
      <Image src="/maskGroup.png" alt="image1" width={550} height={300} />
    </div>
  );
}
