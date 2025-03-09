import type { GetCreditResponse } from '@/generated/api/models';

import { ROUTES } from '@/utils/constants';
import {
  formatTimestamp,
  getStringFromDecimalValue,
  translateAgreementStatus
} from '@/utils/helpers';

interface CreditCardProps {
  credit: GetCreditResponse;
  index: number;
}

export const CreditCard = ({ credit, index }: CreditCardProps) => (
  <div key={credit.agreementId} className='card bg-base-100 shadow-xl'>
    <div className='card-body'>
      <a href={ROUTES.CREDIT(credit.agreementId ?? '')}>
        <h3 className='card-title'>Договор номер {index + 1}</h3>
      </a>
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
