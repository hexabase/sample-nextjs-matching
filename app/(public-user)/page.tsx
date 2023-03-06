'use client'

import Tag from '../../components/common/Tag';
import Toggle from '../../components/common/Toggle';
import CalendarInline from '../../components/serchJobs/calendarInline';
import CardJob from '../../components/serchJobs/cardJob';
import FooterMobile from '../../components/serchJobs/footerMobile';
import { TJob, TJobSearchResult, TJobSearchDetail } from '../../types';
import { useState, useCallback, useEffect } from 'react';
import { searchJob } from '../../utils/apis';
import dayjs from 'dayjs';

export default function Home() {

  const [jobs, setJobs] = useState<TJobSearchResult>();
  const tags = ['12月21日(水)', '検品'];

  const getJobs = useCallback(async () => {
    try {
      const res = await searchJob({
        conditions: [{
          search_value: []
        }],
        sort_field_id: dayjs().format('YYYY/MM/DD'),
        sort_order: 'desc',
        page: 1,
        per_page: 8
      })
      setJobs(res.data)
    } catch (error) {
      
    }
  }, [])

  useEffect(() => {
    getJobs();
  }, [getJobs])

  const jobFactory = (rawJob: TJobSearchDetail): TJob => {
    return {
      id: rawJob.id,
      // imgUrl: rawJob.image,
      imgUrl: '',
      jobName: rawJob.job_title,
      des: rawJob.title,
      date: dayjs(rawJob.start_work_date).format('YYYY/MM/DD'),
      startTime: dayjs(rawJob.start_work_date).format('HH:MM'),
      endTime: dayjs(rawJob.end_work_date).format('HH:MM'),
      tags: [rawJob.prefecture, rawJob.city, rawJob.address],
      hourlyWage: Number(rawJob.hourly_wage),
    }
  }

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
            {jobs?.items[0] &&
              jobs.items.map((job, jobIndex) => <CardJob key={jobIndex} job={jobFactory(job)} />)}
          </div>
        </div>
      </div>

      <div className="sm:hidden">
        <FooterMobile />
      </div>
    </>
  );
}
