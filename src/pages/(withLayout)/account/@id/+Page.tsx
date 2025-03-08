import { ExternalLinkIcon } from 'lucide-react';

import { BankAccountStatus, BankAccountType } from '@/generated/api/models';
import { ROUTES } from '@/utils/constants';
import { getStringFromDecimalValue } from '@/utils/helpers';

import {
  BankAccountActions,
  BankAccountClosePopup,
  RepayCreditPopup,
  TransactionCard
} from './components';
import { useAccountPage } from './useAccountPage';

const AccountPage = () => {
  const { data, functions } = useAccountPage();

  if (!data.bankAccount) return null;

  return (
    <div className='container mx-auto px-4 py-8 max-w-3xl'>
      <div>
        <h1 className='text-2xl font-bold'>
          {data.bankAccount.type === BankAccountType.NUMBER_0
            ? 'Кредитный счет'
            : 'Банковский счет'}
          {data.bankAccount.status === BankAccountStatus.NUMBER_2 && '(Закрыт)'}
        </h1>
        {data.bankAccount.type === BankAccountType.NUMBER_0 && (
          <a
            href={ROUTES.CREDIT(data.bankAccount.agreementId ?? '')}
            className='flex items-center gap-1'
          >
            <p className='text-lg underline text-blue-500'>Кредит {data.bankAccount.agreementId}</p>
            <ExternalLinkIcon className='w-4 h-4 text-blue-500' />
          </a>
        )}
      </div>

      <h2 className='text-xl font-bold text-center mt-6 mb-2'>
        Баланс - {getStringFromDecimalValue(data.bankAccount.balance)} руб
      </h2>

      {data.isUser && <BankAccountActions bankAccount={data.bankAccount} />}
      {data.isBankAccountClosable && (
        <>
          <div className='card bg-base-200'>
            <div className='card-body p-4 text-center'>
              <button
                className='btn btn-error w-full'
                type='button'
                onClick={functions.onCloseAccountPopupOpen}
              >
                Закрыть
              </button>
            </div>
          </div>
          <BankAccountClosePopup onCloseAccount={functions.onCloseAccount} />
        </>
      )}

      {data.isCreditAccountRepayable && (
        <>
          <div className='card bg-base-200'>
            <div className='card-body p-4 text-center'>
              <button
                className='btn btn-error w-full'
                type='button'
                onClick={functions.onRepayCreditPopupOpen}
              >
                Погасить кредит всеми средствами
              </button>
            </div>
          </div>
          <RepayCreditPopup
            bankAccount={data.bankAccount}
            onRepayCredit={functions.onRepayCredit}
          />
        </>
      )}

      <div className='mt-8'>
        <h3 className='text-xl font-bold mb-4'>История операций</h3>
        <div className='space-y-2 overflow-y-auto max-h-[500px]'>
          {data.transactionsHistory.map((transaction) => (
            <TransactionCard
              key={transaction.transactionId}
              currentAccountId={data.bankAccount.bankAccountId!}
              transaction={transaction}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
