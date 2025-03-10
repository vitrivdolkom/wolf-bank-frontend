import type { RegisterSchema } from './registerSchema';

import { useRegisterForm } from './useRegisterForm';

interface RegisterFormProps {
  onSuccessSubmit: (values: RegisterSchema) => void;
}

export const RegisterForm = ({ onSuccessSubmit }: RegisterFormProps) => {
  const { form, functions } = useRegisterForm({ onSuccessSubmit });

  return (
    <div className='w-full max-w-md bg-base-100 p-8 rounded-lg shadow-xl'>
      <h2 className='text-2xl font-bold text-center mb-8'>Регистрация аккаунта</h2>

      <form onSubmit={functions.onSubmit} {...form}>
        <div className='space-y-6'>
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
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};
