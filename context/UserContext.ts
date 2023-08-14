import { createContext, useContext } from 'react';

import { User } from '@hexabase/hexabase-js';

interface IUserContext {
  user?: User;
}

export const UserContext = createContext<IUserContext>({
  user: undefined,
});

export const useUserContext = () => useContext(UserContext);
