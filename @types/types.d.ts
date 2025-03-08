interface ProcessEnv {
  API_URL: string;
}

interface PageContextUser {
  role: 'admin' | 'employee' | 'user';
}

namespace Vike {
  interface PageContext {
    user?: PageContextUser;
    Page: () => React.JSX.Element;
  }
}
