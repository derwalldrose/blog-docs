# VitePress 博客迁移指南

恭喜！你的 VitePress 博客已经设置完成。

## 快速开始

### 1. 本地预览

```bash
cd /root/clawd/projects/blog-vitepress
npm run dev
```

访问 http://localhost:5173 查看效果

### 2. 添加新文章

在 `docs/blog/` 目录下创建新的 Markdown 文件：

```markdown
---
title: 你的文章标题
description: 文章描述
date: 2026-02-01
---

# 文章标题

这里是文章内容...
```

然后运行：
```bash
npm run generate-blog
```

### 3. 部署到 GitHub

```bash
# 初始化 Git 仓库（如果还没有）
cd /root/clawd/projects/blog-vitepress
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 推送到 GitHub
git branch -M main
git remote add origin https://github.com/yourusername/blog.git
git push -u origin main
```

推送后，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 配置 GitHub Pages

1. 进入 GitHub 仓库设置
2. 点击 "Pages"
3. 在 "Build and deployment" 中选择：
   - Source: GitHub Actions
4. 保存

等待几分钟，你的博客就会上线了！

## 自定义配置

### 修改站点信息

编辑 `docs/.vitepress/config.ts`：

```ts
export default defineConfig({
  title: '你的博客标题',
  description: '博客描述',
  lang: 'zh-CN',
  // ...
})
```

### 添加导航链接

```ts
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: '博客', link: '/blog/' },
    { text: '关于', link: '/about' }
  ]
}
```

## 迁移现有文章

从你的 Astro 博客迁移文章：

```bash
# 复制文章
cp /root/clawd/projects/blog-543083-astro/src/content/blog/*.md /root/clawd/projects/blog-vitepress/docs/blog/

# 重新生成数据
cd /root/clawd/projects/blog-vitepress
npm run generate-blog

# 预览
npm run dev
```

## 注意事项

1. 每次添加或修改文章后，记得运行 `npm run generate-blog`
2. 推送代码到 GitHub 会自动触发部署
3. 首次部署可能需要几分钟时间
4. 文章按日期倒序排列

## 常见问题

### Q: 为什么文章不显示？
A: 确保运行了 `npm run generate-blog` 生成数据文件。

### Q: 如何添加图片？
A: 将图片放到 `docs/public/images/` 目录，然后在 Markdown 中引用：
```markdown
![图片描述](/images/your-image.png)
```

### Q: 如何修改主题颜色？
A: 在 `docs/.vitepress/theme/index.ts` 中自定义 CSS 变量。

## 需要帮助？

查看 [VitePress 官方文档](https://vitepress.vuejs.org/)