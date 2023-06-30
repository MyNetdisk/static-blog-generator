---
title: Hello CRN
date: 2023/06/28 09:50:40
tags: [blog]
category: code
---

![How](/assets/image/avatar.jpg)

> Resources Advanced You are using the WSL 2 backend, so resource limits are 等......

<!-- more -->

## 前言

> Resources Advanced You are using the WSL 2 backend, so resource limits are 等......

### Why?

这个是因为 win10 在高版本下，也就是有 wsl 子系统的情况下，安装会默认启用 WSL2 模式，而不是 Hyper-V 虚拟机模式，在前者模式下，默认存储目录在 C 盘，且设置中无法选择目录，但有个选项可以切换模式，切换模式后就可以切换目录了

![Why](/image/posts/ed7cc399f61045ec849ab8aecf8fd944.png)

### How?

关掉后就可以设置了

![How](/image/posts/fdf95813ef3a4b92991cda588eb09fe8.png)
![How](/assets/image/avatar.jpg)

### 关于本文

> 作者：P_ning
>
> 本文链接：https://blog.csdn.net/P_ning/article/details/121422227
