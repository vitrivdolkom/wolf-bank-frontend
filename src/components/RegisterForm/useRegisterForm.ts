import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import type { RegisterSchema } from './registerSchema';

import { registerSchema } from './registerSchema';

interface UseRegisterFormParams {
  onSuccessSubmit: (values: RegisterSchema) => void;
}

export const useRegisterForm = ({ onSuccessSubmit }: UseRegisterFormParams) => {
  const registerForm = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: 'example@ex.com',
      username: 'example',
      password: 'example'
    },
    mode: 'onSubmit'
  });

  const onSubmit = registerForm.handleSubmit(onSuccessSubmit);

  return { functions: { onSubmit }, form: registerForm };
};
