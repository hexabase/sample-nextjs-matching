import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function Search() {
  return (
    <form className="h-8">
      <div className="relative">
        <MagnifyingGlassIcon className="absolute top-0 bottom-0 left-2 my-auto h-5 w-5 text-black" />

        <input
          type="text"
          placeholder="職種・会社名・店舗名・地域名など"
          className="h-8 w-full min-w-[15rem] rounded-[20px] border border-lightSilver py-3 pl-9 pr-1 text-xs font-normal leading-4 text-argent outline-none focus:border-gray"
        />
      </div>
    </form>
  );
}
