import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Playlists from '@/components/Playlists'
import Playlist from '@/components/Playlist'

Vue.use(Router)

var routes = new Router({
  routes: [
    { name: 'Home', component: Home, path: '/' },
    { name: 'Playlists', component: Playlists, path: '/playlists' },
    { name: 'Playlist', component: Playlist, path: '/playlists/:playlistId' },
  ]
})




export default routes