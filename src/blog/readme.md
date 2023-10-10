# blog Folder

The `blog` folder in this project is structured as follows:

```
blog/
│
├── posts/
│   ├── *.md
│   └── posts.json
├── index.njk
└── generate.md
```

## Folder Contents

- **posts/**: This subfolder contains your blog post content in Markdown format. The `posts.json` file stores metadata for these posts, with the `permalink` option set to `false` to disable default URL generation by 11ty.

- **index.njk**: The primary template for the blog page, responsible for displaying post thumbnails and summaries on your blog listing page.

- **generate.md**: Used for configuring 11ty permalinks and structuring the URLs of your blog posts.

## Usage Guidelines

To manage your blog posts effectively:

1. **Create New Posts**: When creating a new blog post, follow these steps:

   a. Create a new Markdown file within the `posts` subfolder, ensuring it has a descriptive and unique filename.

   b. Include the required data for the post in the frontmatter section of the Markdown file. Here's an example:

   ```markdown
   ---
   title: Your Post Title
   date: 2023-10-10
   author: Your Name
   ---
   ```

   Customize the `title`, `date`, `author`, and any other relevant metadata.

2. **Edit Existing Posts**: Modify and update the content of your blog posts by editing the respective Markdown files in the `posts` subfolder.

3. **Customize Listing Page**: Customize the appearance and layout of your blog listing page in `index.njk`. This template controls how your blog posts are presented on the main blog page.
 
4. **Blog Post Page Design**: The appearance and layout template of each post page are in `post.njk` layout.
