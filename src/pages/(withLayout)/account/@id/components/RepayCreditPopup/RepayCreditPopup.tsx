import type { BankAccountDto } from '@/generated/api/models';

import { IDS } from '@/utils/constants/ids';

interface RepayCreditPopupProps {
  bankAccount: BankAccountDto;
  onRepayCredit: () => void;
}

export const RepayCreditPopup = ({ bankAccount, onRepayCredit }: RepayCreditPopupProps) => (
  <dialog className='modal' id={IDS.POPUPS.REPAY_CREDIT}>
    <div className='modal-box'>
      <h3 className='font-bold text-lg'>Погашение кредита {bankAccount.agreementId}</h3>
      <p className='py-4'>Вы уверены, что хотите погасить всеми средствами?</p>
      <div className='modal-action'>
        <form method='dialog'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' type='submit'>
            ✕
          </button>
          <button className='btn btn-neutral' type='submit' onClick={onRepayCredit}>
            Подтвердить
          </button>
        </form>
      </div>
    </div>
  </dialog>
);
