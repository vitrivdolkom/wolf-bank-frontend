import {
  AgreementStatus,
  ApplicationStatus,
  BankAccountStatus,
  BankAccountType,
  Role
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
    [ApplicationStatus.NUMBER_0]: 'Черновик',
    [ApplicationStatus.NUMBER_1]: 'Заявка создана',
    [ApplicationStatus.NUMBER_2]: 'Договор создан',
    [ApplicationStatus.NUMBER_3]: 'Скоринг',
    [ApplicationStatus.NUMBER_4]: 'Проверка трудоустройства',
    [ApplicationStatus.NUMBER_5]: 'Одобрена',
    [ApplicationStatus.NUMBER_6]: 'Отклонена'
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

export const translateUserRole = (role?: Role): string => {
  if (role === undefined) return 'Неизвестно';

  const translations: Record<Role, string> = {
    [Role.NUMBER_0]: 'Пользователь',
    [Role.NUMBER_1]: 'Сотрудник',
    [Role.NUMBER_2]: 'Администратор'
  };

  return translations[role] || 'Неизвестно';
};
