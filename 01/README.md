# 01 - Routing Intro

Docs: http://guides.emberjs.com/v1.12.0/routing/

Api: http://emberjs.com/api/

## Intro

At any given time, your application has one or more active route handlers. The active handlers can change for one of two reasons:

* The **user interacted with a view**, which generated an event that caused the URL to change.
* The **user changed the URL manually** (e.g., via the back button), or the page was **loaded for the first time**.

When the current URL changes, the newly active route handlers may do one or more of the following:

* Conditionally redirect to a new URL.
* Update a controller so that it represents a particular model.
* Change the template on screen, or place a new template into an existing outlet.

## Defining Routes

```js
Router.map(function() {
  this.route('about', { path: '/about' });
  this.route('favorites', { path: '/favs' });
});
```

* `/about` route  -> `about` template
* `/favs` route  -> `favorites` template

**Heads up!** You get a few routes for free: the `route:application` and `route:index` (corresponding to the / path).

### Default path

```js
Router.map(function() {
  this.route('about');
  this.route('favorites', { path: '/favs' });
});
```

* `/about` route  -> `about` template
* `/favs` route  -> `favorites` template

### Emberjs inference

Ember.js automatically figures out the names of the routes and controllers based on the name you pass to `this.route`.

<table>
  <thead>
  <tr>
    <th>URL</th>
    <th>Route Name</th>
    <th>
      Controller<br/>
      <code>app/controllers/</code>
    </th>
    <th>
      Route<br/>
      <code>app/routes/</code>
    </th>
    <th>
      Template<br/>
      <code>app/templates/</code>
    </th>
  </tr>
  </thead>
  <tr>
    <td><code>/</code></td>
    <td><code>index</code></td>
    <td>↳<code>index.js</code></td>
    <td>↳<code>index.js</code></td>
    <td>↳<code>index.hbs</code></td>
  </tr>
  <tr>
    <td><code>/about</code></td>
    <td><code>about</code></td>
    <td>↳<code>about.js</code></td>
    <td>↳<code>about.js</code></td>
    <td>↳<code>about.hbs</code></td>
  </tr>
  <tr>
    <td><code>/favs</code></td>
    <td><code>favorites</code></td>
    <td>↳<code>favorites.js</code></td>
    <td>↳<code>favorites.js</code></td>
    <td>↳<code>favorites.hbs</code></td>
  </tr>
</table>

## Extra

video: https://vimeo.com/68390483
