import type { BankAccountDto } from '@/generated/api/models';

import { BankAccountStatus } from '@/generated/api/models';

import { useBankAccountActions } from './useBankAccountActions';

interface BankAccountActionsProps {
  bankAccount: BankAccountDto;
}

export const BankAccountActions = ({ bankAccount }: BankAccountActionsProps) => {
  const { state, functions } = useBankAccountActions({ bankAccount });

  return (
    <div>
      <div className='grid grid-cols-2'>
        <div className='card bg-base-200'>
          <div className='card-body p-4 text-center'>
            <input
              className='input input-bordered w-full mb-2'
              disabled={bankAccount.status === BankAccountStatus.NUMBER_2}
              min='0'
              type='number'
              value={state.depositAmount}
              onChange={(e) => functions.setDepositAmount(e.target.value)}
              placeholder='сумма'
            />
            <button
              className='btn btn-neutral w-full'
              disabled={!state.depositAmount || bankAccount.status === BankAccountStatus.NUMBER_2}
              type='button'
              onClick={functions.onDeposit}
            >
              Внести
            </button>
          </div>
        </div>

        <div className='card bg-base-200'>
          <div className='card-body p-4 text-center'>
            <input
              className='input input-bordered w-full mb-2'
              disabled={bankAccount.status === BankAccountStatus.NUMBER_2}
              max={state.maxWithdrawAmount}
              min='0'
              type='number'
              value={state.withdrawAmount}
              onChange={(e) => functions.setWithdrawAmount(e.target.value)}
              placeholder='сумма'
            />
            <button
              className='btn btn-neutral w-full'
              disabled={!state.withdrawAmount || bankAccount.status === BankAccountStatus.NUMBER_2}
              type='button'
              onClick={functions.onWithdraw}
            >
              Снять
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
