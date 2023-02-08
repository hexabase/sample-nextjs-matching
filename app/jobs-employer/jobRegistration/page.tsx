'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Formik } from 'formik';
import { ExclamationCircleIcon, } from '@heroicons/react/20/solid';
import { MapPinIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../../../components/button';
import BackToJobsList from '../../../components/common/backtoJobsList';
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
    <div className='bg-antiFlashWhite'>
      <div className='md:hidden border-b border-b-[#E1E1E1]'>
        <BackToJobsList />
      </div>

      <div className=' flex  justify-center p-[1.0625rem] opacity-100'>

        <div className='relative h-auto rounded-[1.875rem] bg-white px-8 pt-9 pb-10 md:w-[975px] md:mt-[75px] mb-[75px] md:mb-[85px]'>
          <Formik
            initialValues={{
              email: '',
              title: '',
              subtitle: '',
              picture: '',
              workStartTime: '日時を選んでください',
              workEndTime: '',
              postCode: '',
              prefectures: '',
              municipalities: '',
              streetNumber: '',
              workContent: '',
              workDetail: '',
              hourlyWage: '',
            }}

            onSubmit={(data: FormValues) => {
              handleRouter();
              alert('Check alert ');
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
                className="mx-auto flex flex-col gap-9 pb-7 md:w-[772px]"
                onSubmit={handleSubmit}
              >
                <div className='md:mt-[32px]'>
                  <div className='font-bold text-lg mb-2.5 text-center md:text-left'>新規求人登録</div>
                  <hr className='hidden md:block md:mb-[50px]' />
                  <div>
                    <div className="text-left">
                      <label className="text-sm font-bold">タイトル</label>
                      <span className="text-xs font-bold text-red">（必須）</span>
                    </div>
                    <div className="relative w-full md:w-[772px] ">
                      <textarea
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="タイトルを記入してください"
                        className={`${touched.email && errors.email
                          ? 'border-red'
                          : 'border-argent hover:border-aquamarine'
                          } input-field solid mb-11  lg:mb-9 bg-[#F9F9F9] resize-none	h-[124px]`}
                      />
                      {touched.title && errors.title && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>

                  </div>

                  <div >
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
                          } input-field solid mb-11  lg:mb-9 bg-[#F9F9F9] resize-none h-[124px]`}
                      />
                      {touched.subtitle && errors.subtitle && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>

                  </div>

                  <div className='grid gap-2 mb-11  lg:mb-9'>
                    <div className="text-left">
                      <label className="text-sm font-bold">作業開始時間</label>
                      <span className="text-xs font-bold text-red">（必須）</span>
                    </div>
                    <div className=" flex w-full flex-row md:w-[772px] h-[206px]">
                      <div className="flex w-full items-center justify-center bg-[#F9F9F9]">
                        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-[#808080] rounded-lg shadow-lg tracking-wide uppercase border-blue cursor-pointer ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="36" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                            <path
                              d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" /> </svg>
                          <span className="mt-2 text-base leading-normal text-[#808080]">メインの写真を載せる</span>
                          <button className='text-[10px] px-[15px] py-1.5 text-[#808080] bg-[#FFFFFF]'>画像をアップロード</button>

                        </label>
                      </div>


                    </div>

                  </div>

                  <div >
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
                          } input-field text-[#C1C1C1] solid mb-11  lg:mb-9 bg-[#F9F9F9]`}
                      />
                      {touched.workStartTime && errors.workStartTime && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>

                  </div>

                  <div >
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
                        className={`${touched.workEndTime && errors.workEndTime
                          ? 'border-red'
                          : 'border-argent hover:border-aquamarine'
                          } input-field text-[#C1C1C1] solid mb-11  lg:mb-9 bg-[#F9F9F9]`}
                      />
                      {touched.email && errors.email && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>

                  </div>
                </div>

                <div>
                  <div className='flex items-center mb-2.5'>
                    <MapPinIcon width={15} height={15} />
                    <p className='font-bold text-sm'>働く場所</p>
                  </div>

                  <hr className='mb-7' />
                  <div >
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
                        placeholder="165-0034"
                        className={`${touched.postCode && errors.postCode
                          ? 'border-red'
                          : 'border-argent hover:border-aquamarine'
                          } input-field solid mb-11  lg:mb-9 bg-[#F9F9F9]`}
                      />
                      {touched.email && errors.email && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>

                  </div>

                  <div >
                    <div className="text-left">
                      <label className="text-sm font-bold">都道府県</label>
                      <span className="text-xs font-bold text-red">（必須）</span>
                    </div>
                    <div className="relative flex w-full flex-row md:w-[226px]">
                      <select
                        name="prefectures"
                        value={values.prefectures}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="タイトルを記入してください"
                        className={`${touched.email && errors.email
                          ? 'border-red'
                          : 'border-argent hover:border-aquamarine'
                          } input-field text-[#C1C1C1] solid mb-11  lg:mb-9 bg-[#F9F9F9]`}
                      >
                        {touched.prefectures && errors.prefectures && (
                          <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                        )}
                        <option value="タイトルを記入してください">都道府県を選んでください</option>
                        <option value="タイトルを記入してください">都道府県を選んでください</option>
                        <option value="タイトルを記入してください">都道府県を選んでください</option>
                        <option value="タイトルを記入してください">都道府県を選んでください</option>
                      </select>
                    </div>

                  </div>

                  <div >
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
                          } input-field solid mb-11  lg:mb-9 bg-[#F9F9F9]`}
                      />
                      {touched.municipalities && errors.municipalities && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>

                  </div>

                  <div >
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
                          } input-field solid mb-11  lg:mb-9 bg-[#F9F9F9]`}
                      />
                      {touched.streetNumber && errors.streetNumber && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>

                  </div>

                  <hr className='mb-[35px]' />
                  <div>
                    <div >
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
                          className={`${touched.workContent && errors.workContent
                            ? 'border-red'
                            : 'border-argent hover:border-aquamarine'
                            } input-field solid mb-11  lg:mb-9 bg-[#F9F9F9] resize-none h-[124px]`}
                        />
                        {touched.email && errors.email && (
                          <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                        )}
                      </div>

                    </div>

                    <div >
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
                            } input-field solid mb-11  lg:mb-9 bg-[#F9F9F9] resize-none h-[124px]`}
                        />
                        {touched.workDetail && errors.workDetail && (
                          <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                        )}
                      </div>

                    </div>

                    <div >
                      <div className="text-left">
                        <label className="text-sm font-bold">時給</label>
                        <span className="text-xs font-bold text-red">（必須）</span>
                      </div>
                      <div className="relative flex w-full flex-row md:w-[772px]">
                        <div className='flex gap-2'>
                          <input
                            name="hourlyWage"
                            value={values.hourlyWage}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="金額を記入してください"
                            className={`${touched.email && errors.email
                              ? 'border-red'
                              : 'border-argent hover:border-aquamarine'
                              } mt-[11px] md:mt-0 input-field solid mb-11  lg:mb-9 bg-[#F9F9F9]`}
                          />
                          {touched.hourlyWage && errors.hourlyWage && (
                            <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                          )}
                          <div className='flex items-center'>
                            <p className='text-xs w-[60px] font-bold'>円（税込）</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center gap-[20px]">
                  <div className='hidden md:flex md:items-center md:justify-center '>

                    <button className=' bg-lightSilver hover:bg-argent rounded-full p-4 sm:w-72 w-full' >
                      <div className='flex text-[#000000] items-center'>

                        <XMarkIcon width={20} height={20} />
                        <p className='ml-[62px] text-lg'>キャンセル</p>
                      </div>

                    </button>
                  </div>
                  <div className='w-full md:w-auto'>

                    <Button roundedFull disabled={!isValid}>

                      <p className='text-lg'>登録する</p>
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </Formik>

        </div>
      </div>
    </div>
  );
}
