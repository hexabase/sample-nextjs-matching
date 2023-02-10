'use client'
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { UserIcon, } from '@heroicons/react/24/solid';
import { LJobSeekers } from '../../../types/jobsList';
import Pagination from '../../pagination';

interface IListOfJobSeekers {
  LJobSeekersMock: LJobSeekers[]
  handleRouter: () => void
}
const ListOfJobSeekers = ({ LJobSeekersMock, handleRouter }: IListOfJobSeekers) => {
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

        <div className=" grid gap-y-7 grid-cols-1 gap-x-4 sm:mt-3 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-8">

          {LJobSeekersMock.map((jobSeeker) => {
            return (
              <>
                <button type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
                  <div className="h-auto p-6 md:gap-6 flex justify-between md:rounded-[5px] bg-white hover:drop-shadow-md">
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
                </button>
                <div id="drawer-example" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" aria-labelledby="drawer-label">
                  <h5 id="drawer-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>Info</h5>
                  <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close menu</span>
                  </button>
                  <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="#" className="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <a href="#" className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more</a>
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get access <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
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

      </div>

    </>
  )
}

export default ListOfJobSeekers