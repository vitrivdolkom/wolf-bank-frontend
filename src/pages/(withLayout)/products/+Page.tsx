import { getStringFromDecimalValue } from '@/utils/helpers';

import { CreateProductPopup } from './components';
import { useProductsPage } from './useProductsPage';

const ProductsPage = () => {
  const { functions, data } = useProductsPage();

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Кредитные продукты</h1>

      {data.isStaff && (
        <>
          <button className='btn btn-info mb-4' type='button' onClick={functions.onAddProductClick}>
            Добавить тариф
          </button>
          <CreateProductPopup onClose={functions.onCloseAddProductPopup} />
        </>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
        {data.products.map((product) => (
          <div
            key={product.code}
            className='card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-200'
          >
            <div className='card-body'>
              <h2 className='card-title'>Тариф {product.code}</h2>

              <div className='space-y-4 mt-4'>
                <div className='grid grid-cols-2 gap-2'>
                  <span className='text-base-content/70'>Процентная ставка</span>
                  <span className='text-right font-medium'>
                    {product.minInterest && getStringFromDecimalValue(product.minInterest)}% -
                    {product.maxInterest && getStringFromDecimalValue(product.maxInterest)}%
                  </span>
                </div>

                <div className='grid grid-cols-2 gap-2'>
                  <span className='text-base-content/70'>Срок кредита</span>
                  <span className='text-right font-medium'>
                    {product.minTerm} - {product.maxTerm} мес.
                  </span>
                </div>

                <div className='grid grid-cols-2 gap-2'>
                  <span className='text-base-content/70'>Полная сумма кредита с процентами</span>
                  <span className='text-right font-medium'>
                    {product.minPrincipalAmount &&
                      getStringFromDecimalValue(product.minPrincipalAmount)}{' '}
                    -
                    {product.maxPrincipalAmount &&
                      getStringFromDecimalValue(product.maxPrincipalAmount)}{' '}
                    руб
                  </span>
                </div>

                <div className='grid grid-cols-2 gap-2'>
                  <span className='text-base-content/70'>Сумма по процентам кредита</span>
                  <span className='text-right font-medium'>
                    {product.minOriginationAmount &&
                      getStringFromDecimalValue(product.minOriginationAmount)}{' '}
                    -
                    {product.maxOriginationAmount &&
                      getStringFromDecimalValue(product.maxOriginationAmount)}{' '}
                    руб
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
