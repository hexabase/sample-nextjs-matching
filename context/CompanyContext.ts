import { createContext, useContext } from 'react';

import { TCompaniesItems } from '../types';

interface ICompanyContext {
  company?: TCompaniesItems;
}

export const CompanyContext = createContext<ICompanyContext>({
  company: undefined,
});

export const useCompanyContext = () => useContext(CompanyContext);
