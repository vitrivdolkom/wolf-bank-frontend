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
  confKey: 'config',
  schema: {
    type: 'object',
    required: ['API_URL', 'MONGO_URL'],
    properties: {
      API_URL: {
        type: 'string'
      },
      MONGO_URL: {
        type: 'string'
      }
    }
  },
  dotenv: true,
  data: process.env
};

const startServer = async () => {
  const app = Fastify({ logger: true });

  app.register(await import('@fastify/env'), options);
  app.register(await import('@fastify/mongodb'), {
    // url: process.env.MONGO_URL
    url: 'mongodb://localhost:27017/wolf-bank'
  });

  // app.removeAllContentTypeParsers();
  // app.addContentTypeParser('*', (_request, _payload, done) => {
  //   done(null, '');
  // });

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

  app.get('/theme', async (request, reply) => {
    try {
      const { userId } = request.query as GetThemeParams;

      const collection = app.mongo.db?.collection('themes');

      if (!collection) throw new Error('Theme collection not found');

      const themeDoc = await collection.findOne({ userId });

      if (!themeDoc) {
        reply.code(404).send({ error: 'Theme not found for user' });
        return;
      }

      reply.code(200).send({ theme: themeDoc.theme });
    } catch (error) {
      console.error(error);
      reply.code(500).send({ error: 'Failed to fetch theme' });
    }
  });

  app.post('/theme', async (request, reply) => {
    const body = request.body as PostThemeParams;

    try {
      const collection = app.mongo.db?.collection('themes');

      if (!collection) throw new Error('Theme collection not found');

      await collection.updateOne(
        { userId: body.userId },
        { $set: { theme: body.theme } },
        { upsert: true }
      );

      reply.code(200).send({ success: true });
    } catch (error) {
      console.error(error);

      reply.code(500).send({ error: 'Failed to update theme' });
    }
  });

  app.get('/hidden-accounts', async (request, reply) => {
    try {
      const { userId } = request.query as GetHiddenAccountsParams;

      if (!userId) {
        reply.code(400).send({ error: 'userId is required' });
        return;
      }

      const collection = app.mongo.db?.collection('accounts');

      if (!collection) throw new Error('Accounts collection not found');

      const hiddenAccounts = await collection.find({ userId }).toArray();

      reply.code(200).send(hiddenAccounts);
    } catch (error) {
      console.error(error);

      reply.code(500).send({ error: 'Failed to fetch hidden accounts' });
    }
  });

  app.post('/hidden-accounts', async (request, reply) => {
    const body = request.body as PostHiddenAccountsParams;

    try {
      const collection = app.mongo.db?.collection('accounts');

      if (!collection) throw new Error('Accounts collection not found');

      if (body.hide) {
        await collection.insertOne({
          _id: body.accountId,
          userId: body.userId
        });
      } else {
        await collection.deleteOne({
          _id: body.accountId,
          userId: body.userId
        });
      }

      reply.code(200).send({ success: true });
    } catch (error) {
      console.error(error);
      reply.code(500).send({ error: 'Failed to update hidden accounts' });
    }
  });

  return app;
};

/* eslint-disable-next-line antfu/no-top-level-await */
const app = await startServer();

app.listen({ port, host: '0.0.0.0' }, () => {
  console.log(`Server listening on port: ${port}`);
});
