import type { BankAccountDto } from '@/generated/api/models';

import { ROUTES } from '@/utils/constants';
import {
  formatTimestamp,
  getStringFromDecimalValue,
  translateBankAccountStatus,
  translateBankAccountType
} from '@/utils/helpers';

interface BankAccountCardProps {
  bankAccount: BankAccountDto;
  index: number;
}

export const BankAccountCard = ({ bankAccount, index }: BankAccountCardProps) => (
  <div key={bankAccount.bankAccountId} className='card bg-base-100 shadow-xl'>
    <div className='card-body'>
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
        <p>Баланс: {getStringFromDecimalValue(bankAccount.balance)}</p>
        <p>Дата создания: {formatTimestamp(bankAccount.createdAt)}</p>
      </div>
    </div>
  </div>
);
