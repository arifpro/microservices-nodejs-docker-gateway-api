# microservices-nodejs-docker-gateway-api

[Dockerized] Microservices architecture with API Gateway

## How to run the microservices throgh API Gateway

- products microservice with MySQL

```sh
cd products
docker-compose up
```

- orders microservice with MongoDB

```sh
cd orders
docker-compose up
```

- API Gateway Pattern Architecture

```sh
cd api-gateway
npm start
```

- Using API Gateway on browser

  - <http://localhost:3007/orders>
  - <http://localhost:3007/products>

## Try

"pre:orders": "cd orders && npm install",
"pre:products": "cd products && npm install",
"pre:api-gateway": "cd api-gateway && npm install",

or

"pre:orders": "cd orders && docker-compose up",
"pre:products": "cd products && docker-compose up",
"pre:api-gateway": "cd api-gateway && npm install",
