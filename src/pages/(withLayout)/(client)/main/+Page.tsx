import { useData } from 'vike-react/useData';

import { ROUTES } from '@/utils/constants';

import type { MainPageData } from './+data';

import { BankAccountCard, CreditCard } from './components';
import { ApplicationCard } from './components/ApplicationCard/ApplicationCard';
import { useMainPage } from './useMainPage';

const MainPage = () => {
  const { bankAccounts, credits, applications } = useData<MainPageData>();
  const { functions } = useMainPage();

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Финансовая Панель</h1>
      <div className='flex gap-4 justify-center mb-8'></div>

      <div className='mb-6'>
        <div className='collapse collapse-arrow bg-base-200'>
          <input defaultChecked type='checkbox' />
          <div className='collapse-title text-xl font-medium'>Кредиты ({credits.length})</div>
          <div className='collapse-content collapse-open'>
            <a href={ROUTES.CREATE_APPLICATION} className='btn btn-primary'>
              Оформить кредит
            </a>
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
            <button
              className='btn btn-primary'
              type='button'
              onClick={functions.onOpenBankAccountClick}
            >
              Открыть счет
            </button>
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

export default MainPage;
