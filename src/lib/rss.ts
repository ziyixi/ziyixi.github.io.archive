import { Feed } from 'feed'
import type { PostContent } from '../utils/getBlogContent'
import fs from 'fs'

const generateRss = (blogContent: PostContent[]) => {
  let baseUrl = process.env.BASE_URL
  if (!baseUrl) {
    baseUrl = ''
  }
  const date = new Date()
  const author = {
    name: 'Ziyi Xi',
    email: 'xiziyi2015@gmail.com',
    link: 'https://ziyixi.science/',
  }

  const feed = new Feed({
    title: `Ziyi's Blog`,
    description: 'Share Ideas, Document Solutions.',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    copyright: `All rights reserved ${date.getFullYear()}, Ziyi Xi`,
    updated: date,
    generator: 'Next.js using Feed for Node.js',
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
    author,
  })

  blogContent.forEach((post) => {
    const url = `${baseUrl}/posts/${post.pageId}`
    feed.addItem({
      title: post.title ? post.title : '',
      id: url,
      link: url,
      description: post.abstract ? post.abstract : '',
      author: [author],
      contributor: [author],
      date: post.createdTime ? new Date(post.createdTime) : new Date(0),
    })
  })

  // write to public
  fs.mkdirSync('./public/rss', { recursive: true })
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2())
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1())
  fs.writeFileSync('./public/rss/feed.json', feed.json1())
}

export default generateRss
