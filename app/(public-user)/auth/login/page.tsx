'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { setCookie } from 'cookies-next';
import { Formik } from 'formik';

import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

import Button from '../../../../components/button';
import Notification from '../../../../components/common/notification';
import { EMessageError, EType, TNotification } from '../../../../types';
import { login } from '../../../../utils/apis';
import { SchemaLogin } from '../Schema';

interface FormValuesProps {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();

  const [notification, setNotification] = useState<TNotification>({
    open: false,
  });

  const loginHandler = async (formValues: FormValuesProps) => {
    try {
      const { email, password } = formValues;
      const loginRes = await login({
        email,
        password,
      });

      if (loginRes.data.token) {
        setCookie('token', loginRes.data.token);
        router.push('/jobs-employer');
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
    router.refresh();
  }, []);

  return (
    <>
      <div className="grid gap-9">
        <div className="modal px-[1.375rem] py-7 lg:px-[10rem] xl:px-[19.5rem]">
          <Image
            src="/images/HEXA-JOB-logo-mark-for-header-en.svg"
            alt="logo"
            width={153}
            height={35}
            className="mx-auto pb-11 pt-6 lg:hidden"
          />
          <Image
            src="/images/HEXA-JOB-logo-mark-black-text.svg"
            alt="logo"
            width={285}
            height={50}
            className="mx-auto hidden pb-10 pt-8 lg:block"
          />
          <h1 className="px-[4.5rem] text-base font-bold lg:px-48 lg:text-2xl">
            求人企業様専用ページログイン
          </h1>

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={SchemaLogin}
            onSubmit={(data: FormValuesProps) => {
              loginHandler(data);
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
                className="mx-auto flex flex-col pt-5 pb-6 lg:pt-10 lg:pb-[69px]"
                onSubmit={handleSubmit}
              >
                <div className="lg-gap-7 grid gap-6">
                  <div>
                    <div className="text-left">
                      <label className="text-xs font-bold md:text-base">
                        メールアドレス
                      </label>
                    </div>
                    <div className="relative flex w-full flex-row">
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="例：yourhost@hexabase.com"
                        className={`${
                          touched.email && errors.email
                            ? 'border-red'
                            : 'border-argent hover:border-aquamarine'
                        } input-field solid`}
                      />
                      {touched.email && errors.email && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="text-left">
                      <label className="text-xs font-bold md:text-base">
                        パスワード
                      </label>
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
                            : 'border-argent hover:border-aquamarine'
                        } input-field solid`}
                      />
                      {touched.password && errors.password && (
                        <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-14 pb-11 text-left text-sm font-normal md:mx-auto lg:py-10">
                  <p>「ログイン」ボタンを押すことで、</p>
                  <p>
                    利用規約及びプライバシーポリシーに同意したものとみなします。
                  </p>
                </div>

                <div className="w-full">
                  <Button roundedFull disabled={!isValid}>
                    ログイン
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div className="flex flex-col items-center justify-center rounded-3xl bg-white px-8 py-12 shadow-lg">
          <div className="pb-10 pt-2 text-center text-base font-bold md:text-2xl lg:flex lg:flex-row">
            <p>HEXA JOB IDをお持ちでない方</p>
          </div>
          <div
            className="w-full sm:flex sm:justify-center"
            onClick={() => router.push('/auth/register')}
          >
            <Button roundedFull>求人企業会員登録する</Button>
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
