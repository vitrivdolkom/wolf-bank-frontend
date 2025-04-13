import { yupResolver } from '@hookform/resolvers/yup';
import { useIsMutating } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { usePostApiV1User } from '@/generated/api/requests';

import type { CreateUserSchema } from './createUserSchema';

import { createUserSchema } from './createUserSchema';

interface UseCreateUserPopupParams {
  onClose: () => void;
}

export const useCreateUserPopup = ({ onClose }: UseCreateUserPopupParams) => {
  const loading = !!useIsMutating();
  const createUserForm = useForm<CreateUserSchema>({
    resolver: yupResolver(createUserSchema),
    mode: 'onSubmit'
  });

  const postApiV1User = usePostApiV1User();

  const onSubmit = createUserForm.handleSubmit(async (values) => {
    await postApiV1User.mutateAsync({
      data: {
        email: values.email,
        password: values.password
      }
    });

    onClose();
  });

  return {
    state: { loading },
    form: createUserForm,
    functions: { onSubmit }
  };
};
