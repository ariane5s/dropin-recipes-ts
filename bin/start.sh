#!/bin/sh

set -e

if [ ! -d /dropin/recipes-ts ]; then
  mv /build/* /dropin/
fi

cd /dropin/recipes-ts

yarn install

yarn build

export DROPIN_READY=1

yarn start
