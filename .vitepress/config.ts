import { defineConfig } from 'vitepress';
import { navbar_zh } from './navbar';
import { sidebar_zh } from './sidebar';

const linkGitHub = 'https://github.com/sanhvvt/sanhvvt.github.io';
const myName = 'sanhvvt';

export default defineConfig({
  // These are app level configs.
  title: myName,
  description: `${myName} website`,
  base: "/",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.jpg',
    }],
    // ['meta', { name: 'theme-color', content: '#3c8772' }],
  ],
  themeConfig: {
    logo: '/logo.jpg',
    nav: navbar_zh,
    sidebar: sidebar_zh,
    socialLinks: [
      { icon: 'github', link: linkGitHub },
    ],
    editLink: {
      pattern: `${linkGitHub}:path`,
      text: '在 GitHub 编辑',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2023-present ${myName}`
    },
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    darkModeSwitchLabel: '主题色切换',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '切换语言',
    outlineTitle: '本页内容',

    // algolia: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: ''
    // },
  },
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    },
  }
});