'use client';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Formik } from 'formik';
import Image from 'next/image';

import DefaultButton from '../../../components/button/defaultButton';
import { SchemaEmail } from '../Schema';

interface FormValues {
  email: string;
}

export default function RegisterPage() {
  const handleSubmit = async (data: FormValues) => {
    await console.log('aaa', data);
  };
  return (
    <div className="rounded-3xl bg-white p-[1.375rem] text-center lg:px-[10rem] 2xl:px-[19.5rem]">
      <Image
        src="/images/HEXA-JOB-logo-mark-for-header-en.svg"
        alt="logo"
        width={153}
        height={35}
        className="mx-auto pb-10 pt-10 lg:hidden"
      />
      <Image
        src="/images/HEXA-JOB-logo-mark-black-text.svg"
        alt="logo"
        width={285}
        height={50}
        className="mx-auto hidden pb-10 pt-10 lg:block"
      />
      <h1 className="pb-[3.187rem] font-bold lg:text-2xl">
        求人企業様会員登録メールアドレス入力
      </h1>
      <div className="text-left text-sm font-normal">
        <p>ご登録するメールアドレスを入力のうえ、送信してください。</p>
        <p>
          その後ご入力いただいたメールアドレスに届く会員登録フォームよりご登録をお願いいたします。
        </p>
      </div>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={SchemaEmail}
        onSubmit={(data) => {
          handleSubmit(data);
          console.log('bbb');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form
            className="mx-auto flex flex-col px-[0.625rem] pb-7 pt-8"
            onSubmit={handleSubmit}
          >
            <div className="text-left">
              <label className="text-sm font-bold">メールアドレス</label>
              <span className="text-xs font-bold text-red">（必須）</span>
            </div>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="例：hexabase@hexabase.com"
              className="solid  rounded-sm border border-argent p-[0.625rem] placeholder:text-sm placeholder:font-normal"
            ></input>
            <div className="mb-8 p-[0.625rem] text-left text-xs text-red lg:mb-16">
              {errors.email}
            </div>
            <div className="w-full">
              <DefaultButton
                roundedFull
                contentButton={
                  '送信する'
                }
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
