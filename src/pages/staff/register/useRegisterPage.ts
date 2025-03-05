import { usePageContext } from 'vike-react/usePageContext';
import { navigate } from 'vike/client/router';

import { ROUTES } from '@/utils/constants';

export const useRegisterPage = () => {
  const pageContext = usePageContext();

  const onRegister = async () => {
    // todo make request

    const user: CookieUser = {
      role: 'staff'
    };
    pageContext.user = user;

    await navigate(ROUTES.USERS);
  };

  return { functions: { onRegister } };
};
