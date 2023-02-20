'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../../../components/button';

export default function Email() {
  const router = useRouter();
  return (
    <div className="modal py-12 px-5 xl:py-28">
      <Image
        src="/images/HEXA-JOB-logo-success.svg"
        alt="logo"
        width={94}
        height={104}
        className="mx-auto lg:w-36"
      />
      <p className="pt-6 text-xl font-normal text-aquamarine lg:pt-7 lg:text-2xl">
        thanks for registering
      </p>
      <p className="pt-4 text-2xl font-bold lg:text-[32px] xl:pt-5">
        メールを送信しました。
      </p>
      <p className="pt-8 text-left text-sm font-normal sm:text-center xl:pt-7">
        お届けしたメールに記載されている会員登録URLより会員登録フォームにおすすみください
      </p>
    </div>
  );
}
