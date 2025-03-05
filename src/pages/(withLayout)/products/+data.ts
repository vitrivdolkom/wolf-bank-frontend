import type { ProductDto } from '@/generated/api/models';

import { getApiV1Product } from '@/generated/api/requests';

export interface ProductsPageData {
  products: ProductDto[];
}

export const data = async (): Promise<ProductsPageData> => {
  const products = await getApiV1Product({ limit: 10, offset: 0 });

  return { products };
};
