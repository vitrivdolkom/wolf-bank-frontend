import type { Get, UniversalHandler } from '@universal-middleware/core';

import { renderPage } from 'vike/server';

// TODO: stop using universal-middleware and directly integrate server middlewares instead. (Bati generates boilerplates that use universal-middleware https://github.com/magne4000/universal-middleware to make Bati's internal logic easier. This is temporary and will be removed soon.)
import { getCookieValue } from '@/utils/helpers';

export const vikeHandler: Get<[], UniversalHandler> = () => async (request, context, runtime) => {
  const user = getCookieValue(request.headers.get('cookie') ?? '', 'user');

  console.log('#user', JSON.parse(user));
  console.log('#headers.cookie', request.headers.get('cookie'));

  const pageContextInit = {
    ...context,
    ...runtime,
    urlOriginal: request.url,
    headersOriginal: request.headers,
    user: user ? JSON.parse(user) : undefined
  };
  const pageContext = await renderPage(pageContextInit);
  const response = pageContext.httpResponse;

  const { readable, writable } = new TransformStream();
  response.pipe(writable);

  return new Response(readable, {
    status: response.statusCode,
    headers: response.headers
  });
};
