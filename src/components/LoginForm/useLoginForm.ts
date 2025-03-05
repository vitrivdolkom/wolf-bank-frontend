import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import type { LoginSchema } from './loginSchema';

import { loginSchema } from './loginSchema';

interface UseLoginFormParams {
  onSuccessSubmit: (values: LoginSchema) => void;
}

export const useLoginForm = ({ onSuccessSubmit }: UseLoginFormParams) => {
  const loginForm = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
    mode: 'onSubmit'
  });

  const onSubmit = loginForm.handleSubmit(onSuccessSubmit);

  return { functions: { onSubmit }, form: loginForm };
};
