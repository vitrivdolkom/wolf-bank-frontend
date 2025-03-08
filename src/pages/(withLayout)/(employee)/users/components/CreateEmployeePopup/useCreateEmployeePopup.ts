import { yupResolver } from '@hookform/resolvers/yup';
import { useIsMutating } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { reload } from 'vike/client/router';

import { usePostApiV1Employee } from '@/generated/api/requests';

import type { CreateEmployeeSchema } from './createEmployeeSchema';

import { createEmployeeSchema } from './createEmployeeSchema';

interface UseCreateEmployeePopupParams {
  onClose: () => void;
}

export const useCreateEmployeePopup = ({ onClose }: UseCreateEmployeePopupParams) => {
  const loading = !!useIsMutating();
  const createEmployeeForm = useForm<CreateEmployeeSchema>({
    resolver: yupResolver(createEmployeeSchema),
    mode: 'onSubmit'
  });

  const postApiV1Employee = usePostApiV1Employee();

  const onSubmit = createEmployeeForm.handleSubmit(async (values) => {
    await postApiV1Employee.mutateAsync({
      data: {
        email: values.email,
        password: values.password
      }
    });

    await reload();
    onClose();
  });

  return {
    state: { loading },
    form: createEmployeeForm,
    functions: { onSubmit }
  };
};
