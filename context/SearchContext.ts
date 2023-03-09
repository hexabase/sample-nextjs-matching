import React, { createContext, useContext } from 'react';

interface ISearchContext {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const initialSearchContext: ISearchContext = {
  search: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSearch: () => {},
};

export const SearchContext =
  createContext<ISearchContext>(initialSearchContext);

export const useSearchContext = () => useContext(SearchContext);
