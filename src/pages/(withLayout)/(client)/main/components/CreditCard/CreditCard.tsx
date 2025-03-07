import type { GetCreditResponse } from '@/generated/api/models';

import {
  formatTimestamp,
  getStringFromDecimalValue,
  translateAgreementStatus
} from '@/utils/helpers';

interface CreditCardProps {
  credit: GetCreditResponse;
}

export const CreditCard = ({ credit }: CreditCardProps) => (
  <div key={credit.agreementId} className='card bg-base-100 shadow-xl'>
    <div className='card-body'>
      <h3 className='card-title'>Номер договора: {credit.agreementId || 'Н/Д'}</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <p>
          Статус:{' '}
          <span className='badge badge-primary'>{translateAgreementStatus(credit.status)}</span>
        </p>
        <p>Основная сумма: {getStringFromDecimalValue(credit.principalAmount)}</p>
        <p>Процентная ставка: {getStringFromDecimalValue(credit.interest)}</p>
        <p>Следующий платеж: {formatTimestamp(credit.nextPaymentDate)}</p>
      </div>
    </div>
  </div>
);
