import { useData } from 'vike-react/useData';
import { usePageContext } from 'vike-react/usePageContext';

import { IDS } from '@/utils/constants/ids';

import type { ProductsPageData } from './+data';

export const useProductsPage = () => {
  const { products } = useData<ProductsPageData>();
  const pageContext = usePageContext();

  const isStaff = pageContext.user?.role === 'staff';

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
