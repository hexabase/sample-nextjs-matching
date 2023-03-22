'use client';

import { useEffect, useState } from 'react';

import { BriefcaseIcon } from '@heroicons/react/20/solid';
import { CurrencyYenIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { nl2br } from 'react-js-nl2br';

import BackToHome from '../../../../components/common/backToHome';
import BackToJobs from '../../../../components/common/backToJobs';
import Notification from '../../../../components/common/notification';
import Apply from '../../../../components/jobDetail/apply';
import DetailCard from '../../../../components/jobDetail/detailCard';
import JobModal from '../../../../components/jobDetail/jobModal';
import {
  EMessageError,
  EType,
  TFieldValueConvert,
  TNotification,
} from '../../../../types';
import { getItemDetails } from '../../../../utils/apis';

interface JobDetailsProps {
  params: {
    id: string;
  };
}

function JobDetails({ params: { id } }: JobDetailsProps) {
  const [notification, setNotification] = useState<TNotification>({
    open: false,
  });
  const [job, setJob] = useState<TFieldValueConvert>();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal: () => void = () => {
    setOpenModal(true);
    const html = document.getElementsByTagName('html')[0];
    html.classList.add('htmlHidden');
  };

  const handleCloseModal: () => void = () => {
    setOpenModal(false);
    const html = document.getElementsByTagName('html')[0];
    html.classList.remove('htmlHidden');
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

  useEffect(() => {
    getDataItemDetail(id);
  }, [id]);

  return (
    <>
      <div className="container-responsive ">
        <div className="flexCenter py-4 text-xs font-normal md:border-b md:border-b-lightSilver md:py-5 md:text-base">
          <BackToJobs />
          <BackToHome />
        </div>
      </div>

      <div className="md:container-responsive md:flex md:flex-row-reverse md:py-11">
        <div className="container-responsive flex flex-col-reverse justify-between pb-20 md:mx-0 md:flex-row md:gap-10 md:px-0">
          <div className="w-full pt-2.5">
            <div className="md:flexCol hidden h-20 md:h-[135px]">
              <p className="text-[10px] font-normal md:text-lg">
                {job?.sub_title}
              </p>
              <p className="h-12 text-base font-bold md:h-20 md:text-2xl">
                {job?.job_title}
              </p>
            </div>
            <div className="mt-4 md:mt-14">
              <div className="flex items-center  gap-2">
                <BriefcaseIcon className="h-[18px] w-[18px]" />
                <p className="text-md font-bold md:text-lg">作業内容</p>
              </div>
              <p className="w-full pt-3 pb-7 text-justify text-xs font-normal md:text-lg">
                {job?.work_content}
              </p>

              <div className="relative mt-4 w-full">
                <p className="absolute top-[-15px] left-[-7px] z-10 rotate-[-9deg] select-none font-segoe text-2xl font-bold text-aquamarine md:top-0 md:left-3">
                  Enjoy work
                </p>
                <div className="border-mask z-10 w-full bg-antiFlashWhite px-6 pb-7 pt-14">
                  <p className="text-xs font-normal md:text-base">
                    {nl2br(job?.work_details)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 font-bold md:border-b md:border-b-lightSilver md:pb-6">
              <div className="flexItemsCenter mb-4 ">
                <CurrencyYenIcon className="mr-2 h-[18px] w-[18px]" />
                <p className="text-md md:text-lg">時給</p>
              </div>
              <div className="flex items-baseline gap-1">
                <p className="text-2xl md:text-3xl">{`${job?.hourly_wage.toLocaleString()}`}</p>
                <p className="text-xs font-normal md:text-base">円</p>
              </div>
            </div>
            <div className="mt-8">
              <div className="flexItemsCenter mb-4">
                <MapPinIcon className="mr-2 h-[18px] w-[18px]" />
                <p className="text-md font-bold md:text-lg">働く場所</p>
              </div>
              <p className="text-xs font-normal md:text-base">
                {job?.prefecture?.title}
                {job?.city}
                {job?.address}
              </p>
            </div>

            <div className="py-[1.875rem] text-center md:hidden">
              <Apply handleOpenModal={handleOpenModal} />
            </div>
          </div>

          <div className="md:w-[25rem]">
            <DetailCard handleOpenModal={handleOpenModal} job={job} />
          </div>
        </div>
        {openModal && (
          <JobModal
            handleCloseModal={handleCloseModal}
            job={job}
            job_id={job?.id}
            setNotification={setNotification}
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

export default JobDetails;
