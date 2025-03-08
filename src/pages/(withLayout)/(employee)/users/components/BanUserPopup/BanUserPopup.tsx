import type { User } from '@/generated/api/models';

import { IDS } from '@/utils/constants/ids';

interface BanUserPopupProps {
  user: User;
  onBanUser: () => void;
}

export const BanUserPopup = ({ user, onBanUser }: BanUserPopupProps) => (
  <dialog className='modal modal-open' id={IDS.POPUPS.BAN_USER}>
    <div className='modal-box'>
      <h3 className='font-bold text-lg'>Бан пользователя {user.email}</h3>
      <p className='py-4'>Вы уверены, что хотите забанить пользователя {user.email}?</p>
      <div className='modal-action'>
        <form method='dialog'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' type='submit'>
            ✕
          </button>
          <button className='btn btn-neutral' type='submit' onClick={onBanUser}>
            Подтвердить
          </button>
        </form>
      </div>
    </div>
  </dialog>
);
