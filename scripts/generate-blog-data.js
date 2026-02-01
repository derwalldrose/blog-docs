import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const blogDir = path.join(__dirname, '../docs/blog')

// 读取所有博客文章
const posts = []
const files = fs.readdirSync(blogDir)

files.forEach(file => {
  if (file.endsWith('.md') && file !== 'index.md' && !file.includes('blog.data')) {
    const filePath = path.join(blogDir, file)
    const content = fs.readFileSync(filePath, 'utf-8')

    // 提取 frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
    let frontmatter = {}

    if (frontmatterMatch) {
      const lines = frontmatterMatch[1].split('\n')
      lines.forEach(line => {
        const [key, ...valueParts] = line.split(':')
        if (key && valueParts.length) {
          frontmatter[key.trim()] = valueParts.join(':').trim()
        }
      })
    }

    // 提取标题
    const titleMatch = content.match(/^#\s+(.+)$/m)
    const title = frontmatter.title || titleMatch?.[1] || file.replace('.md', '')

    // 提取描述
    const description = frontmatter.description || ''

    // 提取日期
    const date = frontmatter.date || frontmatter.pubDate || ''

    posts.push({
      title,
      description,
      date,
      url: `/blog/${file.replace('.md', '')}`
    })
  }
})

// 按日期排序
posts.sort((a, b) => new Date(b.date) - new Date(a.date))

// 生成 JSON 文件
fs.writeFileSync(
  path.join(__dirname, '../docs/blog/blog.data.json'),
  JSON.stringify({ data: posts }, null, 2)
)

console.log(`Generated blog data for ${posts.length} posts`)