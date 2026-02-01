# 我的 VitePress 博客

基于 VitePress 构建的静态博客，通过 GitHub Actions 自动部署到 GitHub Pages。

## 特性

- ✅ Markdown 驱动，写文章只需创建 `.md` 文件
- ✅ GitHub 推送自动构建部署
- ✅ 内置搜索功能
- ✅ 响应式设计
- ✅ 深色模式支持

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 添加新文章

在 `docs/blog/` 目录下创建新的 Markdown 文件：

```markdown
---
title: 文章标题
description: 文章描述
date: 2026-02-01
---

# 文章标题

这里是文章内容...
```

### 部署

推送到 GitHub `main` 分支，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 目录结构

```
blog-vitepress/
├── docs/
│   ├── .vitepress/
│   │   └── config.ts          # VitePress 配置
│   ├── blog/
│   │   ├── index.md           # 博客列表页
│   │   ├── blog.data.ts       # 博客数据（自动生成）
│   │   └── *.md               # 博客文章
│   ├── public/                # 静态资源
│   └── index.md               # 首页
├── scripts/
│   └── generate-blog-data.js  # 生成博客数据
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 配置
└── package.json
```

## 自定义配置

### 修改站点信息

编辑 `docs/.vitepress/config.ts`：

```ts
export default defineConfig({
  title: '你的博客标题',
  description: '博客描述',
  // ...
})
```

### 修改导航栏

```ts
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: '博客', link: '/blog/' },
    { text: '关于', link: '/about' }
  ]
}
```

## 更多信息

- [VitePress 官方文档](https://vitepress.vuejs.org/)
- [Markdown 语法](https://vitepress.vuejs.org/guide/markdown)