import { ROUTES } from '@/utils/constants';
import { formatTimestamp } from '@/utils/helpers';

interface UserCardProps {
  // TODO fix with real type
  user: any;
}

export const UserCard = ({ user }: UserCardProps) => (
  <div className='card bg-base-100 shadow-xl'>
    <div className='card-body'>
      <a href={ROUTES.USER(user.id || '')}>
        <h3 className='card-title'>Пользователь #{user.id}</h3>
      </a>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <p>
          Роль: <span className='badge badge-secondary'>{user.role}</span>
        </p>
        <p>Email: {user.email}</p>
        <p>Имя пользователя: {user.username}</p>
        <p>Дата регистрации: {formatTimestamp(user.createdAt)}</p>
      </div>
    </div>
  </div>
);
