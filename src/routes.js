
export const routes = [
    { path: '',  component: () => import('./components/DefaultDisplay.vue')  },
    { path: '/edite/:id', component: () => import('./components/EditeDisplay.vue')  },
    { path: '/display/:id', component: () => import('./components/ShowDisplay.vue')  },
];
  

