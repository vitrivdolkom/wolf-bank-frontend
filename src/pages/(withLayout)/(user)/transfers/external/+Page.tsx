import { BankAccountSelect } from '@/components';

import { ExternalBankAccountSelect } from './components';
import { useTransfersPage } from './useTransfersPage';

const TransferPage = () => {
  const { state, functions, form } = useTransfersPage();

  return (
    <div className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='text-2xl font-bold mb-6'>Перевод между счетами</h1>

      <div className='card bg-base-200'>
        <div className='card-body p-6'>
          <form onSubmit={functions.onSubmit} {...form}>
            <fieldset className='space-y-4' disabled={state.loading}>
              <BankAccountSelect
                label='Счет списания'
                value={form.watch('fromAccount')}
                error={form.formState.errors.fromAccount?.message}
                onChange={(value) => form.setValue('fromAccount', value)}
              />

              <ExternalBankAccountSelect
                label='Счет зачисления'
                value={form.watch('toAccount')}
                error={form.formState.errors.toAccount?.message}
                onChange={(value) => form.setValue('toAccount', value)}
              />

              <div>
                <label className='text-sm font-medium' htmlFor='amount'>
                  Сумма перевода
                </label>
                <input
                  id='amount'
                  min='1'
                  type='number'
                  {...form.register('amount')}
                  className={`input input-bordered w-full mt-2 ${
                    form.formState.errors.amount ? 'input-error' : ''
                  }`}
                  placeholder='Введите сумму кредита'
                />
                {form.formState.errors.amount?.message && (
                  <span className='text-xs text-error mt-1 block'>
                    {form.formState.errors.amount?.message}
                  </span>
                )}
              </div>

              <div className='card-actions justify-end mt-6'>
                <button className='btn btn-primary w-full' type='submit'>
                  Перевести
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransferPage;
