FROM alpine:3.19

RUN apk add --no-cache nginx dumb-init openssl curl nodejs npm

WORKDIR /app

COPY ./public ./public
COPY ./src ./src
COPY ./.eslintrc.js .
COPY ./.prettierrc .
COPY ./.env .
COPY ./package-lock.json .
COPY ./package.json .
COPY ./vite.config.js .
COPY server.conf.origin /etc/nginx/http.d/default.conf
COPY ./init.sh /home/init.sh

RUN npm install && npm run build

RUN cp -r /app/dist/ /usr/share/nginx/html/

ENTRYPOINT [ "/usr/bin/dumb-init", "--"]

CMD ["/bin/sh", "/home/init.sh" ]
