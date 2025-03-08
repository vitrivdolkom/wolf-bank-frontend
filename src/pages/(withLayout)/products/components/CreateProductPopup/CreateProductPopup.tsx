import { IDS } from '@/utils/constants/ids';

import { useCreateProductPopup } from './useCreateProductPopup';

interface CreateProductPopupProps {
  onClose: () => void;
}

export const CreateProductPopup = ({ onClose }: CreateProductPopupProps) => {
  const { state, functions, form } = useCreateProductPopup({ onClose });

  return (
    <dialog className='modal' id={IDS.POPUPS.ADD_PRODUCT}>
      <div className='modal-box px-4'>
        <h3 className='font-bold text-lg mb-6'>Создание тарифа</h3>

        <button
          className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          type='button'
          onClick={onClose}
        >
          ✕
        </button>
        <form method='dialog' onSubmit={functions.onSubmit} {...form}>
          <fieldset disabled={state.loading}>
            <div className='space-y-4'>
              <div>
                <label className='text-sm font-medium' htmlFor='productCode'>
                  Код продукта
                </label>
                <input
                  id='productCode'
                  type='text'
                  {...form.register('productCode')}
                  className={`input input-bordered w-full mt-2 ${
                    form.formState.errors.productCode ? 'input-error' : ''
                  }`}
                  placeholder='Введите код продукта'
                />
                {form.formState.errors.productCode?.message && (
                  <span className='text-xs text-error mt-1 block'>
                    {form.formState.errors.productCode?.message}
                  </span>
                )}
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='text-sm font-medium' htmlFor='minInterest'>
                    Мин. процент
                  </label>
                  <input
                    id='minInterest'
                    step='0.01'
                    type='number'
                    {...form.register('minInterest')}
                    className={`input input-bordered w-full mt-2 ${
                      form.formState.errors.minInterest ? 'input-error' : ''
                    }`}
                    placeholder='10.00'
                  />
                  {form.formState.errors.minInterest?.message && (
                    <span className='text-xs text-error mt-1 block'>
                      {form.formState.errors.minInterest?.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className='text-sm font-medium' htmlFor='maxInterest'>
                    Макс. процент
                  </label>
                  <input
                    id='maxInterest'
                    step='0.01'
                    type='number'
                    {...form.register('maxInterest')}
                    className={`input input-bordered w-full mt-2 ${
                      form.formState.errors.maxInterest ? 'input-error' : ''
                    }`}
                    placeholder='20.00'
                  />
                  {form.formState.errors.maxInterest?.message && (
                    <span className='text-xs text-error mt-1 block'>
                      {form.formState.errors.maxInterest?.message}
                    </span>
                  )}
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='text-sm font-medium' htmlFor='minTerm'>
                    Мин. срок (мес.)
                  </label>
                  <input
                    id='minTerm'
                    type='number'
                    {...form.register('minTerm')}
                    className={`input input-bordered w-full mt-2 ${
                      form.formState.errors.minTerm ? 'input-error' : ''
                    }`}
                    placeholder='10'
                  />
                  {form.formState.errors.minTerm?.message && (
                    <span className='text-xs text-error mt-1 block'>
                      {form.formState.errors.minTerm?.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className='text-sm font-medium' htmlFor='maxTerm'>
                    Макс. срок (мес.)
                  </label>
                  <input
                    id='maxTerm'
                    type='number'
                    {...form.register('maxTerm')}
                    className={`input input-bordered w-full mt-2 ${
                      form.formState.errors.maxTerm ? 'input-error' : ''
                    }`}
                    placeholder='24'
                  />
                  {form.formState.errors.maxTerm?.message && (
                    <span className='text-xs text-error mt-1 block'>
                      {form.formState.errors.maxTerm?.message}
                    </span>
                  )}
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='text-sm font-medium' htmlFor='minPrincipalAmount'>
                    Мин. сумма кредита
                  </label>
                  <input
                    id='minPrincipalAmount'
                    step='1000'
                    type='number'
                    {...form.register('minPrincipalAmount')}
                    className={`input input-bordered w-full mt-2 ${
                      form.formState.errors.minPrincipalAmount ? 'input-error' : ''
                    }`}
                    placeholder='1000'
                  />
                  {form.formState.errors.minPrincipalAmount?.message && (
                    <span className='text-xs text-error mt-1 block'>
                      {form.formState.errors.minPrincipalAmount?.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className='text-sm font-medium' htmlFor='maxPrincipalAmount'>
                    Макс. сумма кредита
                  </label>
                  <input
                    id='maxPrincipalAmount'
                    step='1000'
                    type='number'
                    {...form.register('maxPrincipalAmount')}
                    className={`input input-bordered w-full mt-2 ${
                      form.formState.errors.maxPrincipalAmount ? 'input-error' : ''
                    }`}
                    placeholder='100000'
                  />
                  {form.formState.errors.maxPrincipalAmount?.message && (
                    <span className='text-xs text-error mt-1 block'>
                      {form.formState.errors.maxPrincipalAmount?.message}
                    </span>
                  )}
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='text-sm font-medium' htmlFor='minOriginationAmount'>
                    Мин. сумма процентов
                  </label>
                  <input
                    id='minOriginationAmount'
                    step='1000'
                    type='number'
                    {...form.register('minOriginationAmount')}
                    className={`input input-bordered w-full mt-2 ${
                      form.formState.errors.minOriginationAmount ? 'input-error' : ''
                    }`}
                    placeholder='1000'
                  />
                  {form.formState.errors.minOriginationAmount?.message && (
                    <span className='text-xs text-error mt-1 block'>
                      {form.formState.errors.minOriginationAmount?.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className='text-sm font-medium' htmlFor='maxOriginationAmount'>
                    Макс. сумма процентов
                  </label>
                  <input
                    id='maxOriginationAmount'
                    step='1000'
                    type='number'
                    {...form.register('maxOriginationAmount')}
                    className={`input input-bordered w-full mt-2 ${
                      form.formState.errors.maxOriginationAmount ? 'input-error' : ''
                    }`}
                    placeholder='100000'
                  />
                  {form.formState.errors.maxOriginationAmount?.message && (
                    <span className='text-xs text-error mt-1 block'>
                      {form.formState.errors.maxOriginationAmount?.message}
                    </span>
                  )}
                </div>
              </div>

              <div className='modal-action'>
                <button className='btn btn-neutral' type='submit'>
                  {state.loading ? 'Создание...' : 'Создать'}
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </dialog>
  );
};
