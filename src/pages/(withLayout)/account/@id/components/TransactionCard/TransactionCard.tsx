import type { Transaction } from '@/generated/api/models';

import {
  formatTimestamp,
  getStringFromDecimalValue,
  getTransactionClass,
  getTransactionLabel,
  getTransactionSign
} from '@/utils/helpers';

interface TransactionCardProps {
  currentAccountId: string;
  transaction: Transaction;
}

export const TransactionCard = ({ transaction, currentAccountId }: TransactionCardProps) => (
  <div className='p-4 bg-base-200 rounded-lg'>
    <div className='flex justify-between items-center'>
      <div>
        <span className={getTransactionClass(transaction.type)}>
          {getTransactionSign(transaction.type)} {getStringFromDecimalValue(transaction.amount)} руб
        </span>
      </div>
      <span>{formatTimestamp(transaction.createdAt)}</span>
    </div>
    <div className='text-sm text-base-content/70 ml-2 mt-2'>
      {getTransactionLabel(transaction.type)}
      {transaction.fromBankAccountId && transaction.fromBankAccountId !== currentAccountId && (
        <span className='text-sm text-base-content/70 ml-2'>
          от №{transaction.fromBankAccountId}
        </span>
      )}
      {transaction.toBankAccountId && transaction.toBankAccountId !== currentAccountId && (
        <span className='text-sm text-base-content/70 ml-2'>на №{transaction.toBankAccountId}</span>
      )}
    </div>
  </div>
);
