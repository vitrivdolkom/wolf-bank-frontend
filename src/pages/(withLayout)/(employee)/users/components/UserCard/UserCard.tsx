import type { User } from '@/generated/api/models';

import { Role } from '@/generated/api/models';
import { ROUTES } from '@/utils/constants';
import { getRoleBadgeClass, translateUserRole } from '@/utils/helpers';

interface UserCardProps {
  user: User;
  onBanUserPopupOpen: (user: User) => void;
}

export const UserCard = ({ user, onBanUserPopupOpen }: UserCardProps) => (
  <div className='card bg-base-100 shadow-xl'>
    <div className='card-body'>
      {user.role === Role.NUMBER_0 && (
        <a href={ROUTES.USER(user.id || '')}>
          <h3 className='card-title hover:underline'>Пользователь {user.email}</h3>
        </a>
      )}
      {user.role === Role.NUMBER_1 && <h3 className='card-title'>Сотрудник {user.email}</h3>}
      <div className='flex flex-col gap-5 mt-2'>
        <p>
          Роль:{' '}
          <span className={`badge ${getRoleBadgeClass(user.role)}`}>
            {translateUserRole(user.role)}
          </span>
        </p>
        <button
          className='btn btn-warning w-fit'
          type='button'
          onClick={() => onBanUserPopupOpen(user)}
        >
          Забанить
        </button>
      </div>
    </div>
  </div>
);
