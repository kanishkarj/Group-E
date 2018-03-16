import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn-view',
      component: require('@/components/SignIn').default
    },
    {
      path: '/home',
      component: require('@/components/exam/parent').default,
      children: [
        {
          path: '/',
          component: require('@/components/exam/instructions').default
        },
        {
          path: '/start',
          component: require('@/components/exam/home').default
        }
      ]
    }
  ]
})
