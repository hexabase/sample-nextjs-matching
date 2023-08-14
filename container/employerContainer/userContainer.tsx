'use client';

import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { UserContext } from '../../context';
import { getUserInfo } from '../../utils/apis';
import { User } from '@hexabase/hexabase-js';

export default function UserContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [user, setUser] = useState<User>();

  const handleLogout = () => {
    deleteCookie('token');
    router.push('/auth/login');
  };

  useEffect(() => {
    (async function getDataUserInfo() {
      try {
        const user = await getUserInfo();
        setUser(user);
      } catch (error) {
        handleLogout();
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
