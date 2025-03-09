import type { ApplicationResponse } from '@/generated/api/models';

import {
  formatTimestamp,
  getStringFromDecimalValue,
  translateApplicationStatus
} from '@/utils/helpers';

interface ApplicationCardProps {
  application: ApplicationResponse;
  index: number;
}

export const ApplicationCard = ({ application, index }: ApplicationCardProps) => (
  <div key={application.id} className='card bg-base-100 shadow-xl'>
    <div className='card-body'>
      <h3 className='card-title'>Номер заявки: {index + 1}</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <p>
          Статус:{' '}
          <span className='badge badge-info'>{translateApplicationStatus(application.status)}</span>
        </p>
        <p>Дата создания: {formatTimestamp(application.createdAt)}</p>
        <p>Сумма: {getStringFromDecimalValue(application.disbursementAmount)}</p>
        <p>Процентная ставка: {getStringFromDecimalValue(application.interest)}</p>
        <p>Срок: {application.term} мес.</p>
      </div>
    </div>
  </div>
);
