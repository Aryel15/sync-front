<template>
    <div class="p-10 flex flex-col items-stretch justify-center w-full mx-2">
        <h1 class="text-blue-sync text-2xl font-bold text-center mb-2">Faça login</h1>
        <form @submit.prevent>
            <div class="flex flex-col items-stretch max-w-full mx-auto md:max-w-[35rem]">
                <label htmlFor="Email" class="text-text-gray">Email:</label>
                <input type="email" class="rounded border-2 border-gray p-1 mb-3 outline-none" v-model="login.email" />
                <label htmlFor="Senha" class="text-text-gray">Senha:</label>
                <div class="rounded border-2 border-gray p-1 mb-3 justify-between">
                    <input :type="viewPassword ? 'text' : 'password'" class="w-[92%] outline-none" v-model="login.senha"/>
                    <button @click="changeViewPassword">
                        <v-icon name="bi-eye-slash" v-show="!viewPassword" class="cursor-pointer text-text-gray" />
                        <v-icon name="bi-eye" v-show="viewPassword" class="cursor-pointer text-text-gray" />
                    </button>
                </div>
                <button class="bg-blue-sync text-white font-bold text-md p-2 rounded mb-5 hover:brightness-105 transition-all duration-500" @click="handleLogin">Login</button>

            </div>
        </form>
    </div>

</template>
<script setup>
import { ref, reactive } from 'vue'
import * as z from 'zod';
import { api } from '../utils/api';
import router from '../router';

const passwordMessages = ref('')

const login = reactive({
    email:'',
    senha:''
})

const viewPassword = ref(false)

const changeViewPassword = () =>{
    viewPassword.value = !viewPassword.value
}

const handleLogin = async () =>{

    try{
        const response = await api.post('/login', login)
        window.localStorage.setItem("id", response.data.id);
        router.push('/perfil')
    }catch(error){
        console.log(error);
    }
    
}



</script>
<style lang="">
    
</style>