// Website pages
const HomePage = () => import('@views/HomePage')

export const routes = [
  {
    path: '/',
    component: HomePage,
    props: false,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]
