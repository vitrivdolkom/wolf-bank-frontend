import { useGetApiV1UserProfile } from '@/generated/api/requests';

export const useProfilePage = () => {
  const getApiV1UserProfile = useGetApiV1UserProfile();

  return { data: { profile: getApiV1UserProfile.data } };
};
