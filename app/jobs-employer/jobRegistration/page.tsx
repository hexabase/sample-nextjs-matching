'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Formik } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

import Button from '../../../components/button';
// import { SchemaEmail } from '../Schema';

interface FormValues {
  email: string;
  title: string;
  subtitle: string;
  picture: string;
  workStartTime: string;
  workEndTime: string;
  postCode: string;
  prefectures: string;
  municipalities: string;
  streetNumber: string;
  workContent: string;
  workDetail: string;
  hourlyWage: string;
}

export default function RegisterPage() {
  const router = useRouter();

  const handleRouter = () => {
    router.push('/auth/register-confirm');
  };

  return (
    <div className=' flex  justify-center p-[1.0625rem] opacity-100'>

      <div className='relative h-auto rounded-[1.875rem] bg-white px-8 pt-9 pb-10 md:max-w-[60.9375rem] md:px-[6.56rem]'>
        <Formik
          initialValues={{
            email: '',
            title: '',
            subtitle: '',
            picture: '',
            workStartTime: '',
            workEndTime: '',
            postCode: '',
            prefectures: '',
            municipalities: '',
            streetNumber: '',
            workContent: '',
            workDetail: '',
            hourlyWage: '',
          }}
          // validationSchema={SchemaEmail}
          onSubmit={(data: FormValues) => {
            handleRouter();
            alert('email: ' + data.email);
          }}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form
              className="mx-auto flex flex-col px-[0.625rem] pb-7 pt-8 md:w-[975px]"
              onSubmit={handleSubmit}
            >
              <div>

                <div className='grid gap-2'>
                  <div className="text-left">
                    <label className="text-sm font-bold">タイトル</label>
                    <span className="text-xs font-bold text-red">（必須）</span>
                  </div>
                  <div className="relative flex w-full flex-row md:w-[772px]">
                    <textarea
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="タイトルを記入してください"
                      className={`${touched.email && errors.email
                        ? 'border-red'
                        : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11 lg:mb-16 bg-[#CACACA]`}
                    />
                    {touched.email && errors.email && (
                      <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                    )}
                  </div>

                </div>

                <div className='grid gap-2'>
                  <div className="text-left">
                    <label className="text-sm font-bold">サブタイトル</label>
                    <span className="text-xs font-bold text-red">（必須）</span>
                  </div>
                  <div className="relative flex w-full flex-row md:w-[772px]">
                    <textarea
                      name="subtitle"
                      value={values.subtitle}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="サブタイトルを記入してください"
                      className={`${touched.email && errors.email
                        ? 'border-red'
                        : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11 lg:mb-16 bg-[#CACACA]`}
                    />
                    {touched.email && errors.email && (
                      <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                    )}
                  </div>

                </div>

                <div className='grid gap-2'>
                  <div className="text-left">
                    <label className="text-sm font-bold">作業開始時間</label>
                    <span className="text-xs font-bold text-red">（必須）</span>
                  </div>
                  <div className="relative flex w-full flex-row md:w-[772px]">
                    <input
                      type='file'
                      name="picture"
                      value={values.picture}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="日時を選んでください"
                      className={`${touched.email && errors.email
                        ? 'border-red'
                        : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11 lg:mb-16 bg-[#CACACA]`}
                    />
                    {touched.email && errors.email && (
                      <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                    )}
                  </div>

                </div>

                <div className='grid gap-2'>
                  <div className="text-left">
                    <label className="text-sm font-bold">作業開始時間</label>
                    <span className="text-xs font-bold text-red">（必須）</span>
                  </div>
                  <div className="relative flex w-full flex-row md:w-[294px]">
                    <input
                      type='date'
                      name="workStartTime"
                      value={values.workStartTime}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="日時を選んでください"
                      className={`${touched.email && errors.email
                        ? 'border-red'
                        : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11 lg:mb-16 bg-[#CACACA]`}
                    />
                    {touched.email && errors.email && (
                      <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                    )}
                  </div>

                </div>

                <div className='grid gap-2'>
                  <div className="text-left">
                    <label className="text-sm font-bold">作業終了時間</label>
                    <span className="text-xs font-bold text-red">（必須）</span>
                  </div>
                  <div className="relative flex w-full flex-row md:w-[294px]">
                    <input
                      type='date'
                      name="workEndTime"
                      value={values.workEndTime}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="日時を選んでください"
                      className={`${touched.email && errors.email
                        ? 'border-red'
                        : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11 lg:mb-16 bg-[#CACACA]`}
                    />
                    {touched.email && errors.email && (
                      <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                    )}
                  </div>

                </div>
              </div>

              <div>
                <div className='grid gap-2'>
                  <div className="text-left">
                    <label className="text-sm font-bold">郵便番号</label>
                    <span className="text-xs font-bold text-red">（必須）</span>
                  </div>
                  <div className="relative flex w-full flex-row md:w-[154px]">
                    <input
                      name="postCode"
                      value={values.postCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="タイトルを記入してください"
                      className={`${touched.email && errors.email
                        ? 'border-red'
                        : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11 lg:mb-16 bg-[#CACACA]`}
                    />
                    {touched.email && errors.email && (
                      <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                    )}
                  </div>

                </div>

                <div className='grid gap-2'>
                  <div className="text-left">
                    <label className="text-sm font-bold">都道府県</label>
                    <span className="text-xs font-bold text-red">（必須）</span>
                  </div>
                  <div className="relative flex w-full flex-row md:w-[194px]">
                    <input
                      name="prefectures"
                      value={values.prefectures}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="タイトルを記入してください"
                      className={`${touched.email && errors.email
                        ? 'border-red'
                        : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11 lg:mb-16 bg-[#CACACA]`}
                    />
                    {touched.email && errors.email && (
                      <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                    )}
                  </div>

                </div>

                <div className='grid gap-2'>
                  <div className="text-left">
                    <label className="text-sm font-bold">市区町村</label>
                    <span className="text-xs font-bold text-red">（必須）</span>
                  </div>
                  <div className="relative flex w-full flex-row md:w-[276px]">
                    <input
                      name="municipalities"
                      value={values.municipalities}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="タイトルを記入してください"
                      className={`${touched.email && errors.email
                        ? 'border-red'
                        : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11 lg:mb-16 bg-[#CACACA]`}
                    />
                    {touched.email && errors.email && (
                      <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                    )}
                  </div>

                </div>

                <div className='grid gap-2'>
                  <div className="text-left">
                    <label className="text-sm font-bold">番地・それ以降の住所</label>
                    <span className="text-xs font-bold text-red">（必須）</span>
                  </div>
                  <div className="relative flex w-full flex-row md:w-[744px]">
                    <input
                      name="streetNumber"
                      value={values.streetNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="タイトルを記入してください"
                      className={`${touched.email && errors.email
                        ? 'border-red'
                        : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11 lg:mb-16 bg-[#CACACA]`}
                    />
                    {touched.email && errors.email && (
                      <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                    )}
                  </div>

                </div>

                <div>
                  <div className='grid gap-2'>
                    <div className="text-left">
                      <label className="text-sm font-bold">作業内容</label>
                      <span className="text-xs font-bold text-red">（必須）</span>
                    </div>
                    <div className="relative flex w-full flex-row md:w-[772px]">
                      <textarea

                        name="workContent"
                        value={values.workContent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="作業内容を記入してください"
                        className={`${touched.email && errors.email
                          ? 'border-red'
                          : 'border-argent hover:border-aquamarine'
                          } input-field solid mb-11 lg:mb-16 bg-[#CACACA]`}
                      />
                      {touched.email && errors.email && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>

                  </div>

                  <div className='grid gap-2'>
                    <div className="text-left">
                      <label className="text-sm font-bold">作業内容詳細</label>
                      <span className="text-xs font-bold text-red">（必須）</span>
                    </div>
                    <div className="relative flex w-full flex-row md:w-[772px]">
                      <textarea

                        name="workDetail"
                        value={values.workDetail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="詳細な作業内容を記入してください"
                        className={`${touched.email && errors.email
                          ? 'border-red'
                          : 'border-argent hover:border-aquamarine'
                          } input-field solid mb-11 lg:mb-16 bg-[#CACACA]`}
                      />
                      {touched.email && errors.email && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>

                  </div>

                  <div className='grid gap-2'>
                    <div className="text-left">
                      <label className="text-sm font-bold">時給</label>
                      <span className="text-xs font-bold text-red">（必須）</span>
                    </div>
                    <div className="relative flex w-full flex-row md:w-[772px]">
                      <input
                        name="hourlyWage"
                        value={values.hourlyWage}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="金額を記入してください"
                        className={`${touched.email && errors.email
                          ? 'border-red'
                          : 'border-argent hover:border-aquamarine'
                          } input-field solid mb-11 lg:mb-16 bg-[#CACACA]`}
                      />
                      {touched.email && errors.email && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>

                  </div>
                </div>
              </div>
              <div className="w-full">
                <Button roundedFull disabled={!isValid}>
                  送信する
                </Button>
              </div>
            </form>
          )}
        </Formik>

      </div>
    </div>
  );
}
