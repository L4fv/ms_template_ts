FROM  node:16-alpine  as BUILD_IMAGE

WORKDIR /app

# Resolve node_modules for caching
COPY ./package.json ./

COPY ./yarn.lock ./

RUN yarn install
COPY src ./src
COPY tsconfig.json ./tsconfig.json

RUN yarn build

# Copy all for build and release cache if package.json update


#------------------------------------------------------------------------------------

# Create new namespace for final Docker Image
FROM  node:16-alpine 

# Only copy your source code without system file
COPY --from=BUILD_IMAGE /app/node_modules /app/node_modules
COPY --from=BUILD_IMAGE /app/build /app/build

WORKDIR /app

#ENV STRAPI_LOG_LEVEL=debug

CMD [ "build/server.js" ]
