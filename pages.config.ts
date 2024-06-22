import { Page } from 'vite-plugin-virtual-mpa';

export const pages: Array<Page> = [
  // http://localhost:5173/pageA
  {
    name: 'pageA',
    template: 'template/index.html',
    entry: '/src/pages/pageA/index.ts',
    data: {
      title: 'This is pageA',
    },
  },
  // http://localhost:5173/pageB
  {
    name: 'pageB',
    template: 'template/index.html',
    entry: '/src/pages/pageB/index.ts',
    data: {
      title: 'This is pageB',
    },
  },
];

export default pages;
