export const ROUTES = {
  ROOT: '/',
  MAIN: '/main',
  USER_LOGIN: '/user/login',
  USER_REGISTER: '/user/register',
  EMPLOYEE_LOGIN: '/employee/login',
  EMPLOYEE_REGISTER: '/employee/register',
  ACCOUNT: (id: string) => `/account/${id}`,
  CREDIT: (id: string) => `/credit/${id}`,
  PRODUCTS: '/products',
  PRODUCT: (id: string) => `/product/${id}`,
  CREATE_APPLICATION: '/application/create',
  USERS: '/users',
  USER: (id: string) => `/users/${id}`,
  PROFILE: '/profile',
  TRANSFERS: '/transfers',
  TRANSFERS_SELF: '/transfers/self',
  TRANSFERS_EXTERNAL: '/transfers/external'
} as const;
