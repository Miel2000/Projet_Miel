import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RoueDuMeme from '@/components/RoueDuMeme'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/rdm', name: 'RoueDuMeme', component: RoueDuMeme }
  ]
})
