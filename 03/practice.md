# My favorite books

Imagine this are some books that you have:

```js
var allBooks = [
  { name: "Book 1", score: 4 }
  { name: "Book 2", score: 8 }
  { name: "Book 3", score: 9 }
  { name: "Book 4", score: 2 }
  { name: "Book 5", score: 5 }
  { name: "Book 6", score: 7 }
]
```

### Show all your books

Build an app that show all your books (with name and score) on the index
page.

* As a guest
* When I go to the root page
* I should see a list with all my books

### Show just my favorite books

* As a guest
* When I go to the root page
* And click the button "My favorite books"
* Then I should see just the books with a score grater than 7
* And the current path should be "/my-favorite-books"
