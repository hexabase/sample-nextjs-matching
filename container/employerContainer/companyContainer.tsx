import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { deleteCookie } from 'cookies-next';

import { CompanyContext, useUserContext } from '../../context';
import { TCompaniesItems } from '../../types';
import { getItemListCompanies } from '../../utils/apis';

export default function CompanyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { user } = useUserContext();

  const [company, setCompany] = useState<TCompaniesItems>();

  const handleLogout = () => {
    deleteCookie('token');
    router.push('/auth/login');
  };

  useEffect(() => {
    (async function () {
      try {
        if (user && user.u_id) {
          const res = await getItemListCompanies(user.u_id);

          res.data && res.data.items[0] && setCompany(res.data.items[0]);
        }
      } catch (error) {
        handleLogout();
      }
    })();
  }, [user]);

  return (
    <CompanyContext.Provider value={{ company }}>
      {children}
    </CompanyContext.Provider>
  );
}
