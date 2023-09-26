import './style.css'
import App from "./App.vue"
import Main from "./components/Main.vue"
import Photo from "./components/Photo.vue"
import {createRouter,createWebHashHistory} from 'vue-router'
import {createApp} from 'vue'

const router = createRouter({
    routes: [
        {path: '/',name: 'Main', component: Main },
        {path: '/photo',name: 'Photo', component: Photo },
        {path: '/:pathMatch(.*)*', name: '404', component: "<p>404</p>" }
    ],
    history:createWebHashHistory()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
