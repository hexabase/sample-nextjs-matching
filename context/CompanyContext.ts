import { createContext, useContext } from 'react';

import { Item } from '@hexabase/hexabase-js';

interface ICompanyContext {
  company?: Item;
}

export const CompanyContext = createContext<ICompanyContext>({
  company: undefined,
});

export const useCompanyContext = () => useContext(CompanyContext);
