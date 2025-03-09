import type { Get, UniversalHandler } from '@universal-middleware/core';

import { renderPage } from 'vike/server';

import { getCookieValue } from '@/utils/helpers';

export const vikeHandler: Get<[], UniversalHandler> = () => async (request, context, runtime) => {
  try {
    const user = getCookieValue(request.headers.get('cookie') ?? '', 'user');

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
  } catch (error) {
    console.error('#error', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};
