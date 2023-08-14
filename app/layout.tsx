'use client';

import 'dayjs/locale/ja';
import './globals.css';
import { useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import dayjs from 'dayjs';
import { setToken } from '../utils/apis';
import { updatePrefectures } from '../utils/apis';

dayjs.locale('ja');
dayjs().locale('ja');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async () => {
      const token = getCookie('token') as string;
      if (token) await setToken(token);

      const init = getCookie('init') as string;
      if (!init) {
        updatePrefectures();
        setCookie('init', 'true');
      }
    })();
  }, []);

  return (
    <html lang="ja">
      <head />
      <body>{children}</body>
    </html>
  );
}
