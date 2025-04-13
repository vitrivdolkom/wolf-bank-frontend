import { useGetApiV1Product } from '@/generated/api/requests';
import { IDS } from '@/utils/constants/ids';
import { useProfile } from '@/utils/contexts/profile';

export const useProductsPage = () => {
  const profileContext = useProfile();

  const getApiV1Product = useGetApiV1Product({ limit: 10, offset: 0 });
  const products = getApiV1Product.data ?? [];

  const isStaff = profileContext.profile?.role === 'EMPLOYEE';

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
    getApiV1Product.refetch();
  };

  return {
    functions: { onAddProductClick, onCloseAddProductPopup },
    data: { products, isStaff }
  };
};
