# Transitioning and redirecting

Calling `transitionTo` from a route or `transitionToRoute` from a controller will stop any transition currently in progress and start a new one, functioning as a redirect. `transitionTo` takes parameters and behaves exactly like the `link-to` helper:

* If you transition into a route without dynamic segments that route's model hook will always run.

* If the new route has dynamic segments, you need to pass either a model or an identifier for each segment. Passing a model will skip that segment's `model` hook. Passing an identifier will run the `model` hook and you'll be able to access the identifier in the params.


## Before model is known

```js
Router.map(function() {
  this.route('posts');
});
```

```js
// app/routes/index.js

export default Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('posts');
  }
});
```

## After the model is known

```js
Router.map(function() {
  this.route('posts');
  this.route('post', { path: '/post/:post_id' });
});
```

```js
// app/routes/posts.js

export default Ember.Route.extend({
  afterModel: function(posts, transition) {
    if (posts.get('length') === 1) {
      this.transitionTo('post', posts.get('firstObject'));
    }
  }
});
```
