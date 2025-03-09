import { useState } from 'react';
import { useDebounceCallback } from 'usehooks-ts';
import { usePageContext } from 'vike-react/usePageContext';

import type { User } from '@/generated/api/models';

import { useGetApiV1User, usePostApiV1UserUserIdBan } from '@/generated/api/requests';
import { IDS } from '@/utils/constants/ids';

export const useUsersPage = () => {
  const pageContext = usePageContext();
  const [userToBan, setUserToBan] = useState<User>();
  // TODO fix search params
  const [searchFilter, setSearchFilter] = useState(pageContext.urlParsed.search.search ?? '');
  const getApiV1User = useGetApiV1User({ search: searchFilter, page: 1, pageSize: 100 });
  const postApiV1UserUserIdBan = usePostApiV1UserUserIdBan();

  const debouncedSearchFilterChange = useDebounceCallback((value: string) => {
    pageContext.urlParsed.search = { search: value };
    getApiV1User.refetch();
  }, 500);

  const onSearchFilterChange = (value: string) => {
    setSearchFilter(value);
    debouncedSearchFilterChange(value);
  };

  const onAddUserPopupClose = () => {
    const popup = document.getElementById(IDS.POPUPS.CREATE_USER) as HTMLDialogElement;
    if (popup) {
      popup.close();
    }
    getApiV1User.refetch();
  };

  const onAddUserPopupOpen = () => {
    const popup = document.getElementById(IDS.POPUPS.CREATE_USER) as HTMLDialogElement;
    if (popup) {
      popup.showModal();
    }
  };

  const onAddEmployeePopupClose = () => {
    const popup = document.getElementById(IDS.POPUPS.CREATE_EMPLOYEE) as HTMLDialogElement;
    if (popup) {
      popup.close();
    }
    getApiV1User.refetch();
  };

  const onAddEmployeePopupOpen = () => {
    const popup = document.getElementById(IDS.POPUPS.CREATE_EMPLOYEE) as HTMLDialogElement;
    if (popup) {
      popup.showModal();
    }
  };

  const onBanUserPopupOpen = (user: User) => {
    setUserToBan(user);
    const popup = document.getElementById(IDS.POPUPS.BAN_USER) as HTMLDialogElement;
    if (popup) {
      popup.showModal();
    }
  };

  const onBanUser = async () => {
    if (!userToBan) return;

    await postApiV1UserUserIdBan.mutateAsync({ userId: userToBan.id! });
    getApiV1User.refetch();
    setUserToBan(undefined);
  };

  return {
    data: {
      users: getApiV1User.data?.users ?? []
    },
    state: {
      searchFilter,
      userToBan
    },
    functions: {
      onSearchFilterChange,
      onBanUser,
      onBanUserPopupOpen,
      onAddUserPopupClose,
      onAddUserPopupOpen,
      onAddEmployeePopupClose,
      onAddEmployeePopupOpen
    }
  };
};
