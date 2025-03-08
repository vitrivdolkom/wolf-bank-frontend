import { ROUTES } from '@/utils/constants';

import { LoginForm } from '../../../components/LoginForm/LoginForm';
import { useLoginPage } from './useLoginPage';

const Page = () => {
  const { functions } = useLoginPage();

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-base-200 px-4'>
      <LoginForm onSuccessSubmit={functions.onLogin} />
      <div className='mt-6 text-center'>
        <a href={ROUTES.USER_REGISTER} className='text-primary hover:underline'>
          Нет аккаунта? Зарегистрироваться
        </a>
      </div>
    </div>
  );
};

export default Page;
