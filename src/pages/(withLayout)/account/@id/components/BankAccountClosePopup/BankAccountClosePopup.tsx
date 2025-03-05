import { IDS } from '@/utils/constants/ids';

interface BankAccountClosePopupProps {
  onCloseAccount: () => void;
}

export const BankAccountClosePopup = ({ onCloseAccount }: BankAccountClosePopupProps) => (
  <dialog className='modal' id={IDS.POPUPS.CLOSE_ACCOUNT}>
    <div className='modal-box'>
      <h3 className='font-bold text-lg'>Закрытие счета</h3>
      <p className='py-4'>Вы уверены, что хотите закрыть счет?</p>
      <div className='modal-action'>
        <form method='dialog'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' type='submit'>
            ✕
          </button>
          <button className='btn btn-error' type='submit' onClick={onCloseAccount}>
            Закрыть
          </button>
        </form>
      </div>
    </div>
  </dialog>
);
