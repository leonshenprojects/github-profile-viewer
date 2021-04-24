# Github profile viewer

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Project architecture

- `vue-router` is used to allow for routing in the SPA.
- `vuex` is used for state management. The state is defined in `store.js`.
- The `views` directory contains the views that are managed by the router. 
  They also contain the business logic and is aware of the `store`.
- The `part` directory contains components that are used by the views, 
  contains business logic and is aware of the `store`.
- The `components` directory contains presentational components. They are
  primarily concerned about presentation and contain minimal business logic.


### To do next

- Prevent users from using the forward button on the browser to navigate 
  to the next step if the are validation errors in the current step.
- Cater for what happens when a user presses the *enter* button on their
  keyboard while they are filling out a form input.
- Fix transition bug - When a user clicks the back button, the next step
  starts fading in before the previous step has finished fading out.
- Improve the visual design on the form and the page.
- Implment I18n.
- Implement some tests.
