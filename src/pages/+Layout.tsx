import type { ReactNode } from 'react';

import { Toaster } from 'sonner';

import { HiddenAccountsProvider } from '@/utils/contexts/hiddenAccounts';
import { QueryClientProvider } from '@/utils/contexts/queryClient';
import { ThemeProvider } from '@/utils/contexts/theme';

import './tailwind.css';

interface LayoutDefaultProps {
  children: ReactNode;
}

const LayoutDefault = ({ children }: LayoutDefaultProps) => (
  <main className='min-h-screen relative'>
    <Toaster />
    <QueryClientProvider>
      <ThemeProvider>
        <HiddenAccountsProvider>{children}</HiddenAccountsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </main>
);

export default LayoutDefault;
