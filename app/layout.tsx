'use client';

import './globals.css';
import 'dayjs/locale/ja';

import Image from 'next/image';
import { useState } from 'react';

import dayjs from 'dayjs';

import {
  Bars3Icon,
  ChevronUpIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';

import Search from '../components/layout/search';
import SPMenus from '../components/layout/spMenus';

dayjs.locale('ja');
dayjs().locale('ja');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [logged, setLogged] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <html lang="en">
      <head />
      <body>
        {logged ? (
          <div className='bg-black'>
            <div className="flex justify-between items-center container-responsive pt-24 pb-3.5 sm:pt-4">
              <Image
                src="/images/HEXA-JOB-logo-mark-for-header-login.svg"
                alt="logo"
                width={169}
                height={40}
              />
              <button className='flex justify-center items-center gap-x-1'>
                <Image
                  src="/images/logout-variant.svg"
                  alt="logout"
                  width={25}
                  height={25}
                />
                <p className='text-white text-sm'>ログアウト</p>
              </button>
            </div>
          </div>
        ) : (
          <header>
            <div className="container-responsive pt-24 sm:pt-0">
              <div className="flex items-center justify-between pt-24 sm:h-20 sm:pt-0">
                <Image
                  src="/images/HEXA-JOB-logo-mark-for-header.svg"
                  alt="logo"
                  width={169}
                  height={40}
                />

                <div
                  className="h-10 w-10 sm:hidden"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {showMenu ? <XMarkIcon /> : <Bars3Icon />}
                </div>

                <div className="hidden h-20 items-center justify-between gap-x-2.5 sm:flex">
                  <div className="hidden lg:block">
                    <Search />
                  </div>
                  <div className="h-7 w-7">
                    <QuestionMarkCircleIcon />
                  </div>
                  <button className="button-header">求人企業会員登録</button>
                  <button className="button-header">ログイン</button>
                </div>
              </div>
              <div className="hidden sm:block lg:hidden">
                <Search />
              </div>
            </div>
          </header>
        )}

        {showMenu ? (
          <div className="container-responsive sm:hidden">
            <SPMenus />
          </div>
        ) : (
          <>
            <main>
              {children}
            </main>
            <footer className={logged ? "relative bg-eerieBlack pt-16 pb-6 sm:pb-5 text-white sm:pt-12" : "relative bg-eerieBlack pt-16 pb-32 text-white sm:pb-1 sm:pt-12"}>
              <div className="absolute inset-x-1/2 top-[-26px] flex h-[52px] w-[52px] translate-x-[-50%] items-center justify-center rounded-full bg-pastelRed text-black sm:hidden">
                <ChevronUpIcon aria-hidden="true" />
              </div>
              <div className="container-responsive">
                <div className= {logged ? "sm:flex sm:justify-between pb-8 sm:pb-7" : "sm:flex sm:justify-between"}>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/HEXA-JOB-logo-mark.svg"
                      alt="logo"
                      width={167}
                      height={38}
                    />
                  </div>
                    <div className={logged ? "hidden" : "grid grid-flow-col grid-rows-2 gap-3 py-16 text-[9px] font-medium leading-3 sm:text-sm sm:leading-5"}>
                      <div>
                        <p className="text-spanishGray">お仕事を探している人</p>
                        <p>求人一覧ページ</p>
                        <p>ご利用方法・注意事項</p>
                      </div>
                      <div>
                        <p className="text-spanishGray">お仕事をして欲しい会社</p>
                        <p>ログイン / 求人を出す企業様</p>
                        <p>求人企業に登録する</p>
                      </div>
                      <div>
                        <p className="text-spanishGray">カンパニー</p>
                        <p>運営会社</p>
                        <p>プライバシーポリシー</p>
                        <p>お問合せ</p>
                      </div>
                    </div>
                </div>
                <p className="text-center text-xs font-normal sm:text-left">
                  ©️2022 Hexabase
                </p>
              </div>
            </footer>
          </>
        )}
      </body>
    </html>
  );
}
