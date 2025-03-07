import { useData } from 'vike-react/useData';

import type { UsersPageData } from './+data';

import { UserCard } from './components';

const UsersPage = () => {
  const { users } = useData<UsersPageData>();

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Пользователи</h1>

      <div className='mb-6'>
        <div className='collapse collapse-arrow bg-base-200'>
          <input defaultChecked type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            Список пользователей ({users.length})
          </div>
          <div className='collapse-content'>
            <div className='space-y-4 mt-4'>
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
