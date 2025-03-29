interface ProcessEnv {
  API_URL: string;
  MONGO_URL: string;
}

interface PageContextUser {
  id: string;
  role: 'admin' | 'employee' | 'user';
}

namespace Vike {
  interface PageContext {
    user?: PageContextUser;
    Page: () => React.JSX.Element;
  }
}

namespace NodeJS {
  interface ProcessEnv {
    API_URL: string;
    NODE_ENV: 'development' | 'production';
  }
}

type Theme = 'dark' | 'light';

interface GetThemeParams {
  userId: string;
}

interface GetThemeResponse {
  theme: Theme;
}

interface PostThemeParams {
  theme: Theme;
  userId: string;
}

interface GetHiddenAccountsParams {
  userId: string;
}

interface GetHiddenAccountsResponse {
  hiddenAccounts: string[];
}

interface PostHiddenAccountsParams {
  accountId: Condition<ObjectId>;
  hide: boolean;
  userId: string;
}

type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
