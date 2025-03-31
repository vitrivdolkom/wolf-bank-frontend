import type { ReactNode } from 'react';

import { useLayoutEffect, useMemo, useState } from 'react';

import { useGetApiV1UserProfile } from '@/generated/api/requests';
import { getTheme, postTheme } from '@/utils/api';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const getApiV1UserProfile = useGetApiV1UserProfile();

  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) ?? 'light') as Theme
  );

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, newTheme);
    document.querySelector('html')?.setAttribute('data-theme', newTheme);
  };

  const requestTheme = async () => {
    if (!getApiV1UserProfile.data?.id) return;

    const getThemeResponse = await getTheme({ userId: getApiV1UserProfile.data.id });
    updateTheme(getThemeResponse.theme);
  };

  useLayoutEffect(() => {
    requestTheme();
  }, [getApiV1UserProfile.data]);

  const toggleTheme = async () => {
    if (!getApiV1UserProfile.data?.id) return;
    const newTheme = theme === 'light' ? 'dark' : 'light';

    await postTheme({ theme: newTheme, userId: getApiV1UserProfile.data.id });
    updateTheme(newTheme);
  };

  const value = useMemo(
    () => ({ value: theme, toggle: toggleTheme }),
    [theme, getApiV1UserProfile.data]
  );

  return <ThemeContext value={value}>{children}</ThemeContext>;
};
