# 02 - Navigation and Nested Routes

Docs: http://guides.emberjs.com/v1.12.0/routing/

Api: http://emberjs.com/api/

## Links

Inside your templates, you can use `{{link-to}}` to navigate between routes, using the name that you provided to the route method (or, in the case of /, the name index).

```js
{{#link-to 'index'}}<img class="logo">{{/link-to}}

<nav>
  {{#link-to 'about'}}About{{/link-to}}
  {{#link-to 'favorites'}}Favorites{{/link-to}}
</nav>
```

## Nested Routes

You can define nested routes by passing a callback to this.route:

```js
Router.map(function() {
  this.route('posts', { path: '/posts' }, function() {
    this.route('new');
  });
});
```

<table>
  <thead>
  <tr>
   <th>URL</th>
   <th>Route Name</th>
   <th>
     Controller<br>
     <code>app/controllers/</code>
   </th>
   <th>
     Route<br>
     <code>app/routes/</code>
   </th>
   <th>
     Template<br>
     <code>app/templates/</code>
   </th>
  </tr>
  </thead>
  <tbody><tr>
    <td><code>/</code></td>
    <td><code>index</code></td>
    <td>↳<code>index.js</code></td>
    <td>↳<code>index.js</code></td>
    <td>↳<code>index.js</code></td>
  </tr>
  <tr>
    <td>N/A</td>
    <td><code>posts</code></td>
    <td>↳<code>posts.js</code></td>
    <td>↳<code>posts.js</code></td>
    <td>↳<code>posts.hbs</code></td>
  </tr>
  <tr>
    <td><code>/posts</code></td>
    <td><code>posts.index</code></td>
    <td>↳<code>posts.js</code><br>↳<code>posts/index.js</code></td>
    <td>↳<code>posts.js</code><br>↳<code>posts/index.js</code></td>
    <td>↳<code>posts.hbs</code><br>↳<code>posts/index.hbs</code></td>
  </tr>
  <tr>
    <td><code>/posts/new</code></td>
    <td><code>posts.new</code></td>
    <td>↳<code>posts.js</code><br>↳<code>posts/new.js</code></td>
    <td>↳<code>posts.js</code><br>↳<code>posts/new.js</code></td>
    <td>↳<code>posts.hbs</code><br>↳<code>posts/new.hbs</code></td>
  </tr>
</tbody></table>
