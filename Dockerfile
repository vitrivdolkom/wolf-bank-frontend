FROM node:22.10.0 AS build

WORKDIR /app

COPY package*.json /app

RUN npm install --omit=dev

COPY . .

RUN API_URL=http://host.docker.internal:5188 npm run build

FROM node:22.10.0-alpine AS production

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/package-lock.json ./package-lock.json
COPY --from=build /app/fastify-entry.ts ./fastify-entry.ts
COPY --from=build /app/server ./server
COPY --from=build /app/vite.config.ts ./vite.config.ts
COPY --from=build /app/tsconfig.json ./tsconfig.json
COPY --from=build /app/src ./src
COPY --from=build /app/generated ./generated

EXPOSE 3000

CMD API_URL=http://host.docker.internal:5188 npm run preview