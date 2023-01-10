import Image from 'next/image';
import React from 'react';
import { ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';


function DetailCard() {
  return (
    <div className="flexCol w-full md:h-[518px] md:top-0 md:sticky md:bg-[#F4F4F4] md:shadow-2xl md:rounded-[5px]">

      <Image
        src='/images/img1.png'
        alt="image1"
        width={300}
        height={200}
        className="w-full h-[200px] object-cover md:rounded-t-[5px]"
      />

    
      <div className="flexCol h-56 py-5 md:px-4 md:h-36">

        <div className="font-bold md:hidden">
          <p className="text-[10px]">
            BnA_WALLのアルバイト・パート情報
          </p>
          <p className="text-base">
            アートホテルのフロントstaff♪→アートとオシャレが融合したホテルで、フロント業務全般をお願いします
          </p>
        </div>

        <div className="flex h-20 bg-[#F7F7F7] px-4 py-3 border-2 border-[aquamarine] border-solid rounded-xl md:h-36">

          <div className="relative h-14 w-14 mr-5 px-3 py-3 bg-antiFlashWhite rounded-md md:w-20 md:h-20 md:text-sm">
            <div className="font-normal flex flex-col items-center ">
              <p className="text-lg">21</p>
              <p className="text-[10px]	">水</p>
            </div>
            <p className="absolute top-0 left-0 text-[8px] bg-aquamarine w-5 h-5 p-1 md:w-6 md:h-6 md:text-sm">12</p>
          </div>

          <div className="flexCol font-bold">

            <div className="flexItemsCenter w-56">
              <ClockIcon className="h-4 w-4 mb-6" />
              <div className="flex-row flex ml-1.5 md:flex-col">
                <p className="">2022/12/21(水)</p>
                <p className="font-normal ml-1.5">9:00〜18:00</p>
              </div>
            </div>

            <div className="flexItemsCenter">
              <CurrencyDollarIcon className="h-4 w-4" />
              <p className="ml-1.5">1,250円/1時間</p>
            </div>

          </div>

        </div>

      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10 w-full px-8 py-7 bg-[#fff] md:bg-[#F4F4F4] md:static md:pt-0 md:rounded-[5px]">
        <div className="flexCenter flex-col">
          <p className="text-xs mb-2 font-medium md:text-base md:mb-3">\最短30秒! カンタン入力！/</p>
          <button className="text-white rounded-[40px] bg-pastelRed py-4 px-16 text-lg font-bold">
            この求人に応募する
          </button>
        </div>
      </div>

    </div>
  );
}

export default DetailCard;
