import type { ReactNode } from 'react';

import { Toaster } from 'sonner';

import { QueryClientProvider } from '@/utils/contexts/queryClient';

import './tailwind.css';

interface LayoutDefaultProps {
  children: ReactNode;
}

const LayoutDefault = ({ children }: LayoutDefaultProps) => (
  <main className='min-h-screen relative'>
    <Toaster />
    <QueryClientProvider>{children}</QueryClientProvider>
  </main>
);

export default LayoutDefault;
