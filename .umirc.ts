import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '巨丰量化',
  },
  routes: [
    {
      name: '登陆',
      path: '/login',
      component: './Login',
      layout: false,
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '行情数据',
      path: 'stock-list',
      component: './StockList',
    },
    {
      path: '/stock-graph',
      component: './StockGraph',
    },
    {
      path: '/access',
      component: './Access',
    },
    {
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'pnpm',
});
