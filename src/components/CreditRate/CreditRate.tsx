import { useGetApiV1CreditRate } from '@/generated/api/requests';

interface CreditRateProps {
  userId: string;
}

export const CreditRate = ({ userId }: CreditRateProps) => {
  const getApiV1CreditRate = useGetApiV1CreditRate({ userId });
  const rate = getApiV1CreditRate.data?.percent;

  if (!rate) return null;

  return <div className='text-sm'>Кредитный рейтинг пользователя: {rate}%</div>;
};
