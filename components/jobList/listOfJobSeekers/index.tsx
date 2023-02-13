'use client'
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { UserIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { LJobSeekers } from '../../../types/jobsList';
import Pagination from '../../pagination';
import Drawer from '../drawerJobSeeker';

interface IListOfJobSeekers {
  LJobSeekersMock: LJobSeekers[];
  handleRouter: () => void
}
const ListOfJobSeekers = ({ LJobSeekersMock, handleRouter }: IListOfJobSeekers) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerContent, setDrawerContent] = useState<LJobSeekers>()


  const handleDivClick = (content: LJobSeekers) => {
    setDrawerContent(content)
    setShowDrawer(true)
  }
  return (
    <>
      <div className="container-responsive pb-[72px] md:pb-0 ">
        <div className=" mb-9 md:mb-0 md:pt-3"  >
          <div className="text-sm font-medium text-center text-gray-500 border-b border-b-lightSilver ">
            <ul className=" flex md:justify-start -mb-px">
              <li className="mr-2  w-1/2 md:w-auto cursor-pointer" onClick={handleRouter}>
                <div className="inline-block p-2 md:px-16 rounded-t-lg active hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  <p>求人詳細</p>
                </div>
              </li>
              <li className="mr-2 border-b-2 border-[#FF6666] w-1/2 md:w-auto" >
                <div className="inline-block p-2 md:px-16 border-b-2 border-transparent rounded-t-lg  dark:text-blue-500 dark:border-blue-500" aria-current="page">
                  <div className='relative'>
                    求職者一覧
                    <div className='absolute top-0 -right-8 w-[27px] h-[17px] px-2 rounded-[8.5px] bg-[#FF6666] text-white md:flex md:items-center md:justify-center'>
                      <p className='text-[14px] leading-4'>
                        46
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block mb-10 md:mb-8 sm:flex sm:items-center sm:gap-2.5 mt-[67px]">
          <div className="w-full flex flex-col justify-start align-center md:flex-row md:justify-end md:items-center	 gap-x-2.5 text-xs font-normal leading-[17px]">
            <Pagination />
          </div>
        </div>

        <div className=" grid h-[340px] gap-y-7 overflow-y-scroll md:overflow-y-hidden md:h-auto grid-cols-1 gap-x-4 sm:mt-3 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-8">

          {LJobSeekersMock.map((jobSeeker) => {
            return (
              <>
                <div className="h-auto p-6 md:gap-6 flex justify-between md:rounded-[5px] bg-white hover:drop-shadow-md" onClick={() => handleDivClick(jobSeeker)}>
                  <div className="flex flex-col gap-y-2">

                    <div className="flex items-center gap-x-1">
                      <div>
                        <UserIcon width={16} height={16} />
                      </div>
                      <p className='font-bold text-base'>{jobSeeker.name}</p>
                    </div>

                    <div className='flex items-center gap-x-1 '>
                      <div>
                        <EnvelopeIcon width={16} height={16} />
                      </div>
                      <p className='text-xs'>{jobSeeker.mail}</p>

                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>

        <div className=" hidden md:block mb-10 md:mb-8 sm:flex sm:items-center sm:gap-2.5 mt-10">
          <div className="w-full flex flex-col justify-start align-center md:flex-row md:justify-end md:items-center	 gap-x-2.5 text-xs font-normal leading-[17px]">
            <Pagination />
          </div>
        </div>
        {showDrawer && <Drawer setShowDrawer={setShowDrawer} drawerContent={drawerContent} showDrawer={showDrawer} />}

      </div>

    </>
  )
}

export default ListOfJobSeekers