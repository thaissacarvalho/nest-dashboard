# Dashboard Project

Este projeto é uma mini dashboard desenvolvida para treinar e aprender sobre **Node.js**, **Nest.js**, **Prisma**, **Typescript** e **PostgreSQL**. O objetivo principal é fornecer uma interface de gerenciamento de dados para campanhas, doações e instituições, aproveitando as melhores práticas de desenvolvimento backend.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem de programação baseada em JavaScript que adiciona tipagem estática opcional. Utilizada para melhorar a robustez e a manutenibilidade do código.
- **Nest.js**: Framework de Node.js para a construção de aplicações escaláveis e eficientes do lado do servidor. Ele é construído com TypeScript e usa o Express como padrão para a manipulação de rotas HTTP.
- **Prisma**: Um ORM (Object-Relational Mapping) moderno para Node.js e TypeScript, que facilita as interações com bancos de dados SQL e NoSQL.
- **PostgreSQL**: Um sistema de gerenciamento de banco de dados relacional poderoso e de código aberto, utilizado como banco de dados principal da aplicação.

## Funcionalidades

- **Gerenciamento de Campanhas**: Criação, leitura, atualização e exclusão de campanhas associadas a instituições.
- **Gerenciamento de Doações**: Controle de doações associadas a campanhas e usuários.
- **Gerenciamento de Instituições**: Gerenciamento das instituições que organizam campanhas.
- **Validações de Dados**: Inclui validações para evitar conflitos, como o uso de nomes duplicados de campanhas dentro de uma mesma instituição.

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente:

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/thaissacarvalho/nest-dashboard.git
   cd nest-dashboard
   ```
   
2. **Instale as Dependências:**
     Certifique-se de que você tem o Node.js instalado. Depois, instale as dependências com o npm ou yarn:
    ```bash
    npm install
    # ou
    yarn install
   ```

3. **Configuração do Banco de Dados:**
        Crie um banco de dados PostgreSQL e atualize o arquivo ```.env``` com suas credenciais de banco de dados:
    
    ```bash 
    DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome-do-banco"
    ```
4. **Executando as Migrações:** Aplique as migrações do Prisma para configurar o esquema do banco de dados:

    ```bash
    npx prisma migrate dev --name init
    ```

5. **Inicie o Servidor:** Para iniciar o servidor de desenvolvimento:
    ```bash
    npm run start:dev
    ```
O servidor estará em execução em http://localhost:3000.

## Estrutura do Projeto
A estrutura do projeto é organizada de maneira modular, com pastas dedicadas para controladores, DTOs, módulos, serviços, e configuração do Prisma.

    ```plaintext
    ├── src
    │   ├── controllers                # Controladores para cada recurso da aplicação
    │   │   ├── app.controller.ts      # Controlador principal
    │   │   ├── create-campaign.controller.ts
    │   │   ├── create-donations.controller.ts
    │   │   ├── create-institutions.controller.ts
    │   │   ├── create-users.controller.ts
    │   │   ├── find-campaign.controller.ts
    │   │   ├── find-donations.controller.ts
    │   │   ├── find-institutions.controller.ts
    │   │   └── find-users.controller.ts
    │   ├── DTO                        # Objetos de Transferência de Dados
    │   │   ├── create-campaign.dto.ts
    │   │   ├── create-donation.dto.ts
    │   │   ├── create-institution.dto.ts
    │   │   └── create-user.dto.ts
    │   ├── modules                    # Módulos para cada recurso da aplicação
    │   │   ├── app.module.ts
    │   │   ├── campaign.module.ts
    │   │   ├── donation.module.ts
    │   │   ├── institution.module.ts
    │   │   └── user.module.ts
    │   ├── prisma                     # Configuração do Prisma
    │   │   └── prisma.service.ts
    │   ├── services                   # Serviços que contêm a lógica de negócio
    │   │   ├── app.service.ts
    │   │   ├── campaign.service.ts
    │   │   ├── donations.service.ts
    │   │   ├── institution.service.ts
    │   │   └── user.service.ts
    │   └── main.ts                    # Arquivo principal para inicializar a aplicação
    └── README.md                      # Documentação do projeto
    ```

# Uso

## Endpoints Principais

O projeto oferece vários endpoints RESTful para interagir com os recursos de Campanhas, Doações e Instituições. Abaixo estão alguns exemplos:

**Users**

GET /users: Lista todos os usuários registrados.

GET /users/:usersId/donations: Retorna o usuário que você deseja e as suas doações.

POST /users: Cria um novo usuário.

**Instituições**

GET /institutions: Lista todas as instituições registradas.

GET /institutions/:institutionsId/campaigns: Retorna a instituição e todas as campanhas dela.

POST /institutions: Cria uma nova instituição.

**Campaigns**

GET /campaigns: Retorna uma lista de todas as campanhas.

GET campaigns/:campaignsId/donations: Retorna uma lista de todas as campanhas com doações.

POST /campaigns: Cria uma nova campanha.

**Donations**

GET /donations: Retorna todas as doações.

POST /donations: Registra uma nova doação.

## Exemplos de Uso: 

Para testar a aplicação, você pode usar ferramentas como o Postman, Insomnia, Bruno ou o cURL para enviar requisições HTTP para os endpoints listados acima.

## Validações de Dados

**Campanhas**: Não é permitido criar campanhas com o mesmo nome dentro da mesma instituição.

**Doações:** Validações de integridade de dados são aplicadas para garantir que cada doação esteja vinculada a um usuário, campanha e instituição válidos.

## Contribuindo

Se você gostaria de contribuir para o projeto, siga as etapas abaixo:

1. **Faça um Fork do Repositório**

2. **Crie uma Branch de Funcionalidade** 
```git checkout -b feature/nova-funcionalidade```

3. **Faça o Commit de suas Mudanças** 
```git commit -m 'Adiciona nova funcionalidade'```

4. **Faça o Push para a Branch**
```git push origin feature/nova-funcionalidade```

5. **Abra um Pull Request**

## Licença

Este projeto é distribuído sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Contato

Projeto desenvolvido por Thaissa Carvalho dos Santos. Se tiver alguma dúvida ou sugestão, fique à vontade para entrar em contato!