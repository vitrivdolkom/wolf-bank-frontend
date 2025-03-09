import httpProxy from '@fastify/http-proxy';
import { createHandler } from '@universal-middleware/fastify';
import Fastify from 'fastify';
import { dirname } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import { vikeHandler } from './server/handlers/vike-handler';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = __dirname;
const port = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000;
const hmrPort = process.env.HMR_PORT ? Number.parseInt(process.env.HMR_PORT, 10) : 24678;

const options = {
  schema: {
    type: 'object',
    required: ['PORT'],
    properties: {
      PORT: { type: 'string', default: 3000 }
    }
  },
  dotenv: {
    path: `${__dirname}/.env`,
    debug: true
  }
};

const startServer = async () => {
  const app = Fastify({ logger: true });

  app.register(await import('@fastify/env'), options);

  app.removeAllContentTypeParsers();
  app.addContentTypeParser('*', (_request, _payload, done) => {
    done(null, '');
  });

  await app.register(await import('@fastify/middie'));

  if (process.env.NODE_ENV === 'production') {
    await app.register(await import('@fastify/static'), {
      root: `${root}/dist/client`,
      wildcard: false
    });
  } else {
    const vite = await import('vite');
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true, hmr: { port: hmrPort } }
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  app.register(httpProxy, {
    upstream: process.env.API_URL,
    prefix: '/api',
    rewritePrefix: '/api'
  });
  app.all('/*', createHandler(vikeHandler)());

  return app;
};

/* eslint-disable-next-line antfu/no-top-level-await */
const app = await startServer();

app.listen({ port }, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
