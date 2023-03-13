import { SetStateAction, useCallback } from 'react';

import dayjs from 'dayjs';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  ClockIcon,
  CurrencyYenIcon,
  ExclamationCircleIcon,
  MapPinIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import {
  EMessageError,
  EType,
  TFieldValueConvert,
  TNotification,
} from '../../types';
import { addJobSeekers } from '../../utils/apis';
import { getMonthDayCardJob, getTimeCardJob } from '../../utils/getDay';
import { getDayOfWeek } from '../helpers';

interface TJobModalProps {
  job_id: string;
  setNotification: React.Dispatch<SetStateAction<TNotification>>;
  handleCloseModal: () => void;
  job?: TFieldValueConvert;
}

interface FormValueProps {
  email: string;
  name: string;
  self_promotion: string;
}

function JobModal({
  handleCloseModal,
  job,
  job_id,
  setNotification,
}: TJobModalProps) {
  const formik = useFormik<FormValueProps>({
    initialValues: {
      email: '',
      name: '',
      self_promotion: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email().required('Required'),
      self_promotion: Yup.string().required('Required'),
    }),
    onSubmit: (data) => {
      dataAddJobSeekers(data);
    },
  });

  const dataAddJobSeekers = useCallback(
    async (data: FormValueProps) => {
      try {
        const res = await addJobSeekers({
          job_id,
          ...data,
        });

        if (res.data) {
          setNotification({
            open: true,
            type: EType.SUCCESS,
            message: 'Success',
          });

          handleCloseModal();
        }
      } catch (error) {
        setNotification({
          open: true,
          type: EType.ERROR,
          message: EMessageError.ERR_01,
        });
      }
    },
    [handleCloseModal, job_id, setNotification]
  );

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-30 h-auto overflow-y-auto bg-blackRgba p-4 pb-10 opacity-100">
      <div className="relative mx-auto mt-10 rounded-3xl bg-white px-8 pt-9 pb-10 md:max-w-[60.9375rem] md:px-[6.56rem]">
        <XMarkIcon
          onClick={handleCloseModal}
          className="absolute top-3 right-3 h-7 w-7"
        />
        <p className="text-xs	font-bold md:text-lg">働くところの情報</p>

        <div className="flexCol borderModal mt-2 h-44 p-3 font-bold md:h-auto md:px-0 lg:flex-row">
          <div className="flexCol h-[4.5rem]">
            <p className="text-[0.625rem] md:text-sm"> {job?.job_title}</p>
            <p className="text-xs md:w-[28.875rem] md:text-sm">
              {job?.sub_title}
            </p>
          </div>

          <div className="flex h-[4.5rem] md:h-full md:pt-3">
            <div className="mr-2 flex h-[4.625rem] flex-col justify-between lg:pt-1">
              <ClockIcon className="h-[1.125rem] w-[1.125rem] text-aquamarine" />
              <MapPinIcon className="h-[1.125rem] w-[1.125rem] text-aquamarine" />
              <CurrencyYenIcon className="h-[1.125rem] w-[1.125rem] text-aquamarine" />
            </div>
            <div className="mr-2 flex h-[4.8rem] flex-col justify-between">
              <div className="flex text-sm">
                <p className="mr-3 font-bold lg:text-lg">
                  {getMonthDayCardJob(dayjs(job?.start_work_date))}(
                  {getDayOfWeek(job?.start_work_date)})
                </p>
                <p className="font-normal lg:text-lg lg:font-bold">{`${getTimeCardJob(
                  dayjs(job?.start_work_date)
                )}〜${getTimeCardJob(dayjs(job?.end_work_date))}`}</p>
              </div>
              <p className="text-xs font-normal md:text-sm">
                {job?.prefecture?.title}
                {job?.city}
                {job?.address}
              </p>
              <p className="text-sm font-normal">
                <span className="text-base font-bold md:text-base md:font-bold">{`${job?.hourly_wage.toLocaleString()}`}</span>
                円/1時間
              </p>
            </div>
          </div>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flexCol gap-16 md:gap-2 "
        >
          <div className="h-[19.75rem] pt-3 md:h-[21rem] md:px-10">
            <div className="relative">
              <div className="text-xs font-bold">
                <label htmlFor="name" className="lg:text-base">
                  お名前
                </label>
                <span className="text-pastelRed">（必須）</span>
              </div>
              <input
                name="name"
                id="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="お名前を記入してください"
                className={`${
                  formik.touched.name && formik.errors.name
                    ? 'border-red'
                    : 'border-argent hover:border-aquamarine'
                } input-field solid mt-1`}
              />
              {formik.touched.name && formik.errors.name && (
                <ExclamationCircleIcon className="absolute top-7 right-2 h-6 w-6 text-red lg:top-10" />
              )}
            </div>
            <div className="relative mt-4">
              <div className="text-xs font-bold">
                <label htmlFor="email" className="lg:text-base">
                  メールアドレス
                </label>
                <span className="text-pastelRed">（必須）</span>
              </div>
              <input
                name="email"
                id="email"
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="メールアドレス"
                className={`${
                  formik.touched.email && formik.errors.email
                    ? 'border-red'
                    : 'border-argent hover:border-aquamarine'
                } input-field solid  mt-1`}
              />
              {formik.touched.email && formik.errors.email && (
                <ExclamationCircleIcon className="absolute top-7 right-2 h-6 w-6 text-red lg:top-10" />
              )}
            </div>
            <div className="mt-4">
              <div className="text-xs font-bold">
                <label htmlFor="self_promotion" className="lg:text-base">
                  自己PR
                </label>
                <span className="text-pastelRed ">（必須）</span>
              </div>
              <textarea
                name="self_promotion"
                id="self_promotion"
                value={formik.values.self_promotion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows={5.5}
                cols={20}
                className={`${
                  formik.touched.self_promotion && formik.errors.self_promotion
                    ? 'border-red'
                    : 'border-argent hover:border-aquamarine'
                } input-field solid mt-1 h-[7.7rem] resize-none`}
              />
            </div>
          </div>
          <div className="flexCol h-[10.25rem] md:h-[7.8rem]">
            <p className="text-[0.625rem] font-normal md:m-auto md:w-[419px] md:pb-1 md:text-sm">
              「応募する」ボタンを押すことで、 利用規約及び
              <a
                className="text-red"
                href="https://www.hexabase.com/privacy-policy/"
                target="_blank"
                rel="noreferrer"
              >
                プライバシーポリシー
              </a>
              に同意したものとみなします。
            </p>
            <div className="md:flex md:h-14 md:flex-row-reverse md:gap-10 md:px-10">
              <button
                disabled={!formik.isValid}
                className={`${
                  formik.isValid ? 'bg-pastelRed' : 'bg-spanishGray'
                } mb-4 h-14 w-full rounded-[40px] text-lg font-bold text-antiFlashWhite transition-all duration-500 ${
                  formik.isValid
                    ? 'hover:bg-jellyBean'
                    : 'cursor-not-allowed hover:bg-argent'
                }`}
                type="submit"
              >
                <span>応募する</span>
              </button>
              <button
                className="relative h-[3rem] w-full rounded-[50px]	bg-chineseWhite py-3.5 text-center transition-all duration-500 hover:bg-argent md:h-14"
                onClick={handleCloseModal}
              >
                <XMarkIcon className="absolute top-[30%] left-[5%] h-5 w-5 lg:top-[28%] lg:left-[10%] lg:h-[1.625rem] lg:w-[1.625rem]" />
                <span className="text-sm font-normal md:text-lg">
                  キャンセル
                </span>
                <h1></h1>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobModal;
