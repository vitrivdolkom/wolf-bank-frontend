interface ProcessEnv {
  API_URL: string;
}

interface PageContextUser {
  role: 'client' | 'staff';
}

namespace Vike {
  interface PageContext {
    user?: PageContextUser;
    Page: () => React.JSX.Element;
  }
}
