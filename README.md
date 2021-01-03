# Node.js Boilerplate

The goal of this boilerplate is to accelerate development of Node.js project, supplied with several common modules.

## Project Setup

1. Clone this repo
2. Rename it to `<new-project>` that you want to build based on this boilerplate
3. Run `cd <new-project>`
4. Copy `.env.example` to `.env`
5. Run `yarn add`
6. Run `yarn test`
7. Run `yarn start`
8. Try to hit `health` endpoint using `curl http://localhost:8000/health` and expect `200` response

## Modules

This boilerplate contain common modules such as:

- API docs with `swagger`
- Linting with `eslint`
- Logging with `winston`
- Unit test and code coverage with `jest`
- Git hooks with `pre-push`
- Load test with `artillery`