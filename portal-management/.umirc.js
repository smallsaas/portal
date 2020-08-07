
// ref: https://umijs.org/config/
export default {
  title: 'zero-code',
  hash: true,
  // history: {
  //   type: 'hash',
  // },
  dynamicImport: {
    loading: '@/framework/Loading'
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  antd: {},
  dva: false,
  base: '/admin/',

  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件
}
