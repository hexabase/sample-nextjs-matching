'use client';

import { useRouter } from 'next/navigation';

import { ChevronLeftIcon } from '@heroicons/react/20/solid';

export default function BackToJobs() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/')} className="flexCenter">
      <ChevronLeftIcon className="md:h7 h-5 w-5 md:h-7" />
      <p className="ml-2">お仕事一覧に戻る</p>
    </button>
  );
}
