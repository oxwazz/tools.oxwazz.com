FROM node:20.12.2-alpine3.18

# set the working directory
WORKDIR /app

# copy the dependencies file to the working
# directory and enable corepack (install yarn)
COPY package.json yarn.lock .yarnrc.yml  ./
COPY .yarn/ ./.yarn
RUN corepack enable yarn

# install dependencies and
# --immutable is used to ensure that
# the yarn.lock file is not modified
RUN yarn install --immutable

# copy the app
COPY . .

# change the .env file based on the NODE_ENV
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ] ; \
        then mv .env.production ./.env ; \
    fi

# build the app
RUN yarn build

# expose the port
ENV PORT="3000"

# start the app
CMD [ "node", ".output/server/index.mjs" ]