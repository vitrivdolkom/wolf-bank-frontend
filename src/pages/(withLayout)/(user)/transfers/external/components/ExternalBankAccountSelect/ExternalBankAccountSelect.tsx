import { BankAccountType } from '@/generated/api/models';
import { useGetApiV1BankAccountAll } from '@/generated/api/requests';
import { getStringFromDecimalValue } from '@/utils/helpers';

interface ExternalBankAccountSelectProps {
  error?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const ExternalBankAccountSelect = ({
  value,
  onChange,
  error,
  label
}: ExternalBankAccountSelectProps) => {
  const getApiV1BankAccount = useGetApiV1BankAccountAll({ limit: 100, offset: 0 });

  const regularAccounts =
    getApiV1BankAccount.data?.filter((account) => account.type === BankAccountType.NUMBER_1) ?? [];

  return (
    <div>
      <label className='text-sm font-medium' htmlFor='bankAccountId'>
        {label}
      </label>
      <select
        className={`select select-bordered w-full mt-2 ${error ? 'select-error' : ''}`}
        id='bankAccountId'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value=''>Выберите счет</option>
        {regularAccounts.map((account, index) => (
          <option key={account.bankAccountId} value={account.bankAccountId ?? index}>
            {account.bankAccountId} - {getStringFromDecimalValue(account.balance)} руб.
          </option>
        ))}
      </select>
      {error && <span className='text-xs text-error mt-1 block'>{error}</span>}
    </div>
  );
};
