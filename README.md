# microservices-nodejs-docker-gateway-api

Blog: <https://github.com/luizcalaca/microservices-nodejs-docker-gateway-api>

## How to run the microservices throgh API Gateway

- products microservice with MySQL

```sh
cd /products
docker-compose up
```

- orders microservice with MongoDB

```sh
cd /orders
docker-compose up
```

- API Gateway Pattern Architecture

```sh
cd /api-gateway
npm start
```

- Using API Gateway on browser

<http://localhost:3007/orders>
<http://localhost:3007/products>
