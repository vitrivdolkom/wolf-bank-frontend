import { ApplicationCard, BankAccountCard, CreditCard } from '@/components';

import { useUserPage } from './useUserPage';

const UserPage = () => {
  const { data } = useUserPage();

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Информация о пользователе</h1>

      <div className='mb-6'>
        <div className='collapse collapse-arrow bg-base-200'>
          <input defaultChecked type='checkbox' />
          <div className='collapse-title text-xl font-medium'>Кредиты ({data.credits.length})</div>
          <div className='collapse-content collapse-open'>
            <div className='space-y-4 mt-4'>
              {data.credits.map((credit, index) => (
                <CreditCard key={credit.agreementId} credit={credit} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='mb-6'>
        <div className='collapse collapse-arrow bg-base-200'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            Банковские счета ({data.bankAccounts.length})
          </div>
          <div className='collapse-content'>
            <div className='space-y-4 mt-4'>
              {data.bankAccounts.map((account, index) => (
                <BankAccountCard key={account.bankAccountId} index={index} bankAccount={account} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='mb-6'>
        <div className='collapse collapse-arrow bg-base-200'>
          <input type='checkbox' />
          <div className='collapse-title text-xl font-medium'>
            Заявки ({data.applications.length})
          </div>
          <div className='collapse-content'>
            <div className='space-y-4'>
              {data.applications?.map((application, index) => (
                <ApplicationCard key={application.id} index={index} application={application} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
