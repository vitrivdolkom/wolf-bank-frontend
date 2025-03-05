import {
  AgreementStatus,
  ApplicationStatus,
  BankAccountStatus,
  BankAccountType
} from '@/generated/api/models';

export const translateAgreementStatus = (status?: AgreementStatus): string => {
  if (status === undefined) return 'Н/Д';

  const translations: Record<AgreementStatus, string> = {
    [AgreementStatus.NUMBER_0]: 'Создан',
    [AgreementStatus.NUMBER_1]: 'Активный',
    [AgreementStatus.NUMBER_2]: 'Закрыт'
  };

  return translations[status] || 'Неизвестно';
};

export const translateApplicationStatus = (status?: ApplicationStatus): string => {
  if (status === undefined) return 'Н/Д';

  const translations: Record<ApplicationStatus, string> = {
    [ApplicationStatus.NUMBER_0]: 'Новая',
    [ApplicationStatus.NUMBER_1]: 'На рассмотрении',
    [ApplicationStatus.NUMBER_2]: 'На рассмотрении',
    [ApplicationStatus.NUMBER_3]: 'Одобрена',
    [ApplicationStatus.NUMBER_4]: 'Отклонена'
  };

  return translations[status] || 'Неизвестно';
};

export const translateBankAccountStatus = (status?: BankAccountStatus): string => {
  if (status === undefined) return 'Н/Д';

  const translations: Record<BankAccountStatus, string> = {
    [BankAccountStatus.NUMBER_0]: 'Активный',
    [BankAccountStatus.NUMBER_1]: 'Заблокирован',
    [BankAccountStatus.NUMBER_2]: 'Закрыт'
  };

  return translations[status] || 'Неизвестно';
};

export const translateBankAccountType = (type?: BankAccountType): string => {
  if (type === undefined) return 'Н/Д';

  const translations: Record<BankAccountType, string> = {
    [BankAccountType.NUMBER_0]: 'Кредитный',
    [BankAccountType.NUMBER_1]: 'Дебетовый'
  };

  return translations[type] || 'Неизвестно';
};
