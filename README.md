# Nest Read CSV

Leitura e upload de arquivo csv

## Pré-requisitos

- Node.js 18+ e npm instalados
- NestJS

## Instalação

1. Clone este repositório.
2. Execute o seguinte comando para instalar as dependências:

 ```bash
npm install
```

Configure as variáveis de ambiente necessárias (se aplicável).
Como Executar
Para iniciar a aplicação, execute o seguinte comando:

  ```bash
   npm start
```

ou

  ```bash
  npm run start:dev
  ```

Endpoints
A seguir estão os endpoints da aplicação que você pode testar:

GET /csv/read
Descrição: Este endpoint lê e processa um arquivo CSV e retorna os dados lidos como um array de objetos JSON.

Exemplo de solicitação:

```bash
curl -X GET <http://localhost:3000/csv/read>
```

Exemplo de resposta:

json

```bash
[
  {
    "campo1": "valor1",
    "campo2": "valor2"
    // ...
  },
  // ...
]
```

POST /csv/upload

Descrição: Este endpoint permite o upload de um arquivo CSV e processa seus dados.

Exemplo de solicitação:

```bash
curl -X POST -F "file=@/path/to/file.csv" <http://localhost:3000/csv/upload>
```

Exemplo de resposta:

json

```bash
{
  "message": "CSV data uploaded and processed successfully"
}
```
