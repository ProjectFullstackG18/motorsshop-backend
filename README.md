# Bem-Vindo ao Motors Shop API! 🚗🚗

API da Motors Shop que é um Marketplace para compra e venda de automoveis!

[Github do Front-end do Motors Shop](https://github.com/ProjectFullstackG18/motorsshop-frontend)

## Tecnologias Utilizadas 👨‍💻👨‍💻

Nesse projeto foi utilizado:

- [NodeJS](https://nodejs.org/en/)

- [TypeScript](https://www.typescriptlang.org/)

- [Express](https://expressjs.com/)

- [TypeORM](https://typeorm.io/)

- [Postgres](https://www.postgresql.org/)

## Rodar a API

- neste código está rodando usando postgres então verifique se tem o postgres instalado na sua máquina!

- agora inicie seu terminal (git bash ou powershell)

- digite esse comando abaixo:

```bash

psql

```

- após isso digite a senha que você cadastrou do psql e digite esse comando pra criar uma database
  (o nome da database fica a sua escolha!)

```bash

CREATE DATABASE database_name;

```

- ok agora com a database criada acesse a raiz do projeto e crie um arquivo com o nome ".env" e preencha os
  campos necessários com base no arquivo ".env.example"

```bash
 DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<database>
 PORT=<port>
 NODE_ENV=<node>
 SECRET_KEY=<secret_key>
 SMTP_USER=seu_gmail
 SMTP_PASS=hash_criada_na_conta_google_como_senha_app
```

- a SMTP_PASS pra ser gerada é necessária a criação de um hash gerado na conta google através do senha

- com tudo isso preenchido agora podemos iniciar o projeto digitando o comando abaixo no terminal e aguarde
  a instalação das bibliotecas:

```bash

    npm install

```

- após isso teremos que gerar e rodar uma migration para isso digitamos o comando abaixo no terminal:
  (ATENÇÃO: para evitar problemas no funcionamento do projeto é necessário deletar as migrations que já estão no repositório)

```bash
   npm run typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts
```

- após gerar a migration, digite o comando abaixo em seguida pra rodar ela no projeto:

```bash
   npm run typeorm migration:run -- -d ./src/data-source
```

- após as migrations estarem instaladas e rodando podemos iniciar o servidor no projeto com o comando abaixo:

```bash
   npm run dev
```

- ok agora o servidor está rodando e pode ser utilizado no [localhost:3000](https://localhost:3000) !

- caso queira testar as rotas recomendamos o uso do [insomnia](https://insomnia.rest/)

- divirta-se!

## ROTAS DA API

aqui as rotas utlizadas nessa API

## ROTAS DE VENDEDOR

O objeto users é definido como:

| Campo       | Tipo    | Descrição                       |
| ----------- | ------- | ------------------------------- |
| name        | string  | O nome do vendedor.             |
| cpf         | string  | cpf do vendedor .               |
| phone       | string  | O contato do vendedor.          |
| Birthdate   | string  | data de nascimento do vendedor  |
| description | string  | descricao do vendedor           |
| cep         | string  | CEP do vendedor                 |
| estate      | string  | estado do vendedor              |
| city        | string  | cidade do vendedor              |
| street      | string  | rua do vendedor                 |
| number      | string  | numero de endereço do vendedor  |
| complement  | string  | complemento de endereço         |
| seller      | boolean | verificação se o user tá ativo  |
| resettoken  | string  | token de redefinição de senha   |
| id          | string  | Identificador único do vendedor |
| createdAt   | date    | criação de vendedor             |
| updatedAt   | date    | atualizacao de vendedor         |

### Endpoints de vendedor

| Método | Rota                       | Descrição                                         |
| ------ | -------------------------- | ------------------------------------------------- |
| POST   | users                      | Criação de um usuário.                            |
| GET    | users                      | Lista todos os usuários                           |
| GET    | users/:user_id             | Lista um usuário usando seu ID como parâmetro     |
| PATCH  | users/:user_id             | Atualizar um usuário usando seu ID como parâmetro |
| DELETE | users/:user_id             | Deletar um usuário usando seu ID como parâmetro   |
| POST   | users/resetPassword        | enviar e-mail de recuperacao de senha.            |
| PATCH  | users/resetPassword/:token | redefinir uma nova senha de usuario               |

### Criação de usuário

### CRIAR USUARIO

### Exemplo de Request:

```
POST /users
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "birthdate": "000400",
  "cep": "00500000",
  "city": "ABC",
  "complement": "casa",
  "cpf": "042271762",
  "description": "asasdasd",
  "email": "johnmail22@gmail.com",
  "estate": "Pe",
  "name": "john dummy",
  "number": "100",
  "password": "123456789",
  "passwordConfirmation": "123456789",
  "phone": "000000000",
  "seller": true,
  "street": "Rua da flores"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "name": "john dummy",
  "email": "jvmeira98@gmail.com",
  "cpf": "000000",
  "phone": "41005000000",
  "birthdate": "000400",
  "description": "asasdasd",
  "cep": "00500000",
  "estate": "Pe",
  "city": "ABC",
  "street": "Rua da flores",
  "number": "100",
  "complement": "casa",
  "seller": true,
  "resettoken": null,
  "id": "00000-000-000-0000-000000000",
  "createdAt": "2100-06-28",
  "updatedAt": "2100-06-28"
}
```

### LISTAR TODOS OS USUARIOS

### Exemplo de Request:

```
GET /users
Host: http://localhost:3000
Authorization: Bearer token (token de login)
Content-type: application/json
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "name": "john dummy",
  "email": "jvmeira98@gmail.com",
  "cpf": "000000",
  "phone": "41005000000",
  "birthdate": "000400",
  "description": "asasdasd",
  "cep": "00500000",
  "estate": "Pe",
  "city": "ABC",
  "street": "Rua da flores",
  "number": "100",
  "complement": "casa",
  "seller": true,
  "resettoken": null,
  "id": "00000-000-000-0000-000000000",
  "createdAt": "2100-06-28",
  "updatedAt": "2100-06-28",
  "cars": ["cars_array"]
}
```

### LISTAR USUARIO POR ID

### Exemplo de Request:

```
GET /users/:user_id
Host: http://localhost:3000
Authorization: Bearer token (token de login)
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "name": "john dummy",
  "email": "jvmeira98@gmail.com",
  "cpf": "000000",
  "phone": "41005000000",
  "birthdate": "000400",
  "description": "asasdasd",
  "cep": "00500000",
  "estate": "Pe",
  "city": "ABC",
  "street": "Rua da flores",
  "number": "100",
  "complement": "casa",
  "seller": true,
  "resettoken": null,
  "id": "00000-000-000-0000-000000000",
  "createdAt": "2100-06-28",
  "updatedAt": "2100-06-28",
  "cars": ["cars_array"]
}
```

### EDITAR USUARIOS

### Exemplo de Request:

```
PATCH /users/:user_id
Host: http://localhost:3000
Authorization: Bearer token (token de login)
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
{
  "name": "Walter smith"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "name": "Walter Smith",
  "email": "jvmeira98@gmail.com",
  "cpf": "000000",
  "phone": "41005000000",
  "birthdate": "000400",
  "description": "asasdasd",
  "cep": "00500000",
  "estate": "Pe",
  "city": "ABC",
  "street": "Rua da flores",
  "number": "100",
  "complement": "casa",
  "seller": true,
  "resettoken": null,
  "id": "00000-000-000-0000-000000000",
  "createdAt": "2100-06-28",
  "updatedAt": "2100-06-29"
}
```

### DELETAR USUARIO

### Exemplo de Request:

```
DELETE /users/:user_id
Host: http://localhost:3000
Authorization: Bearer token (token de login)
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
{
    "VAZIO"
}
```

### Exemplo de Response:

```
204 NO RESPONSE
```

```json
{
  "NO BODY RESPONSE"
}
```

### ENVIAR E-MAIL DE RECUPERAÇÃO DE SENHA

### Exemplo de Request:

```
POST /users/resetPassword
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "fulano@gmail.com"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "token send!"
}
```

### REDEFINIÇÃO DE SENHA

### Exemplo de Request:

```
POST /users/resetPassword/:token
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                           |
| --------- | ------ | ----------------------------------- |
| :token    | string | token único de redefinição de senha |

### Corpo da Requisição:

```json
{
  "password": "123456789"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Password change with sucess!"
}
```

## ROTAS DE LOGIN

O objeto login é definido como:

| Campo    | Tipo   | Descrição             |
| -------- | ------ | --------------------- |
| email    | string | O email do usuário.   |
| password | string | password do vendedor. |

### Endpoints de vendedor

| Método | Rota  | Descrição            |
| ------ | ----- | -------------------- |
| POST   | login | login de um usuário. |

### REALIZAR LOGIN

### Exemplo de Request:

```
POST /login
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "fulano@gmail.com",
  "password": "123456789"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "token": "token_gerado_automaticamente"
}
```

## ROTAS DE CARROS

O objeto cars é definido como:

| Campo       | Tipo    | Descrição                           |
| ----------- | ------- | ----------------------------------- |
| id          | string  | Identificador único do automóvel    |
| brand       | string  | marca do automóvel.                 |
| model       | string  | modelo do automóvel.                |
| year        | string  | O ano do automóvel.                 |
| fuel_type   | string  | tipo de combustivel do automóvel    |
| km          | string  | quilometragem do automóvel          |
| cep         | string  | CEP do vendedor                     |
| color       | string  | cor do automóvel                    |
| fipe_price  | string  | preço da tabela fipe do automóvel   |
| price       | string  | preço do automóvel                  |
| description | string  | descrição do automóvel              |
| created_at  | data    | data que o automóvel foi criado     |
| updated_at  | data    | data que o automóvel foi atualizado |
| is_active   | boolean | verificar se o automóvel tá ativo   |
| createdAt   | date    | criação de automovel                |
| updatedAt   | date    | atualizacao de automovel            |
| images      | array   | array de imagens do automovel       |

### Endpoints de vendedor

| Método | Rota                              | Descrição                             |
| ------ | --------------------------------- | ------------------------------------- |
| POST   | cars                              | criação do automóvel.                 |
| GET    | cars                              | listar todos os automoveis            |
| GET    | cars/:car_id                      | listar carros por id                  |
| GET    | cars/seller/:user_id/             | listar carros do vendedor             |
| PUT    | cars/:car_id                      | atualizar todos os dados do automovel |
| DELETE | cars/:car_id                      | remover automovel                     |
| POST   | cars/:car_id/comments             | criar comentario do automovel         |
| PATCH  | cars/:car_id/comments/:id_comment | editar comentario do automovel        |
| DELETE | cars/:car_id/comments/:id_comment | deletar comentario do automovel       |

### CRIAÇÃO DE AUTOMOVEL

### Exemplo de Request:

```
POST /cars
Host: http://localhost:3000
Authorization: Bearer Token (token de login)
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "brand": "Fiat",
  "model": "fastback special edition",
  "year": "2023",
  "fuel_type": "flex",
  "km": "500km",
  "color": "vermelho",
  "fipe_price": "R$ 159.716,00",
  "price": "R$ 159.716,00",
  "description": "carro semi-novo pouco utilizado",
  "images": ["url da imagem", "url da imagem 2", "url da imagem 3"]
}
```

### Exemplo de Response:

```
201 CREATED
```

```json
{
  "id": "000000000000000000000",
  "brand": "Fiat",
  "model": "fastback",
  "year": "2024",
  "fuel_type": "flex",
  "km": "500km",
  "color": "vermelho",
  "fipe_price": "R$ 159.716,00",
  "price": "R$ 159.716,00",
  "description": "carro semi-novo pouco utilizado",
  "created_at": "2023-06-29T00:20:06.846Z",
  "updated_at": "2023-06-29T00:20:06.846Z",
  "is_active": true,
  "images": [
    {
      "id": "id da imagem 1",
      "URL": "url da imagem 1"
    },
    {
      "id": "id da imagem 2",
      "URL": "url da imagem 2"
    },
    {
      "id": "id da imagem 3",
      "URL": "url da imagem 3"
    }
  ],
  "user": {
    "id": "00000-000-000-0000-000000000",
    "name": "john dummy",
    "email": "jvmeira98@gmail.com",
    "cpf": "000000",
    "phone": "41005000000",
    "birthdate": "000400",
    "description": "asasdasd",
    "cep": "00500000",
    "estate": "Pe",
    "city": "ABC",
    "street": "Rua da flores",
    "number": "100",
    "complement": "casa",
    "seller": true,
    "createdAt": "2100-06-28",
    "updatedAt": "2100-06-28",
    "resettoken": null
  }
}
```

### LISTAR TODOS OS AUTOMOVEIS

### Exemplo de Request:

```
GET /cars
Host: http://localhost:3000
Authorization: Bearer Token (token de login)
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "vazio"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "00000000000000000000000000",
  "brand": "Fiat",
  "model": "fastback",
  "year": "2024",
  "fuel_type": "flex",
  "km": "500km",
  "color": "vermelho",
  "fipe_price": "R$ 159.716,00",
  "price": "R$ 159.716,00",
  "description": "carro semi-novo pouco utilizado",
  "created_at": "2023-06-29T00:20:06.846Z",
  "updated_at": "2023-06-29T00:20:06.846Z",
  "is_active": true,
  "images": [
    {
      "id": "id da imagem 1",
      "URL": "url da imagem 1"
    },
    {
      "id": "id da imagem 2",
      "URL": "url da imagem 2"
    },
    {
      "id": "id da imagem 3",
      "URL": "url da imagem 3"
    }
  ],
  "user": {
    "id": "00000-000-000-0000-000000000",
    "name": "john dummy",
    "email": "jvmeira98@gmail.com",
    "cpf": "000000",
    "phone": "41005000000",
    "birthdate": "000400",
    "description": "asasdasd",
    "cep": "00500000",
    "estate": "Pe",
    "city": "ABC",
    "street": "Rua da flores",
    "number": "100",
    "complement": "casa",
    "seller": true,
    "createdAt": "2100-06-28",
    "updatedAt": "2100-06-28",
    "resettoken": null
  }
}
```

### LISTAR AUTOMOVEL POR ID

### Exemplo de Request:

```
GET /cars/:car_id
Host: http://localhost:3000
Authorization: Bearer Token (token de login)
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                              |
| --------- | ------ | -------------------------------------- |
| car_id    | string | Identificador único do automovel(cars) |

### Corpo da Requisição:

```json
{
  "vazio"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "000000000000000000000",
  "brand": "Fiat",
  "model": "fastback",
  "year": "2024",
  "fuel_type": "flex",
  "km": "500km",
  "color": "vermelho",
  "fipe_price": "R$ 159.716,00",
  "price": "R$ 159.716,00",
  "description": "carro semi-novo pouco utilizado",
  "created_at": "2100-06-29T00:20:06.846Z",
  "updated_at": "2100-06-29T00:20:06.846Z",
  "is_active": true,
  "images": [
    {
      "id": "id da imagem 1",
      "URL": "url da imagem 1"
    },
    {
      "id": "id da imagem 2",
      "URL": "url da imagem 2"
    },
    {
      "id": "id da imagem 3",
      "URL": "url da imagem 3"
    }
  ],
  "user": {
    "id": "00000-000-000-0000-000000000",
    "name": "john dummy",
    "email": "jvmeira98@gmail.com",
    "cpf": "000000",
    "phone": "41005000000",
    "birthdate": "000400",
    "description": "asasdasd",
    "cep": "00500000",
    "estate": "Pe",
    "city": "ABC",
    "street": "Rua da flores",
    "number": "100",
    "complement": "casa",
    "seller": true,
    "createdAt": "2100-06-28",
    "updatedAt": "2100-06-28",
    "resettoken": null
  }
}
```

### LISTAR AUTOMOVEIS DO VENDEDOR

### Exemplo de Request:

```
GET /cars/seller/:user_id
Host: http://localhost:3000
Authorization: Bearer Token (token de login)
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                              |
| --------- | ------ | -------------------------------------- |
| user_id   | string | Identificador único do usuario (users) |

### Corpo da Requisição:

```json
{
  "vazio"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "0000000000000000000",
  "name": "john dummy",
  "email": "jvmeira98@gmail.com",
  "cpf": "042271762",
  "phone": "41005000000",
  "birthdate": "000400",
  "description": "asasdasd",
  "cep": "00500000",
  "estate": "Pe",
  "city": "ABC",
  "street": "Rua da flores",
  "number": "100",
  "complement": "casa",
  "seller": true,
  "password": "$2a$10$g1AgKAjtCh/9.vsckg1yLe8mum/sFVVLrGSkO9O01PAYD5wSAfX9e",
  "createdAt": "2100-06-28",
  "updatedAt": "2100-06-28",
  "resettoken": null,
  "cars": [
    {
      "id": "00000000000000000000000",
      "brand": "Fiat",
      "model": "fastback special edition",
      "year": "2023",
      "fuel_type": "flex",
      "km": "500km",
      "color": "vermelho",
      "fipe_price": "R$ 159.716,00",
      "price": "R$ 159.716,00",
      "description": "carro semi-novo pouco utilizado",
      "created_at": "2100-06-29T00:20:06.846Z",
      "updated_at": "2100-06-29T01:16:46.482Z",
      "is_active": true,
      "images": [
        {
          "id": "id da imagem 1",
          "URL": "url da imagem 1"
        },
        {
          "id": "id da imagem 2",
          "URL": "url da imagem 2"
        },
        {
          "id": "id da imagem 3",
          "URL": "url da imagem 3"
        }
      ]
    }
  ]
}
```

### EDITAR AUTOMOVEIS

### Exemplo de Request:

```
PUT /cars/:car_id
Host: http://localhost:3000
Authorization: Bearer Token (token de login)
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                              |
| --------- | ------ | -------------------------------------- |
| car_id    | string | Identificador único do automovel(cars) |

### Corpo da Requisição:

```json
{
  "brand": "Fiat",
  "model": "fastback SPECIAL EDITION",
  "year": "2023",
  "fuel_type": "flex",
  "km": "700km",
  "color": "Red",
  "fipe_price": "R$ 159.716,00",
  "price": "R$ 159.716,00",
  "description": "carro semi-novo pouco utilizado",
  "images": ["url da imagem", "url da imagem 2", "url da imagem 3"]
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "00000000000000",
  "brand": "Fiat",
  "model": "fastback SPECIAL EDITION",
  "year": "2023",
  "fuel_type": "flex",
  "km": "700km",
  "color": "Red",
  "fipe_price": "R$ 159.716,00",
  "price": "R$ 159.716,00",
  "description": "carro semi-novo pouco utilizado",
  "created_at": "2100-06-29T00:20:06.846Z",
  "updated_at": "2100-06-30T02:45:32.302Z",
  "is_active": true,
  "images": [
    {
      "id": "id da imagem 1",
      "URL": "url da imagem 1"
    },
    {
      "id": "id da imagem 2",
      "URL": "url da imagem 2"
    },
    {
      "id": "id da imagem 3",
      "URL": "url da imagem 3"
    }
  ]
}
```

### DELETAR AUTOMOVEIS

### Exemplo de Request:

```
DELETE /cars/:car_id
Host: http://localhost:3000
Authorization: Bearer Token (token de login)
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                              |
| --------- | ------ | -------------------------------------- |
| car_id    | string | Identificador único do automovel(cars) |

### Corpo da Requisição:

```json
"vazio"
```

### Exemplo de Response:

```
204 NO CONTENT
```

```json
"vazio"
```

### CRIAR COMENTÁRIO DO AUTOMOVEL

### Exemplo de Request:

```
POST /cars/:car_id/comments
Host: http://localhost:3000
Authorization: Bearer Token (token de login)
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                              |
| --------- | ------ | -------------------------------------- |
| car_id    | string | Identificador único do automovel(cars) |

### Corpo da Requisição:

```json
{
  "comment": "que carro lindo"
}
```

### Exemplo de Response:

```
201 CREATED
```

```json
{
  "comment": "que carro lindo",
  "car": {
    "id": "000000000000000000",
    "brand": "Fiat",
    "model": "fastback",
    "year": "2024",
    "fuel_type": "flex",
    "km": 500,
    "color": "vermelho",
    "fipe_price": "159.716",
    "price": 159.716,
    "description": "carro semi-novo pouco utilizado",
    "created_at": "2100-06-30T16:55:07.698Z",
    "updated_at": "2100-06-30T16:55:07.698Z",
    "is_active": true
  },
  "user": {
    "id": "00000000000000000000",
    "name": "john dummy",
    "email": "jvmeira98@gmail.com",
    "cpf": "000000000000",
    "phone": "41005000000",
    "birthdate": "000400",
    "description": "asasdasd",
    "cep": "00500000",
    "estate": "Pe",
    "city": "ABC",
    "street": "Rua da flores",
    "number": "100",
    "complement": "casa",
    "seller": true,
    "password": "$2a$10$8mljwy3gFt7qoQ1OqPTVw.r2GW6yixlj1ITwsLfM/wN.ml4hJGsni",
    "createdAt": "2100-06-30",
    "updatedAt": "2100-06-30",
    "resettoken": null
  },
  "id": "00000000000000000000",
  "created_at": "2100-06-30T16:56:18.428Z"
}
```

### EDITAR COMENTÁRIO NO AUTOMOVEL

### Exemplo de Request:

```
PATCH /cars/comments/:comment_id
Host: http://localhost:3000
Authorization: Bearer Token (token de login)
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                                   |
| ---------- | ------ | ------------------------------------------- |
| comment_id | string | Identificador único do comentario(comments) |

### Corpo da Requisição:

```json
{
  "comment": "que carro sensacional!!"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "id": "00000000000000000000",
  "comment": "que carro sensacional!!",
  "created_at": "2100-06-30T16:56:18.428Z"
}
```

### DELETAR COMENTÁRIO NO AUTOMOVEL

### Exemplo de Request:

```
DELETE /cars/comments/:comment_id
Host: http://localhost:3000
Authorization: Bearer Token (token de login)
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                                   |
| ---------- | ------ | ------------------------------------------- |
| comment_id | string | Identificador único do comentario(comments) |

### Corpo da Requisição:

```json
"vazio"
```

### Exemplo de Response:

```
204 NO CONTENT
```

```json
"vazio"
```

## ROTAS DE FILTER

### Endpoints de filtro

| Método | Rota    | Descrição                     |
| ------ | ------- | ----------------------------- |
| GET    | filters | filtrar a lista de automoveis |

### DELETAR COMENTÁRIO NO AUTOMOVEL

### Exemplo de Request:

```
DELETE /filters
Host: http://localhost:3000
Authorization: none
Content-type: application/json
```

### Corpo da Requisição:

```json
"vazio"
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "brands": ["volkswagen", "fiat"],
  "models": ["fastback", "t-cross 1.0 tsi"],
  "colors": ["preto", "vermelho"],
  "years": ["2024", "2019"],
  "fuel_types": ["flex"]
}
```

## MADE WITH ❤️ BY:

- [Marcio Calenzo](https://github.com/MarcioCalenzo)
- [João Vitor Meira](https://github.com/jvnagos21)
- [Matheus Dávila](https://github.com/drmatheus)
- [Emanuel Luiz](https://github.com/emanuelluiz01)
- [Eduardo Portela](https://github.com/Eduardo-Portela)
