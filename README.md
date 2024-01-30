# Documentação da Aplicação 

### Visão Geral

A aplicação bancária oferece serviços para o gerenciamento de controle financeiro. O backend é desenvolvido em Java usando o framework Spring Boot e gerenciado com Maven. O frontend é desenvolvido com angular.

## Backend (Java com Maven)

### Configuração

#### Requisitos

- Java JDK 11 ou superior
- Maven 3.x
- Banco de Dados MySQL
- IDE

#### Banco de dados
- Fazer download do MySQL Workbench
- Criar banco de dados
    ```sql
        CREATE SCHEMA `bancodedados` ;
    ```

- Executar Queries para a criação das tabelas

  ```sql
      CREATE TABLE `categorias` (
      `idcategoria` int NOT NULL AUTO_INCREMENT,
      `nomecategoria` varchar(45) NOT NULL,
      PRIMARY KEY (`idcategoria`)
        )

    CREATE TABLE `transacoes` (
      `idtransacao` int NOT NULL AUTO_INCREMENT,
      `datatransacao` date NOT NULL,
      `valortransacao` decimal(10,2) NOT NULL,
      `categoria_idcategoria` int DEFAULT NULL,
      PRIMARY KEY (`idtransacao`),
      KEY `fk_transacao_categoria_idx` (`categoria_idcategoria`),
      CONSTRAINT `fk_transacao_categoria` FOREIGN KEY (`categoria_idcategoria`) REFERENCES `categorias` (`idcategoria`)
    )
    ```
  

#### Instalação e Execução

1. Clone o repositório.

    ```bash
    git clone https://github.com/lettribeiros/aplicacao-controle-financeiro
    ```

2. Acesse o diretório do projeto.

    ```bash
    cd aplicacao-controle-financeiro/backend/transacoes
    ```

3. Faça a configuração para a conexão com seu banco de dados.

   Abra o diretório do projeto em um IDE
       ![Captura de tela 2024-01-30 164209](https://github.com/lettribeiros/aplicacao-controle-financeiro/assets/123602185/1bf340fa-c9ce-4106-bff6-89e7405d62d9)
   Altere onde está sublinhado pelo nome do banco de dados que foi criado e a senha pela senha que foi cadastrada no MySQL

    
3. Execute a aplicação.

   Acesse o diretório do projeto e execute

    ```bash
    mvn spring-boot:run
    ```

5. O backend estará disponível em http://localhost:8080

### Endpoints da API

1. **Listar Todas as Transações**

   - Endpoint: `/transacoes`
   - Método: GET
   - Descrição: Retorna todas as transações.

2. **Cadastrar transação**

   - Endpoint: `/transacoes`
   - Método: POST
   - Corpo da Requisição:

     ```json
     {
       "data": "30-01-2024",
       "valor": 100.00,
       "categoria": {
         "id": 4
       }
     }
     ```
   - Descrição: Cadastra uma nova transação.

3. **Atualiza/Editar transação**

   - Endpoint: `/transacoes`
   - Método: PUT
   - Corpo da Requisição:

    ```json
     {
        "id": 1
       "data": "30-01-2024",
       "valor": 100.00,
       "categoria": {
         "id": 4
       }
     }
     ```

   - Descrição: Atualiza uma transação já existente.

4. **Deletar transação por ID**

   - Endpoint: `/transacoes?id=2`
   - Método: DELETE
   - Descrição: Exclui a transação que contenha o ID passado no parâmetro.
  
5. **Deletar Todas as Transações**

   - Endpoint: `/transacoes/excluirtodas`
   - Método: DELETE
   - Descrição: Exclui todas as transações.

6. **Listar todas as categorias**

   - Endpoint: `/categorias`
   - Método: GET
   - Descrição: Lista todas as categorias.
  

## Frontend (Angular)

### Instalação e Execução

Certifique-se de ter o Node.js instalado.

1. Instale o Angular CLI.

    ```bash
    npm install -g @angular/cli
    ```

2. Navegue até o diretório do frontend.

    ```bash
    cd aplicacao-controle-financeiro/frontend
    ```

3. Instale as dependências.

    ```bash
    npm install
    ```

4. Execute o frontend.

    ```bash
    ng serve
    ```

5. O frontend estará disponível em http://localhost:4200
