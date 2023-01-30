'use client';

import { useRouter } from 'next/navigation';

import { HomeIcon } from '@heroicons/react/20/solid';

export default function BackToHome() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="flexItemsCenter h-5 border-l border-black pl-3 md:h-10"
    >
      <HomeIcon className="h-4 w-4 md:h-8 md:w-8 " />
      <p>トップページ</p>
    </button>
  );
}
