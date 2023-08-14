import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { deleteCookie } from 'cookies-next';

import { CompanyContext, useUserContext } from '../../context';
import { TCompaniesItems } from '../../types';
import { getItemListCompany } from '../../utils/apis';
import { Item } from '@hexabase/hexabase-js';

export default function CompanyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [company, setCompany] = useState<Item>();

  const handleLogout = () => {
    deleteCookie('token');
    router.push('/auth/login');
  };

  useEffect(() => {
    (async function () {
      try {
        const company = await getItemListCompany();
        setCompany(company);
      } catch (error) {
        console.log({ error });
        // handleLogout();
      }
    })();
  }, []);

  return (
    <CompanyContext.Provider value={{ company }}>
      {children}
    </CompanyContext.Provider>
  );
}
