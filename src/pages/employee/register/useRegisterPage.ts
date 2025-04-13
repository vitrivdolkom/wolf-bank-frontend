import { navigate } from 'vike/client/router';

import type { RegisterRequest } from '@/generated/api/models';

import { Role } from '@/generated/api/models';
import { usePostApiV1AuthRegister } from '@/generated/api/requests';
import { ROUTES } from '@/utils/constants';

export const useRegisterPage = () => {
  const postApiV1AuthRegister = usePostApiV1AuthRegister();

  const onRegister = async (values: RegisterRequest) => {
    await postApiV1AuthRegister.mutateAsync({
      data: { ...values, role: Role.NUMBER_1 }
    });

    await navigate(ROUTES.USERS);
  };

  return { functions: { onRegister } };
};
