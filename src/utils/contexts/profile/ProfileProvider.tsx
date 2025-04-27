import { useEffect, useMemo } from 'react';
import { usePageContext } from 'vike-react/usePageContext';

import { Role } from '@/generated/api/models';
import { useGetApiV1UserProfile, usePostApiV1AuthToken } from '@/generated/api/requests';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';

import { ProfileContext } from './ProfileContext';

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const pageContext = usePageContext();
  const { code: sessionCode } = pageContext.urlParsed.search;

  const enableProfileQuery =
    !pageContext.urlPathname.includes('/register') && pageContext.urlPathname !== '/';
  const getApiV1UserProfileQuery = useGetApiV1UserProfile({
    query: { enabled: enableProfileQuery }
  });

  const postApiV1AuthToken = usePostApiV1AuthToken();

  useEffect(() => {
    if (!sessionCode) return;

    const fetchToken = async () => {
      const postApiV1AuthTokenResponse = await postApiV1AuthToken.mutateAsync({
        data: {
          clientId: 'wem7LcxWDUArXEm-0e4nsEjkwsroaXU_',
          code: sessionCode,
          clientSecret: 'XjDrJbBpJ6akhpwz5Jn070Bypajst3Nkb8wepVWyqEDLjnV4gxsW0nD8zctByj8l'
        }
      });

      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, postApiV1AuthTokenResponse.accessToken!);
    };
    fetchToken();
  }, [sessionCode]);

  useEffect(() => {
    if (!getApiV1UserProfileQuery.data?.id) return;

    localStorage.setItem(LOCAL_STORAGE_KEYS.USER_ID, getApiV1UserProfileQuery.data.id);
  }, [getApiV1UserProfileQuery.data]);

  const profile = useMemo(
    () =>
      getApiV1UserProfileQuery.data
        ? {
            userId: getApiV1UserProfileQuery.data!.id!,
            role:
              getApiV1UserProfileQuery.data!.role! === Role.NUMBER_0
                ? ('USER' as const)
                : ('EMPLOYEE' as const)
          }
        : undefined,
    [getApiV1UserProfileQuery.data]
  );

  return <ProfileContext value={{ profile }}>{children}</ProfileContext>;
};
