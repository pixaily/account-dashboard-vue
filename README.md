# Account Dashboard developed with Vue

You can check it out [here](https://pixaily.github.io/account-dashboard-vue)

## Initial Task

### Create a Vue 3 project

### Run a GET on [here](https://run.mocky.io/v3/37106e7c-db78-41e7-bf13-e441e8310fd4) to retrieve а list of teams

### Use HTML5 and Sass and make the app responsive

### Implement a search functionality with the requirements below

## Requirements

The input will search through a list of football teams. Each team object contains the
following fields:

- Retrieve а list of teams
- Implement a search functionality with the requirements below
  - The input will search through a list of football teams.
  - Each team object contains the following fields:
    - _id_ - a unique ID
    - _name_ - the team’s name
    - _stadium_ - the team’s stadium
    - _leagues_ - a list of leagues in which the team participates
    - _is_following_ - a flag indicating whether the team is being followed

The user should be able to search by name, stadium, and leagues.

On typing in the input field, a list with matching search results should appear.

The user should be able to navigate through the results with a keyboard. The search result in
focus and on hover should be highlighted. Only one item can be highlighted in cases both
mouse and keyboard are used. (The keyboard will take precedence if the mouse is not
moving. The mouse should take precedence if keyboard navigation is not being used.) For
example, the Gmail search has similar behavior.

If there are no matching results a message should appear.

When the user clicks the follow/unfollow button add/remove the team to the “My teams”
section and save the changes to the Vuex store.

In case you have any questions, don’t hesitate to contact us.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
