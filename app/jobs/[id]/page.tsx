'use client';

import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { BriefcaseIcon } from '@heroicons/react/20/solid';
import { MapPinIcon, CurrencyYenIcon } from '@heroicons/react/24/outline';

import BackToHome from '../../../components/common/backToHome';
import BackToJobs from '../../../components/common/backToJobs';
import DetailCard from '../../../components/jobDetail/detailCard';
import { TJobDetail } from '../../../types/jobs';
import Apply from '../../../components/jobDetail/apply';

const jobDetailMock: TJobDetail = {
  date: dayjs(),
  price: 1250,
  start_time: '9:00',
  end_time: '18:00',
  title: 'ＢnＡ_ＷＡＬＬのアルバイト・パート情報',
  des: 'アートホテルのフロントstaff♪→アートとオシャレが融合したホテルで、フロント業務全般をお願いします',
  jobDetail:
    '日本全国からのお客様だけでなく、外国からの観光のお客様にもご利用いただく機会の多い綺麗なホテルで、フロントスタッフのお仕事♪ お客様に「また来たい！」と思ってもらえるような心に残るおもてなしを一緒に届けませんか？ ホテル業界や接客経験者はもちろんですが、未経験者も大歓迎！  実際に未経験でフロントスタッフのお仕事を始めた方も活躍している職場です☆',
  jobContent:
    '宿泊のお客様対応、客室チェック、荷物管理業務、お出迎え、お見送り等をおこの求人に応募するします♪丁寧に研修を行いＯＪＴ形式で仕事を教えるので未経験も安心◎定着率高い職場♪あなたの英語力も活かせる♪',
};

function JobDetails() {
  const [job, setJob] = useState<TJobDetail>(jobDetailMock);

  return (
    <>
      <div className="container-responsive">
        <div className="flexCenter py-4 text-xs font-normal md:mb-0 md:h-20 md:text-base">
          <BackToJobs />
          <BackToHome />
        </div>
      </div>
      <div className="md:w-[25rem]">
        <DetailCard job={job} />
      </div>
      <div className="container-responsive">
        <div className="flex flex-col-reverse justify-between pb-20 md:flex-row md:gap-10 md:px-11">
          <div className="pb-20 pt-2.5">
            <div className="md:flexCol hidden h-20 md:h-[135px]">
              <p className="text-[10px] font-normal md:text-lg">{job.title}</p>
              <p className="h-12 text-base font-bold md:h-20 md:text-2xl">
                {job.des}
              </p>
            </div>

            <div className="mt-4 md:mt-14 md:h-[345px]">
              <div className="flex items-center  gap-2">
                <BriefcaseIcon className="h-[18px] w-[18px]" />
                <p className="text-sm font-bold md:text-lg">作業内容</p>
              </div>

              <p className="w-full pt-3 pb-7 text-justify text-xs font-normal md:text-lg">
                【作業内容】 {job.jobContent}
              </p>

              <div className=" relative mt-4 w-full">
                <p className="absolute top-[-15px] left-[-7px] z-20 rotate-[-9deg] font-segoe text-2xl font-bold text-aquamarine md:top-0 md:left-3">
                  Enjoy work
                </p>
                <div className="border-mask z-10 w-full bg-antiFlashWhite px-6 pb-7 pt-14">
                  <p className="text-xs font-normal md:text-base">
                    【作業内容詳細】 {job.jobDetail}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 font-bold">
              <div className="flexItemsCenter mb-4 ">
                <CurrencyYenIcon className="mr-2 h-[18px] w-[18px]" />
                <p className="text-sm md:text-lg">時給</p>
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-2xl md:text-3xl">{`${job.price.toLocaleString()}`}</p>
                <p className="text-xs font-normal md:text-base">円</p>
              </div>
            </div>

            {/* <div className="mt-6 hidden h-[1px] w-full bg-[#D9D9D9] md:block"></div> */}

            <div className="mt-8">
              <div className="flexItemsCenter mb-4">
                <MapPinIcon className="mr-2 h-[18px] w-[18px]" />
                <p className="text-sm font-bold md:text-lg">働く場所</p>
              </div>
              <p className="text-xs font-normal md:text-base">
                〒103-0011 東京都中央区日本橋大伝馬町１−１
              </p>
            </div>

            <div className="flexCenter flex-col pt-12 md:hidden">
              <Apply />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetails;
