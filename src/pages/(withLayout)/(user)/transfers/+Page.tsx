import { ArrowRightIcon } from 'lucide-react';
import { navigate } from 'vike/client/router';

import { ROUTES } from '@/utils/constants';

const TransferSelectionPage = () => {
  return (
    <div className='container mx-auto px-4 py-8 max-w-3xl'>
      <h1 className='text-2xl font-bold mb-8'>Выберите тип перевода</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='card bg-base-200 hover:bg-base-300 transition-colors cursor-pointer'>
          <div className='card-body p-6' onClick={() => navigate(ROUTES.TRANSFERS_SELF)}>
            <div className='flex justify-between items-center'>
              <div>
                <h2 className='card-title text-lg'>Между своими счетами</h2>
                <p className='text-sm opacity-75 mt-1'>
                  Перевод между вашими счетами в нашем банке
                </p>
              </div>
              <ArrowRightIcon className='w-5 h-5' />
            </div>
          </div>
        </div>

        <div className='card bg-base-200 hover:bg-base-300 transition-colors cursor-pointer'>
          <div className='card-body p-6' onClick={() => navigate(ROUTES.TRANSFERS_EXTERNAL)}>
            <div className='flex justify-between items-center'>
              <div>
                <h2 className='card-title text-lg'>Другому человеку</h2>
                <p className='text-sm opacity-75 mt-1'>Перевод на счета других клиентов</p>
              </div>
              <ArrowRightIcon className='w-5 h-5' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferSelectionPage;
