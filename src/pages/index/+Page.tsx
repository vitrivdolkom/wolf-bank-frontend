import { ROUTES } from '@/utils/constants';

const Page = () => (
  <div className='flex flex-col justify-center items-center min-h-screen bg-base-200 px-4 rounded-lg shadow-xl'>
    <div>
      <a href={ROUTES.USERS} className='btn btn-ghost'>
        Я сотрудник
      </a>

      <a href={ROUTES.MAIN} className='btn btn-ghost'>
        Я клиент
      </a>
    </div>

    <a
      href='http://localhost:8082/register?client_id=wem7LcxWDUArXEm-0e4nsEjkwsroaXU_&redirect_uri=http://localhost:3000/&response_type=code'
      className='btn btn-neutral mt-5'
    >
      Создать аккаунт
    </a>
  </div>
);

export default Page;
