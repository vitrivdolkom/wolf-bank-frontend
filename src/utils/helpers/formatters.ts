import type { Decimal, DecimalValue, Timestamp } from '@/generated/api/models';

export const formatTimestamp = (timestamp?: Timestamp | null): string => {
  if (!timestamp?.seconds) return 'N/A';
  return new Date(Number(timestamp.seconds) * 1000).toLocaleDateString();
};

export const getDecimalValue = (num: number) => {
  const scale = num.toString().split('.')[1] ? num.toString().split('.')[1].length : 0;
  return {
    unscaled: num * 10 ** scale,
    scale
  };
};

export const getStringFromDecimalValue = (decimalValue?: Decimal | DecimalValue | null): string => {
  if (!decimalValue || !decimalValue.unscaled) return 'N/A';

  return (decimalValue.unscaled / 10 ** (decimalValue.scale ?? 0)).toFixed(decimalValue.scale ?? 0);
};
