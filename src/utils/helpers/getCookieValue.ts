export const getCookieValue = (cookie: string, key: string) => {
  return decodeURIComponent(
    cookie
      .split('; ')
      .find((row) => row.startsWith(`${key}=`))
      ?.split('=')[1] ?? ''
  );
};
