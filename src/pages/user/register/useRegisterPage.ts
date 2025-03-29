import { useCookies } from 'react-cookie';
import { navigate } from 'vike/client/router';

import type { RegisterRequest } from '@/generated/api/models';

import { usePostApiV1AuthRegister } from '@/generated/api/requests';
import { LOCAL_STORAGE_KEYS, ROUTES } from '@/utils/constants';

export const useRegisterPage = () => {
  const [_, setCookie] = useCookies(['user']);
  const postApiV1AuthRegister = usePostApiV1AuthRegister();

  const onRegister = async (values: RegisterRequest) => {
    const postApiV1AuthRegisterResponse = await postApiV1AuthRegister.mutateAsync({ data: values });

    const user: PageContextUser = {
      id: '1',
      role: 'user'
    };
    setCookie('user', user, { path: '/' });
    localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, postApiV1AuthRegisterResponse.token ?? '');

    await navigate(ROUTES.MAIN);
  };

  return { functions: { onRegister } };
};
