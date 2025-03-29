import { createContext } from 'react';

interface ThemeContextValue {
  value: Theme;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  value: 'light',
  toggle: () => ({})
});
