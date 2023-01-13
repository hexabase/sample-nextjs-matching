'use client';

import {
  ChevronLeftIcon,
  HomeIcon,
  BriefcaseIcon,
  CurrencyYenIcon,
} from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/outline';
import DetailCard from '../../../components/jobDetail/detailCard';
import { useState } from 'react';
import { jobDetail } from '../../../constant/index';
import { TJobDetail } from '../../../types/jobs/jobDetail';

function JobDetails() {
  const [job, setJob] = useState<TJobDetail>(jobDetail);
  return (
    <div className="container-responsive">
      <div className="flexCenter mb-4 h-8 text-xs font-semibold md:mb-0 md:h-20 md:text-base">
        <div className="flexCenter">
          <ChevronLeftIcon className="h-4 w-4" />
          <p className="ml-2">お仕事一覧に戻る</p>
        </div>

        <div className="flexItemsCenter md:w-48 md:justify-between">
          <span className="h-4 w-[1px] bg-black md:h-6"></span>
          <HomeIcon className="ml-3 h-3 w-4 md:h-7 md:w-6 " />
          <p>トップページ</p>
        </div>
      </div>

      <div className="hidden h-[1px] w-full bg-[#D9D9D9] md:block"></div>

      <div className="flex flex-col-reverse justify-between pb-20 md:flex-row md:gap-10 md:px-11">
        <div className="pb-20 pt-2.5">
          <div className="md:flexCol hidden h-20 md:h-[135px]">
            <p className="text-[10px] font-normal md:text-lg">
              BnA_WALLのアルバイト・パート情報
            </p>
            <p className="h-12 text-base font-bold md:h-20 md:text-2xl">
              アートホテルのフロントstaff♪→アートとオシャレが融合したホテルで、フロント業務全般をお願いします
            </p>
          </div>

          <div className="flexCol md:mt-14 md:h-[345px]">
            <div className="mt-4 flex items-center">
              <BriefcaseIcon className="mr-2 h-4 w-4" />
              <p className="text-sm font-bold md:text-lg">作業内容</p>
            </div>

            <p className="w-full pt-4 pb-7 text-justify text-xs font-normal md:text-lg">
              【作業内容】宿泊のお客様対応、客室チェック、荷物管理業務、お出迎え、お見送り等をおこの求人に応募するします♪丁寧に研修を行いＯＪＴ形式で仕事を教えるので未経験も安心◎定着率高い職場♪あなたの英語力も活かせる♪
            </p>

            <div className="relative w-full bg-[#F1F1F1] px-6 pb-7 pt-14">
              <p className="absolute top-[-15px] left-[-7px] rotate-[-9deg] font-segoe text-2xl font-bold text-aquamarine md:top-0 md:left-3">
                Enjoy work
              </p>
              <p className="text-xs font-normal md:text-base">
                【作業内容詳細】日本全国からのお客様だけでなく、外国からの観光のお客様にもご利用いただく機会の多い綺麗なホテルで、フロントスタッフのお仕事♪
                お客様に「また来たい！」と思ってもらえるような心に残るおもてなしを一緒に届けませんか？
                ホテル業界や接客経験者はもちろんですが、未経験者も大歓迎！
                実際に未経験でフロントスタッフのお仕事を始めた方も活躍している職場です☆
              </p>
            </div>
          </div>

          <div className="mt-11 font-bold">
            <div className="flexItemsCenter mb-4 ">
              <CurrencyYenIcon className="mr-2 h-4 w-4" />
              <p className="text-sm md:text-lg">時給</p>
            </div>
            <div className="flex items-end">
              <p className="text-2xl md:text-3xl">{`${job.price.toLocaleString()}`}</p>
              <p className="mb-1 ml-1 text-xs font-normal md:text-base">円</p>
            </div>
          </div>

          <div className="mt-6 hidden h-[1px] w-full bg-[#D9D9D9] md:block"></div>

          <div className="mt-6">
            <div className="flexItemsCenter mb-4">
              <MapPinIcon className="mr-2 h-4 w-4" />
              <p className="text-sm font-bold md:text-lg">働く場所</p>
            </div>
            <p className="text-xs font-normal md:text-base">
              〒103-0011 東京都中央区日本橋大伝馬町１−１
            </p>
          </div>

          <div className="flexCenter h-36 flex-col pt-12 md:hidden">
            <p className="mb-2 text-xs font-medium">
              \ 最短30秒!カンタン入力！/
            </p>
            <p className="rounded-[40px] bg-pastelRed py-4 px-16 text-lg font-bold text-white">
              この求人に応募する
            </p>
          </div>
        </div>

        <div className="md:w-[25rem]">
          <DetailCard {...job} />
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
