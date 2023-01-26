# ada-desafio-tecnico-fullstack

## Get started

- Required Tools:
  - [Docker](https://www.docker.com/) 
  - [NVM](https://github.com/nvm-sh/nvm)
  - [Yarn](https://yarnpkg.com/)

### Backend
1 - enter in folder  
`cd BACK/`  
2 - copy .example.env  
`cp .example.env .env`  
3 - start docker  
PS: Make sure you have docker and it's running: [documentation Docker](https://www.docker.com/)  
`docker-compose up -d `  
4 - get current version of node    
`nvm install 18`  
`nvm use`  
5 - install dependence  
`yarn install `  
6 - run application   
`yarn run dev `

#### Scripts

- Run in Dev environment: `yarn run dev`  
- Run in Prod environment: `yarn run prod`  
- Run built application: `yarn run start`  
- Up container: `yarn run up`  
- Down container: `yarn run down`  
- Run lint: `yarn run lint`
- Run all tests: `yarn run test`
- Run all tests (watch mode): `yarn run test:watch`
- Run test coverage: `yarn run test:cov`
- Run unit tests: `yarn run test:unit`
- Run integration tests: `yarn run test:integration`

[Insomnia Collection to test endpoints](./Insomnia_Collection.json)

### Frontend

1 - enter in folder  
`cd FRONT/`  
2 - copy .example.env  
`cp .example.env .env`  
3 - get current version of node
`nvm install 18`  
`nvm use`  
4 - install dependence  
`yarn install `  
5 - run application   
`yarn run dev `

#### Scripts

- Run in Dev environment: `yarn run dev`  
- Run in Prod environment: `yarn run prod`  
- Run built application: `yarn run start`  
- Run lint: `yarn run lint`
- Run all tests: `yarn run test`

