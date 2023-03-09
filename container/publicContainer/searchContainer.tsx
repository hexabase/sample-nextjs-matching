import React, { useState } from 'react';

import { SearchContext } from '../../context';

export default function SearchContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState<string>('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
