# github-api
 User profiles using Github API

## Installation and Start Up for testing:
```yarn``` -- for installing depencies, saved on node_modules folder

```yarn start``` -- to start project on localhost:3000

## Commands for template:
```npx create-react-app github-api --template typescript```

## Commands for tools:
```npm install react-router-dom@next history react-icons styled-components axios```

```npm install -D @types/axios @types/history @types/react-icons @types/react-router-dom @types/styled-components```

Both documentation are online, be sure to reference the correct version
React-router-dom@6 docs: https://reactrouter.com/docs/en/v6/getting-started/overview

## Styling:
Use of styled components for organizing css inside simple React components

Simple form for the Home page, works with enter key and 'Search' button

Inspiration from the original Github site, using separate Left and Right components on Profile page

## Axios:
Configuration of Axios in separate 'Services' folder for cleaner React files and more line space in API configs

## Tests:
Tests use directly Github API. Mock server will be implemented

Current: 3 tests
  * Success API: user found
  * Failed API: user not found
  * Failed API: permission denied

### To-Do:
* Add more automated tests
* Add Axios call for Repo page and project exhibition
* Add Heat map of development
* Centralize Search box and improve background
* Add Mock Server to the different API responses and status
