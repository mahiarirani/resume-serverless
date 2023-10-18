---
layout: post
type: article
pagination:
  data: collections.posts
  size: 1
  alias: post
permalink: 'blog/{{post.data.title | slugify }}/'
eleventyComputed:
  eleventyNavigation:
    title: '{{ post.data.title }}'
    parent: blog
---
{{ post.content | safe }}