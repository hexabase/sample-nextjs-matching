'use client';

import 'dayjs/locale/ja';
import './globals.css';

import dayjs from 'dayjs';

dayjs.locale('ja');
dayjs().locale('ja');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>{children}</body>
    </html>
  );
}
