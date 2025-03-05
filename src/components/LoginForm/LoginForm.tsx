import type { LoginSchema } from './loginSchema';

import { useLoginForm } from './useLoginForm';

interface LoginFormProps {
  onSuccessSubmit: (values: LoginSchema) => void;
}

export const LoginForm = ({ onSuccessSubmit }: LoginFormProps) => {
  const { form, functions } = useLoginForm({ onSuccessSubmit });

  return (
    <div className='w-full max-w-md bg-base-100 p-8 rounded-lg shadow-xl'>
      <h2 className='text-2xl font-bold text-center mb-8'>Вход в аккаунт</h2>

      <form onSubmit={functions.onSubmit} {...form}>
        <div className='space-y-6'>
          <div>
            <label className='text-sm font-medium' htmlFor='username'>
              Имя пользователя
            </label>
            <input
              id='username'
              type='text'
              {...form.register('username')}
              className={`input input-bordered w-full mt-2 ${
                form.formState.errors.username ? 'input-error' : ''
              }`}
              placeholder='Введите имя пользователя'
            />
            {form.formState.errors.username?.message && (
              <span className='text-xs text-error mt-1 block'>
                {form.formState.errors.username?.message}
              </span>
            )}
          </div>

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
                {form.formState.errors.email.message}
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
                {form.formState.errors.password.message}
              </span>
            )}
          </div>

          <button className='btn btn-neutral w-full' type='submit'>
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};
