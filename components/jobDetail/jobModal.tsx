import { ClockIcon, MapPinIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { CurrencyYenIcon } from '@heroicons/react/24/solid';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { TJobModalProps } from '../../types/jobs/jobDetail';
import { getDay } from '../../utils/getDay';

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
    <div className="fixed top-0 left-0 z-10 h-full w-full bg-gray p-4">
      <div className="relative h-full bg-antiFlashWhite px-8 pt-9 pb-14 md:m-auto md:max-w-[61rem] md:px-[6.56rem] ">
        <XMarkIcon
          onClick={handleCloseModal}
          className="absolute top-0 right-0 mt-3 mr-3 h-7 w-7"
        />
        <p className="text-xs	font-bold md:text-lg">働くところの情報</p>

        <div className="flexCol borderModal mt-2 h-44 p-3 font-bold md:h-[7.6rem] md:flex-row">
          <div className="flexCol h-[4.5rem]">
            <p className="md:text- text-[0.625rem]">BnA_WALL</p>
            <p className="text-xs md:w-[28.875rem] md:text-sm">
              アートホテルのフロントstaff♪→アートとオシャレが融合したホテルで、フロント業務全般をお願いします
            </p>
          </div>
          <div className="flexCol h-[4.5rem] md:h-full md:pt-3">
            <div className="flexCenter w-52 text-sm md:w-[16.22rem] md:text-lg">
              <ClockIcon className="h-[1.125rem] w-[1.125rem] text-aquamarine" />
              <p className="">{`${job.date.format('YYYY/MM/DD')}(${getDay(
                job.date
              )})`}</p>
              <p className="font-normal">{`${job.time_start}~${job.time_end}`}</p>
            </div>
            <div className="flexCenter w-[13.5rem] md:w-[16rem]">
              <MapPinIcon className="h-[1.125rem] w-[1.125rem] text-aquamarine" />
              <p className="text-xs font-normal md:text-sm">
                東京都中央区日本橋大伝馬町１−１
              </p>
            </div>
            <div className="flexCenter md: w-[7rem] md:w-[7.35rem]">
              <CurrencyYenIcon className="h-[1.125rem] w-[1.125rem] text-aquamarine" />
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
            <div>
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
                placeholder="お名前を記入してください"
                className="inputModal"
              />
              <p className="text-[0.625rem] font-medium text-pastelRed">
                {formik.errors && formik.errors.name}
              </p>
            </div>
            <div className="mt-4">
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
                placeholder="メールアドレス"
                className="inputModal"
              />
              <p className="text-[0.625rem] font-medium text-pastelRed">
                {formik.errors && formik.errors.email}
              </p>
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
                rows={5.5}
                cols={20}
                className="inputModal h-[7.7rem] "
              />
              <p className="text-[0.625rem] font-medium text-pastelRed">
                {formik.errors && formik.errors.ownPR}
              </p>
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
