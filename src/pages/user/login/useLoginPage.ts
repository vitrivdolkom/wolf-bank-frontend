import { useCookies } from 'react-cookie';
import { usePageContext } from 'vike-react/usePageContext';
import { navigate, reload } from 'vike/client/router';

import type { LoginRequest } from '@/generated/api/models';

import { usePostApiV1AuthLogin } from '@/generated/api/requests';
import { LOCAL_STORAGE_KEYS, ROUTES } from '@/utils/constants';

export const useLoginPage = () => {
  const pageContext = usePageContext();
  const [_, setCookie] = useCookies(['user']);

  const postApiV1AuthLogin = usePostApiV1AuthLogin();

  const onLogin = async (values: LoginRequest) => {
    // todo fix
    // const postApiV1AuthLoginResponse = await postApiV1AuthLogin.mutateAsync({ data: values });

    const user: PageContextUser = { id: '1', role: 'user' };
    setCookie('user', user, { path: '/' });
    // localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, postApiV1AuthLoginResponse.token ?? '');

    if (pageContext.urlPathname === ROUTES.USER_LOGIN) {
      await navigate(ROUTES.MAIN);
      return;
    }

    await reload();
  };

  return { functions: { onLogin } };
};
