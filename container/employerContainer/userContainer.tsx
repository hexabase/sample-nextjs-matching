'use client';

import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { UserContext } from '../../context';
import { TGetUserInfo } from '../../types';
import { getUserInfo } from '../../utils/apis';

export default function UserContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [user, setUser] = useState<TGetUserInfo>();

  const handleLogout = () => {
    deleteCookie('token');
    router.push('/auth/login');
  };

  useEffect(() => {
    (async function getDataUserInfo() {
      try {
        const res = await getUserInfo();

        res.data && setUser(res.data);
      } catch (error) {
        handleLogout();
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
