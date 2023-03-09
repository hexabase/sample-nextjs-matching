import { createContext, useContext } from 'react';

import { TGetUserInfo } from '../types';

interface IUserContext {
  user?: TGetUserInfo;
}

export const UserContext = createContext<IUserContext>({
  user: undefined,
});

export const useUserContext = () => useContext(UserContext);
