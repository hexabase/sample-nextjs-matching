import React, { useState } from 'react';

import { DateSelectedContext } from '../../context';
import { TDateHoliday } from '../../types';

export default function DateSelectedContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dateSelected, setDateSelected] = useState<TDateHoliday>();

  return (
    <DateSelectedContext.Provider value={{ dateSelected, setDateSelected }}>
      {children}
    </DateSelectedContext.Provider>
  );
}
