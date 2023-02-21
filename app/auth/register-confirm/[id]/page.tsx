'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { Formik } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { setCookie } from 'cookies-next';

import Button from '../../../../components/button';
import { PageProps, TUserConfirm } from '../../../../types';
import {
  confirmRegistration,
  createItem,
  getUserInfo,
  registerUser,
} from '../../../../utils/apis';
import { SchemaRegisterCompany } from '../../Schema';

interface FormValuesProps {
  company_name: string;
  company_address: string;
  password: string;
  business: string;
  url: string;
}

export default function RegisterConfirm({ params: { id } }: PageProps) {
  const router = useRouter();
  const [dataConfirm, setDataConfirm] = useState<TUserConfirm>();

  const dataCreateItem = useCallback(
    async (formValues: FormValuesProps, user_id: string) => {
      try {
        const { company_name, company_address, business, url } = formValues;
        const res = await createItem({
          user_id,
          company_name,
          company_address,
          business,
          url,
        });

        res.data && router.push('/auth/register-success');
      } catch (error) {
        console.log('error', error);
        router.push('/auth/register-success');
      }
    },
    []
  );

  const dataGetUserInfo = useCallback(async (formValues: FormValuesProps) => {
    try {
      const res = await getUserInfo();

      res.data.u_id && dataCreateItem(formValues, res.data.u_id);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  const dataRegisterUser = useCallback(
    async (formValues: FormValuesProps) => {
      const { password } = formValues;
      const email = dataConfirm?.email || '';
      const workspace = dataConfirm?.workspace.id || '';
      const confirmation_id = dataConfirm?.confirmation_id || '';
      const username = dataConfirm?.email.split('@')[0] || '';

      try {
        const res = await registerUser({
          email,
          password,
          username,
          workspace,
          confirmation_id,
        });

        if (res.data.token) {
          setCookie('token', res.data.token);
          dataGetUserInfo(formValues);
        }
      } catch (error) {
        console.log('error', error);
      }
    },
    [dataConfirm, dataGetUserInfo]
  );

  useEffect(() => {
    (async function dataConfirmRegistration() {
      try {
        const res = await confirmRegistration(id);

        res.data.user && setDataConfirm(res.data.user);
      } catch (error) {
        console.log('error', error);
        router.push('/auth/login');
      }
    })();
  }, [id]);

  return (
    <div className="grid gap-9">
      <div className="modal px-8 py-7 lg:px-[10rem] xl:px-[19.5rem]">
        <Image
          src="/images/HEXA-JOB-logo-mark-for-header-en.svg"
          alt="logo"
          width={153}
          height={35}
          className="mx-auto pb-10 pt-8 lg:hidden"
        />
        <Image
          src="/images/HEXA-JOB-logo-mark-black-text.svg"
          alt="logo"
          width={285}
          height={50}
          className="mx-auto hidden pb-10 pt-8 lg:block"
        />
        <h1 className="pb-10 text-base font-bold md:text-2xl lg:pb-6">
          求人企業様会員登録フォーム
        </h1>

        <Formik
          initialValues={{
            company_name: '',
            company_address: '',
            password: '',
            business: '',
            url: '',
          }}
          validationSchema={SchemaRegisterCompany}
          onSubmit={(data: FormValuesProps) => {
            dataRegisterUser(data);
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
              className="mx-auto flex flex-col pb-7"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-6 lg:gap-7">
                <div>
                  <div className="text-left">
                    <label className="text-xs font-bold md:text-base">
                      会社名
                    </label>
                    <span className="text-xs font-bold text-red">（必須）</span>
                  </div>
                  <div className="relative flex w-full flex-row">
                    <input
                      type="text"
                      name="company_name"
                      value={values.company_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="会社名を記入してください"
                      className={`${
                        touched.company_name && errors.company_name
                          ? 'border-red'
                          : 'border-argent hover:border-aquamarine'
                      } input-field solid`}
                    />
                    {touched.company_name && errors.company_name && (
                      <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-left">
                    <label className="text-xs font-bold md:text-base">
                      会社住所
                    </label>
                    <span className="text-xs font-bold text-red">（必須）</span>
                  </div>
                  <div className="relative flex w-full flex-row">
                    <input
                      type="company_address"
                      name="company_address"
                      value={values.company_address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="例：東京都中央区秋葉原 1-1-1 HEXAビル 2階"
                      className={`${
                        touched.company_address && errors.company_address
                          ? 'border-red'
                          : 'border-argent hover:border-aquamarine'
                      } input-field solid`}
                    />
                    {touched.company_address && errors.company_address && (
                      <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-left">
                    <label className="text-xs font-bold md:text-base">
                      パスワード
                    </label>
                    <span className="text-xs font-bold text-red">（必須）</span>
                  </div>
                  <div className="relative flex w-full flex-row">
                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="パスワードを記入してください"
                      className={`${
                        touched.password && errors.password
                          ? 'border-red'
                          : 'border-argent hover:border-aquamarine  '
                      } input-field solid`}
                    />
                    {touched.password && errors.password && (
                      <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-left">
                    <label className="text-xs font-bold md:text-base">
                      事業内容
                    </label>
                    <span className="text-xs font-bold text-red">（必須）</span>
                  </div>
                  <div className="relative flex w-full flex-row">
                    <textarea
                      name="business"
                      value={values.business}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${
                        touched.business && errors.business
                          ? 'border-red'
                          : 'border-argent  hover:border-aquamarine  '
                      } input-field solid h-44 resize-none lg:h-32`}
                    />
                    {touched.business && errors.business && (
                      <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-20 text-red lg:translate-y-12" />
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-left">
                    <label className="text-xs font-bold md:text-base">
                      企業ホームページURL
                    </label>
                  </div>
                  <div className="relative flex w-full flex-row">
                    <input
                      type="url"
                      name="url"
                      value={values.url}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="https://hexabase.com"
                      className="input-field solid border-argent hover:border-aquamarine"
                    />
                  </div>
                </div>
              </div>

              <div className="py-11 text-left text-sm font-normal md:mx-auto">
                <p>「ログイン」ボタンを押すことで、</p>
                <p>
                  利用規約及びプライバシーポリシーに同意したものとみなします。
                </p>
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
      <div className="flex flex-col items-center justify-center rounded-3xl bg-white px-8 py-12 shadow-lg">
        <div className="px-6 pb-10 text-center text-base font-bold md:text-2xl lg:flex lg:flex-row">
          <p>HEXA JOB IDをお持ちの方は</p>
          <p>こちらからログインしてください</p>
        </div>
        <div
          className="w-full sm:flex sm:justify-center"
          onClick={() => router.push('/auth/login')}
        >
          <Button roundedFull>ログインする</Button>
        </div>
      </div>
    </div>
  );
}
