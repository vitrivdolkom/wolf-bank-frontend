import type { PageContextServer } from 'vike/types';

export interface UsersPageData {
  // TODO fix with real type
  users: any[];
}

const data = async (_pageContext: PageContextServer): Promise<UsersPageData> => {
  // todo make request

  return {
    users: []
  };
};

export default data;
