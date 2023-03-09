import { SetStateAction } from 'react';

const toggleClass = ' transform translate-x-[1.05rem]';

interface ToggleProps {
  toggle: boolean;
  setToggle: React.Dispatch<SetStateAction<boolean>>;
}

export default function Toggle({ toggle, setToggle }: ToggleProps) {
  return (
    <div>
      <div
        className={`flex h-4 w-8 cursor-pointer items-center rounded-full border border-gray  p-[1px] ${
          toggle ? 'bg-aquamarine' : 'bg-antiFlashWhite'
        }`}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div
          className={`h-3 w-3 transform rounded-full bg-white shadow-md duration-300 ease-in-out ${
            !toggle ? null : toggleClass
          }`}
        ></div>
      </div>
    </div>
  );
}
