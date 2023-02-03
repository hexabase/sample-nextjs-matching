import Tag from '../components/common/Tag';
import Toggle from '../components/common/Toggle';
import Pagination from '../components/pagination/pagination';
import CalendarInline from '../components/serchJobs/calendarInline';
import CardJob from '../components/serchJobs/cardJob';
import FooterMobile from '../components/serchJobs/footerMobile';
import { TJob } from '../types/jobs';

export default function Home() {
  const jobs: TJob[] = [
    {
      id: '1',
      imgUrl: '',
      jobName: 'CROSSROAD株式会社',
      des: '無料の賄い付き！1日3時間〜料理とサービスにこだわった空間でお客様をおもてなししましょう！',
      date: '2023/01/09',
      startTime: '14:00',
      endTime: '21:00',
      tags: ['12月21日(水)', '検品'],
      hourlyWage: 1250,
      jobDetail: 'ホールスタッフ、キッチンスタッフ',
      place: '東京都日野市百草629-7'
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
      jobDetail: 'ホールスタッフ、キッチンスタッフ',
      place: '東京都日野市百草629-7'
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
      jobDetail: 'ホールスタッフ、キッチンスタッフ',
      place: '東京都日野市百草629-7'
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
      jobDetail: 'ホールスタッフ、キッチンスタッフ',
      place: '東京都日野市百草629-7'
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
      jobDetail: 'ホールスタッフ、キッチンスタッフ',
      place: '東京都日野市百草629-7'
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
      jobDetail: 'ホールスタッフ、キッチンスタッフ',
      place: '東京都日野市百草629-7'
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
      jobDetail: 'ホールスタッフ、キッチンスタッフ',
      place: '東京都日野市百草629-7'
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
      jobDetail: 'ホールスタッフ、キッチンスタッフ',
      place: '東京都日野市百草629-7'
    },
  ];
  const tags = ['12月21日(水)', '検品'];

  return (
    <>
      {/* <div className="container-responsive h-[100px] py-[22px]">
        <CalendarInline />
      </div> */}

      <div className="bg-antiFlashWhite">
        <div className="container-responsive pb-16 pt-2.5 sm:pt-6 sm:pb-20 ">
          <div className='flex justify-end mb-14'>
            <button type="button" className="bg-[#FF6666] text-white
          focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 
          py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 
          focus:outline-none dark:focus:ring-blue-800">+ 新規求人登録</button>

          </div>
          <div className="mb-16 sm:flex sm:items-center sm:gap-2.5">
            <div className="w-full flex justify-between items-center	 gap-x-2.5 text-xs font-normal leading-[17px]">
              {/* <p>時給の高い順</p> */}
              <p>４件の求人が登録されています</p>
              <Pagination />
            </div>

            {/* <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-0">
              {tags[0] &&
                tags.map((tag, index) => (
                  <Tag
                    key={index}
                    tagName={tag}
                    closeTag={true}
                    className="bg-white text-xs font-normal leading-4"
                  />
                ))}
            </div> */}

          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:mt-3 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-8">
            {jobs[0] &&
              jobs.map((job, jobIndex) => <CardJob key={jobIndex} job={job} />)}
          </div>

          <div className="sm:flex sm:items-center sm:gap-2.5">
            <div className="w-full flex justify-end gap-x-2.5 text-xs font-normal leading-[17px]">
              {/* <p>時給の高い順</p> */}

              <Pagination />
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
