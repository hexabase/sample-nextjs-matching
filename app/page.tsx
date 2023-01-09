import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

import DateCard from '../components/dateCard';
import CardJob from '../components/serchJobs/cardJob';
import { TJob } from '../types/jobs';
import dayjs, { Dayjs } from 'dayjs';
import Toggle from '../components/common/Toggle';
import Tag from '../components/common/Tag';

export default function Home() {
  const jobs: TJob[] = [
    {
      id: '1',
      imgUrl: '',
      jobName: 'CROSSROAD株式会社',
      des: 'マンガ・雑誌の検品・梱包を中心とした簡単な作業です！',
      date: '2023/01/09',
      startTime: '14:00',
      endTime: '21:00',
      tags: ['12月21日(水)', '検品'],
      hourlyWage: '1,250',
    },
    {
      id: '2',
      imgUrl: '',
      jobName: 'CROSSROAD株式会社',
      des: 'マンガ・雑誌の検品・梱包を中心とした簡単な作業です！',
      date: '2023/01/09',
      startTime: '14:00',
      endTime: '21:00',
      tags: ['12月21日(水)', '検品'],
      hourlyWage: '1,250',
    },
    {
      id: '3',
      imgUrl: '',
      jobName: 'CROSSROAD株式会社',
      des: 'マンガ・雑誌の検品・梱包を中心とした簡単な作業です！',
      date: '2023/01/09',
      startTime: '14:00',
      endTime: '21:00',
      tags: ['12月21日(水)', '検品'],
      hourlyWage: '1,250',
    },
    {
      id: '4',
      imgUrl: '',
      jobName: 'CROSSROAD株式会社',
      des: 'マンガ・雑誌の検品・梱包を中心とした簡単な作業です！',
      date: '2023/01/09',
      startTime: '14:00',
      endTime: '21:00',
      tags: ['12月21日(水)', '検品'],
      hourlyWage: '1,250',
    },
    {
      id: '5',
      imgUrl: '',
      jobName: 'CROSSROAD株式会社',
      des: 'マンガ・雑誌の検品・梱包を中心とした簡単な作業です！',
      date: '2023/01/09',
      startTime: '14:00',
      endTime: '21:00',
      tags: ['12月21日(水)', '検品'],
      hourlyWage: '1,250',
    },
    {
      id: '6',
      imgUrl: '',
      jobName: 'CROSSROAD株式会社',
      des: 'マンガ・雑誌の検品・梱包を中心とした簡単な作業です！',
      date: '2023/01/09',
      startTime: '14:00',
      endTime: '21:00',
      tags: ['12月21日(水)', '検品'],
      hourlyWage: '1,250',
    },
    {
      id: '7',
      imgUrl: '',
      jobName: 'CROSSROAD株式会社',
      des: 'マンガ・雑誌の検品・梱包を中心とした簡単な作業です！',
      date: '2023/01/09',
      startTime: '14:00',
      endTime: '21:00',
      tags: ['12月21日(水)', '検品'],
      hourlyWage: '1,250',
    },
    {
      id: '8',
      imgUrl: '',
      jobName: 'CROSSROAD株式会社',
      des: 'マンガ・雑誌の検品・梱包を中心とした簡単な作業です！',
      date: '2023/01/09',
      startTime: '14:00',
      endTime: '21:00',
      tags: ['12月21日(水)', '検品'],
      hourlyWage: '1,250',
    },
  ];
  const tags = ['12月21日(水)', '検品'];
  const dateArr: Dayjs[] = [];

  for (let index = 0; index < 5; index++) {
    dateArr.push(dayjs(dayjs().add(index, 'day'), 'yyyy-mm-dd'));
  }

  return (
    <>
      <div className="container-responsive h-[100px] py-[22px] px-4">
        <div className="flex items-center justify-between">
          <button className="next-btn">
            <ChevronLeftIcon />
          </button>

          <div className="grid grid-cols-5 gap-x-2.5">
            {dateArr.map((date, index) => (
              <DateCard key={index} date={date} dateType="normal" />
            ))}
          </div>
          <button className="next-btn">
            <ChevronRightIcon />
          </button>
        </div>
      </div>
      <div className="container-responsive bg-antiFlashWhite pb-16 pt-2.5">
        <div className="flex justify-end gap-x-2.5   text-xs font-normal leading-[17px]">
          <p>時給の高い順</p>
          <Toggle />
        </div>

        <div className="mt-4 flex gap-2.5">
          {tags[0] &&
            tags.map((tag, index) => (
              <Tag
                key={index}
                tagName={tag}
                closeTag={true}
                className="bg-white"
              />
            ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
          {jobs[0] &&
            jobs.map((job, jobIndex) => <CardJob key={jobIndex} job={job} />)}
        </div>
      </div>
    </>
  );
}
