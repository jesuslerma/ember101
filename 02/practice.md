# Your static blog

Write your own blog with 2 posts.

For the purpose of the exercise your posts are:

* Title: "My post one", body: "My post one body"
* Title: "My post two", body: "My post two body"

### Posts index

* As a reader of your blog
* When I visit the index page (`/`)
* I should see a list showing the titles of all your posts

### Watching a post

* As a reader of your blog
* When I visit the index page
* And click the link of a post
* I should see a page with the content of that post (in the path `posts/my-post-one` or `posts/my-post-two`)
* When I click back I should see the index page again

### An intro page

Now the index page (`/`) will have a description of the blog.

* As a reader of your blog
* When I visit the index page (`/`)
* I should see a description of the blog
* When I click on the link "Posts"
* Then I should be on the path `/posts` and watching the a list with the titles of all your posts.
* And when I click to the post title
* Then I go to the post's page

### Watching a posts 

* As a reader of your blog
* When I visit posts index page
* I should see a sidebar with the lists of all your posts (master)
* And the center of the page should be empty
* When I click to the title of a post
* Then the content of the post should be shown in the center of the page
* And the path should change to `posts/:post_name`
