import type { PageContextServer } from 'vike/types';

import type { GetCreditResponse, SchedulePayment } from '@/generated/api/models';

import {
  getApiV1CreditAgreementId,
  getApiV1CreditAgreementIdPayments
} from '@/generated/api/requests';

export interface CreditPageData {
  credit: GetCreditResponse;
  payments: readonly SchedulePayment[];
}

const data = async (_pageContext: PageContextServer): Promise<CreditPageData> => {
  const agreementId = _pageContext.routeParams.id;
  const credit = await getApiV1CreditAgreementId(agreementId);
  const { schedulePayments } = await getApiV1CreditAgreementIdPayments(agreementId);

  return {
    credit,
    payments: schedulePayments ?? []
  };
};

export default data;
