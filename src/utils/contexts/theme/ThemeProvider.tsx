import type { ReactNode } from 'react';

import { useLayoutEffect, useMemo, useState } from 'react';

import type { GetProfileResponse } from '@/generated/api/models';

import { Role } from '@/generated/api/models';
import { getTheme, postTheme } from '@/utils/api';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // TODO use getApiV1UserProfile
  // const getApiV1UserProfile = useGetApiV1UserProfile();

  const profile: GetProfileResponse = {
    id: '1',
    email: 'email',
    role: Role.NUMBER_0,
    username: 'test'
  };

  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) ?? 'light') as Theme
  );

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, newTheme);
    document.querySelector('html')?.setAttribute('data-theme', newTheme);
  };

  const requestTheme = async () => {
    if (!profile.id) return;

    const getThemeResponse = await getTheme({ userId: profile.id });
    updateTheme(getThemeResponse.theme);
  };

  useLayoutEffect(() => {
    requestTheme();
  }, [profile.id]);

  const toggleTheme = async () => {
    if (!profile.id) return;
    const newTheme = theme === 'light' ? 'dark' : 'light';

    await postTheme({ theme: newTheme, userId: profile.id });
    updateTheme(newTheme);
  };

  const value = useMemo(() => ({ value: theme, toggle: toggleTheme }), [theme]);

  return <ThemeContext value={value}>{children}</ThemeContext>;
};
