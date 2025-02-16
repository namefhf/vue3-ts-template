import { Page } from 'vite-plugin-virtual-mpa';

interface ICustom {
  desc?: string;
}
export const pages: Array<Page & ICustom> = [
  {
    name: 'index',
    template: 'public/index.html',
    entry: '/src/pages/index/index.ts',
    data: {
      title: 'This is index page',
    },
  },
  // http://localhost:5173/pageA.html
  {
    name: 'pageA',
    desc: 'this is pageA',
    template: 'public/index.html',
    entry: '/src/pages/pageA/index.ts',
    data: {
      title: 'This is pageA',
    },
  },
  // http://localhost:5173/pageB.html
  {
    name: 'pageB',
    desc: 'this is pageB',
    template: 'public/index.html',
    entry: '/src/pages/pageB/index.ts',
    data: {
      title: 'This is pageB',
    },
  },
];

export default pages;
