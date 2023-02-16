'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Formik } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

import Button from '../../../../components/button';
import { SchemaRegisterCompany } from '../../Schema';

interface FormValues {
  companyName: string;
  email: string;
  password: string;
  businessDetail: string;
  companyUrl: string;
}
export default function RegisterConfirm() {
  const router = useRouter();

  const handleRouter = () => {
    router.push('/auth/register-success');
  };

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
            companyName: '',
            email: '',
            password: '',
            businessDetail: '',
            companyUrl: '',
          }}
          validationSchema={SchemaRegisterCompany}
          onSubmit={(data: FormValues) => {
            handleRouter();
            alert(
              'name: ' +
                data.companyName +
                '\n' +
                'email: ' +
                data.email +
                '\n' +
                'password: ' +
                data.password +
                '\n' +
                'businessDetail: ' +
                data.businessDetail +
                '\n' +
                'companyUrl: ' +
                data.companyUrl
            );
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
                      name="companyName"
                      value={values.companyName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="会社名を記入してください"
                      className={`${
                        touched.companyName && errors.companyName
                          ? 'border-red'
                          : 'border-argent hover:border-aquamarine'
                      } input-field solid`}
                    />
                    {touched.companyName && errors.companyName && (
                      <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                    )}
                  </div>
                </div>

                <div>
                  <div className="text-left">
                    <label className="text-xs font-bold md:text-base">
                      メールアドレス
                    </label>
                    <span className="text-xs font-bold text-red">（必須）</span>
                  </div>
                  <div className="relative flex w-full flex-row">
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="例：hexabase@hexabase.com"
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
                      name="businessDetail"
                      value={values.businessDetail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${
                        touched.businessDetail && errors.businessDetail
                          ? 'border-red'
                          : 'border-argent  hover:border-aquamarine  '
                      } input-field solid h-44 resize-none lg:h-32`}
                    />
                    {touched.businessDetail && errors.businessDetail && (
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
                      name="companyUrl"
                      value={values.companyUrl}
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
