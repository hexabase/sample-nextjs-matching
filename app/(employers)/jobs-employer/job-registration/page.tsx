'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Formik } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { MapPinIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from '../../../../components/button';
import camera from '../../../../public/camera.svg';
import BackToJobsList from '../../../../components/common/backToJobsList';

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
    router.push('/jobs-employer');
  };

  return (
    <div className="bg-antiFlashWhite">
      <div className="border-b border-b-[#E1E1E1] md:hidden">
        <BackToJobsList />
      </div>

      <div className=" flex  justify-center p-[1.0625rem] opacity-100">
        <div className="relative mb-[75px] h-auto rounded-[1.875rem] bg-white px-8 pt-9 pb-10 shadow-[0_10px_5px_rgba(0,0,0,0.1)] md:mt-[75px] md:mb-[85px] md:w-[975px]">
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
                <div className="md:mt-[32px]">
                  <div className="mb-12 pb-1.5 text-center text-lg font-bold md:border-b md:border-b-lightSilver md:text-left">
                    新規求人登録
                  </div>
                  <div>
                    <div className="text-left">
                      <label className="text-sm font-bold">タイトル</label>
                      <span className="text-xs font-bold text-red">
                        （必須）
                      </span>
                    </div>
                    <div className="relative w-full md:w-[772px] ">
                      <textarea
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="タイトルを記入してください"
                        className={`${
                          touched.title && errors.title
                            ? 'border-red'
                            : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11  h-[124px] resize-none bg-[#F9F9F9]	lg:mb-9`}
                      />
                      {touched.title && errors.title && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-left">
                      <label className="text-sm font-bold">サブタイトル</label>
                      <span className="text-xs font-bold text-red">
                        （必須）
                      </span>
                    </div>
                    <div className="relative flex w-full flex-row md:w-[772px]">
                      <textarea
                        name="subtitle"
                        value={values.subtitle}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="サブタイトルを記入してください"
                        className={`${
                          touched.subtitle && errors.subtitle
                            ? 'border-red'
                            : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11  h-[124px] resize-none bg-[#F9F9F9] lg:mb-9`}
                      />
                      {touched.subtitle && errors.subtitle && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>
                  </div>

                  <div className="mb-11 grid gap-2  lg:mb-9">
                    <div className="text-left">
                      <label className="text-sm font-bold">作業開始時間</label>
                      <span className="text-xs font-bold text-red">
                        （必須）
                      </span>
                    </div>
                    <div className=" flex h-[206px] w-full flex-row md:w-[772px]">
                      <div className="flex w-full items-center justify-center bg-[#F9F9F9]">
                        <label className="border-blue flex w-64 cursor-pointer flex-col items-center rounded-lg bg-[#F9F9F9] px-4 py-6 uppercase tracking-wide text-[#808080] ">
                          <Image
                            alt="camera"
                            src={camera}
                            width={40}
                            height={36}
                          />
                          <span className="mt-2 text-base leading-normal text-[#808080]">
                            メインの写真を載せる
                          </span>
                          <button className="rounded-[4px] border border-solid border-[#808080] bg-[#FFFFFF] px-[15px] py-1.5 text-[10px] text-[#808080]">
                            画像をアップロード
                          </button>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-left">
                      <label className="text-sm font-bold">作業開始時間</label>
                      <span className="text-xs font-bold text-red">
                        （必須）
                      </span>
                    </div>
                    <div className="relative flex w-full flex-row md:w-[294px]">
                      <input
                        type="date"
                        name="workStartTime"
                        value={values.workStartTime}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="日時を選んでください"
                        className={`${
                          touched.workStartTime && errors.workStartTime
                            ? 'border-red'
                            : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11 bg-[#F9F9F9]  text-[#C1C1C1] lg:mb-9`}
                      />
                      {touched.workStartTime && errors.workStartTime && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-left">
                      <label className="text-sm font-bold">作業終了時間</label>
                      <span className="text-xs font-bold text-red">
                        （必須）
                      </span>
                    </div>
                    <div className="relative flex w-full flex-row md:w-[294px]">
                      <input
                        type="date"
                        name="workEndTime"
                        value={values.workEndTime}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="日時を選んでください"
                        className={`${
                          touched.workEndTime && errors.workEndTime
                            ? 'border-red'
                            : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11 bg-[#F9F9F9]  text-[#C1C1C1] lg:mb-9`}
                      />
                      {touched.workEndTime && errors.workEndTime && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-5 flex items-center border-b border-b-lightSilver pb-2.5">
                    <MapPinIcon width={15} height={15} />
                    <p className="text-sm font-bold">働く場所</p>
                  </div>

                  <div>
                    <div className="text-left">
                      <label className="text-sm font-bold">郵便番号</label>
                      <span className="text-xs font-bold text-red">
                        （必須）
                      </span>
                    </div>
                    <div className="relative flex w-full flex-row md:w-[154px]">
                      <input
                        name="postCode"
                        value={values.postCode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="165-0034"
                        className={`${
                          touched.postCode && errors.postCode
                            ? 'border-red'
                            : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11  bg-[#F9F9F9] lg:mb-9`}
                      />
                      {touched.postCode && errors.postCode && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-left">
                      <label className="text-sm font-bold">都道府県</label>
                      <span className="text-xs font-bold text-red">
                        （必須）
                      </span>
                    </div>
                    <div className="relative flex w-full flex-row md:w-[226px]">
                      <select
                        name="prefectures"
                        value={values.prefectures}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="タイトルを記入してください"
                        className={`${
                          touched.prefectures && errors.prefectures
                            ? 'border-red'
                            : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11 bg-[#F9F9F9]  text-[#C1C1C1] lg:mb-9`}
                      >
                        {touched.prefectures && errors.prefectures && (
                          <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                        )}
                        <option value="タイトルを記入してください">
                          都道府県を選んでください
                        </option>
                        <option value="タイトルを記入してください">
                          都道府県を選んでください
                        </option>
                        <option value="タイトルを記入してください">
                          都道府県を選んでください
                        </option>
                        <option value="タイトルを記入してください">
                          都道府県を選んでください
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="text-left">
                      <label className="text-sm font-bold">市区町村</label>
                      <span className="text-xs font-bold text-red">
                        （必須）
                      </span>
                    </div>
                    <div className="relative flex w-full flex-row md:w-[276px]">
                      <input
                        name="municipalities"
                        value={values.municipalities}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="タイトルを記入してください"
                        className={`${
                          touched.municipalities && errors.municipalities
                            ? 'border-red'
                            : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11  bg-[#F9F9F9] lg:mb-9`}
                      />
                      {touched.municipalities && errors.municipalities && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-left">
                      <label className="text-sm font-bold">
                        番地・それ以降の住所
                      </label>
                      <span className="text-xs font-bold text-red">
                        （必須）
                      </span>
                    </div>
                    <div className="relative mb-[35px] flex w-full flex-row border-b border-b-lightSilver md:w-[744px]">
                      <input
                        name="streetNumber"
                        value={values.streetNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="タイトルを記入してください"
                        className={`${
                          touched.streetNumber && errors.streetNumber
                            ? 'border-red'
                            : 'border-argent hover:border-aquamarine'
                        } input-field solid mb-11  bg-[#F9F9F9] lg:mb-9`}
                      />
                      {touched.streetNumber && errors.streetNumber && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>
                  </div>

                  <div>
                    <div>
                      <div className="text-left">
                        <label className="text-sm font-bold">作業内容</label>
                        <span className="text-xs font-bold text-red">
                          （必須）
                        </span>
                      </div>
                      <div className="relative flex w-full flex-row md:w-[772px]">
                        <textarea
                          name="workContent"
                          value={values.workContent}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="作業内容を記入してください"
                          className={`${
                            touched.workContent && errors.workContent
                              ? 'border-red'
                              : 'border-argent hover:border-aquamarine'
                          } input-field solid mb-11  h-[124px] resize-none bg-[#F9F9F9] lg:mb-9`}
                        />
                        {touched.workContent && errors.workContent && (
                          <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="text-left">
                        <label className="text-sm font-bold">
                          作業内容詳細
                        </label>
                        <span className="text-xs font-bold text-red">
                          （必須）
                        </span>
                      </div>
                      <div className="relative flex w-full flex-row md:w-[772px]">
                        <textarea
                          name="workDetail"
                          value={values.workDetail}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="詳細な作業内容を記入してください"
                          className={`${
                            touched.workDetail && errors.workDetail
                              ? 'border-red'
                              : 'border-argent hover:border-aquamarine'
                          } input-field solid mb-11  h-[124px] resize-none bg-[#F9F9F9] lg:mb-9`}
                        />
                        {touched.workDetail && errors.workDetail && (
                          <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="text-left">
                        <label className="text-sm font-bold">時給</label>
                        <span className="text-xs font-bold text-red">
                          （必須）
                        </span>
                      </div>
                      <div className="relative flex w-full flex-row md:w-[772px]">
                        <div className="flex gap-2">
                          <input
                            name="hourlyWage"
                            value={values.hourlyWage}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="金額を記入してください"
                            className={`${
                              touched.hourlyWage && errors.hourlyWage
                                ? 'border-red'
                                : 'border-argent hover:border-aquamarine'
                            } input-field solid mt-[11px] mb-11 bg-[#F9F9F9]  md:mt-0 lg:mb-9`}
                          />
                          {touched.hourlyWage && errors.hourlyWage && (
                            <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                          )}
                          <div className="flex items-center">
                            <p className="w-[60px] text-xs font-bold">
                              円（税込）
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-center gap-[20px]">
                  <div className="hidden md:flex md:items-center md:justify-center ">
                    <button className=" w-full rounded-full bg-lightSilver p-4 hover:bg-argent sm:w-72">
                      <div className="flex items-center text-[#000000]">
                        <XMarkIcon width={20} height={20} />
                        <p className="ml-[62px] text-lg">キャンセル</p>
                      </div>
                    </button>
                  </div>
                  <div className="w-full md:w-auto">
                    <Button roundedFull disabled={!isValid}>
                      <p className="text-lg">登録する</p>
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
