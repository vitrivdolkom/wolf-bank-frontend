import type { ReactNode } from 'react';

import { CreditCardIcon, HomeIcon } from 'lucide-react';
import { usePageContext } from 'vike-react/usePageContext';

import { ROUTES } from '@/utils/constants';

interface NavigationLayoutProps {
  children: ReactNode;
}

const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  const pageContext = usePageContext();
  const isClient = pageContext.user?.role === 'client';

  const mainRoute = isClient ? ROUTES.MAIN : ROUTES.USERS;

  const isActive = (path: string) => pageContext.urlPathname === path;

  return (
    <div className='min-h-screen pb-20 relative'>
      {children}

      <div className='fixed bottom-0 left-0 right-0 bg-base-100 shadow-lg border-t border-base-300'>
        <div className='container mx-auto px-4'>
          <nav className='flex justify-center items-center h-16'>
            <a
              href={mainRoute}
              className={`flex flex-col items-center justify-center w-20 h-full transition-all duration-200 ${
                isActive(mainRoute)
                  ? 'text-primary scale-110'
                  : 'text-base-content/70 hover:text-primary hover:scale-105'
              }`}
            >
              <HomeIcon className='w-6 h-6' />
              <span className='text-xs mt-1'>Главная</span>
            </a>

            <a
              href={ROUTES.PRODUCTS}
              className={`flex flex-col items-center justify-center w-20 h-full transition-all duration-200 ${
                isActive(ROUTES.PRODUCTS)
                  ? 'text-primary scale-110'
                  : 'text-base-content/70 hover:text-primary hover:scale-105'
              }`}
            >
              <CreditCardIcon className='w-6 h-6' />
              <span className='text-xs mt-1'>Продукты</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationLayout;
