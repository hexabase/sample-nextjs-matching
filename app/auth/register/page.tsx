'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Formik } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

import Button from '../../../components/button';
import { SchemaEmail } from '../Schema';

interface FormValues {
  email: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const handleRouter = () => {
    router.push('/auth/register-confirm');
  };

  return (
    <div className="modal p-[1.375rem] lg:px-[10rem] xl:px-[19.5rem]">
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
            className="mx-auto flex flex-col px-[0.625rem] pb-7 pt-8"
            onSubmit={handleSubmit}
          >
            <div className='grid gap-2'>
              <div className="text-left">
                <label className="text-sm font-bold">メールアドレス</label>
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
                  className={`${touched.email && errors.email
                    ? 'border-red'
                    : 'border-argent hover:border-aquamarine'
                    } input-field solid mb-11 lg:mb-16`}
                />
                {touched.email && errors.email && (
                  <ExclamationCircleIcon className="absolute right-3 h-6 w-6 translate-y-1/2 text-red" />
                )}
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
  );
}
