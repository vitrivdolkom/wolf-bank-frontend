import type { ReactNode } from 'react';

import { ArrowRightLeftIcon, CreditCardIcon, HomeIcon, LogOutIcon, UserIcon } from 'lucide-react';
import { usePageContext } from 'vike-react/usePageContext';
import { navigate } from 'vike/client/router';

import { usePostApiV1AuthLogout } from '@/generated/api/requests';
import { LOCAL_STORAGE_KEYS, ROUTES } from '@/utils/constants';
import { useProfile } from '@/utils/contexts/profile';

interface NavigationLayoutProps {
  children: ReactNode;
}

const NavigationLayout = ({ children }: NavigationLayoutProps) => {
  const pageContext = usePageContext();
  const profileContext = useProfile();
  const postApiV1AuthLogout = usePostApiV1AuthLogout();

  const isUser = profileContext.profile?.role === 'USER';

  const mainRoute = isUser ? ROUTES.MAIN : ROUTES.USERS;

  const isActive = (path: string) => pageContext.urlPathname === path;

  const onLogoutClick = async () => {
    await postApiV1AuthLogout.mutateAsync();

    localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.FIREBASE_USER_ID);

    navigate(ROUTES.ROOT);
  };

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

            <a
              href={ROUTES.TRANSFERS}
              className={`flex flex-col items-center justify-center w-20 h-full transition-all duration-200 ${
                isActive(ROUTES.TRANSFERS)
                  ? 'text-primary scale-110'
                  : 'text-base-content/70 hover:text-primary hover:scale-105'
              }`}
            >
              <ArrowRightLeftIcon className='w-6 h-6' />
              <span className='text-xs mt-1'>Переводы</span>
            </a>

            <a
              href={ROUTES.PROFILE}
              className={`flex flex-col items-center justify-center w-20 h-full transition-all duration-200 ${
                isActive(ROUTES.PROFILE)
                  ? 'text-primary scale-110'
                  : 'text-base-content/70 hover:text-primary hover:scale-105'
              }`}
            >
              <UserIcon className='w-6 h-6' />
              <span className='text-xs mt-1'>Профиль</span>
            </a>

            <button
              className='flex flex-col items-center justify-center w-20 h-full transition-all duration-200 text-base-content/70 hover:text-primary hover:scale-105'
              type='button'
              onClick={onLogoutClick}
            >
              <LogOutIcon className='w-6 h-6' />
              <span className='text-xs mt-1'>Выйти</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationLayout;
