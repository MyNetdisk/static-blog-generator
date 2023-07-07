# 实现一个简单的类似 Hexo 的静态博客生成器

> #### 作为一名程序员，写博客是积累知识、提升水平必不可少的一个方法。我们写博客主要有三种方法，一种是使用掘金、博客园、CSDN 等博客网站，第二种是自己搭建网站，存放自己的博客，第三种就是使用静态博客生成器，将生成的网页部署到服务器或者 github pages、gitee pages 等服务上。
>
> #### 这三种方法中，第一种自由度太低，并且定制样式很麻烦；第二种每写一篇博客都要新建个页面，非常麻烦。因此我选择了第三种方法，在使用了 hexo、vuepress 等多种静态博客生成器后，我决定自己写一个来提升自己的能力。
>
> #### 本项目参考自https://github.com/qiyuor2/CoinRailgun

## bin 目录实现自定义命令行(sbg-cli)（类似 vue-cli）

#### 根据需求将各个命令、命令的参数和说明先写出来

#### 关于 commander 具体如何使用，可以查看[commander 文档](https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md)

## 安装

#### 在项目根目录下运行 npm link，将本地模块链接到全局环境下，这样就可以在任何地方使用 sbg-cli 命令了。

```bash
npm link
```

## 快速开始

#### 获取帮助

```bash
sbg-cli --help
```

## 新建一个博文

```bash
sbg-cli new <postName>
```

## 新建公共页面

```bash
sbg-cli server
```

## 生成静态文件

```bash
sbg-cli build
```

## 本地开发服务

```bash
sbg-cli server
```
