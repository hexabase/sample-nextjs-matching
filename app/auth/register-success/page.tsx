'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '../../../components/button';

export default function RegisterSuccess() {
  const router = useRouter();
  return (
    <div className="modal py-12 px-5 xl:py-28">
      <Image
        src="/images/HEXA-JOB-logo-success.svg"
        alt="logo"
        width={94}
        height={104}
        className="mx-auto"
      />
      <p className="pt-6 text-xl text-aquamarine xl:pt-7 xl:text-2xl">
        thanks for registering
      </p>
      <p className="pt-4 text-2xl font-bold lg:text-[32px] xl:pt-5">
        会員登録が完了しました
      </p>
      <p className="pt-8 text-left text-sm sm:text-center xl:pt-7">
        こちらから求人企業様用管理画面にログインしてください
      </p>
      <div
        className="pt-9 w-full xl:pt-7"
        onClick={() => router.push('/auth/login')}
      >
        <Button roundedFull>ログインする</Button>
      </div>
    </div>
  );
}
