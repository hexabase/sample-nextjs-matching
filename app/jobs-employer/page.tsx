'use client'

import Pagination from "../../components/pagination";
import CardJob from "../../components/jobList/cardJob";
import FooterMobile from "../../components/serchJobs/footerMobile";
import { LJobDetail } from "../../types/jobsList";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function JobDetails() {
  const router = useRouter();
  const handleRouter = () => {
    router.push('/jobs-employer/jobRegistration');
  };
  const jobs: LJobDetail[] = [
    {
      id: '1',
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
    },
    {
      id: '2',
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
    },
    {
      id: '3',
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
    },
    {
      id: '4',
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
    },
    {
      id: '5',
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
    },
    {
      id: '6',
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
    },
    {
      id: '7',
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
    },
    {
      id: '8',
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
    },
  ];

  return (
    <>
      <div className="bg-antiFlashWhite">
        <div className="container-responsive pb-16 pt-2.5 mt-8 md:mt-0  sm:pb-20 ">
          <div className='flex justify-end mb-10 md:mb-14 mt-[30px]'>
            <button type="button" className="bg-[#FF6666] text-white
          focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 
          py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
          focus:outline-none dark:focus:ring-blue-800" onClick={handleRouter}>
              <div className="flex">
                <PlusIcon width={22} height={22} />
                <p>新規求人登録</p>
              </div>
            </button>

          </div>
          <div className="mb-10 md:mb-16 sm:flex sm:items-center sm:gap-2.5">
            <div className="w-full flex flex-col justify-center align-center md:flex-row md:justify-between md:items-center	 gap-x-2.5 text-xs font-normal leading-[17px]">
              <p className="text-sm "><span className="text-lg font-bold">４</span> 件の求人が登録されています</p>
              <Pagination />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:mt-3 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-8">
            {jobs[0] &&
              jobs.map((job, jobIndex) => <CardJob key={jobIndex} job={job} />)}
          </div>

          <div className="sm:flex sm:items-center sm:gap-2.5 md:mt-[48px]">
            <div className="w-full flex justify-center md:justify-end gap-x-2.5 text-xs font-normal leading-[17px]">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <FooterMobile />
      </div>
    </>
  )
}