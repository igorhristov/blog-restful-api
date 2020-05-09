# Node.js Blog RESTful API

Create a RESTful API for the Blog project.

## Endpoints:

### articles

- `/articles` — get lists all articles (`?page=XX` - pagination)
- `/articles` - post create new article
- `/articles/:articleId` — get article
- `/articles/:articleId` — post update article
- `/articles/:articleId` — delete article
- `/articles/:articleId/comments` — get list all comments for the article with `articleId`

### authors

- `/authors` — get lists all authors
- `/authors` — post create new author
- `/authors/:authorId` — get author details
- `/authors/:authorId` — post update author details
- `/authors/:authorId/articles` — get list all author articles

### tags

- `/tags` — get lists all tags
- `/tags/:slug` — get tag details
- `/tags/:slug` — post update tag details
- `/tags/:slug/articles` — get list all tags

## hello-express

A server that serves a webpage, its resources, and some data

### Your Project

On the front-end,

- Edit `views/index.html` to change the content of the webpage
- `public/client.js` is the javacript that runs when you load the webpage
- `public/style.css` is the styles for `views/index.html`
- Drag in `assets`, like images or music, to add them to your project

On the back-end,

- your app starts at `server.js`
- add frameworks and packages in `package.json`
- safely store app secrets in `.env` (nobody can see this but you and people you invite)

Click `Show` in the header to see your app live. Updates to your code will instantly deploy.

### Made by [Glitch](https://glitch.com/)

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).

( ᵔ ᴥ ᵔ )
