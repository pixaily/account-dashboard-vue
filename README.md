# Account Dashboard developed with Vue

## Initial Task

### Create a Vue 3 project 

### Run a GET on [here](https://run.mocky.io/v3/d07e361a-8f4b-4fdc-a8fe-bce479a0cbfd) to retrieve а list of teams

### Use HTML5 and Sass and make the app responsive

### Implement a search functionality with the requirements below

## Requirements

The input will search through a list of football teams. Each team object contains the
following fields:

- Retrieve а list of teams
- Implement a search functionality with the requirements below
  - The input will search through a list of football teams. 
  - Each team object contains the following fields:
    * *id* - a unique ID
    * *name* - the team’s name
    * *stadium* - the team’s stadium
    * *leagues* - a list of leagues in which the team participates
    * *is_following* - a flag indicating whether the team is being followed
  
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
