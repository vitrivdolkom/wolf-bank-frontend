import { getRoleBadgeClass, translateUserRole } from '@/utils/helpers';

import { useProfilePage } from './useProfilePage';

const ProfilePage = () => {
  const { data } = useProfilePage();

  if (!data.profile) return null;

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Профиль</h1>

      <div className='max-w-2xl mx-auto'>
        <div className='card bg-base-100 shadow-xl'>
          <div className='card-body'>
            <h2 className='card-title mb-6'>Личная информация</h2>

            <div className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <span className='text-base-content/70'>Email</span>
                <span className='text-right font-medium'>{data.profile.email}</span>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <span className='text-base-content/70'>Роль</span>
                <span className='text-right'>
                  <span className={`badge ${getRoleBadgeClass(data.profile.role)}`}>
                    {translateUserRole(data.profile.role)}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
