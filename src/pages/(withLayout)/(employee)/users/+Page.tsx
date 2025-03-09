import { BanUserPopup, CreateEmployeePopup, CreateUserPopup, UserCard } from './components';
import { useUsersPage } from './useUsersPage';

const UsersPage = () => {
  const { data, state, functions } = useUsersPage();

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Пользователи</h1>

      <div className='flex gap-2'>
        <button
          className='btn btn-primary mb-4'
          type='button'
          onClick={functions.onAddUserPopupOpen}
        >
          Добавить пользователя
        </button>
        <CreateUserPopup onClose={functions.onAddUserPopupClose} />
        <button
          className='btn btn-neutral mb-4'
          type='button'
          onClick={functions.onAddEmployeePopupOpen}
        >
          Добавить сотрудника
        </button>
      </div>
      <CreateEmployeePopup onClose={functions.onAddEmployeePopupClose} />
      <input
        className='input input-bordered w-full mb-2'
        value={state.searchFilter}
        onChange={(e) => functions.onSearchFilterChange(e.target.value)}
        placeholder='Поиск'
      />
      <div className='mb-6'>
        <div className='bg-base-200'>
          <div className='text-xl font-medium'>Список пользователей ({data.users.length})</div>
          <div>
            <div className='space-y-4 mt-4'>
              {data.users.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onBanUserPopupOpen={functions.onBanUserPopupOpen}
                />
              ))}
              {state.userToBan && (
                <BanUserPopup user={data.users[0]} onBanUser={functions.onBanUser} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
