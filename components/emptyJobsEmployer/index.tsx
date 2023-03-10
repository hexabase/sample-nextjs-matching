import Image from 'next/image';
import Link from 'next/link';

import { PlusIcon } from '@heroicons/react/24/solid';

import ImageEmpty from '../../public/images/Empty.svg';

export default function EmptyJobsEmployer() {
  return (
    <div className="flex h-[71vh] flex-col items-center justify-center gap-y-6 pt-[71px] pb-40 md:gap-y-16 md:py-48">
      <Image
        className="mx-auto md:w-[299px]"
        src={ImageEmpty}
        width={175}
        height={167}
        alt="error"
      />
      <p className="text-sm font-normal md:text-3xl">
        まだ求人が１件も登録されていません。
      </p>

      <Link
        href="/jobs-employer/job-registration"
        className="mx-auto flex items-center justify-center gap-x-2 rounded-md bg-pastelRed py-3 px-4 text-white hover:bg-jellyBean md:rounded md:py-4 md:px-8"
      >
        <PlusIcon className="w-4 md:w-6" />
        <p className="text-sm font-normal md:text-lg">新規求人を登録する</p>
      </Link>
    </div>
  );
}
