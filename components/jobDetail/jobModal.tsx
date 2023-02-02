import {
  ClockIcon,
  ExclamationCircleIcon,
  MapPinIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import { CurrencyYenIcon } from '@heroicons/react/24/solid';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { getDay } from '../../utils/getDay';
import { TJobDetail } from '../../types/jobs';

type TJobModalProps = {
  handleCloseModal: () => void;
  job: TJobDetail;
};

function JobModal({ handleCloseModal, job }: TJobModalProps) {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      ownPR: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required')
        .min(4, 'Must be 4 characters or more'),
      email: Yup.string()
        .required('Required')
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          'Please enter a valid email address'
        ),
      ownPR: Yup.string().required('Required'),
    }),
    onSubmit: (values: unknown) => {
      window.alert('Form submited');
      console.log('============= value', values);
    },
  });

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-30 flex items-center justify-center  bg-blackRgba p-[1.0625rem] opacity-100">
      <div className="relative h-auto rounded-[1.875rem] bg-white px-8 pt-9 pb-10 md:max-w-[60.9375rem] md:px-[6.56rem]">
        <XMarkIcon
          onClick={handleCloseModal}
          className="absolute top-0 right-0 mt-3 mr-3 h-7 w-7"
        />
        <p className="text-xs	font-bold md:text-lg">働くところの情報</p>

        <div className="flexCol borderModal mt-2 h-44 p-3 font-bold md:h-auto lg:flex-row">
          <div className="flexCol h-[4.5rem]">
            <p className="md:text- text-[0.625rem]">BnA_WALL</p>
            <p className="text-xs md:w-[28.875rem] md:text-sm">
              アートホテルのフロントstaff♪→アートとオシャレが融合したホテルで、フロント業務全般をお願いします
            </p>
          </div>
    
          <div className="flex h-[4.5rem] md:h-full md:pt-3">
            <div className="mr-2 flex h-[4.625rem] flex-col justify-between">
              <ClockIcon className="h-[1.125rem] w-[1.125rem] text-aquamarine" />
              <MapPinIcon className="h-[1.125rem] w-[1.125rem] text-aquamarine" />
              <CurrencyYenIcon className="h-[1.125rem] w-[1.125rem] text-aquamarine" />
            </div>
            <div className="mr-2 flex h-[4.8rem] flex-col justify-between">
              <div className="flex text-sm">
                <p className="mr-3 font-bold">{`${job.date.format(
                  'YYYY/MM/DD'
                )}(${getDay(job.date)})`}</p>
                <p className="font-normal">{`${job.start_time}~${job.end_time}`}</p>
              </div>
              <p className="text-xs font-normal md:text-sm">
                東京都中央区日本橋大伝馬町１−１
              </p>
              <p className="text-xs font-normal ">
                <span className="text-base font-bold md:text-base md:font-bold">{`${job.price.toLocaleString()}`}</span>
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
                <label htmlFor="name">お名前</label>
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
                } input-field solid`}
              />
              {formik.touched.name && formik.errors.name && (
                <ExclamationCircleIcon className="absolute top-7 right-2 h-6 w-6 text-red" />
              )}
            </div>
            <div className="relative mt-4">
              <div className="text-xs font-bold">
                <label htmlFor="email">メールアドレス</label>
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
                } input-field solid`}
              />
              {formik.touched.email && formik.errors.email && (
                <ExclamationCircleIcon className="absolute top-7 right-2 h-6 w-6 text-red" />
              )}
            </div>
            <div className="mt-4">
              <div className="text-xs font-bold">
                <label htmlFor="ownPR">自己PR</label>
                <span className="text-pastelRed ">（必須）</span>
              </div>
              <textarea
                name="ownPR"
                id="ownPR"
                value={formik.values.ownPR}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows={5.5}
                cols={20}
                className={`${
                  formik.touched.ownPR && formik.errors.ownPR
                    ? 'border-red'
                    : 'border-argent hover:border-aquamarine'
                } input-field solid h-[7.7rem]`}
              />
            </div>
          </div>
          <div className="flexCol h-[10.25rem] md:h-[7.8rem]">
            <p className="text-[0.625rem] font-normal md:m-auto md:w-[419px] md:pb-1 md:text-sm">
              「応募する」ボタンを押すことで、
              利用規約及びプライバシーポリシーに同意したものとみなします。
            </p>
            <div className="md:flex md:h-14 md:gap-10 md:px-10">
              <button
                disabled={!formik.isValid}
                className={`${
                  formik.isValid ? 'bg-pastelRed' : 'bg-spanishGray'
                } mb-4 h-14 w-full rounded-[40px] text-lg	font-bold text-antiFlashWhite`}
                type="submit"
              >
                応募する
              </button>
              <p
                className="relative h-[3rem] w-full rounded-[50px] bg-spanishGray py-3.5 text-center md:h-14"
                onClick={handleCloseModal}
              >
                <XMarkIcon className="absolute top-[20%] left-[5%] h-7 w-7" />
                <span className="text-sm font-normal"> キャンセル</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobModal;
