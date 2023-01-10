'use client';

import { XMarkIcon } from '@heroicons/react/20/solid';

interface TagProps {
  tagName: string;
  className?: string;
  closeTag?: boolean;
}

export default function Tag({ tagName, className, closeTag }: TagProps) {
  return (
    <div
      className={`flex w-fit flex-row items-center whitespace-nowrap rounded-xl py-1 px-3.5 ${className}`}
    >
      <p>{tagName}</p>
      {closeTag && (
        <button
          className="ml-2 h-3 w-3"
          onClick={() => console.log('close tag')}
        >
          <XMarkIcon />
        </button>
      )}
    </div>
  );
}
