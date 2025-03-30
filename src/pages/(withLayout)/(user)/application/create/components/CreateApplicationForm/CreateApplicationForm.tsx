import { BankAccountSelect } from '@/components';
import { getStringFromDecimalValue } from '@/utils/helpers';

import { useCreateApplicationForm } from './useCreateApplicationForm';

export const CreateApplicationForm = () => {
  const { form, functions, state } = useCreateApplicationForm();

  return (
    <div className='w-full max-w-md bg-base-100 p-8 rounded-lg shadow-xl'>
      <h2 className='text-2xl font-bold text-center mb-8'>Оформление заявки</h2>

      <form onSubmit={functions.onSubmit} {...form}>
        <fieldset disabled={state.loading}>
          <div className='space-y-6'>
            <div>
              <label className='text-sm font-medium' htmlFor='amount'>
                Сумма кредита (руб)
              </label>
              <input
                id='amount'
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

            <div>
              <label className='text-sm font-medium' htmlFor='term'>
                Срок кредита (месяцев)
              </label>
              <input
                id='term'
                type='number'
                {...form.register('term')}
                className={`input input-bordered w-full mt-2 ${
                  form.formState.errors.term ? 'input-error' : ''
                }`}
                placeholder='Введите срок кредита'
              />
              {form.formState.errors.term?.message && (
                <span className='text-xs text-error mt-1 block'>
                  {form.formState.errors.term?.message}
                </span>
              )}
            </div>

            <BankAccountSelect
              label='Счет для зачисления'
              value={form.watch('bankAccountId')}
              error={form.formState.errors.bankAccountId?.message}
              onChange={(value) => form.setValue('bankAccountId', value)}
            />

            {state.availableProduct && (
              <div className='card bg-base-200 shadow-md'>
                <div className='card-body p-4'>
                  <h3 className='card-title text-lg font-medium mb-2'>Доступное предложение</h3>

                  <div className='grid grid-cols-2 gap-4'>
                    <div>
                      <p className='text-sm text-base-content/70'>Процентная ставка</p>
                      <p className='text-lg font-semibold'>
                        {getStringFromDecimalValue(state.availableProduct.interest)}%
                      </p>
                    </div>

                    <div>
                      <p className='text-sm text-base-content/70'>Сумма кредита</p>
                      <p className='text-lg font-semibold'>
                        {getStringFromDecimalValue(state.availableProduct.amount)} ₽
                      </p>
                    </div>

                    <div>
                      <p className='text-sm text-base-content/70'>Сумма уплаты процентов</p>
                      <p className='text-lg font-semibold'>
                        {getStringFromDecimalValue(state.availableProduct.originationAmount)} ₽
                      </p>
                    </div>

                    <div>
                      <p className='text-sm text-base-content/70'>Срок кредита</p>
                      <p className='text-lg font-semibold'>{state.availableProduct.term} месяцев</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              className='btn btn-info w-full'
              disabled={!state.enableGetAvailableProduct}
              type='button'
              onClick={functions.onGetAvailableProductClick}
            >
              Получить предложение
            </button>
            <button
              className='btn btn-neutral w-full'
              disabled={state.loading || !state.availableProduct}
              type='submit'
            >
              Отправить заявку
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};
