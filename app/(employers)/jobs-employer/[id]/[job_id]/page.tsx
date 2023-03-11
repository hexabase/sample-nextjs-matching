'use client';

import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import {
  ClockIcon,
  CurrencyYenIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

import BackToJobsList from '../../../../../components/common/backToJobsList';
import Notification from '../../../../../components/common/notification';
import { getDayOfWeek } from '../../../../../components/helpers';
import DetailCard from '../../../../../components/jobList/detaiJobCard';
import ListOfJobSeekers from '../../../../../components/jobList/listOfJobSeekers';
import {
  EMessageError,
  EType,
  TFieldValueConvert,
  TNotification,
} from '../../../../../types';
import { TGetJobSeekers } from '../../../../../types/jobsList';
import { getItemDetails, getJobSeekers } from '../../../../../utils/apis';
import { getMonthDayCardJob, getTimeCardJob } from '../../../../../utils/getDay';

interface JobDetailsProps {
  params: {
    id: string;
    job_id: string;
  };
}

const PER_PAGE_JOB_SEEKERS = 16;

export default function JobDetails({ params: { id, job_id } }: JobDetailsProps) {
  const [job, setJob] = useState<TFieldValueConvert>();
  const [isDetail, setIsDetail] = useState(true);
  const [jobSeekers, setJobSeekers] = useState<TGetJobSeekers>();
  const [pageJobSeekers, setPageJobSeekers] = useState<number>(1);
  const [notification, setNotification] = useState<TNotification>({
    open: false,
  });
console.log(id);
console.log(job_id);
  const handleRouter = () => {
    setIsDetail(!isDetail);
  };

  const getDataItemDetail = async (item_id: string) => {
    try {
      const res = await getItemDetails(item_id);

      if (res.data && res.data.field_values) {
        const dataConvert: TFieldValueConvert = {};

        res.data.field_values.forEach((item) => {
          dataConvert[item.field_id] = item.value;
        });

        setJob(dataConvert);
      }
    } catch (error) {
      setNotification({
        open: true,
        type: EType.ERROR,
        message: EMessageError.ERR_01,
      });
    }
  };

  const getDataJobSeekers = async (
    page: number,
    per_page: number,
    job_id: string
  ) => {
    try {
      const res = await getJobSeekers(page, per_page, job_id);

      res.data && setJobSeekers(res.data);
    } catch (error) {
      setNotification({
        open: true,
        type: EType.ERROR,
        message: EMessageError.ERR_01,
      });
    }
  };
  useEffect(() => {
    getDataItemDetail(id);
  }, [id]);

  useEffect(() => {
    getDataJobSeekers(pageJobSeekers, PER_PAGE_JOB_SEEKERS, job_id);
  }, [pageJobSeekers, job_id]);

  return (
    <>
      <div className="relative flex flex-col items-center bg-antiFlashWhite">
        <div className="container-responsive ">
          <div className="flexCenter border-b border-b-[#E1E1E1] text-xs font-normal md:border-b-lightSilver md:text-base">
            <BackToJobsList />
          </div>
        </div>
        {isDetail ? (
          <>
            <div className="container-responsive mb-[40px]  md:h-[48px] md:pt-3">
              <div className="text-gray-500 border-b border-b-lightSilver text-center text-sm font-medium ">
                <ul className=" -mb-px flex md:justify-start">
                  <li className="mr-2 w-1/2 border-b-2 border-[#FF6666] md:w-auto">
                    <div className="active hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 inline-block rounded-t-lg p-2 md:px-16">
                      <p>求人詳細</p>
                    </div>
                  </li>
                  <li
                    className="mr-2 w-1/2 cursor-pointer md:w-auto"
                    onClick={handleRouter}
                  >
                    <div
                      className="inline-block rounded-t-lg border-b-2 border-transparent p-2 dark:border-blue-500  dark:text-blue-500 md:px-16"
                      aria-current="page"
                    >
                      <div className="relative">
                        求職者一覧
                        <div className="absolute top-0 -right-8 h-[17px] w-[27px] rounded-[8.5px] bg-[#FF6666] px-2 text-white md:flex md:items-center md:justify-center">
                          <p className="text-[14px] leading-4">
                            {jobSeekers?.totalItems}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:container-responsive flex  w-[358px] flex-col-reverse gap-4 md:flex md:w-full md:flex-row-reverse md:justify-around md:py-11">
              <div className="mb-[50px] flex flex-col-reverse rounded bg-white px-4 shadow-[0_10px_15px_rgba(0,0,0,0.1)] md:mb-[60px] md:flex md:w-full md:flex-row-reverse md:justify-around md:px-0 md:py-11">
                <div className="container-responsive mt-[10px] mb-[71px] flex md:mx-0 md:mt-0  md:mb-0 md:w-1/2 md:px-0 ">
                  <div className="pt-2.5 md:pt-0 md:pl-2 lg:pr-16">
                    <div className="md:flexCol h-20 pt-1 ">
                      <p className="h-12 text-base font-bold md:h-20 md:text-xl xl:text-2xl">
                        {job?.job_title}
                      </p>
                    </div>
                    <div className="md:pl-3 md:pr-4 lg:mt-4 xl:mt-0">
                      <div className="mt-[10px] md:mt-8 lg:mt-0">
                        <p className="text-base font-normal">
                          {job?.sub_title}
                        </p>
                      </div>
                      <div className="mt-7 md:mt-4">
                        <div className="flexItemsCenter mb-4">
                          <ClockIcon className="mr-2 h-[30px] w-[27px] text-aquamarine" />
                          <p className="pr-2.5 font-bold">
                            {getMonthDayCardJob(dayjs(job?.start_work_date))}(
                            {getDayOfWeek(job?.start_work_date)})
                          </p>
                          <p className="text-base font-normal md:mt-0.5">{`${getTimeCardJob(
                            dayjs(job?.start_work_date)
                          )}〜${getTimeCardJob(dayjs(job?.end_work_date))}`}</p>
                        </div>
                        <div className="flexItemsCenter mb-4 text-xs font-normal md:text-base">
                          <MapPinIcon className="mr-2 h-[30x] w-[27px] text-aquamarine" />
                          <p className="text-base font-normal">
                            {job?.prefecture?.title}
                            {job?.city}
                            {job?.address}
                          </p>
                        </div>

                        <div className="flexItemsCenter mb-4">
                          <CurrencyYenIcon className="mr-2 h-[30px] w-[27px] text-aquamarine" />
                          <p className="text-base font-normal">
                            <span className="font-bold">{`${job?.hourly_wage.toLocaleString()}`}</span>
                            円/1時給
                          </p>
                        </div>
                      </div>

                      <div className="mb-8 md:mb-0 md:mt-9">
                        <div className="flex items-center gap-2 border-b border-b-lightSilver md:border-hidden">
                          <p className="text-md font-bold md:text-base ">
                            作業内容
                          </p>
                        </div>
                        <p className="mt-2 w-full pb-1.5 text-justify text-xs font-normal md:text-base">
                          {job?.work_content}
                        </p>

                        <div className="mt-4 flex items-center gap-2  border-b border-b-lightSilver md:border-hidden">
                          <p className="text-md font-bold md:text-base">
                            作業内容詳細
                          </p>
                        </div>
                        <div className="mt-[8px] h-[auto] w-full max-w-[532px] md:mt-0 md:h-[621px]">
                          <p className="text-xs font-normal md:text-base">
                            {job?.work_details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-[60px] md:mt-0 md:flex md:w-1/2 md:justify-center">
                  <DetailCard file_id={job?.image[0]?.file_id} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <ListOfJobSeekers
            pageJobSeekers={pageJobSeekers}
            setPageJobSeekers={setPageJobSeekers}
            totalItems={jobSeekers?.totalItems || 0}
            LJobSeekers={jobSeekers?.items || []}
            handleRouter={handleRouter}
          />
        )}
      </div>

      <Notification
        notification={notification}
        setNotification={setNotification}
      />
    </>
  );
}
