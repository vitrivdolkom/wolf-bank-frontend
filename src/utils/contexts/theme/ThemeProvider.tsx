import type { ReactNode } from 'react';

import { useLayoutEffect, useMemo, useState } from 'react';

import { getTheme, postTheme } from '@/utils/api';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

import { useProfile } from '../profile';
import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const profileContext = useProfile();

  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(LOCAL_STORAGE_KEYS.THEME) ?? 'light') as Theme
  );

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_KEYS.THEME, newTheme);
    document.querySelector('html')?.setAttribute('data-theme', newTheme);
  };

  const requestTheme = async () => {
    if (!profileContext.profile?.userId) return;

    const getThemeResponse = await getTheme({ userId: profileContext.profile.userId });
    updateTheme(getThemeResponse.data.theme);
  };

  useLayoutEffect(() => {
    requestTheme();
  }, [profileContext.profile]);

  const toggleTheme = async () => {
    if (!profileContext.profile?.userId) return;
    const newTheme = theme === 'light' ? 'dark' : 'light';

    await postTheme({ theme: newTheme, userId: profileContext.profile.userId });
    updateTheme(newTheme);
  };

  const value = useMemo(
    () => ({ value: theme, toggle: toggleTheme }),
    [theme, profileContext.profile]
  );

  return <ThemeContext value={value}>{children}</ThemeContext>;
};
