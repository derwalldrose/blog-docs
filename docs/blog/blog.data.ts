export interface BlogPost {
  title: string
  description: string
  date: string
  url: string
}

export const data: BlogPost[] = [
  {
    "title": "Third post",
    "description": "Lorem ipsum dolor sit amet",
    "date": "Jul 22 2022",
    "url": "/blog/third-post"
  },
  {
    "title": "Second post",
    "description": "Lorem ipsum dolor sit amet",
    "date": "Jul 15 2022",
    "url": "/blog/second-post"
  },
  {
    "title": "First post",
    "description": "Lorem ipsum dolor sit amet",
    "date": "Jul 08 2022",
    "url": "/blog/first-post"
  }
]
