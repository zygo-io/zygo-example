export default {
  "component": "app/page.jsx!",

  "/post/:pid": "app/article.jsx!",

  "/category/:cid": {
    "component": "app/article-list.jsx!",

    "/post/:pid": "app/article.jsx!"
  }
};