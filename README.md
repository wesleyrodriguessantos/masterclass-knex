```sql
knex('users').where('id', 1)

select * from `users` where `id` = 1
```

## 👟 Praticar

Criar uma API que irá ter CRUD de usuários e projetos desses usuários.

**Ferramentas Necessárias** 

- Nodejs
- PostgreSQL
- VSCode
- Insomnia ou Postman

**Sequencia** 
- [x]  Create Table
- [x]  Instalar: `npm i knex pg express nodemon`
- [x]  Create and Config ./knexfile.js with `npx knex init`
- [x]  Create and Config ./src/database/index.js
- [x]  Log in to local postgres: `psql -U postgres`
- [x]  Create user migration  `npx knex migrate:make migration_name`
- [x]  Create user seed  `npx knex seed:make seed_name`
- [x]  Run Migration and Seeds `migrate:latest` `seed:run`
- [x]  Usando o Knex
- [x]  Select
- [x]  Insert
- [x]  Update
- [x]  Delete
- [x]  Add error handling
- [x]  Separar Rotas e criar controllers
- [x]  Create projects table (Relacionamento com users)
- [x]  Criar migration e seed
- [x]  Join User Projects
- [x]  Paginação de Projetos
- [x]  Soft Delete (user)
- [x]  Procedures & Triggers (updated_at)

## 💧 Code/Drops

```sql
-- create database
CREATE DATABASE knex_test;

-- create table
CREATE TABLE users (
	id serial unique,
	name text not null
);

-- select all users
SELECT * FROM users;

-- add user
INSERT INTO users (name) values ('Mayk');

-- update user
UPDATE users SET name = 'Maykão' WHERE id = '1';

-- delete user
DELETE FROM users WHERE id = '1';

-- create table
CREATE TABLE projects (
	id serial unique,
	user_id integer references users(id),
	title text not null
);

-- select all projects
SELECT * FROM projects;

-- add project to user
INSERT INTO projects (user_id, title) values ('1', 'Meu Projeto');

-- relation user with project
SELECT projects.*, users.name 
FROM projects
JOIN users ON projects.user_id = users.id;

-- drop
DROP TABLE users;
DROP TABLE projects;
DROP DATABASE knex_test;
```

## 🔗 Referências

[http://knexjs.org](http://knexjs.org/#Migrations)

[https://devhints.io/knex](https://devhints.io/knex)

[https://github.com/robmclarty/knex-express-project-sample](https://github.com/robmclarty/knex-express-project-sample)

[https://www.postgresqltutorial.com/psql-commands](https://www.postgresqltutorial.com/psql-commands/)

[https://www.postgresql.org/docs/12/sql-createtrigger.html](https://www.postgresql.org/docs/12/sql-createtrigger.html)

[https://stackoverflow.com/questions/36728899/knex-js-auto-update-trigger/48028011#48028011](https://stackoverflow.com/questions/36728899/knex-js-auto-update-trigger/48028011#48028011)

[https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

[https://www.postman.com/](https://www.postman.com/)

[https://insomnia.rest/](https://insomnia.rest/)

[https://code.visualstudio.com/](https://code.visualstudio.com/)

[https://www.postgresql.org/download/](https://www.postgresql.org/download/)
