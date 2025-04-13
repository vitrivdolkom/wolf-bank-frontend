import { createContext } from 'react';

interface ProfileContextValue {
  profile?: {
    role: 'EMPLOYEE' | 'USER';
    userId: string;
  };
}

export const ProfileContext = createContext<ProfileContextValue>({});
