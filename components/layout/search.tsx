import { useRouter } from 'next/navigation';

import { Formik } from 'formik';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import { useSearchContext } from '../../context';

export default function Search() {
  const router = useRouter();
  const { setSearch } = useSearchContext();

  return (
    <Formik
      initialValues={{
        search: '',
      }}
      onSubmit={(data, actions) => {
        setSearch(data.search);

        actions.resetForm();
        router.push('/');
      }}
    >
      {({ values, handleBlur, handleChange, handleSubmit }) => (
        <form className="h-8" onSubmit={handleSubmit}>
          <div className="relative">
            <button type="submit">
              <MagnifyingGlassIcon className="absolute top-0 bottom-0 left-2 my-auto h-5 w-5 text-black" />
            </button>

            <input
              id="search"
              name="search"
              type="text"
              value={values.search}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="職種・会社名・店舗名・地域名など"
              className="h-8 w-full min-w-[15rem] rounded-[20px] border border-lightSilver py-3 pl-9 pr-1 text-xs font-normal leading-4 text-argent outline-none focus:border-gray"
            />
          </div>
        </form>
      )}
    </Formik>
  );
}
