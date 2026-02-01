import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: '我的博客',
  description: '技术博客，记录学习与思考',

  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/blog/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/blog/': [
        {
          text: '博客文章',
          items: [
            { text: '所有文章', link: '/blog/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/blog' }
    ],

    search: {
      provider: 'local'
    }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  // 构建配置
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash].[ext]'
        }
      }
    }
  },

  // 忽略死链接
  ignoreDeadLinks: true
})