<div align="left">

[简体中文](https://github.com/MyNetdisk/static-blog-generator/blob/main/README.zh-CN.md) | English

</div>

# SBG-CLI: A Simple Static Blog Generator

## Introduction

As a programmer, blogging is an essential method for accumulating knowledge and improving skills. There are various ways to write and manage blogs, including using blog websites (e.g., Dev.to, Blogger, Medium), building your own blog website from scratch, or using a static blog generator. A static blog generator allows you to create blog posts and deploy the generated static web pages to servers, GitHub Pages, GitLab Pages, or similar services. This project is a simple static blog generator similar to tools like Hexo and VuePress, designed to provide a quick solution for creating and deploying blogs.

## Reference Project

This project was inspired by [CoinRailgun](https://github.com/qiyuor2/CoinRailgun).

## Key Features

- Blog management and deployment through the command-line tool (sbg-cli).
- Create new blog posts and public pages to quickly customize your blog content.
- Generate static blog websites for easy publication and sharing.
- Local development server for real-time preview and debugging.

## Installation

To use the `sbg-cli` command from anywhere, run the following command in the project's root directory to link the local module to the global environment:

```bash
npm link
```

## Getting Started

### Get Help

Run the following command to view available commands and get help:

```bash
sbg-cli --help
```

### Create a Blog Post

Use the following command to create a new blog post:

```bash
sbg-cli new <postName>
```

For example, to create a blog post titled "My First Blog Post," you can run:

```bash
sbg-cli new "My First Blog Post"
```

This will create a new blog post file in the blog directory where you can write your blog content.

### Create Public Pages

Use the following command to create public pages, such as an "About" page:

```bash
sbg-cli new-page about
```

### Generate Static Files

Use the following command to generate static blog websites:

```bash
sbg-cli build
```

### Local Development Server

Use the following command to start a local development server:

```bash
sbg-cli server
```

With the local server, you can preview and debug your blog content in real-time.

## Example

Here is a simple example. Suppose you have created a blog post titled "My First Blog Post" using the following command:

```bash
sbg-cli new "My First Blog Post"
```

You can then run the `sbg-cli build` command to generate the static blog website, or run the `sbg-cli server` command to preview your blog in your local environment.

## Contributing

We welcome contributions in various forms, including suggestions for improvements, bug reports, and code contributions. If you have any ideas or suggestions, please open an issue or request in the GitHub repository. Your contributions will help improve this project.

## License

This project is released under the MIT license. For more details, please see the [LICENSE](LICENSE) file.