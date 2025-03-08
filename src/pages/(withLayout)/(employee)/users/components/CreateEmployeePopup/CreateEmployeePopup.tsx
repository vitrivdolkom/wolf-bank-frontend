import { IDS } from '@/utils/constants/ids';

import { useCreateEmployeePopup } from './useCreateEmployeePopup';

interface CreateEmployeePopupProps {
  onClose: () => void;
}

export const CreateEmployeePopup = ({ onClose }: CreateEmployeePopupProps) => {
  const { state, functions, form } = useCreateEmployeePopup({ onClose });

  return (
    <dialog className='modal' id={IDS.POPUPS.CREATE_EMPLOYEE}>
      <div className='modal-box px-4'>
        <h3 className='font-bold text-lg mb-6'>Создание сотрудника</h3>

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
                <label className='text-sm font-medium' htmlFor='email'>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  {...form.register('email')}
                  className={`input input-bordered w-full mt-2 ${
                    form.formState.errors.email ? 'input-error' : ''
                  }`}
                  placeholder='Введите email'
                />
                {form.formState.errors.email?.message && (
                  <span className='text-xs text-error mt-1 block'>
                    {form.formState.errors.email?.message}
                  </span>
                )}
              </div>

              <div>
                <label className='text-sm font-medium' htmlFor='password'>
                  Пароль
                </label>
                <input
                  id='password'
                  type='password'
                  {...form.register('password')}
                  className={`input input-bordered w-full mt-2 ${
                    form.formState.errors.password ? 'input-error' : ''
                  }`}
                  placeholder='Введите пароль'
                />
                {form.formState.errors.password?.message && (
                  <span className='text-xs text-error mt-1 block'>
                    {form.formState.errors.password?.message}
                  </span>
                )}
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
