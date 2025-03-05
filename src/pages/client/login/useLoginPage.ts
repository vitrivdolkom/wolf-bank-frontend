import { useCookies } from 'react-cookie';
import { usePageContext } from 'vike-react/usePageContext';
import { navigate, reload } from 'vike/client/router';

import { ROUTES } from '@/utils/constants';

export const useLoginPage = () => {
  const pageContext = usePageContext();
  const [_, setCookie] = useCookies(['user']);

  const onLogin = async () => {
    // todo make request

    const user: PageContextUser = { role: 'client' };
    setCookie('user', user);

    if (pageContext.urlPathname === ROUTES.CLIENT_LOGIN) {
      await navigate(ROUTES.MAIN);
      return;
    }

    await reload();
  };

  return { functions: { onLogin } };
};
