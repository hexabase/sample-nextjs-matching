'use client';

import { useState } from 'react';

const toggleClass = ' transform translate-x-[1.05rem]';
const toggleBgClass = ' bg-antiFlashWhite';

export default function Toggle() {
  const [toggle, setToggle] = useState(true);
  const [toggleBg, setToggleBg] = useState(false);

  return (
    <div>
      <div
        className={`flex h-4 w-8 cursor-pointer items-center rounded-full border border-gray bg-aquamarine p-[1px] ${
          toggleBg ? null : toggleBgClass
        }`}
        onClick={() => {
          setToggle(!toggle);
          setToggleBg(!toggleBg);
        }}
      >
        <div
          className={`h-3 w-3 transform rounded-full bg-white shadow-md duration-300 ease-in-out ${
            toggle ? null : toggleClass
          }`}
        ></div>
      </div>
    </div>
  );
}
