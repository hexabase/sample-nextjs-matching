'use client';

import dayjs from 'dayjs';
import { useState } from 'react';

import { BriefcaseIcon } from '@heroicons/react/20/solid';
import { CurrencyYenIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

import BackToHome from '../../../components/common/backToHome';
import BackToJobs from '../../../components/common/backToJobs';
import Apply from '../../../components/jobDetail/apply';
import DetailCard from '../../../components/jobDetail/detailCard';
import { TJobDetail } from '../../../types/jobs';

const jobDetailMock: TJobDetail = {
  date: dayjs(),
  price: 1250,
  start_time: '9:00',
  end_time: '18:00',
  title: 'ＢnＡ_ＷＡＬＬのアルバイト・パート情報',
  des: '無料の賄い付き！1日3時間〜料理とサービスにこだわった空間でお客様をおもてなししましょう！',
  jobDetail:
    '日本全国からのお客様だけでなく、外国からの観光のお客様にもご利用いただく機会の多い綺麗なホテルで、フロントスタッフのお仕事♪ お客様に「また来たい！」と思ってもらえるような心に残るおもてなしを一緒に届けませんか？ ホテル業界や接客経験者はもちろんですが、未経験者も大歓迎！  実際に未経験でフロントスタッフのお仕事を始めた方も活躍している職場です☆',
  jobContent:
    'ホールスタッフ、キッチンスタッフ',
  workplace: '東京都日野市百草629-7',
};

function JobDetails() {
  const [job, setJob] = useState<TJobDetail>(jobDetailMock);

  return (
    <>
      <div className="container-responsive ">
        <div className="flexCenter pb-3 text-xs font-normal md:border-b md:border-b-lightSilver md:text-base">
          <BackToJobs />
        </div>
      </div>
      <div className="container-responsive md:pt-3 md:mb-[8px]" >
        <div className="text-sm font-medium text-center text-gray-500 md:border-b md:border-b-lightSilver ">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <a href="#" className="inline-block p-2 md:px-16 border-b-2 border-lightred rounded-t-lg active hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">

                <p>求人詳細</p>
              </a>
            </li>
            <li className="mr-2">
              <a href="#" className="relative inline-block p-2 md:px-16 border-b-2 border-transparent rounded-t-lg  dark:text-blue-500 dark:border-blue-500" aria-current="page">
                <p>
                  求職者一覧
                </p>

                <div className='absolute top-2 -right-7 md:right-7 px-2 rounded-lg bg-lightred text-white'>
                  46
                </div>
              </a>
            </li>

          </ul>
        </div>
      </div>
      <div className="flex flex-col-reverse md:container-responsive gap-4 md:flex md:flex-row-reverse md:w-full md:justify-around md:py-11">


        <div className='flex flex-col-reverse md:flex md:flex-row-reverse md:w-full md:justify-around md:py-11'>

          <div className="container-responsive flex md:mx-0 md:px-0 md:w-1/2 ">
            <div className="pt-2.5 md:pt-0 lg:pr-16 md:pl-2">
              <div className="pt-1 md:flexCol hidden h-20 ">

                <p className="h-12 text-base font-bold md:h-20 md:text-xl xl:text-2xl">
                  {job.des}
                </p>
              </div>
              <div className='md:pl-3 md:pr-4 lg:mt-4 xl:mt-0'>

                <div className='mt-8 lg:mt-0'>
                  <p className='font-normal text-base'>美味しい料理と素敵な空間でお客様をおもてなしするチャンス！笑顔と気さくな性格があれば誰でもOK！新しい経験を積みたい方、是非ご応募ください！</p>
                </div>
                <div className="mt-4">

                  <div className="flexItemsCenter mb-4">
                    <ClockIcon className="mr-2 h-[18px] w-[18px] text-aquamarine" />
                    <p className="font-normal text-base ml-1.5 md:mt-0.5">{`${job.start_time}〜${job.end_time}`}</p>
                  </div>
                  <div className="flexItemsCenter mb-4 text-xs font-normal md:text-base">
                    <MapPinIcon className="mr-2 h-[18px] w-[18px] text-aquamarine" />
                    <p className='font-normal text-base'>{job.workplace}</p>
                  </div>

                  <div className="flexItemsCenter mb-4">
                    <CurrencyYenIcon className="mr-2 h-[18px] w-[18px] text-aquamarine" />
                    <p className='font-normal text-base'><span className='font-bold'>{`${job.price.toLocaleString()}`}</span>円/1時給</p>
                  </div>
                </div>

                <div className="mb-8 md:mb-0 md:mt-9">
                  <div className="flex items-center gap-2">
                    <p className="text-md font-bold md:text-base">作業内容</p>
                  </div>

                  <p className="w-full mt-2 pb-1.5 text-justify text-xs font-normal md:text-base">
                    {job.jobContent}
                  </p>


                  <div className="flex items-center gap-2 mt-4">
                    <p className="text-md font-bold md:text-base">作業内容詳細</p>
                  </div>

                  <p className="text-xs font-normal md:text-base">
                    {job.jobDetail}
                  </p>


                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-0 md:w-1/2 md:flex md:justify-center">
            <DetailCard job={job} />
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetails;
