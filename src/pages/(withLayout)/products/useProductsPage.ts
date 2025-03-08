import { usePageContext } from 'vike-react/usePageContext';

import { useGetApiV1Product } from '@/generated/api/requests';
import { IDS } from '@/utils/constants/ids';

export const useProductsPage = () => {
  const pageContext = usePageContext();

  const getApiV1Product = useGetApiV1Product({ limit: 10, offset: 0 });
  const products = getApiV1Product.data ?? [];

  const isStaff = pageContext.user?.role === 'employee';

  const onAddProductClick = () => {
    const popup = document.getElementById(IDS.POPUPS.ADD_PRODUCT) as HTMLDialogElement;
    if (popup) {
      popup.showModal();
    }
  };

  const onCloseAddProductPopup = () => {
    const popup = document.getElementById(IDS.POPUPS.ADD_PRODUCT) as HTMLDialogElement;
    if (popup) {
      popup.close();
    }
  };

  return {
    functions: { onAddProductClick, onCloseAddProductPopup },
    data: { products, isStaff }
  };
};
