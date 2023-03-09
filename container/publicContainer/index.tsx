import React from 'react';

import DateSelectedContainer from './dateSelectedContainer';
import SearchContainer from './searchContainer';

export default function PublicContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SearchContainer>
      <DateSelectedContainer>{children}</DateSelectedContainer>
    </SearchContainer>
  );
}
