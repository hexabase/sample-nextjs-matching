'use client';

import { useRouter } from 'next/navigation';

import { HomeIcon } from '@heroicons/react/20/solid';

export default function BackToHome() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="flexItemsCenter border-l border-black pl-3 md:w-48 md:justify-between"
    >
      <HomeIcon className="h-4 w-4 md:h-7 md:w-6 " />
      <p>トップページ</p>
    </button>
  );
}
