import { TransactionType } from '@/generated/api/models';

export const getTransactionLabel = (type: TransactionType | undefined) => {
  if (type === undefined) return '';

  switch (type) {
    case TransactionType.NUMBER_0:
      return 'Перевод';
    case TransactionType.NUMBER_1:
      return 'Пополнение';
    case TransactionType.NUMBER_2:
      return 'Снятие';
    case TransactionType.NUMBER_3:
      return 'Платеж по кредиту';
    case TransactionType.NUMBER_4:
      return 'Кредитный платеж';
    default:
      return 'Неизвестная операция';
  }
};

export const getTransactionSign = (type: TransactionType | undefined) => {
  if (type === undefined) return '';

  switch (type) {
    case TransactionType.NUMBER_1:
      return '+';
    case TransactionType.NUMBER_2:
    case TransactionType.NUMBER_3:
    case TransactionType.NUMBER_4:
      return '-';
    case TransactionType.NUMBER_0:
      return '±';
    default:
      return '';
  }
};

export const getTransactionClass = (type: TransactionType | undefined) => {
  if (type === undefined) return '';

  switch (type) {
    case TransactionType.NUMBER_1:
      return 'text-success';
    case TransactionType.NUMBER_2:
    case TransactionType.NUMBER_3:
    case TransactionType.NUMBER_4:
      return 'text-error';
    case TransactionType.NUMBER_0:
      return 'text-info';
    default:
      return '';
  }
};
