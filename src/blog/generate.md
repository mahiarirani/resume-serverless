---
layout: post
type: article
pagination:
  data: collections.posts
  size: 1
  alias: post
permalink: 'blog/{{post.data.title | slugify }}/'
---
{{ post.content | safe }}