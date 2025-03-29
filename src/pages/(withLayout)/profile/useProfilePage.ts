import type { GetProfileResponse } from '@/generated/api/models';

import { Role } from '@/generated/api/models';
// import { useGetApiV1UserProfile } from '@/generated/api/requests';

export const useProfilePage = () => {
  // TODO use getApiV1UserProfile
  // const getApiV1UserProfile = useGetApiV1UserProfile();

  const profile: GetProfileResponse = {
    id: '1',
    email: 'email',
    role: Role.NUMBER_0,
    username: 'test'
  };

  return { data: { profile } };
};
