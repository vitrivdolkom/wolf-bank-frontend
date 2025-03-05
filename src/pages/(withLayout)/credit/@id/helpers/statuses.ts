import { AgreementStatus, SchedulePaymentStatus } from '@/generated/api/models';

export const getAgreementStatusLabel = (status?: AgreementStatus) => {
  if (status === undefined) return 'Н/Д';

  switch (status) {
    case AgreementStatus.NUMBER_0:
      return 'Создан';
    case AgreementStatus.NUMBER_1:
      return 'Активный';
    case AgreementStatus.NUMBER_2:
      return 'Закрыт';
    default:
      return 'Неизвестно';
  }
};

export const getAgreementStatusClass = (status?: AgreementStatus) => {
  if (status === undefined) return '';

  switch (status) {
    case AgreementStatus.NUMBER_0:
      return 'badge-info';
    case AgreementStatus.NUMBER_1:
      return 'badge-success';
    case AgreementStatus.NUMBER_2:
      return 'badge-error';
    default:
      return '';
  }
};

export const getPaymentStatusLabel = (status?: SchedulePaymentStatus) => {
  if (status === undefined) return 'Н/Д';

  switch (status) {
    case SchedulePaymentStatus.NUMBER_0:
      return 'Оплачен';
    case SchedulePaymentStatus.NUMBER_1:
      return 'Просрочен';
    case SchedulePaymentStatus.NUMBER_2:
      return 'Ожидает оплаты';
    default:
      return 'Неизвестно';
  }
};

export const getPaymentStatusClass = (status?: SchedulePaymentStatus) => {
  if (status === undefined) return '';

  switch (status) {
    case SchedulePaymentStatus.NUMBER_0:
      return 'badge-success';
    case SchedulePaymentStatus.NUMBER_1:
      return 'badge-error';
    case SchedulePaymentStatus.NUMBER_2:
      return 'badge-info';
    default:
      return '';
  }
};
