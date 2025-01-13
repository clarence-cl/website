import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  base: '/website/',  // 设置为你的仓库名称
  lang: 'zh-CN',
  title: 'My VuePress Site',
  description: 'Just playing around',
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Blog', link: '/posts/' }
    ]
  })
})
