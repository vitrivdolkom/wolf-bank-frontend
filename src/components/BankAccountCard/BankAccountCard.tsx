import type { BankAccountDto } from '@/generated/api/models';

import { ROUTES } from '@/utils/constants';
import {
  formatTimestamp,
  getStringFromDecimalValue,
  translateBankAccountStatus,
  translateBankAccountType
} from '@/utils/helpers';

import { useBankAccountCard } from './useBankAccountCard';

interface BankAccountCardProps {
  bankAccount: BankAccountDto;
  index: number;
}

export const BankAccountCard = ({ bankAccount, index }: BankAccountCardProps) => {
  const { state, functions } = useBankAccountCard(bankAccount.bankAccountId!);

  return (
    <div key={bankAccount.bankAccountId} className='card bg-base-100 shadow-xl'>
      <div className='card-body'>
        <button
          className='btn btn-sm btn-outline absolute right-4 top-4'
          type='button'
          onClick={functions.onHideAccountClick}
        >
          {state.isHiddenAccount ? 'Показать' : 'Скрыть'}
        </button>
        <a href={ROUTES.ACCOUNT(bankAccount.bankAccountId || '')}>
          <h3 className='card-title'>Номер счета: {index + 1}</h3>
        </a>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <p>
            Тип:{' '}
            <span className='badge badge-secondary'>
              {translateBankAccountType(bankAccount.type)}
            </span>
          </p>
          <p>
            Статус:{' '}
            <span className='badge badge-accent'>
              {translateBankAccountStatus(bankAccount.status)}
            </span>
          </p>
          <p>
            Баланс:{' '}
            {state.isHiddenAccount ? '****' : getStringFromDecimalValue(bankAccount.balance)}
          </p>
          <p>Дата создания: {formatTimestamp(bankAccount.createdAt)}</p>
        </div>
      </div>
    </div>
  );
};
