'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { deleteCookie } from 'cookies-next';

import { ChevronUpIcon } from '@heroicons/react/20/solid';

import Notification from '../../components/common/notification';
import EmployerContainer from '../../container/employerContainer';
import { EMessageError, EType, TNotification } from '../../types';
import { logout } from '../../utils/apis';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [notification, setNotification] = useState<TNotification>({
    open: false,
  });

  const handleLogout = () => {
    deleteCookie('token');
    router.push('/auth/login');
  };

  const logoutHandler = async () => {
    try {
      const res = await logout();

      res.data && handleLogout();
    } catch (error) {
      setNotification({
        open: true,
        type: EType.ERROR,
        message: EMessageError.ERR_01,
      });
    }
  };

  return (
    <>
      <header className="bg-black">
        <div className="container-responsive flex items-center justify-between pt-4 pb-3.5 sm:pt-4">
          <Image
            onClick={() => router.push('/')}
            className="cursor-pointer"
            src="/images/HEXA-JOB-logo-mark-for-header-login.svg"
            alt="logo"
            width={169}
            height={40}
          />
          <button
            className="flex items-center justify-center gap-x-1"
            onClick={logoutHandler}
          >
            <Image
              src="/images/logout-variant.svg"
              alt="logout"
              width={25}
              height={25}
            />
            <p className="text-sm text-white">ログアウト</p>
          </button>
        </div>
      </header>

      <main>
        <EmployerContainer>{children}</EmployerContainer>
      </main>
      <footer className="relative bg-eerieBlack pt-16 pb-6 text-white sm:pb-5 sm:pt-12">
        <div className="absolute inset-x-1/2 top-[-26px] flex h-[52px] w-[52px] translate-x-[-50%] items-center justify-center rounded-full bg-pastelRed text-black sm:hidden">
          <ChevronUpIcon aria-hidden="true" />
        </div>

        <div className="container-responsive">
          <div className="pb-8 sm:flex sm:justify-between sm:pb-7">
            <div className="flex items-center justify-center">
              <Image
                src="/images/HEXA-JOB-logo-mark.svg"
                alt="logo"
                width={167}
                height={38}
              />
            </div>
            <div className="hidden">
              <div>
                <p className="mb-2 text-spanishGray">お仕事を探している人</p>
                <p className="mb-1">
                  <Link href="/">求人一覧ページ</Link>
                </p>
              </div>
              <div>
                <p className="mb-2 text-spanishGray">お仕事をして欲しい会社</p>
                <p className="mb-1">
                  <Link href="/auth/login">ログイン / 求人を出す企業様</Link>
                </p>
                <p>
                  <Link href="/auth/register">求人企業に登録する</Link>
                </p>
              </div>
              <div>
                <p className="mb-2 text-spanishGray">カンパニー</p>
                <p className="mb-1">
                  <a
                    href="https://www.hexabase.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    運営会社
                  </a>
                </p>
                <p className="mb-1">
                  <a
                    href="https://www.hexabase.com/privacy-policy/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    プライバシーポリシー
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.hexabase.com/contact-us/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    お問合せ
                  </a>
                </p>
              </div>
            </div>
          </div>
          <p className="py-2 text-center text-xs font-normal sm:text-left">
            ©️2022 Hexabase
          </p>
        </div>
      </footer>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
    </>
  );
}
