<template>
    <main>
        <header class="bg-[url(/src/assets/bg-menu2.svg)] w-full h-[30rem] bg-no-repeat bg-cover flex flex-col md:h-96">
            <nav class="w-full flex justify-between items-center px-10 py-5 gap-2">
                <RouterLink to="/perfil"><img src="/src/assets/logo.png" alt="Logo Sync360 Branca" class="w-44"></RouterLink>
                <RouterLink to="/explorar" class="text-white">Explorar</RouterLink>
            </nav>
            <section class="flex flex-col justify-center items-center text-white md:justify-start md:flex-row md:gap-5 md:ml-10">
                <img :src="`http://localhost:3001/api/v1/user/image/${user.avatar}`" alt="Perfil usuário" class="w-44 rounded-full">
                <div class="text-center pb-5 md:text-start">
                    <h1 class="font-bold text-4xl">{{ user.nome }}</h1>
                    <p>{{ user.email }}</p>
                </div>
            </section>
        </header>
        <section class="px-5 md:px-10">
            <div class="flex items-center justify-between">
                <h2 class="text-text-gray font-semibold text-xl" v-if="!editarPerfil">Biografia</h2>
                <h2 class="text-text-gray font-semibold text-xl" v-else>Editar Perfil</h2>
                <button class="border-2 rounded-full border-blue-sync text-blue-sync p-1 text-lg leading-5"
                @click="handleEditarPerfil">
                    <v-icon name="md-edit-outlined" />
                </button>
            </div>
            <p class="text-md text-text-gray" v-if="!editarPerfil">{{ user.biografia }}</p>
            <p class="text-md text-text-gray font-light" v-if="!editarPerfil">{{ user.bairro }} - {{user.estado}}</p>
            <EditarPerfil :user="user" v-if="editarPerfil"/>
        </section>
    </main>
</template>
<script setup>
import { onBeforeMount, reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { api } from '../utils/api';
import EditarPerfil from '../components/EditarPerfil.vue'

const id = window.localStorage.getItem('id')
const user = reactive({
  avatar: "",
  nome: "",
  idade: "",
  rua: "",
  bairro: "",
  estado: "",
  biografia: "",
  email: "",
  _id: "",
});

const editarPerfil = ref(false)

const handleEditarPerfil = () =>{
    editarPerfil.value = !editarPerfil.value
}

onBeforeMount(async () =>{
    api.get(`/${id}`)
    .then((response) =>{
        console.log(Object.assign(user, response.data));
        
    })
    .catch((error) =>{
        console.log(error);
    })
})

</script>
<style>
    
</style>