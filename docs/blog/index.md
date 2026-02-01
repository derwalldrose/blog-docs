# 博客文章

这里是所有的博客文章。

::: info 提示
添加新文章后，需要运行 `npm run generate-blog` 重新生成数据。
:::

<!-- 这里会自动显示文章列表 -->

<script setup>
import { useData } from 'vitepress'

// 动态导入博客数据
const blogData = await import('./blog.data.json')
const posts = blogData.data || []
</script>

<div v-for="post in posts" :key="post.url" class="blog-post">
  <h2><a :href="post.url">{{ post.title }}</a></h2>
  <p class="date">{{ post.date }}</p>
  <p>{{ post.description }}</p>
</div>

<style>
.blog-post {
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 1rem;
}
.blog-post a {
  text-decoration: none;
  color: var(--vp-c-brand-1);
  transition: color 0.2s;
}
.blog-post a:hover {
  color: var(--vp-c-brand-2);
}
.date {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  margin: 0.5rem 0;
}
</style>