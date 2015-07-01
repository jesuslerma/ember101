# Routes - model and template

## Route's model

Templates in your application are backed by models. But how do templates know which model they should display?

This is one of the jobs of an `Ember.Route`. You can tell a template which model it should render by defining a route with the same name as the template, and implementing its `model` hook.

```js
export default Ember.Route.extend({
  model: function() {
    return [{
      title: "Tomster",
      url: "http://emberjs.com/images/about/ember-productivity-sm.png"
    }, {
      title: "Eiffel Tower",
      url: "http://emberjs.com/images/about/ember-structure-sm.png"
    }];
  }
});
```

## Rendering a template

If you want to render a template other than the one associated with the route handler, implement the `renderTemplate` hook:

```js
export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('favoritePost');
  }
});
```
