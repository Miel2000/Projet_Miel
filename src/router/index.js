import Vue from 'vue'
import Router from 'vue-router'

import RoueDuMeme from '@/components/RoueDuMeme'
import Calculateur from '@/components/Calculateur'
import CardMeme from '@/components/CardMeme'
import Acceuil from '@/components/pages/Acceuil'
import About from '@/components/pages/About'

import Bike from '@/components/posts/bike';
import Moutain from '@/components/posts/moutaine';
import Ajax from '@/components/Ajax';
import AirQuality from '@/components/pages/AirQuality';
import CityForm from '@/components/CityForm';


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    { path: '/', name: 'Acceuil', component: Acceuil },
    { path: '/About', name: 'About', component: About },
    { path: '/rdm', name: 'RoueDuMeme', component: RoueDuMeme },
    { path: '/ajax', name: 'Ajax', component: Ajax },
    { path: '/calculateur', name: 'Calculateur', component: Calculateur },
    { path: '/cardMeme', name: 'CardMeme', component: CardMeme },
    { path: '/air', name: 'AirQuality', component: AirQuality },
   
    { path: '/posts/bike', name: 'Bike', component: Bike },
    { path: '/posts/moutain', name: 'Moutain', component: Moutain }


  ]
})
