'use client';
import React from 'react';
import { HomeIcon } from '@heroicons/react/20/solid';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleSubmit = () => {
    console.log('aaa');
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
            <p className="text-xs">トップページ</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
