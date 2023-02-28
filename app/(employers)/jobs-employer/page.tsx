'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { PlusIcon } from '@heroicons/react/24/solid';

import CardJob from '../../../components/jobList/cardJob';
import Pagination from '../../../components/pagination';
import FooterMobile from '../../../components/serchJobs/footerMobile';
import { TLJobDetail } from '../../../types/jobsList';
import { getItemListJobs } from '../../../utils/apis';

const itemsPerPage = 6;

export default function JobDetails() {
  const router = useRouter();
  const [jobs, setJobs] = useState<TLJobDetail[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    if (totalItems % itemsPerPage === 0) {
      return totalItems / itemsPerPage;
    }
    return Math.round(totalItems / itemsPerPage + 0.5);
  }, [totalItems]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    router.refresh();
  }, []);

  useEffect(() => {
    (async function () {
      try {
        const res = await getItemListJobs({
          page: currentPage,
          per_page: itemsPerPage,
        });

        if (res.data) {
          setJobs(res.data.items);
          setTotalItems(res.data.totalItems);
        }
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, [currentPage]);

  const handleRouter = () => {
    router.push('/jobs-employer/job-registration');
  };

  return (
    <>
      <div className="bg-antiFlashWhite">
        <div className="container-responsive mt-8 pb-16 pt-2.5 sm:pb-20  md:mt-0 ">
          <div className="mb-10 mt-[30px] flex justify-end md:mb-14">
            <button
              type="button"
              className="mr-2 mb-2
          rounded-lg bg-[#FF6666] px-5 py-2.5 text-sm font-medium 
          text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 
          dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleRouter}
            >
              <div className="flex">
                <PlusIcon width={22} height={22} />
                <p>新規求人登録</p>
              </div>
            </button>
          </div>
          <div className="mb-10 sm:flex sm:items-center sm:gap-2.5 md:mb-16">
            <div className="align-center flex w-full flex-col justify-center gap-x-2.5 text-xs font-normal leading-[17px] md:flex-row md:items-center md:justify-between">
              <p className="text-sm ">
                <span className="text-lg font-bold">４</span>
                件の求人が登録されています
              </p>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:mt-3 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-8">
            {jobs[0] &&
              jobs.map((job) => <CardJob key={job.id} job={job} />)}
          </div>

          <div className="sm:flex sm:items-center sm:gap-2.5 md:mt-[48px]">
            <div className="flex w-full justify-center gap-x-2.5 text-xs font-normal leading-[17px] md:justify-end">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <FooterMobile />
      </div>
    </>
  );
}
