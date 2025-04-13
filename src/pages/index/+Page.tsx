import { ROUTES } from '@/utils/constants';

const Page = () => (
  <div className='flex justify-center items-center h-screen'>
    <a
      href={ROUTES.USERS}
      className={`flex flex-col items-center justify-center w-20 h-full transition-all duration-200 ${'text-base-content/70 hover:text-primary hover:scale-105'}`}
    >
      <span className='text-xs mt-1'>Я сотрудник</span>
    </a>
    <a
      href={ROUTES.MAIN}
      className={`flex flex-col items-center justify-center w-20 h-full transition-all duration-200 ${'text-base-content/70 hover:text-primary hover:scale-105'}`}
    >
      <span className='text-xs mt-1'>Я клиент</span>
    </a>
  </div>
);

export default Page;
