FROM node:15 AS builder

# Create app directory
WORKDIR /app

COPY package.json ./
COPY ormconfig.js ./
COPY yarn.lock ./

# Install app dependencies
# RUN npm i yarn --global
RUN yarn

COPY . .

RUN yarn build

FROM node:15

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/ormconfig.js ./
COPY --from=builder /app/dist ./dist

EXPOSE 9000
CMD [ "yarn", "start:prod" ]