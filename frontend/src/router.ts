import Vue from 'vue';
import Router from 'vue-router';
import Maps from './views/Maps.vue';
import EditMaps from './views/EditMaps.vue';
import EditUsers from './views/EditUsers.vue';
import Catalog from './views/Catalog.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/auth',
      name: 'auth',
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog,
    },
    {
      path: '/:project_id',
      redirect: '/:project_id/maps',
    },
    {
      path: '/:project_id/maps',
      name: 'maps',
      component: Maps,
    },
    {
      path: '/:project_id/maps/:map_uuid',
      name: 'map',
      component: Maps,
    },
    {
      path: '/:project_id/edit/maps',
      name: 'edit_maps',
      component: EditMaps,
    },
    {
      path: '/:project_id/edit/users',
      name: 'edit_users',
      component: EditUsers,
    },
  ],
});
