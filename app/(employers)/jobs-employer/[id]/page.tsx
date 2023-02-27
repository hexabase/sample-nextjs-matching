'use client';

import dayjs from 'dayjs';
import { useState } from 'react';
import { CurrencyYenIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { TJobDetail } from '../../../../types/jobs';
import DetailCard from '../../../../components/jobList/detaiJobCard';
import BackToJobsList from '../../../../components/common/backToJobsList';
import { LJobDetail, LJobSeekers } from '../../../../types/jobsList';
import { useRouter } from 'next/navigation';
import ListOfJobSeekers from '../../../../components/jobList/listOfJobSeekers';

const jobDetailMock: LJobDetail = {
  price: 1250,
  startTime: '14:00',
  endTime: '21:00',
  title: '無料の賄い付き！1日3時間〜料理とサービスにこだわった空間でお客様をおもてなししましょう！',
  des: '美味しい料理と素敵な空間でお客様をおもてなしするチャンス！笑顔と気さくな性格があれば誰でもOK！新しい経験を積みたい方、是非ご応募ください！',
  content:
    'ホールスタッフ、キッチンスタッフ',
  jobDetail: [
    '■ホールスタッフ 主な業務の流れはお客様のご案内、注文を伺う、商品の提供、お会計になります。 テイクアウトや電話での予約受付もお願いします！',
  ],
  workplace: '東京都日野市百草629-7',
  tag: '12/21(水)',
};

const LJobSeekersMock: LJobSeekers[] = [
  {
    id: '1',
    name: '白川　裕二',
    mail: 'sample@sample.jp'
  },
  {
    id: '2',
    name: '五木　四郎',
    mail: 'sample@sample.jp'
  },
  {
    id: '3',
    name: '三河　莉緒',
    mail: 'sample@sample.jp'
  },
  {
    id: '4',
    name: '白川　裕二',
    mail: 'sample@sample.jp'
  },
  {
    id: '5',
    name: '五木　四郎',
    mail: 'sample@sample.jp'
  },
  {
    id: '6',
    name: '三河　莉緒',
    mail: 'sample@sample.jp'
  },
  {
    id: '7',
    name: '白川　裕二',
    mail: 'sample@sample.jp'
  },
  {
    id: '8',
    name: '五木　四郎',
    mail: 'sample@sample.jp'
  },
  {
    id: '9',
    name: '三河　莉緒',
    mail: 'sample@sample.jp'
  },
  {
    id: '10',
    name: '白川　裕二',
    mail: 'sample@sample.jp'
  },
  {
    id: '11',
    name: '五木　四郎',
    mail: 'sample@sample.jp'
  },
  {
    id: '12',
    name: '三河　莉緒',
    mail: 'sample@sample.jp'
  },
  {
    id: '13',
    name: '白川　裕二',
    mail: 'sample@sample.jp'
  },
  {
    id: '14',
    name: '五木　四郎',
    mail: 'sample@sample.jp'
  },
  {
    id: '15',
    name: '三河　莉緒',
    mail: 'sample@sample.jp'
  }
]

export default function JobDetails() {
  const [job, setJob] = useState<LJobDetail>(jobDetailMock);
  const [isDetail, setIsDetail] = useState(true)
  const router = useRouter();

  const handleRouter = () => {
    setIsDetail(!isDetail)
  };


  return (
    <>
      <div className='bg-antiFlashWhite relative flex flex-col items-center'>

        <div className="container-responsive ">
          <div className="flexCenter text-xs font-normal border-b border-b-[#E1E1E1] md:border-b-lightSilver md:text-base">
            <BackToJobsList />
          </div>
        </div>
        {isDetail ?
          <>
            <div className="container-responsive mb-[40px]  md:h-[48px] md:pt-3" >
              <div className="text-sm font-medium text-center text-gray-500 border-b border-b-lightSilver ">
                <ul className=" flex md:justify-start -mb-px">
                  <li className="mr-2 border-b-2 border-[#FF6666] w-1/2 md:w-auto">
                    <div className="inline-block p-2 md:px-16 rounded-t-lg active hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                      <p>求人詳細</p>
                    </div>
                  </li>
                  <li className="mr-2 cursor-pointer w-1/2 md:w-auto" onClick={handleRouter}>
                    <div className="inline-block p-2 md:px-16 border-b-2 border-transparent rounded-t-lg  dark:text-blue-500 dark:border-blue-500" aria-current="page">
                      <div className='relative'>
                        求職者一覧
                        <div className='absolute top-0 -right-8 w-[27px] h-[17px] px-2 rounded-[8.5px] bg-[#FF6666] text-white md:flex md:items-center md:justify-center'>
                          <p className='text-[14px] leading-4'>
                            46
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col-reverse  md:container-responsive gap-4 md:flex md:flex-row-reverse w-[358px] md:w-full md:justify-around md:py-11">
              <div className='flex flex-col-reverse bg-white px-4 md:px-0 md:flex md:flex-row-reverse md:w-full md:justify-around md:py-11 mb-[50px] md:mb-[60px] shadow-[0_10px_15px_rgba(0,0,0,0.1)] rounded'>
                <div className="container-responsive mt-[10px] md:mt-0 flex mb-[71px] md:mb-0  md:mx-0 md:px-0 md:w-1/2 ">
                  <div className="pt-2.5 md:pt-0 lg:pr-16 md:pl-2">
                    <div className="pt-1 md:flexCol h-20 ">
                      <p className="h-12 text-base font-bold md:h-20 md:text-xl xl:text-2xl">
                        {job.title}
                      </p>
                    </div>
                    <div className='md:pl-3 md:pr-4 lg:mt-4 xl:mt-0'>
                      <div className='mt-[10px] md:mt-8 lg:mt-0'>
                        <p className='font-normal text-base'>{job.des}</p>
                      </div>
                      <div className="mt-7 md:mt-4">
                        <div className="flexItemsCenter mb-4">
                          <ClockIcon className="mr-2 h-[30px] w-[27px] text-aquamarine" />
                          <p className='font-bold pr-2.5'>{job.tag}</p>
                          <p className="font-normal text-base md:mt-0.5">{`${job.startTime}〜${job.endTime}`}</p>
                        </div>
                        <div className="flexItemsCenter mb-4 text-xs font-normal md:text-base">
                          <MapPinIcon className="mr-2 h-[30x] w-[27px] text-aquamarine" />
                          <p className='font-normal text-base'>{job.workplace}</p>
                        </div>

                        <div className="flexItemsCenter mb-4">
                          <CurrencyYenIcon className="mr-2 h-[30px] w-[27px] text-aquamarine" />
                          <p className='font-normal text-base'><span className='font-bold'>{`${job.price.toLocaleString()}`}</span>円/1時給</p>
                        </div>
                      </div>

                      <div className="mb-8 md:mb-0 md:mt-9">
                        <div className="flex items-center gap-2 border-b border-b-lightSilver md:border-hidden">
                          <p className="text-md font-bold md:text-base ">作業内容</p>
                        </div>
                        <p className="w-full mt-2 pb-1.5 text-justify text-xs font-normal md:text-base">
                          {job.content}
                        </p>

                        <div className="flex items-center gap-2 mt-4  border-b border-b-lightSilver md:border-hidden">
                          <p className="text-md font-bold md:text-base">作業内容詳細</p>
                        </div>
                        <div className='mt-[8px] md:mt-0 h-[auto] max-w-[532px] md:h-[621px] w-full'>
                          <p className="text-xs font-normal md:text-base">
                            ■ホールスタッフ
                            <br />
                            主な業務の流れはお客様のご案内、注文を伺う、商品の提供、お会計になります。 テイクアウトや電話での予約受付もお願いします！
                            <br />
                            <br />
                            ■キッチンスタッフ <br />
                            仕込み、調理、盛り付け、洗い物が主な業務内容です。 初めはホールからスタートして、次第にメニューを覚えてきたら簡単なものから始めましょう！
                            <br />
                            <br />
                            マニュアルもご用意しているので、ゆっくりできることを増やしていきましょう！
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[60px] md:mt-0 md:w-1/2 md:flex md:justify-center">
                  <DetailCard job={job} />
                </div>
              </div>
            </div>
          </>
          : <ListOfJobSeekers LJobSeekersMock={LJobSeekersMock} handleRouter={handleRouter} />}

      </div>
    </>
  );
}