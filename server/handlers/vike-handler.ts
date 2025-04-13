import type { Get, UniversalHandler } from '@universal-middleware/core';

import { renderPage } from 'vike/server';

export const vikeHandler: Get<[], UniversalHandler> = () => async (request, context, runtime) => {
  try {
    const pageContextInit = {
      ...context,
      ...runtime,
      urlOriginal: request.url,
      headersOriginal: request.headers
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
