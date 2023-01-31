/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client';

import { useRef, useState } from 'react';

import dayjs, { Dayjs } from 'dayjs';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import Carousel from './Carousel';

export default function CalendarInline() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);

  const dateArr: Dayjs[] = [];

  for (let index = 0; index < 30; index++) {
    dateArr.push(dayjs(dayjs().add(index, 'day'), 'yyyy-mm-dd'));
  }

  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef!.current!.scrollLeft;

      const itemWidth = parseInt(
        getComputedStyle(scrollRef!.current!.children[0]).width
      );
      scrollRef!.current!.scrollLeft = scrollLeft - itemWidth * 6;
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = scrollRef!.current!.scrollLeft;

      const itemWidth = parseInt(
        getComputedStyle(scrollRef!.current!.children[0]).width
      );
      scrollRef!.current!.scrollLeft = scrollLeft + itemWidth * 6;
    });
  };

  return (
    <div className="flex w-full gap-2.5">
      <button
        disabled={disabledPrev}
        className={`next-btn ${
          disabledPrev
            ? 'cursor-not-allowed text-platinum'
            : 'hover:text-pastelRed'
        }`}
        onClick={prev}
      >
        <ChevronLeftIcon />
      </button>

      <Carousel
        ref={scrollRef}
        setDisabledPrev={setDisabledPrev}
        setDisabledNext={setDisabledNext}
      />

      <button
        disabled={disabledNext}
        className={`next-btn ${
          disabledNext
            ? 'cursor-not-allowed text-platinum'
            : 'hover:text-pastelRed'
        } `}
        onClick={next}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
