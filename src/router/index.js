import { createRouter, createWebHistory } from 'vue-router'
import Entrar from '../views/Entrar.vue'
import Perfil from '../views/Perfil.vue'
import Explorar from '../views/Explorar.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'entrar',
            component: Entrar
        },
        {
            path: '/perfil',
            name: 'perfil',
            component: Perfil
        },
        {
            path: '/explorar',
            name: 'explorar',
            component: Explorar
        },
    ]
})

export default router