'use client';

import { useEffect, useMemo, useState } from 'react';

import dayjs from 'dayjs';
import InfiniteScroll from 'react-infinite-scroll-component';

import Tag from '../../components/common/Tag';
import Toggle from '../../components/common/Toggle';
import Loader from '../../components/common/loader';
import CalendarInline from '../../components/serchJobs/calendarInline';
import CardJob from '../../components/serchJobs/cardJob';
import FooterMobile from '../../components/serchJobs/footerMobile';
import { useSearchContext } from '../../context';
import { useDateSelectedContext } from '../../context/DateSelectedContext';
import {
  TDateHoliday,
  TJob,
  TJobSearchCondition,
  TJobSearchDetail,
  TJobSearchPayloadOption,
} from '../../types';
import { searchJob } from '../../utils/apis';
import { getTimeZone0 } from '../../utils/getDay';

const getTagDate = (date: TDateHoliday) =>
  `${date?.month}月${date?.day}日(${date?.dayOfWeek})`;

export default function Home() {
  const { search, setSearch } = useSearchContext();
  const { dateSelected, setDateSelected } = useDateSelectedContext();

  const [jobs, setJobs] = useState<TJobSearchDetail[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState(true);
  const [tagsSearch, setTagsSearch] = useState<string[]>([]);
  const [tagsDate, setTagsDate] = useState<TDateHoliday[]>([]);
  const [hourlyWageDesc, setHourlyWageDesc] = useState<boolean>(false);

  const handleClickCloseTag = (tagRemove: string) => {
    const tagsFilter = tagsSearch.filter((tag) => tag !== tagRemove);
    const tagsDateFilter = tagsDate.filter(
      (tag) => getTagDate(tag) !== tagRemove
    );

    setTagsSearch(tagsFilter);
    setTagsDate(tagsDateFilter);
  };

  const payloadJobs: TJobSearchPayloadOption = useMemo(() => {
    const conditions: TJobSearchCondition[] = [];
    let use_or_condition = false;
    let sort_field_id: string | undefined;
    let sort_order: 'asc' | 'desc' | undefined;

    if (tagsSearch.length > 0) {
      const searchValues = [...tagsSearch];
      conditions.push(
        { id: 'job_title', search_value: searchValues },
        { id: 'sub_title', search_value: searchValues },
        { id: 'work_content', search_value: searchValues },
        { id: 'work_details', search_value: searchValues }
      );
      use_or_condition = true;
    }

    if (tagsDate.length > 0) {
      const tagDateFormat = tagsDate.map((tag) => getTimeZone0(tag.date));
      conditions.push({ id: 'start_work_date', search_value: tagDateFormat });
    }

    if (hourlyWageDesc) {
      sort_field_id = 'hourly_wage';
      sort_order = 'desc';
    }

    if (conditions.length === 0 && !hourlyWageDesc) {
      sort_field_id = 'start_work_date';
      sort_order = 'desc';
    }

    conditions.length === 0 && conditions.push({ search_value: [] });

    return {
      conditions,
      use_or_condition,
      sort_field_id,
      sort_order,
    };
  }, [tagsSearch, tagsDate, hourlyWageDesc]);

  useEffect(() => {
    const getJobsData = async () => {
      try {
        const res = await searchJob({
          ...payloadJobs,
          page: 1,
          per_page: 8,
          use_display_id: true,
        });
        setJobs(res.data.items);
        if (res.data.items.length == 0) {
          setHasMore(false);
        }
      } catch (error) {
      } finally {
        setPage(1);
      }
    };
    getJobsData();
  }, [payloadJobs]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await searchJob({
          ...payloadJobs,
          page,
          per_page: 8,
          use_display_id: true,
        });
        setJobs([...jobs, ...res.data.items]);
        if (res.data.items.length == 0) {
          setHasMore(false);
        }
      } catch (error) {}
    };

    page > 1 && getJobs();
  }, [page]);

  useEffect(() => {
    if (
      dateSelected &&
      !tagsDate.some(
        (tag) =>
          tag.date.format('YYYY-MM-DD') ===
          dateSelected.date.format('YYYY-MM-DD')
      )
    ) {
      setTagsDate((prevDate) => [...prevDate, dateSelected]);
    }

    setDateSelected(undefined);
  }, [dateSelected, setDateSelected, tagsDate]);

  useEffect(() => {
    if (tagsSearch.indexOf(search) === -1 && search !== '') {
      setTagsSearch((prevSearch) => [...prevSearch, search]);
    }

    setSearch('');
  }, [search, setSearch, tagsSearch]);

  const jobFactory = (rawJob: TJobSearchDetail): TJob => {
    return {
      id: rawJob.id,
      i_id: rawJob.i_id,
      imgUrl: rawJob.image,
      jobName: rawJob.job_title,
      des: rawJob.sub_title,
      date: dayjs(rawJob.start_work_date).format('YYYY/MM/DD'),
      startTime: dayjs(rawJob.start_work_date).format('HH:MM'),
      endTime: dayjs(rawJob.end_work_date).format('HH:MM'),
      tags: [rawJob.prefecture, rawJob.city],
      hourlyWage: Number(rawJob.hourly_wage),
    };
  };

  return (
    <>
      <div className="container-responsive h-[100px] py-[22px]">
        <CalendarInline />
      </div>

      <div className="bg-antiFlashWhite">
        <div className="container-responsive pb-16 pt-2.5 sm:pt-6 sm:pb-20">
          <div className="pb-[10px] sm:flex sm:items-center sm:gap-2.5">
            <div className="flex justify-end gap-x-2.5 text-xs font-normal leading-[17px]">
              <p className="whitespace-nowrap">時給の高い順</p>
              <Toggle toggle={hourlyWageDesc} setToggle={setHourlyWageDesc} />
            </div>

            <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-0">
              <>
                {tagsDate[0] &&
                  tagsDate.map((tag, indexDate) => (
                    <Tag
                      key={indexDate}
                      tagName={getTagDate(tag)}
                      closeTag={true}
                      handleClickCloseTag={handleClickCloseTag}
                      className="bg-white text-xs font-normal leading-4"
                    />
                  ))}
                {tagsSearch[0] &&
                  tagsSearch.map((tag, index) => (
                    <Tag
                      key={index}
                      tagName={tag}
                      closeTag={true}
                      handleClickCloseTag={handleClickCloseTag}
                      className="bg-white text-xs font-normal leading-4"
                    />
                  ))}
              </>
            </div>
          </div>

          <InfiniteScroll
            dataLength={jobs.length || 0}
            next={() => setPage(page + 1)}
            hasMore={hasMore}
            loader={<Loader />}
          >
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 sm:mt-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-7">
              {jobs[0] &&
                jobs.map((job, jobIndex) => (
                  <CardJob key={jobIndex} job={jobFactory(job)} />
                ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>

      <div className="sm:hidden">
        <FooterMobile />
      </div>
    </>
  );
}
