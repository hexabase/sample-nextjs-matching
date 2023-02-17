'use client';

import './globals.css';
import 'dayjs/locale/ja';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();
  const [logged, setLogged] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <html lang="en">
      <head />
      <body>
        {logged ? (
          <div className="bg-black">
            <div className="container-responsive flex items-center justify-between pt-24 pb-3.5 sm:pt-4">
              <Image
                onClick={() => router.push('/')}
                className="cursor-pointer"
                src="/images/HEXA-JOB-logo-mark-for-header-login.svg"
                alt="logo"
                width={169}
                height={40}
              />
              <button className="flex items-center justify-center gap-x-1">
                <Image
                  src="/images/logout-variant.svg"
                  alt="logout"
                  width={25}
                  height={25}
                />
                <p className="text-sm text-white">ログアウト</p>
              </button>
            </div>
          </div>
        ) : (
          <header>
            <div className="container-responsive">
              <div className="flex items-center justify-between pt-5 sm:h-20 sm:pt-0">
                <Image
                  onClick={() => router.push('/')}
                  className="cursor-pointer"
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
                  <button
                    className="button-header"
                    onClick={() => router.push('/auth/register')}
                  >
                    求人企業会員登録
                  </button>
                  <button
                    className="button-header"
                    onClick={() => router.push('/auth/login')}
                  >
                    ログイン
                  </button>
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
            <main>{children}</main>
            <footer
              className={
                logged
                  ? 'relative bg-eerieBlack pt-16 pb-6 text-white sm:pb-5 sm:pt-12'
                  : 'relative bg-eerieBlack pt-16 pb-32 text-white sm:pb-1 sm:pt-12'
              }
            >
                <div className="absolute inset-x-1/2 top-[-26px] flex h-[52px] w-[52px] translate-x-[-50%] items-center justify-center rounded-full bg-pastelRed text-black sm:hidden">
                  <ChevronUpIcon aria-hidden="true" />
                </div>

              <div className="container-responsive">
                <div
                  className={
                    logged
                      ? 'pb-8 sm:flex sm:justify-between sm:pb-7'
                      : 'sm:flex sm:justify-between'
                  }
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/HEXA-JOB-logo-mark.svg"
                      alt="logo"
                      width={167}
                      height={38}
                    />
                  </div>
                  <div
                    className={
                      logged
                        ? 'hidden'
                        : 'grid grid-flow-col grid-rows-2 gap-3 py-16 text-[9px] font-medium leading-3 sm:text-sm sm:leading-5'
                    }
                  >
                    <div>
                      <p className="text-spanishGray mb-2">お仕事を探している人</p>
                      <p className="mb-1">
                        <Link href="/">求人一覧ページ</ Link></p>
                    </div>
                    <div>
                      <p className="text-spanishGray mb-2">お仕事をして欲しい会社</p>
                      <p className="mb-1"><Link href="/auth/login">ログイン / 求人を出す企業様</ Link></p>
                      <p><Link href="/auth/register">求人企業に登録する</ Link></p>
                    </div>
                    <div>
                    <p className="text-spanishGray mb-2">カンパニー</p>
                      <p className="mb-1">
                        <a href="https://www.hexabase.com/" target="_blank" rel="noreferrer">運営会社</a>
                      </p>
                      <p className="mb-1">
                        <a href="https://www.hexabase.com/privacy-policy/" target="_blank" rel="noreferrer">プライバシーポリシー</a>
                      </p>
                      <p>
                      <a href="https://www.hexabase.com/contact-us/" target="_blank" rel="noreferrer">お問合せ</a>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="py-2 text-center text-xs font-normal sm:text-left">
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
