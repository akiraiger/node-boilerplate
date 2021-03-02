# Node.js Boilerplate

The goal of this boilerplate is to accelerate development of Node.js project, supplied with several common modules and written in TypeScript.

## Project Setup

1. Clone this repo `git clone https://github.com/maarlf/node-boilerplate.git <project_name>`
2. Run `cd <project_name>`
3. Copy `.env.example` to `.env` and adjust with your own configuration
4. Run `yarn install` to install required dependencies
5. Run `yarn test` to perform test
6. Run `yarn dev` to start on your local machine
7. Try to hit `health check` endpoint using `curl http://localhost:8000/health` and expect `200` response

## Modules

This boilerplate contain common modules such as:

- API docs with `swagger`
- Linting with `eslint` and `prettier`
- Logging with `winston`
- Unit test and code coverage with `jest`
- Git hooks with `husky`
- Load test with `artillery`