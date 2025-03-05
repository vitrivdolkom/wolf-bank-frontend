export const ROUTES = {
  ROOT: '/',
  MAIN: '/main',
  CLIENT_LOGIN: '/client/login',
  CLIENT_REGISTER: '/client/register',
  STAFF_LOGIN: '/staff/login',
  STAFF_REGISTER: '/staff/register',
  ACCOUNT: (id: string) => `/account/${id}`,
  CREDIT: (id: string) => `/credit/${id}`,
  PRODUCTS: '/products',
  PRODUCT: (id: string) => `/product/${id}`,
  CREATE_APPLICATION: '/application/create',
  USERS: '/users'
} as const;
