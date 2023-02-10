'use client';

import { useRouter } from 'next/navigation';

import { ChevronLeftIcon } from '@heroicons/react/20/solid';

export default function BackToJobsList() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/jobs-employer')} className="md:ml-6 flexCenter w-[60px] h-[45px] md:h-[60px]">
      <ChevronLeftIcon className="pt-1 w-8 md:w-9 md:h-9 " />

    </button>
  );
}
