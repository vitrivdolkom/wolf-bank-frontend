import { useCookies } from 'react-cookie';
import { navigate } from 'vike/client/router';

import { ROUTES } from '@/utils/constants';

export const useRegisterPage = () => {
  const [_, setCookie] = useCookies(['user']);

  const onRegister = async () => {
    // todo make request

    const user: PageContextUser = { role: 'client' };
    setCookie('user', user, { path: '/' });

    await navigate(ROUTES.MAIN);
  };

  return { functions: { onRegister } };
};
