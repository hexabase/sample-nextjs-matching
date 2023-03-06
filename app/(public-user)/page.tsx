'use client'

import Tag from '../../components/common/Tag';
import Toggle from '../../components/common/Toggle';
import CalendarInline from '../../components/serchJobs/calendarInline';
import CardJob from '../../components/serchJobs/cardJob';
import FooterMobile from '../../components/serchJobs/footerMobile';
import { TJob, TJobSearchResult } from '../../types';
import { useState, useCallback, useEffect } from 'react';
import { searchJob } from '../../utils/apis';

export default function Home() {
  const jobs2: TJob[] = [
    {
      id: '1',
      imgUrl: '',
      jobName: 'CROSSROAD株式会社',
      des: 'マンガ・雑誌の検品・梱包を中心とした簡単な作業です！',
      date: '2023/01/09',
      startTime: '14:00',
      endTime: '21:00',
      tags: ['12月21日(水)', '検品'],
      hourlyWage: 1250,
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
      hourlyWage: 1250,
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
      hourlyWage: 1250,
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
      hourlyWage: 1250,
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
      hourlyWage: 1250,
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
      hourlyWage: 1250,
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
      hourlyWage: 1250,
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
      hourlyWage: 1250,
    },
  ];

  const [jobs, setJobs] = useState<TJobSearchResult>();
  const tags = ['12月21日(水)', '検品'];

  const getJobs = useCallback(async () => {
    try {
      const res = await searchJob({
        conditions: [{
          search_value: []
        }],
        sort_field_id: '2022/12/14',
        sort_order: 'desc',
        page: 1,
        per_page: 8
      })
      console.log(res.data);
      // setJobs(res.data.items)
    } catch (error) {
      
    }
  }, [])

  useEffect(() => {
    getJobs();
  }, [getJobs])

  return (
    <>
      <div className="container-responsive h-[100px] py-[22px]">
        <CalendarInline />
      </div>

      <div className="bg-antiFlashWhite">
        <div className="container-responsive pb-16 pt-2.5 sm:pt-6 sm:pb-20">
          <div className="sm:flex sm:items-center sm:gap-2.5">
            <div className="flex justify-end gap-x-2.5 text-xs font-normal leading-[17px]">
              <p>時給の高い順</p>
              <Toggle />
            </div>

            <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-0">
              {tags[0] &&
                tags.map((tag, index) => (
                  <Tag
                    key={index}
                    tagName={tag}
                    closeTag={true}
                    className="bg-white text-xs font-normal leading-4"
                  />
                ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:mt-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8">
            {jobs2[0] &&
              jobs2.map((job, jobIndex) => <CardJob key={jobIndex} job={job} />)}
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        <FooterMobile />
      </div>
    </>
  );
}
