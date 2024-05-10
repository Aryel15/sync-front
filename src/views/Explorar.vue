<template>
    <main>
        <header class="bg-gradient-to-r from-lightblue-sync to-blue-sync w-full h-20 bg-no-repeat bg-cover flex flex-col md:h-20">
            <nav class="w-full flex justify-between items-center px-10 py-5 gap-2">
                <RouterLink to="/explorar"><img src="/src/assets/logo.png" alt="Logo Sync360 Branca" class="w-44"></RouterLink>
                <RouterLink to="/perfil" class="text-white">Perfil</RouterLink>
            </nav>
        </header>
        <section class="mx-10 mt-5 flex flex-col gap-5 pb-10">
            <CardUser v-for="(user) in users" :key="user._id" :user="user"/>
        </section>
    </main>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue';
import { api } from '../utils/api.js'
import CardUser from '../components/CardUser.vue'
const users = ref([])
 
onBeforeMount(() =>{
    api.get('/')
    .then((response) =>{
        users.value = response.data
    })
})
</script>
<style>
    
</style>