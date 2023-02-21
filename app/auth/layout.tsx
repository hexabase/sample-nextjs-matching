'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { HomeIcon } from '@heroicons/react/20/solid';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const handleSubmit = () => {
    router.push('/');
  };
  return (
    <div className="bg-antiFlashWhite">
      <div className="container-responsive mt-3 pb-16 sm:py-24 lg:mt-0">
        <div className="flex justify-end sm:hidden">
          <div
            className="solid my-4 flex h-[20px] items-center border-l-2 border-black pl-2"
            onClick={handleSubmit}
          >
            <HomeIcon className="h-full" />
            <p className="text-xs font-normal">トップページ</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
