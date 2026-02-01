---
title: 从 Hugo 站点迁移到 Astro，并部署到 Cloudflare Pages
description: 记录一次把历史博客内容抓取/迁移到 Astro，并通过 Wrangler 部署到 Cloudflare Pages 的全过程。
pubDate: '2026-01-30T22:10:00+08:00'
heroImage: "/images/covers/deploy-cloudflare-pages.svg"
---
## 背景

原站点 `blog.543083.xyz` 是 Hugo 生成的静态站点（主题是 hugo-theme-stack）。这次目标是：

- 用 **Astro** 作为新博客项目（更易维护）
- 历史文章 **正文 + 图片** 尽量完整迁移
- 部署到 **Cloudflare Pages**

## 迁移思路（内容与代码分离）

- 文章统一使用 Markdown 管理：`src/content/blog/*.md`
- 图片统一落到仓库里：`public/images/<slug>/...`
- 页面渲染交给 Astro（静态输出）

这样后续维护就是：改 Markdown / 放图片 / 提交部署。

## 抓取与导入（RSS → 逐篇解析 → HTML 转 Markdown → 图片下载）

实现了一个导入脚本：

- 从 RSS 读取文章列表：`/index.xml`
- 拉取文章页面，提取 `.article-content`
- HTML 转 Markdown
- 下载图片到 `public/images/<slug>/...` 并替换引用

（脚本文件：`scripts/import-543083.mjs`）

## 构建与部署（Wrangler）

本地构建：

```bash
npm run build
```bash

通过 Wrangler 部署到 Cloudflare Pages：

```bash
wrangler pages project create <project-name>
wrangler pages deploy dist --project-name <project-name>
```bash

本次项目名：`hottest`。

## 绑定自定义域名

Cloudflare Pages 会给出一个 `*.pages.dev` 的默认域名。自定义域名需要：

- 在 Pages 项目里添加 domain
- 同时在 DNS 里设置一条 CNAME 指向 `xxx.pages.dev`

当 CNAME 生效并通过验证后，HTTPS 证书会自动签发。

---

> 备注：这篇文章主要是留一个“以后再做一遍也能照着走”的记录。后续如果主题/样式继续优化，也会在这里追加。
