FROM node:alpine
LABEL maintainer="nazim@blueforest.fr"

ENV DROPIN_READY 0

# Yarn
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
RUN npm install -g yarn

# Workdir
WORKDIR /build/recipes-ts
#RUN mkdir data
ADD . .

# Yarn lock
#RUN mv recipes-ts/yarn.lock data
#RUN ln -s /dropin/data/yarn.lock recipes-ts/

# Node modules
#RUN mkdir data/node_modules
#RUN ln -s /dropin/data/node_modules recipes-ts/

# Start
RUN mv bin/start.sh /
WORKDIR /
RUN chmod +x /start.sh
ENTRYPOINT [ "/start.sh" ]
