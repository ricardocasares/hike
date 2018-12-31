FROM mhart/alpine-node:latest AS build
WORKDIR /app
COPY package*.json /app/
RUN npm ci
ADD . /app
RUN npm run build
RUN npm ci --prod

FROM mhart/alpine-node:base
WORKDIR /app
ENV NODE_ENV="production"
COPY --from=build /app/.next ./.next
COPY --from=build /app/static ./static
COPY --from=build /app/server ./server
COPY --from=build /app/node_modules ./node_modules
CMD node server/index.js