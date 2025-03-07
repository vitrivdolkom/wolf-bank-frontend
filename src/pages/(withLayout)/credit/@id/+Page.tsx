import { ExternalLinkIcon } from 'lucide-react';
import { useData } from 'vike-react/useData';

import { ROUTES } from '@/utils/constants';
import { formatTimestamp, getStringFromDecimalValue } from '@/utils/helpers';

import type { CreditPageData } from './+data';

import {
  getAgreementStatusClass,
  getAgreementStatusLabel,
  getPaymentStatusClass,
  getPaymentStatusLabel
} from './helpers/statuses';

const CreditPage = () => {
  const { credit, payments } = useData<CreditPageData>();

  return (
    <div className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='text-2xl font-bold'>Кредит {credit.agreementId}</h1>
      {/* // todo change to bankAccountId */}
      <a href={ROUTES.ACCOUNT(credit.agreementId ?? '')} className='flex items-center gap-1'>
        <p className='text-lg underline text-blue-500'>Кредит счет {credit.agreementId}</p>
        <ExternalLinkIcon className='w-4 h-4 text-blue-500' />
      </a>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
        <div className='card bg-base-200'>
          <div className='card-body'>
            <h3 className='card-title'>Основная информация</h3>
            <div className='space-y-2'>
              <p>
                Статус:{' '}
                <span className={`badge ${getAgreementStatusClass(credit.status)}`}>
                  {getAgreementStatusLabel(credit.status)}
                </span>
              </p>
              <p>Сумма кредита: {getStringFromDecimalValue(credit.principalAmount)} руб</p>
              <p>Сумма с процентами: {getStringFromDecimalValue(credit.principalAmount)} руб</p>
              <p>Процентная ставка: {getStringFromDecimalValue(credit.interest)} %</p>
              <p>Срок: {credit.term} мес.</p>
              <p>Дата выдачи: {formatTimestamp(credit.disbursementDate)}</p>
              <p>Следующий платеж: {formatTimestamp(credit.nextPaymentDate)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <h3 className='text-xl font-bold mb-4'>График платежей</h3>
        <div className='space-y-2 overflow-y-auto max-h-[500px]'>
          {payments.map((payment) => (
            <div key={payment.periodNumber} className='p-4 bg-base-200 rounded-lg'>
              <div className='flex justify-between items-center'>
                <div>
                  <span className='font-semibold'>Платеж {payment.periodNumber}</span>
                  <span className={`badge ml-2 ${getPaymentStatusClass(payment.status)}`}>
                    {getPaymentStatusLabel(payment.status)}
                  </span>
                </div>
                <span>{formatTimestamp(payment.paymentDate)}</span>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 text-sm text-base-content/70'>
                <p>Сумма платежа: {getStringFromDecimalValue(payment.periodPayment)} руб</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreditPage;
