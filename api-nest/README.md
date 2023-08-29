## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).


------------------------------------------------------------
# Resume

## Start new app

nest new nome-aplicacao  

## Criar modules:

nest g module jogadores  

## DTO (data transfer object = pattern)

Um objeto para o contexto (criação, update..) de transação sem nehum comportamento (metodo)
Receber dados de varias fontes e mesclar em um mesmo objeto

## AWS S3

Guardar arquivos estaticos

## providers e services 

injetado dentro de construtores
pode ser class, factory
fornecido por modulos
import/export componentes(controllers)

## services

sao definidos como providers, mas nem todo providers sao services.
onde fica a regra de negócio
utilizado com @injectable

## uuid

npm install uuid

## pattern

Injeção de dependencia baseada no construtor

## Injeção de dependencia ?

IoC - técnica de inversão de controle, na qual é delegada as a instacia de dependencias para o Container(NestJS)

# end
