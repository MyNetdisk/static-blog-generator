<div align="left">

简体中文 | [English](https://github.com/MyNetdisk/static-blog-generator/blob/main/README.md)

</div>

# SBG-CLI：简单的静态博客生成器

## 简介

作为程序员，写博客是积累知识和提升技能的不可或缺方法。博客的写作方式有多种，包括使用博客网站（如掘金、博客园、CSDN）、搭建自己的博客网站，以及使用静态博客生成器。静态博客生成器允许你创建博客文章，并将生成的静态网页部署到服务器、GitHub Pages、Gitee Pages等服务上。本项目是一个简单的静态博客生成器，类似于 Hexo 和 VuePress，旨在提供一个快速创建和部署博客的解决方案。

## 参考项目

本项目的灵感来源于 [CoinRailgun](https://github.com/qiyuor2/CoinRailgun)。

## 功能特点

- 通过命令行工具（sbg-cli）进行博客管理和部署。
- 支持新建博客文章和公共页面，快速定制博客内容。
- 生成静态博客网站，便于发布和分享。
- 本地开发服务器，方便实时预览和调试。

## 安装

在项目根目录下运行以下命令，将本地模块链接到全局环境中，以便在任何地方使用 sbg-cli 命令：

```bash
npm link
```

## 快速开始

### 获取帮助

运行以下命令以查看可用命令和获取帮助：

```bash
sbg-cli --help
```

### 新建博客文章

使用以下命令创建一篇新的博客文章：

```bash
sbg-cli new <postName>
```

例如，创建一篇标题为 "My First Blog Post" 的文章：

```bash
sbg-cli new "My First Blog Post"
```

这将在博客目录中创建一个新的博客文章文件，你可以在其中编写博客内容。

### 新建公共页面

使用以下命令创建公共页面，例如关于页面：

```bash
sbg-cli new-page about
```

### 生成静态文件

使用以下命令生成静态博客网站：

```bash
sbg-cli build
```

### 本地开发服务器

使用以下命令启动本地开发服务器：

```bash
sbg-cli server
```

通过本地服务器，你可以实时预览和调试你的博客内容。

## 示例

以下是一个简单示例，假设你已经创建了一篇标题为 "My First Blog Post" 的博客文章：

```bash
sbg-cli new "My First Blog Post"
```

然后，你可以运行 `sbg-cli build` 命令生成静态博客网站，或者运行 `sbg-cli server` 命令以在本地实时预览你的博客。

## 贡献

我们欢迎任何形式的贡献，包括改进建议、Bug 报告和代码贡献。如果你有任何想法或建议，可以在 GitHub 仓库中提出问题或请求。你的贡献将有助于改进这个项目。

## 许可

本项目使用 MIT 许可证发布。详细信息请查看 [LICENSE](LICENSE) 文件。