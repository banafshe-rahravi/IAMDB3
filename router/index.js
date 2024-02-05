import { createRouter, createWebHistory } from "vue-router";

import Search from '@/pages/Search.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NoResult',
      component:() => import('@/pages/NoResult.vue')

  },
  {
    path: '/movie',
    name: 'Movie',
    component:() => import('@/pages/Movie.vue')

},
{
  path:'/test',
  name:'test',
  component:()=>import('@/pages/test.vue')
},

  ],
});
