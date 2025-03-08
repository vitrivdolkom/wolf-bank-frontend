import { ROUTES } from '@/utils/constants';

import { CreateApplicationForm } from './components';

const CreateApplicationPage = () => (
  <div className='flex flex-col justify-center items-center min-h-screen bg-base-200 px-4'>
    <CreateApplicationForm />
    <div className='mt-6 text-center'>
      <a href={ROUTES.PRODUCTS} className='text-primary hover:underline'>
        К списку продуктов
      </a>
    </div>
  </div>
);

export default CreateApplicationPage;
