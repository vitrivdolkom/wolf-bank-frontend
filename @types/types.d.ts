interface ProcessEnv {
  API_URL: string;
  MONGO_URL: string;
}

interface ImportMetaEnv {
  VITE_FIREBASE_API_KEY: string;
  VITE_FIREBASE_APP_ID: string;
  VITE_FIREBASE_AUTH_DOMAIN: string;
  VITE_FIREBASE_MEASUREMENT_ID: string;
  VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  VITE_FIREBASE_PROJECT_ID: string;
  VITE_FIREBASE_STORAGE_BUCKET: string;
  VITE_FIREBASE_VAPID_KEY: string;
}

namespace Vike {
  interface PageContext {
    Page: () => React.JSX.Element;
  }
}

namespace NodeJS {
  interface ProcessEnv {
    API_URL: string;
    MONGO_URL: string;
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
