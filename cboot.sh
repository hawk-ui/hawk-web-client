#!/bin/sh
#
# boot inside container
# to start API
#
# to build the container:
# docker build --tag=hawk-web-client .
# to launch the container, run
# docker run -it -p 3004:3004/tcp -v "$(pwd):/app" hawk-web-client

export PATH="$(npm bin):$PATH"
yarn install
yarn run api
