# Backend

## Estrutura do projeto

Este projeto está estruturado com base no padrão aquitetônico MVC. Todos os arquivos que contém tanto a lógica de negócios quanto os testes de unidade de services podem ser encontrados na pasta 'src'.

## Dependências

- Express
- Typeorm
- MySQL
- Docker
- Yarn

## Problemas encontrados

A API do MySQL para NodeJS não atualizou a forma de autenticação para o banco de dados em sua versão 8.X. O TypeORM busca utilizar a autenticação através de SHA256_PASSWORD, porém, na nova versão, o padrão mudou para SHA2_PASSORD. Dessa forma, é necessário fazer um pequeno `work arround` dentro do container para que o serviço funcione adequadamente. Assim que necessário será colocado a demostração dos comandos necesserários para rodar a aplicação.

## Variavéis de ambiente

- PORT=5000
  - Porta onde o serviço vai ser iniciado
- TYPEORM_CONNECTION=mysql
  - Tipo da conexão
- TYPEORM_HOST=database|localhost
  - Ip do host, database caso seja com docker, localhost caso não esteja usando o docker
- TYPEORM_USERNAME=root
  - Tipo do user
- TYPEORM_PASSWORD=senha
  - Senha de acesso
- TYPEORM_DATABASE=db
  - Nome do database
- TYPEORM_PORT=3306
  - Porta para conexão com o banco
- TYPEORM_LOGGING=true
  - Registro de consultas
- TYPEORM_ENTITIES="./src/entities/\*.ts"
  - Local onde as entities estão localizadas
- TYPEORM_MIGRATIONS="./src/database/migrations/\*.ts"
  - Local onde as migrations estão localizadas
- TYPEORM_MIGRATIONS_DIR="./src/database/migrations"
  - Diretório
- FOLDER_IMAGE="./src/util/image"
  - Diretório onde as imagens estão sendo salvas
- SALT=10
  - Variável utilizada para criaçao de senha
- SECRET=secrettoken
  - Variável utilizada para geração de token

## Rotas

[Criar Produto](./src/docs/create_product.md)

[Listar todos os Produtos](./src/docs/get_all_products.md)

[Criar Usuario](./src/docs/create_user.md)

[Login](./src/docs/login.md)

[Criar Pedito](./src/docs/create_order.md)

[Listar todas as transações](./src/docs/get_all_transactions.md)

## Instalação com docker no Linux

1. Instalar o docker `docker-compose`.
2. clone este repositório:

   ```shell
   git clone https://github.com/yuregl/desafioBackend.git
   cd desafiobackend/api
   ```

3. Crie um arquivo chamado .env com o conteúdo de `.env.example` e preencha os campos:

   ```shell
   cp .env.example .env
   vi .env
   ```

4. Crie e levante o container usando o `docker-compose`:

   ```
   docker-compose up -d
   ```

5. Como foi comentado nos problemas encontrados, existe um problema com a autenticação.

- É Necessário deixar os containers funcionado para acessa o container do banco:
  ```shell
    sudo docker exec -it mysql_api bash
  ```
- Logo apos, entrar no container, acesse o mysql com o root:
  ```shell
    mysql -u root -p
  ```
- Colocar a senha selecionada do .env
- Fazer um alteração no usuário e colocar a senha do .env `TYPEORM_PASSWORD` no password:
  ```shell
    ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
  ```
- Logo após, use o comando para ajustar as alterações:

  ```shell
    flush privileges;
  ```

- Após os passos anteriores rode novamente o comando `docker-compose up`

- Antes de rodar as migrations e o seed é necessário entrar no container da api para isso use o comando.
  ```shell
    sudo docker exec -it api_service bash
  ```
- Comandos para rodar as migrations e o seed:
  ```shell
    yarn typeorm migrations:run
    yarn seed:run
  ```
- Email e senha do admin criado através do seed:
  ```shell
    email: teste@admin.com
    senha: teste1
  ```

6. Testes

   ```
     yarn test
   ```

7. Para acessar o serviço `http://localhost:${PORT_SERVER}`.

## Instalação com yarn

### Pré-requisitos

- É necessário possuir o MySQL
- Node 14

1. Clone este repósitorio:

   ```shell
   git clone https://github.com/yuregl/desafioBackend.git
   cd desafiobackend/api
   ```

2. Crie um arquivo chamado `.env` com o conteúdo de `.env.example` e preencha os campos:

   ```shell
   cp .env.example .env
   vi .env
   ```

3. Instale as dependencias do projeto:

   ```shell
     yarn
   ```

4. Como foi comentado nos problemas encontrados, existe um problema com a autenticação.

- É necessário acessar o mysql com o root:
  ```shell
    mysql -u root -p
  ```
- Colocar a senha selecionada do .env
- Fazer um alteração no usuário e colocar a senha do .env `TYPEORM_PASSWORD` no password:
  ```shell
    ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
  ```
- Logo após, use o comando para ajustar as alterações

  ```shell
    flush privileges;
  ```

- Comandos para rodar as migrations e o seed:

  ```shell
    yarn typeorm migrations:run
    yarn seed:run
  ```

- Email e senha do admin criado através do seed:
  ```shell
    email: teste@admin.com
    senha: teste1
  ```

5. Rode o serviço

   ```
     yarn start
   ```

6. Testes

   ```
     yarn test
   ```

7. Para acessar o serviço `http://localhost:${PORT_SERVER}`.

### Exemplos de dados

Caso esteja usando o insomnia, na raiz da pasta api tem uma importação das requisições
