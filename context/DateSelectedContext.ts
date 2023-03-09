import React, { createContext, useContext } from 'react';

import { TDateHoliday } from '../types';

interface IDateSelectedContext {
  dateSelected?: TDateHoliday;
  setDateSelected: React.Dispatch<
    React.SetStateAction<TDateHoliday | undefined>
  >;
}

const initialDateSelectedContext: IDateSelectedContext = {
  dateSelected: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDateSelected: () => {},
};

export const DateSelectedContext = createContext<IDateSelectedContext>(
  initialDateSelectedContext
);

export const useDateSelectedContext = () => useContext(DateSelectedContext);
