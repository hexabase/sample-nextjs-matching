'use client';

import { SetStateAction, useMemo, useState } from 'react';

import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/solid';

import { LJobSeekers } from '../../../types/jobsList';
import Pagination from '../../pagination';
import Drawer from '../drawerJobSeeker';

const itemsPerPage = 6;

interface IListOfJobSeekers {
  totalItems: number;
  LJobSeekers: LJobSeekers[];
  pageJobSeekers: number;
  setPageJobSeekers: React.Dispatch<SetStateAction<number>>;
  handleRouter: () => void;
}

const ListOfJobSeekers = ({
  totalItems,
  LJobSeekers,
  pageJobSeekers,
  setPageJobSeekers,
  handleRouter,
}: IListOfJobSeekers) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerContent, setDrawerContent] = useState<LJobSeekers>();

  const totalPages = useMemo(() => {
    if (totalItems % itemsPerPage === 0) {
      return totalItems / itemsPerPage;
    }
    return Math.round(totalItems / itemsPerPage + 0.5);
  }, [totalItems]);

  const handleDivClick = (content: LJobSeekers) => {
    setDrawerContent(content);
    setShowDrawer(true);
  };

  const handlePageChange = (page: number) => {
    setPageJobSeekers(page);
  };

  return (
    <>
      <div className="container-responsive pb-[72px] md:pb-0 ">
        <div className=" mb-9 md:mb-0 md:pt-3">
          <div className="text-gray-500 border-b border-b-lightSilver text-center text-sm font-medium ">
            <ul className=" -mb-px flex md:justify-start">
              <li
                className="mr-2  w-1/2 cursor-pointer md:w-auto"
                onClick={handleRouter}
              >
                <div className="active hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 inline-block rounded-t-lg p-2 md:px-16">
                  <p>求人詳細</p>
                </div>
              </li>
              <li className="mr-2 w-1/2 border-b-2 border-[#FF6666] md:w-auto">
                <div
                  className="inline-block rounded-t-lg border-b-2 border-transparent p-2 dark:border-blue-500  dark:text-blue-500 md:px-16"
                  aria-current="page"
                >
                  <div className="relative">
                    求職者一覧
                    <div className="absolute top-0 -right-8 h-[17px] w-[27px] rounded-[8.5px] bg-[#FF6666] px-2 text-white md:flex md:items-center md:justify-center">
                      <p className="text-[14px] leading-4">{totalItems}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-10 mt-[67px] hidden sm:flex sm:items-center sm:gap-2.5 md:mb-8 md:block">
          <div className="align-center flex w-full flex-col justify-start gap-x-2.5 text-xs font-normal	 leading-[17px] md:flex-row md:items-center md:justify-end">
            <Pagination
              currentPage={pageJobSeekers}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>

        <div className=" grid h-[340px] grid-cols-1 gap-y-7 gap-x-4 overflow-y-scroll sm:mt-3 md:h-auto md:overflow-y-hidden lg:grid-cols-3 lg:gap-x-10 lg:gap-y-8">
          {LJobSeekers &&
            LJobSeekers[0] &&
            LJobSeekers.map((jobSeeker) => {
              return (
                <div
                  key={jobSeeker.i_id}
                  className="flex h-auto justify-between bg-white p-6 hover:drop-shadow-md md:gap-6 md:rounded-[5px]"
                  onClick={() => handleDivClick(jobSeeker)}
                >
                  <div className="flex flex-col gap-y-2">
                    <div className="flex items-center gap-x-1">
                      <div>
                        <UserIcon width={16} height={16} />
                      </div>
                      <p className="text-base font-bold">{jobSeeker.name}</p>
                    </div>

                    <div className="flex items-center gap-x-1 ">
                      <div>
                        <EnvelopeIcon width={16} height={16} />
                      </div>
                      <p className="text-xs">{jobSeeker.email}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className=" mb-10 mt-10 hidden sm:flex sm:items-center sm:gap-2.5 md:mb-8 md:block">
          <div className="align-center flex w-full flex-col justify-start gap-x-2.5 text-xs font-normal	 leading-[17px] md:flex-row md:items-center md:justify-end">
            <Pagination
              currentPage={pageJobSeekers}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        {showDrawer && drawerContent && (
          <Drawer setShowDrawer={setShowDrawer} drawerContent={drawerContent} />
        )}
      </div>
    </>
  );
};

export default ListOfJobSeekers;
