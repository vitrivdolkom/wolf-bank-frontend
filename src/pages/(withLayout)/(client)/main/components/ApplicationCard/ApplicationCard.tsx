import type { ApplicationResponse } from '@/generated/api/models';

import { formatDecimal, formatTimestamp, translateApplicationStatus } from '@/utils/helpers';

interface ApplicationCardProps {
  application: ApplicationResponse;
}

export const ApplicationCard = ({ application }: ApplicationCardProps) => (
  <div key={application.id} className='card bg-base-100 shadow-xl'>
    <div className='card-body'>
      <h3 className='card-title'>Номер заявки: {application.id || 'Н/Д'}</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <p>
          Статус:{' '}
          <span className='badge badge-info'>{translateApplicationStatus(application.status)}</span>
        </p>
        <p>Дата создания: {formatTimestamp(application.createdAt)}</p>
        <p>Сумма: {formatDecimal(application.amount)}</p>
        <p>Процентная ставка: {formatDecimal(application.interest)}</p>
        <p>Срок: {application.term} мес.</p>
      </div>
    </div>
  </div>
);
