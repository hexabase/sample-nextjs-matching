'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { MapPinIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Formik } from 'formik';

import Button from '../../../../components/button';
import BackToJobsList from '../../../../components/common/backToJobsList';
import Notification from '../../../../components/common/notification';
import camera from '../../../../public/camera.svg';
import {
  EMessageError,
  EType,
  TNotification,
  TPrefectureItems,
} from '../../../../types';
import {
  createJobItems,
  getPrefecturesItems,
  uploadFile,
} from '../../../../utils/apis';
import { SchemaJobRegistration } from './Schema';
import { useCompanyContext } from '../../../../context';

interface FormValues {
  job_title: string;
  sub_title: string;
  start_work_date: string;
  end_work_date: string;
  postal_code: string;
  prefecture: string;
  city: string;
  address: string;
  work_content: string;
  work_details: string;
  hourly_wage: string;
}

export default function RegisterPage() {
  const router = useRouter();

  const { company } = useCompanyContext();

  const [files, setFiles] = useState<File[]>([]);
  const [notification, setNotification] = useState<TNotification>({
    open: false,
  });
  const [filesId, setFilesId] = useState<string[]>([]);
  const [prefectures, setPrefectures] = useState<TPrefectureItems[]>([]);

  const getDataPrefecturesItems = async () => {
    try {
      const res = await getPrefecturesItems();

      res.data.items[0] && setPrefectures(res.data.items);
    } catch (error) {
      setNotification({
        open: true,
        type: EType.ERROR,
        message: EMessageError.ERR_01,
      });
      setPrefectures([]);
    }
  };

  const uploadImage = async (data: File) => {
    try {
      const formData = new FormData();
      formData.append('file', data);
      formData.append('filename', data.name);

      const res = await uploadFile(formData);

      res.data &&
        setFilesId((prevFilesId) => [...prevFilesId, res.data.file_id]);
    } catch (error) {
      setNotification({
        open: true,
        type: EType.ERROR,
        message: EMessageError.ERR_01,
      });
    }
  };

  const uploadImageHandler = (images: FileList | null) => {
    if (images && images[0]) {
      for (let i = 0; i < images.length; i++) {
        uploadImage(images[i]);
      }
      if (images) {
        const filesArray = Array.from(images);
        setFiles(filesArray);
      }
    }
  };

  const handleRouter = () => {
    router.push('/jobs-employer');
  };

  const createDataJobItems = useCallback(
    async (data: FormValues) => {
      try {
        if (company && company.id) {
          const res = await createJobItems({
            ...data,
            company_id: company.id,
            image: filesId,
          });

          if (res.data) {
            setNotification({
              open: true,
              type: EType.SUCCESS,
              message: 'Success',
            });

            handleRouter();
          }
        }
      } catch (error) {
        setNotification({
          open: true,
          type: EType.ERROR,
          message: EMessageError.ERR_01,
        });
      }
    },
    [company, filesId]
  );

  useEffect(() => {
    getDataPrefecturesItems();
  }, []);

  return (
    <>
      <div className="bg-antiFlashWhite">
        <div className="border-b border-b-[#E1E1E1] md:hidden">
          <BackToJobsList />
        </div>

        <div className=" flex  justify-center p-[1.0625rem] opacity-100">
          <div className="relative mb-[75px] h-auto rounded-[1.875rem] bg-white px-8 pt-9 pb-10 shadow-[0_10px_5px_rgba(0,0,0,0.1)] md:mt-[75px] md:mb-[85px] md:w-[975px]">
            <Formik
              initialValues={{
                job_title: '',
                sub_title: '',
                start_work_date: '',
                end_work_date: '',
                postal_code: '',
                prefecture: '',
                city: '',
                address: '',
                work_content: '',
                work_details: '',
                hourly_wage: '',
              }}
              validationSchema={SchemaJobRegistration}
              onSubmit={(data: FormValues) => {
                createDataJobItems(data);
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
                      <div>
                        <div className="text-left">
                          <label className="text-sm font-bold">タイトル</label>
                          <span className="text-xs font-bold text-red">
                            （必須）
                          </span>
                        </div>
                        <div className="relative w-full md:w-[772px] ">
                          <textarea
                            name="job_title"
                            value={values.job_title}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="タイトルを記入してください"
                            className={`${
                              touched.job_title && errors.job_title
                                ? 'border-red'
                                : 'border-argent hover:border-aquamarine'
                            } input-field solid mb-11 h-[124px] resize-none bg-[#F9F9F9]	lg:mb-9`}
                          />
                          {touched.job_title && errors.job_title && (
                            <ExclamationCircleIcon className="absolute top-0 right-3 h-6 w-6 translate-y-1/2 text-red" />
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-left">
                        <label className="text-sm font-bold">
                          サブタイトル
                        </label>
                        <span className="text-xs font-bold text-red">
                          （必須）
                        </span>
                      </div>
                      <div className="relative flex w-full flex-row md:w-[772px]">
                        <textarea
                          name="sub_title"
                          value={values.sub_title}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="サブタイトルを記入してください"
                          className={`${
                            touched.sub_title && errors.sub_title
                              ? 'border-red'
                              : 'border-argent hover:border-aquamarine'
                          } input-field solid mb-11 h-[124px] resize-none bg-[#F9F9F9] lg:mb-9`}
                        />
                        {touched.sub_title && errors.sub_title && (
                          <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                        )}
                      </div>
                    </div>

                    <div className="mb-11 grid gap-2 lg:mb-9">
                      <div className=" flex h-[206px] w-full flex-row md:w-[772px]">
                        <div className="flex w-full items-center justify-center bg-[#F9F9F9]">
                          <div className="border-blue flex w-64 flex-col items-center rounded-lg bg-[#F9F9F9] px-4 py-6  tracking-wide text-[#808080] ">
                            <Image
                              alt="camera"
                              src={camera}
                              width={40}
                              height={36}
                            />
                            {files[0] ? (
                              <div className="flex">
                                {files.map((file) => file.name).join(', ')}
                              </div>
                            ) : (
                              <span className="mt-2 text-base uppercase leading-normal text-[#808080]">
                                メインの写真を載せる
                              </span>
                            )}
                            <label
                              htmlFor="image"
                              className="mt-5 cursor-pointer rounded-[4px] border border-solid border-[#808080] bg-[#FFFFFF] px-[15px] py-1.5 text-[10px] text-[#808080]"
                            >
                              画像をアップロード
                            </label>
                          </div>
                          <input
                            type="file"
                            name="image"
                            id="image"
                            className="hidden"
                            multiple
                            accept="image/*"
                            onChange={(event) => {
                              uploadImageHandler(event.target.files);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-left">
                        <label className="text-sm font-bold">
                          作業開始時間
                        </label>
                        <span className="text-xs font-bold text-red">
                          （必須）
                        </span>
                      </div>
                      <div className="relative flex w-full flex-row md:w-[294px]">
                        <input
                          type="datetime-local"
                          name="start_work_date"
                          value={values.start_work_date}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="日時を選んでください"
                          className={`${
                            touched.start_work_date && errors.start_work_date
                              ? 'border-red'
                              : 'border-argent hover:border-aquamarine'
                          } input-field solid mb-11 bg-[#F9F9F9]  text-[#C1C1C1] lg:mb-9`}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="text-left">
                        <label className="text-sm font-bold">
                          作業終了時間
                        </label>
                        <span className="text-xs font-bold text-red">
                          （必須）
                        </span>
                      </div>
                      <div className="relative flex w-full flex-row md:w-[294px]">
                        <input
                          type="datetime-local"
                          name="end_work_date"
                          value={values.end_work_date}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="日時を選んでください"
                          className={`${
                            touched.end_work_date && errors.end_work_date
                              ? 'border-red'
                              : 'border-argent hover:border-aquamarine'
                          } input-field solid mb-11 bg-[#F9F9F9]  text-[#C1C1C1] lg:mb-9`}
                        />
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
                          name="postal_code"
                          value={values.postal_code}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="165-0034"
                          className={`${
                            touched.postal_code && errors.postal_code
                              ? 'border-red'
                              : 'border-argent hover:border-aquamarine'
                          } input-field solid mb-11  bg-[#F9F9F9] lg:mb-9`}
                        />
                        {touched.postal_code && errors.postal_code && (
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
                          name="prefecture"
                          value={values.prefecture}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="タイトルを記入してください"
                          className={`${
                            touched.prefecture && errors.prefecture
                              ? 'border-red'
                              : 'border-argent hover:border-aquamarine'
                          } input-field solid mb-11 bg-[#F9F9F9]  text-[#C1C1C1] lg:mb-9`}
                        >
                          {touched.prefecture && errors.prefecture && (
                            <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                          )}
                          {prefectures[0] &&
                            prefectures.map((pre) => (
                              <option key={pre.i_id} value={pre.i_id}>
                                {pre.title}
                              </option>
                            ))}
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
                          name="city"
                          value={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="タイトルを記入してください"
                          className={`${
                            touched.city && errors.city
                              ? 'border-red'
                              : 'border-argent hover:border-aquamarine'
                          } input-field solid mb-11  bg-[#F9F9F9] lg:mb-9`}
                        />
                        {touched.city && errors.city && (
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
                          name="address"
                          value={values.address}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="タイトルを記入してください"
                          className={`${
                            touched.address && errors.address
                              ? 'border-red'
                              : 'border-argent hover:border-aquamarine'
                          } input-field solid mb-11  bg-[#F9F9F9] lg:mb-9`}
                        />
                        {touched.address && errors.address && (
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
                            name="work_content"
                            value={values.work_content}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="作業内容を記入してください"
                            className={`${
                              touched.work_content && errors.work_content
                                ? 'border-red'
                                : 'border-argent hover:border-aquamarine'
                            } input-field solid mb-11  h-[124px] resize-none bg-[#F9F9F9] lg:mb-9`}
                          />
                          {touched.work_content && errors.work_content && (
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
                            name="work_details"
                            value={values.work_details}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="詳細な作業内容を記入してください"
                            className={`${
                              touched.work_details && errors.work_details
                                ? 'border-red'
                                : 'border-argent hover:border-aquamarine'
                            } input-field solid mb-11  h-[124px] resize-none bg-[#F9F9F9] lg:mb-9`}
                          />
                          {touched.work_details && errors.work_details && (
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
                        <div className="flex w-full flex-row md:w-[772px]">
                          <div className="flex gap-2">
                            <div className="relative flex">
                              <input
                                name="hourly_wage"
                                value={values.hourly_wage}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="金額を記入してください"
                                className={`${
                                  touched.hourly_wage && errors.hourly_wage
                                    ? 'border-red'
                                    : 'border-argent hover:border-aquamarine'
                                } input-field solid mt-[11px] mb-11 bg-[#F9F9F9]  md:mt-0 lg:mb-9`}
                              />
                              {touched.hourly_wage && errors.hourly_wage && (
                                <ExclamationCircleIcon className="absolute right-1 h-6 w-6 translate-y-1/2 text-red" />
                              )}
                            </div>

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
                      <button
                        onClick={handleRouter}
                        className=" w-full rounded-full bg-lightSilver p-4 hover:bg-argent sm:w-72"
                      >
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
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
    </>
  );
}
