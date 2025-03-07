import { useData } from 'vike-react/useData';

import { ApplicationCard, BankAccountCard, CreditCard } from '@/components';

import type { UserPageData } from './+data';

const UserPage = () => {
  const { bankAccounts, credits, applications } = useData<UserPageData>();

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Информация о пользователе</h1>

      <div className='mb-6'>
        <div className='collapse collapse-arrow bg-base-200'>
          <input defaultChecked type='checkbox' />
          <div className='collapse-title text-xl font-medium'>Кредиты ({credits.length})</div>
          <div className='collapse-content collapse-open'>
            <div className='space-y-4 mt-4'>
              {credits.map((credit) => (
                <CreditCard key={credit.agreementId} credit={credit} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='mb-6'>
        <div className='collapse collapse-arrow bg-base-200'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            Банковские счета ({bankAccounts.length})
          </div>
          <div className='collapse-content'>
            <div className='space-y-4 mt-4'>
              {bankAccounts.map((account, index) => (
                <BankAccountCard key={account.bankAccountId} index={index} bankAccount={account} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='mb-6'>
        <div className='collapse collapse-arrow bg-base-200'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>Заявки ({applications.length})</div>
          <div className='collapse-content'>
            <div className='space-y-4'>
              {applications?.map((application) => (
                <ApplicationCard key={application.id} application={application} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
