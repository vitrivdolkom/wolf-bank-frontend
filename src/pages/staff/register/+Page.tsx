import { RegisterForm } from '@/components';
import { ROUTES } from '@/utils/constants';

import { useRegisterPage } from './useRegisterPage';

const Page = () => {
  const { functions } = useRegisterPage();

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-base-200 px-4'>
      <RegisterForm onSuccessSubmit={functions.onRegister} />
      <div className='mt-6 text-center'>
        <a href={ROUTES.STAFF_LOGIN} className='text-primary hover:underline'>
          Уже есть аккаунт? Войти
        </a>
      </div>
    </div>
  );
};

export default Page;
